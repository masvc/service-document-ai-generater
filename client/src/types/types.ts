// types/types.ts
export interface FormData {
    title: string;
    subtitle: string;
    company: string;
    summary: string;
    analysis: string;
    solution: string;
    conclusion: string;
  }
  
  export interface PageProps {
    data: FormData;
    theme: ColorTheme;
  }
  
  export interface ColorTheme {
    name: string;
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
    light: string;
  }
  
  export interface ChartData {
    name: string;
    value: number;
    growth?: number;
  }
  
  export interface PieData {
    name: string;
    value: number;
  }