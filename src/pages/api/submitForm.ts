export async function onRequestPost({ request, env }: { request: Request, env: any }) {
  try {
    const formData = await request.formData();
    // ✅ Turnstile CAPTCHA server-side verification
const captchaToken = formData.get("cf-turnstile-response");
if (!captchaToken) {
  return Response.redirect("/form-error", 303);
}

const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    secret: env.TURNSTILE_SECRET_KEY,
    response: captchaToken.toString(),
    remoteip: request.headers.get("CF-Connecting-IP") || "",
  }),
});

const verifyResult = await verifyResponse.json();
if (!verifyResult.success) {
  console.error("CAPTCHA verification failed", verifyResult);
  return Response.redirect("/form-error", 303);
}

    // Hidden fields
    const formType = formData.get("formType")?.toString() || "survey";
    const trackingRaw = formData.get("trackingData");
    const trackingData = trackingRaw ? JSON.parse(trackingRaw.toString()) : {};

    // Zaraz session cookie
    const cookieHeader = request.headers.get("Cookie") || "";
    const cookies = Object.fromEntries(cookieHeader.split(";").map(c => c.trim().split("=")));
    const zarazSessionId = cookies["_cf_zk_ses"] || "";

    // Create submission data
    const insertData: Record<string, any> = {
      event_id: crypto.randomUUID(),
      anonymous_user_id: trackingData.userId || null,
      session_id: zarazSessionId || null,
      referrer_link: trackingData.referrer || null,
      current_url: trackingData.currentUrl || null,
      form_type: formType,
      timestamp: new Date().toISOString(),

      // Basic fields
      email: formData.get("email")?.toString() || null,
      phone: formData.get("phone")?.toString() || null,
      trading_experience: formData.get("trading_experience")?.toString() || null,
      website_confusing: formData.get("website_confusing")?.toString() || null,
      biggest_challenge: formData.get("biggest_challenge")?.toString() || null,
      age_group: formData.get("age_group")?.toString() || null,
      gender: formData.get("gender")?.toString() || null,
      gender_custom: formData.get("gender_custom")?.toString() || null,
      education_level: formData.get("education_level")?.toString() || null,
      employment_status: formData.get("employment_status")?.toString() || null,
      employment_other: formData.get("employment_other")?.toString() || null,
      recommend: formData.get("recommend")?.toString() || null,
      portfolio_value: formData.get("portfolio_value")?.toString() || null,
      education_spend: formData.get("education_spend")?.toString() || null,

      // Convert multi-choice (checkboxes) to comma-separated
      service_interest: formData.getAll("service_interest").map(v => v.toString()).join(", "),
      conversion_factor: formData.getAll("conversion_factor").map(v => v.toString()).join(", "),
      trading_tools: formData.getAll("trading_tools").map(v => v.toString()).join(", "),
      conversion_factor_other: formData.get("conversion_factor_other")?.toString() || null,
      trading_tools_other: formData.get("trading_tools_other")?.toString() || null,
    };

    // Build dynamic SQL query
    const columns = Object.keys(insertData).join(", ");
    const placeholders = Object.keys(insertData).map(() => "?").join(", ");
    const values = Object.values(insertData);

    const stmt = env.DB.prepare(`INSERT INTO survey_responses (${columns}) VALUES (${placeholders})`);
    await stmt.bind(...values).run();

    return Response.redirect("/survey-success", 303);

  } catch (error) {
    const errorId = crypto.randomUUID();
    const errorLog = {
      error_id: errorId,
      message: (error as Error).message,
      stack: (error as Error).stack,
      form_type: "survey",
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    // Optional signal store (e.g., for internal monitoring/alerts)
    if (env.SURVEY_FLAGS?.put) {
      await env.SURVEY_FLAGS.put(`error:${errorId}`, JSON.stringify(errorLog));
    }

    console.error("Survey submission failed:", errorLog);
    return Response.redirect("/form-error", 303);
  }
}
