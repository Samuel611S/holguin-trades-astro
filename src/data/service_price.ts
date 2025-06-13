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
      { name: "PayPal", link: "http://paypal.com" },
      {
        name: "Credit card",
        link: "https://buy.stripe.com/eVqcN6c8S56c35D1zr9Zm03" // ✅ from Excel file
      }
    ],
    productPurchasePeriod: "Monthly",
    productBillingFrequency: "Monthly",
    moreInfo: {
      text: "Learn More…",
      link: "http://holguintrades.com/trades.html"
    },
    testimonials: [],
    benefitList: [
      "1 plan, simple, not confusing, not trying to upsell"
    ]
  }
];

