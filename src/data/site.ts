export interface ContactInfo {
  phone: string;
  email?: string;
  address: string;
}

export interface SiteData {
  // Core Business Info
  businessName: string;
  siteName: string;
  companyName: string;
  description: string;
  tagline: string;
  keywords: string[];
  author: string;
  baseUrl: string;

  // Contact Info
  contact: ContactInfo;

  // Social Media
  social: {
    twitter: string;
    youtube: string;
    discord: string;
    linkedin: string;
    facebook: string;
    twitterHandle: string;
  };

  // Analytics
  analytics?: {
    googleAnalyticsId?: string;
    facebookPixelId?: string;
  };

  // SEO & Meta
  seo: {
    defaultImage: string;
    ogImage: string;
    twitterImage: string;
  };

  // Homepage specific content
  homepage: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
    cta: string;
    articlesName: string;
    headerText: string;
  };
}

export const siteData: SiteData = {
  // Core Business Info
  businessName: "Holguin Trades",
  siteName: "Holguin Trades",
  companyName: "Holguin Trades",
  description:
    "Unleash your trading edge with expert Weekly Options and Swing Trading signals, personalized coaching, and motivational speaking from Alfredo Holguin, a totally blind, seasoned professional. Learn to build lasting habits for wealth and success—because diets don't work; lifestyle changes do.",
  tagline:
    "Blind Vision in Trading: Weekly Options, Swing, Coaching & Motivation",
  keywords: [
    "stock market trading",
    "options trading",
    "weekly options",
    "selling weekly options",
    "swing trading",
    "call options",
    "trading signals",
    "trading coach",
    "life coaching",
    "motivational speaker",
    "blind trader",
    "Alfredo Holguin",
    "Holguin Trades",
    "financial independence",
    "wealth creation",
    "entrepreneurship",
    "trading psychology",
    "habit formation",
    "lifestyle change",
    "personal growth",
    "overcoming challenges",
    "authentic leadership"
  ],
  author: "Alfredo Holguin",
  baseUrl: "https://www.holguintrades.com",

  // Contact Info
  contact: {
    phone: "+1 (555) 123-4567",
    email: "123 Trading St, Financial District, NY 10001", // NOTE: This looks like an address not an email
    address: ""
  },

  // Social Media
  social: {
    twitter: "https://twitter.com/HolguinTrades",
    youtube: "https://youtube.com/holguintrades",
    discord: "https://discord.gg/holguintrades",
    linkedin: "https://linkedin.com/company/holguintrades",
    facebook: "https://facebook.com/holguintrades",
    twitterHandle: "@HolguinTrades"
  },

  // Analytics
  analytics: {
    // googleAnalyticsId: "G-XXXXXXXXXX",
    // facebookPixelId: "XXXXXXXXXX"
  },

  // SEO & Meta
  seo: {
    defaultImage: "/images/alfredo-holguin-professional-headshot.jpg",
    ogImage:
      "https://www.holguintrades.com/images/alfredo-holguin-professional-headshot.jpg",
    twitterImage:
      "https://www.holguintrades.com/images/alfredo-holguin-professional-headshot.jpg"
  },

  // Homepage specific content
  homepage: {
    title:
      "Blind Vision in Trading: Weekly Options, Swing, Coaching & Motivation - Holguin Trades",
    description:
      "Unleash your trading edge with expert Weekly Options and Swing Trading signals, personalized coaching, and motivational speaking from Alfredo Holguin, a totally blind, seasoned professional. Learn to build lasting habits for wealth and success—because diets don't work; lifestyle changes do.",
    ogTitle:
      "Blind Vision in Trading: Weekly Options, Swing Trades & Coaching - Holguin Trades",
    ogDescription:
      "Unleash your trading edge with expert Weekly Options and Swing Trading signals, personalized coaching, and motivational speaking from Alfredo Holguin, a totally blind, seasoned professional. Learn to build lasting habits for wealth and success—because diets don't work; lifestyle changes do.",
    twitterTitle:
      "Blind Vision in Trading: Weekly Options, Swing Trades & Coaching - Holguin Trades",
    twitterDescription:
      "Unleash your trading edge with expert Weekly Options and Swing Trading signals, personalized coaching, and motivational speaking from Alfredo Holguin, a totally blind, seasoned professional. Learn to build lasting habits for wealth and success—because diets don't work; lifestyle changes do.",
    cta: "Sign Up for Signals",
    articlesName: "Insights",
    headerText: "Trade Smarter: Confident Strategies, Real Weekly Results"
  }
};

// Utility functions

export const getSiteTitle = (pageTitle?: string): string => {
  return pageTitle
    ? `${pageTitle} - ${siteData.businessName}`
    : siteData.businessName;
};

export const getHomePageTitle = (): string => {
  return siteData.homepage.title;
};

export const getSiteDescription = (pageDescription?: string): string => {
  return pageDescription || siteData.description;
};

export const getHomePageDescription = (): string => {
  return siteData.homepage.description;
};

export const getCanonicalUrl = (path: string): string => {
  return `${siteData.baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

export const getOgImage = (imagePath?: string): string => {
  if (!imagePath) return siteData.seo.ogImage;
  return imagePath.startsWith("http")
    ? imagePath
    : `${siteData.baseUrl}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;
};

export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

export const getBusinessName = (): string => {
  return siteData.businessName;
};
