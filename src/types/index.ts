export interface Space {
  id: string;
  title: string;
  description: string;
  features: string[];
  equipment: string[];
  price: string;
  image: string;
  seoKeywords: string[];
}

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  excerpt: string;
  content: string;
  keywords: string[];
  image: string;
  date: string;
  readTime: string;
}

export interface Booking {
  id?: number;
  name: string;
  email: string;
  phone: string;
  roomId: string;
  date: string;
  time: string;
  duration: number;
  message?: string;
  status?: string;
  createdAt?: Date;
}

export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: Date;
}
