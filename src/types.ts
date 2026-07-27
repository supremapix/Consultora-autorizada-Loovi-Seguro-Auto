export interface QuizData {
  year: string;
  model: string;
  usage: string;
  concerns: string[];
  currentInsurance: string;
  timeline: string;
  fullName: string;
  whatsapp: string;
  email: string;
  city: string;
  lgpdAccepted: boolean;
}

export interface ContactFormData {
  name: string;
  whatsapp: string;
  email: string;
  message: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface TestimonialItem {
  name: string;
  city: string;
  vehicle: string;
  text: string;
}
