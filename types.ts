import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface UseCase {
  id: string;
  title: string;
  challenge: string;
  intervention: string;
  outcome: string;
  category: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export interface Framework {
  name: string;
  ref: string;
  lots: string[];
  status: 'Live' | 'Expired' | 'Pending';
}

export interface PolicyDoc {
  title: string;
  version: string;
  date: string;
  size: string;
}
