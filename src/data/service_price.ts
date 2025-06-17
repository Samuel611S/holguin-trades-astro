// src/data/service_price.ts

export const tradingServices = [
  {
    id: "weekly_Put_selling_Signal_Monthly_Monthly_Duration",
    dateAdded: "2025-05-29",
    price: "$90",
    pricePromotional: "$75",
    name: "Weekly Put Selling Alerts",
    description: "Text alerts for selling puts on a weekly basis.",
    paymentOptions: [
      { name: "Pay via PayPal", link: "http://paypal.com" }, // PayPal link remains as last provided
      {
        name: "Pay via 💳", // Updated: "Credit card" changed to "Pay via 💳"
        link: "https://buy.stripe.com/eVqcN6c8S56c35D1zr9Zm03" // Stripe link remains as last provided
      }
    ],
    productPurchasePeriod: "Monthly",
    productBillingFrequency: "Monthly",
    moreInfo: {
      text: "Learn More…",
      link: "https://tidycal.com/holguintrades1/15-minute-speaking-meeting-1vlwk2z-3l696en-mpe9ezy-m8e6e56-3eg9grz-1j696qq-19k8y5y"
    },
    testimonials: [],
    benefitList: [
      "1 plan, simple, not confusing, not trying to upsell"
    ]
  }
];