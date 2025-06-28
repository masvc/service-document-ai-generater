
// types/themes.ts
import type { ColorTheme } from './types';

export const COLOR_THEMES: Record<string, ColorTheme> = {
  professionalBlue: {
    name: 'Professional Blue',
    primary: '#2563eb',
    secondary: '#1e40af',
    accent: '#3b82f6',
    text: '#1f2937',
    background: '#ffffff',
    light: '#e0f2fe'
  },
  modernGray: {
    name: 'Modern Gray',
    primary: '#4b5563',
    secondary: '#374151',
    accent: '#6b7280',
    text: '#111827',
    background: '#ffffff',
    light: '#f3f4f6'
  },
  techGreen: {
    name: 'Tech Green',
    primary: '#059669',
    secondary: '#047857',
    accent: '#10b981',
    text: '#1f2937',
    background: '#ffffff',
    light: '#d1fae5'
  },
  vibrantOrange: {
    name: 'Vibrant Orange',
    primary: '#ea580c',
    secondary: '#c2410c',
    accent: '#f97316',
    text: '#1f2937',
    background: '#ffffff',
    light: '#fed7aa'
  },
  warmRed: {
    name: 'Warm Red',
    primary: '#dc2626',
    secondary: '#b91c1c',
    accent: '#ef4444',
    text: '#1f2937',
    background: '#ffffff',
    light: '#fecaca'
  }
};