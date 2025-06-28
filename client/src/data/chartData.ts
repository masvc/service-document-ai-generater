// data/chartData.ts
// data/chartData.ts
import type { ChartData, PieData } from '../types/types';

export const sampleChartData: ChartData[] = [
  { name: '2021', value: 400, growth: 240 },
  { name: '2022', value: 300, growth: 300 },
  { name: '2023', value: 520, growth: 450 },
  { name: '2024', value: 680, growth: 580 },
  { name: '2025', value: 890, growth: 720 }
];

export const samplePieData: PieData[] = [
  { name: 'AI・自動化', value: 35 },
  { name: 'デリバリー', value: 25 },
  { name: 'モバイル決済', value: 20 },
  { name: 'その他DX', value: 20 }
];