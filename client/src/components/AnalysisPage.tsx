import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import type { FormData, ColorTheme } from '../types/types';

interface AnalysisPageProps {
  data: FormData;
  theme: ColorTheme;
}

// アイコンコンポーネント
const TrendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
    <polyline points="17,6 23,6 23,12"/>
  </svg>
);

const AlertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

export const AnalysisPage: React.FC<AnalysisPageProps> = ({ data, theme }) => {
  // サンプルデータ
  const growthData = [
    { name: '2020', value: 100 },
    { name: '2021', value: 115 },
    { name: '2022', value: 132 },
    { name: '2023', value: 156 },
    { name: '2024', value: 187 }
  ];

  const challengeData = [
    { name: '人材不足', value: 35, color: theme.primary },
    { name: 'コスト増', value: 28, color: theme.secondary },
    { name: '効率性', value: 22, color: theme.accent },
    { name: 'その他', value: 15, color: '#94a3b8' }
  ];

  return (
    <div 
      className="pdf-page"
      style={{
        width: '297mm',
        height: '210mm',
        backgroundColor: '#ffffff',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        margin: '0 auto 20px auto',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb',
        borderRadius: '4px',
        overflow: 'hidden',
        fontFamily: '"Inter", "Noto Sans JP", sans-serif'
      }}
    >
      {/* ヘッダー */}
      <div
        style={{
          height: '4px',
          background: `linear-gradient(90deg, ${theme.primary} 0%, ${theme.secondary} 100%)`
        }}
      />

      {/* メインコンテンツ */}
      <div style={{
        padding: '50px 60px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* ページタイトル */}
        <div style={{
          marginBottom: '35px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: `linear-gradient(135deg, ${theme.primary}15 0%, ${theme.accent}15 100%)`,
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.primary
            }}>
              <TrendIcon />
            </div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#111827',
              margin: 0,
              letterSpacing: '-0.01em'
            }}>
              現状分析
            </h1>
          </div>
          
          <div style={{
            width: '60px',
            height: '2px',
            background: theme.primary,
            borderRadius: '1px'
          }} />
        </div>

        {/* コンテンツエリア */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px'
        }}>
          {/* 左側：市場動向 */}
          <div>
            <h2 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{
                width: '4px',
                height: '18px',
                background: theme.primary,
                borderRadius: '2px'
              }} />
              市場動向
            </h2>

            {/* チャート */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
              height: '180px'
            }}>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                marginBottom: '12px',
                fontWeight: '500'
              }}>
                市場成長率 (2020年=100として)
              </div>
              <ResponsiveContainer width="100%" height="140">
                <BarChart data={growthData}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: '#6b7280' }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: '#6b7280' }}
                  />
                  <Bar dataKey="value" fill={theme.primary} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* 分析テキスト */}
            <div style={{
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{
                fontSize: '14px',
                color: '#4b5563',
                lineHeight: '1.6',
                whiteSpace: 'pre-line'
              }}>
                {data.analysis}
              </div>
            </div>
          </div>

          {/* 右側：課題分析 */}
          <div>
            <h2 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{
                width: '4px',
                height: '18px',
                background: theme.secondary,
                borderRadius: '2px'
              }} />
              主要課題の内訳
            </h2>

            {/* 円グラフ */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
              height: '180px'
            }}>
              <ResponsiveContainer width="100%" height="140">
                <PieChart>
                  <Pie
                    data={challengeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={60}
                    dataKey="value"
                  >
                    {challengeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* 凡例 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px'
            }}>
              {challengeData.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  color: '#4b5563'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: item.color,
                    borderRadius: '2px'
                  }} />
                  <span>{item.name} {item.value}%</span>
                </div>
              ))}
            </div>

            {/* キーポイント */}
            <div style={{
              marginTop: '20px',
              background: `linear-gradient(135deg, ${theme.primary}05 0%, ${theme.accent}05 100%)`,
              border: `1px solid ${theme.primary}20`,
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px'
              }}>
                <div style={{ color: theme.primary }}>
                  <AlertIcon />
                </div>
                <div style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#374151'
                }}>
                  重要なポイント
                </div>
              </div>
              <ul style={{
                fontSize: '12px',
                color: '#6b7280',
                lineHeight: '1.5',
                margin: 0,
                paddingLeft: '12px'
              }}>
                <li>デジタル化の遅れが競争力に影響</li>
                <li>人材確保の困難さが成長を阻害</li>
                <li>効率化投資の必要性が急務</li>
              </ul>
            </div>
          </div>
        </div>

        {/* フッター */}
        <div style={{
          marginTop: '30px',
          paddingTop: '20px',
          borderTop: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '11px',
            color: '#9ca3af',
            fontWeight: '500'
          }}>
            Professional Service Document Generator v2.0
          </div>
          
          <div style={{
            fontSize: '11px',
            color: '#9ca3af',
            fontWeight: '500'
          }}>
            03 / 06
          </div>
        </div>
      </div>
    </div>
  );
};