import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  rating?: number;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}