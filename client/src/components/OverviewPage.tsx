import React from 'react';
import type { FormData, ColorTheme } from '../types/types';

interface OverviewPageProps {
  data: FormData;
  theme: ColorTheme;
}

// アイコンコンポーネント
const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

const TargetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

export const OverviewPage: React.FC<OverviewPageProps> = ({ data, theme }) => {
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
          marginBottom: '40px'
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
              <InfoIcon />
            </div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#111827',
              margin: 0,
              letterSpacing: '-0.01em'
            }}>
              概要・課題提示
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
          gridTemplateColumns: '1fr 300px',
          gap: '40px'
        }}>
          {/* 左側：メインコンテンツ */}
          <div>
            {/* 概要セクション */}
            <div style={{
              marginBottom: '32px'
            }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '16px',
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
                概要
              </h2>
              
              <div style={{
                fontSize: '15px',
                color: '#4b5563',
                lineHeight: '1.7',
                padding: '20px',
                background: '#f9fafb',
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}>
                {data.summary}
              </div>
            </div>

            {/* 課題セクション */}
            <div>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '16px',
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
                こんな課題、ありませんか？
              </h2>
              
              <div style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '24px'
              }}>
                <div style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  lineHeight: '1.8',
                  whiteSpace: 'pre-line'
                }}>
                  {data.analysis}
                </div>
              </div>
            </div>
          </div>

          {/* 右側：サイドバー */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* 対象読者 */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px'
              }}>
                <div style={{ color: theme.primary }}>
                  <TargetIcon />
                </div>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  margin: 0
                }}>
                  対象読者
                </h3>
              </div>
              <ul style={{
                fontSize: '12px',
                color: '#6b7280',
                lineHeight: '1.6',
                margin: 0,
                paddingLeft: '12px'
              }}>
                <li>経営陣・事業責任者</li>
                <li>IT・システム部門</li>
                <li>マーケティング担当者</li>
                <li>業務改善担当者</li>
              </ul>
            </div>

            {/* 読了時間 */}
            <div style={{
              background: `linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}08 100%)`,
              border: `1px solid ${theme.primary}20`,
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '24px',
                fontWeight: '700',
                color: theme.primary,
                marginBottom: '4px'
              }}>
                5分
              </div>
              <div style={{
                fontSize: '11px',
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                読了時間
              </div>
            </div>

            {/* 企業情報 */}
            <div style={{
              background: '#f9fafb',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px'
              }}>
                発行元
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: theme.primary
              }}>
                {data.company}
              </div>
            </div>
          </div>
        </div>

        {/* フッター */}
        <div style={{
          marginTop: '40px',
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
            02 / 06
          </div>
        </div>
      </div>
    </div>
  );
};