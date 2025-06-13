export interface MeetingType {
  id: string;
  name: string;
  promotionalPrice: number;
  standardPrice: number;
  currency: string;
  durationMinutes: number;
  type: string;
  category: string;
  focus: string;
  benefits: string[];
  tidycalLink: string;
  stripeLink?: string;
  paypalLink?: string; // ✅ add this line
  recurrence: string;
}


export interface AiIntegrationNotes {
  consentGuidance: string;
  internalAIbenefits: string[];
}

export interface CoachingData {
  serviceName: string;
  description: string;
  meetingTypes: MeetingType[];
  aiIntegrationNotes: AiIntegrationNotes;
}

export const coachingData: CoachingData = {
  serviceName: "Holguin Trades Coaching Services",
  description:
    "Personalized coaching to empower your trading success and holistic life goals.",
  meetingTypes: [
    {
      id: "trading-coaching-consultation",
      name: "Trading Coaching Consultation",
      promotionalPrice: 15.0,
      standardPrice: 20.0,
      currency: "USD",
      durationMinutes: 15,
      type: "initial-assessment",
      category: "Trading",
      focus:
        "Assess fit, understand trading goals, introduce coaching approach.",
      benefits: [
        "Personalized discussion of your current trading experience and challenges.",
        "Clear outline of how 1-on-1 coaching can enhance your trading journey.",
        "Insights from an experienced trader to assess foundational needs.",
      ],
      tidycalLink:
        "https://tidycal.com/holguintrades1/15-minute-trading-consultation",
      stripeLink:
        "https://buy.stripe.com/bJeeVe7SC8io35Da5X9Zm09",
        paypalLink: "https://paypal.me/holguintrades",
      recurrence: "One-time",
    },
    {
      id: "life-coaching-consultation",
      name: "Life Coaching Consultation",
      promotionalPrice: 15.0,
      standardPrice: 20.0,
      currency: "USD",
      durationMinutes: 15,
      type: "initial-assessment",
      category: "Life",
      focus:
        "Assess fit, understand personal aspirations, introduce coaching approach.",
      benefits: [
        "Personalized discussion of your current life challenges and aspirations.",
        "Clear outline of how 1-on-1 coaching supports your personal growth.",
        "Insights into how lifestyle changes, not just temporary diets, lead to lasting transformation.",
      ],
      tidycalLink:
        "https://tidycal.com/holguintrades1/15-minute-meeting-1vlwk2z-3l696en-mpe9ezy-m8e6e56-3eg9grz-1j696qq-19k8y5y-3eg9xdz",
      stripeLink:
        "https://buy.stripe.com/14AeVe7SCbuA5dLgul9Zm04",
        paypalLink: "https://tidycal.com/holguintrades1/15-minute-meeting-1vlwk2z-3l696en-mpe9ezy-m8e6e56-3eg9grz-1j696qq-19k8y5y-3eg9xdz-1wqvykw",
      recurrence: "One-time",
    },
    {
      id: "trading-coaching-session-1hour",
      name: "Trading Coaching Session (1-Hour)",
      promotionalPrice: 100.0,
      standardPrice: 120.0,
      currency: "USD",
      durationMinutes: 60,
      type: "standard-session",
      category: "Trading",
      focus:
        "In-depth trading strategy, risk management, and mindset for success.",
      benefits: [
        "Tailored guidance for stock market and options security contracts trading.",
        "Comprehensive strategies for effective risk management.",
        "Learn from the real-world experience and insights of an active trader.",
        "Actionable steps to cultivate winning trading habits and discipline.",
        "Post-session notes summary and clear actions to take to improve.",
      ],
      tidycalLink:
        "https://tidycal.com/holguintrades1/60-minute-trading-session",
      stripeLink:
        "https://buy.stripe.com/4gM9AU1uefKQay591T9Zm06",
        paypalLink: "https://paypal.me/holguintrades",
      recurrence: "One-time",
    },
    {
      id: "life-coaching-session-1hour",
      name: "Life Coaching Session (1-Hour)",
      promotionalPrice: 100.0,
      standardPrice: 120.0,
      currency: "USD",
      durationMinutes: 60,
      type: "standard-session",
      category: "Life",
      focus:
        "Holistic personal development, mindset, and lasting lifestyle transformation.",
      benefits: [
        "Tailored guidance for your unique life challenges and aspirations.",
        "Strategies for cultivating habits that lead to sustainable personal growth.",
        "Understanding that lasting change comes from lifestyle shifts, not temporary diets.",
        "Actionable insights for mindset mastery and holistic well-being.",
        "Post-session notes summary and clear actions to take to improve.",
      ],
      tidycalLink:
        "https://tidycal.com/holguintrades1/60-minute-life-coaching-1vlwk2z-3l696en-mpe9ezy-m8e6e56-3eg9grz-1j696qq-19k8y5y-3eg9xdz-m7kqj7l",
      stripeLink:
        "https://buy.stripe.com/4gM4gA5Ku6ag49H91T9Zm08",
        paypalLink: "https://tidycal.com/holguintrades1/60-minute-life-coaching-1vlwk2z-3l696en-mpe9ezy-m8e6e56-3eg9grz-1j696qq-19k8y5y-3eg9xdz-m7kqj7l-102jn2r",
      recurrence: "One-time",
    },
  ],
  aiIntegrationNotes: {
    consentGuidance:
      "For transcription, a detailed consent form within the Coaching Agreement (signed before the first session) is strongly recommended for legal robustness.",
    internalAIbenefits: [
      "Automated transcription for coach's review and preparation (requires client consent).",
      "AI-generated summaries of key discussion points for internal use (and potential client delivery after coach review).",
      "Identification of common themes or challenges across client sessions (anonymized for privacy).",
      "Drafting of follow-up action items based on session content (requires coach review and personalization).",
      "Sentiment analysis to gauge client engagement and emotional state (internal, for coach improvement).",
      "Proactive identification of relevant resources or exercises for the coach to recommend.",
    ],
  },
};
