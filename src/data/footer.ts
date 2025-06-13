// src/data/footer.ts

export interface Disclaimer {
  id: string;
  name: string;
  content: string;
  display_locations: string[];
  date_created: string;
  last_updated: string;
}

export const disclaimers: Disclaimer[] = [
  {
    id: "important_disclosure_short_version",
    name: "Important Disclosure (Short Version)",
    content:
      "Trading involves substantial risk, and past performance is not indicative of future results—consult a financial professional before investing.",
    display_locations: ["section_headers", "popups", "short_footers"],
    date_created: "2025-06-01T10:00:00Z",
    last_updated: "2025-06-02T20:09:55Z",
  },
  {
    id: "important_disclosure_full",
    name: "IMPORTANT DISCLOSURE (Full)",
    content:
      "All content on Holguin Trades is for informational and educational purposes only and does not constitute financial, investment, or professional advice. Trading involves substantial risk, and you could lose capital. Past performance is not indicative of future results. Always consult with a qualified financial professional before making any investment decisions.",
    display_locations: ["footer", "dedicated_page"],
    date_created: "2025-06-01T10:00:00Z",
    last_updated: "2025-06-02T20:09:55Z",
  },
  {
    id: "trading_signals_disclaimer",
    name: "Trading Signals Disclaimer",
    content:
      "Trading involves substantial risk. Our text alerts are for educational purposes only and are not financial advice. You could lose all your capital. Past performance is not indicative of future results. Errors in data or analysis may occur. Consult a financial professional before trading.",
    display_locations: ["footer", "trading_pages"],
    date_created: "2025-06-01T10:00:00Z",
    last_updated: "2025-06-02T20:09:55Z",
  },
  {
    id: "public_speaking_disclaimer",
    name: "Public Speaking Disclaimer",
    content:
      "Content is for informational and motivational purposes only and does not constitute professional advice. Individual results will vary.",
    display_locations: ["footer", "speaking_pages"],
    date_created: "2025-06-01T10:00:00Z",
    last_updated: "2025-06-02T20:09:55Z",
  },
  {
    id: "coaching_disclaimer",
    name: "Coaching Disclaimer",
    content:
      "Our coaching provides education and guidance, not financial or investment advice. You are responsible for your own decisions and results. No specific outcomes are guaranteed.",
    display_locations: ["footer", "coaching_pages"],
    date_created: "2025-06-01T10:00:00Z",
    last_updated: "2025-06-02T20:09:55Z",
  },
];
