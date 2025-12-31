export interface PricingPlan {
  plan: string;
  price: string;
  duration: string;
  popular?: boolean;
  bestFor?: string;
  features: string[];
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  priceNote: string;
  pricing: PricingPlan[];
}

export type Services = Service[];
