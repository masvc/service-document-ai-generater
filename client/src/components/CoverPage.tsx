import React from 'react';
import type { FormData, ColorTheme } from '../types/types';

interface CoverPageProps {
  data: FormData;
  theme: ColorTheme;
}

// アイコンコンポーネント
const AnalyticsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="8" width="4" height="9" />
    <rect x="9" y="5" width="4" height="12" />
    <rect x="15" y="1" width="4" height="16" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

export const CoverPage: React.FC<CoverPageProps> = ({ data, theme }) => {
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
      {/* 左側：メインコンテンツエリア */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: 0
        }}
      >
        {/* 左側コンテンツ */}
        <div style={{
          padding: '60px 50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff'
        }}>
          {/* ヘッダー情報 */}
          <div>
            <div style={{
              fontSize: '13px',
              color: '#6b7280',
              fontWeight: '500',
              marginBottom: '8px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              Service Document · {new Date().toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              })}
            </div>

            <div style={{
              fontSize: '15px',
              color: '#374151',
              fontWeight: '600',
              marginBottom: '40px'
            }}>
              {data.company}
            </div>
          </div>

          {/* メインタイトル */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{
              fontSize: '42px',
              fontWeight: '800',
              color: '#111827',
              lineHeight: '1.1',
              margin: '0 0 20px 0',
              letterSpacing: '-0.02em'
            }}>
              {data.title}
            </h1>

            <h2 style={{
              fontSize: '18px',
              fontWeight: '400',
              color: '#6b7280',
              lineHeight: '1.5',
              margin: '0 0 40px 0',
              maxWidth: '480px'
            }}>
              {data.subtitle}
            </h2>

            {/* キーポイント */}
            <div style={{
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '24px',
              maxWidth: '420px'
            }}>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <CheckIcon />
                この資料で得られること
              </div>
              <ul style={{
                fontSize: '13px',
                color: '#6b7280',
                lineHeight: '1.6',
                margin: 0,
                paddingLeft: '16px',
                listStyle: 'none'
              }}>
                <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: theme.primary, marginTop: '2px' }}>•</div>
                  業界の現状と課題の把握
                </li>
                <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: theme.primary, marginTop: '2px' }}>•</div>
                  効果的なソリューションの理解
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: theme.primary, marginTop: '2px' }}>•</div>
                  実装に向けた具体的な指針
                </li>
              </ul>
            </div>
          </div>

          {/* フッター情報 */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }}>
            <div>
              <div style={{
                fontSize: '11px',
                color: '#9ca3af',
                fontWeight: '500',
                marginBottom: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Professional Report
              </div>
              <div style={{
                fontSize: '13px',
                color: '#374151',
                fontWeight: '600'
              }}>
                Business Strategy Document
              </div>
            </div>

            <div style={{
              background: '#f3f4f6',
              borderRadius: '6px',
              padding: '8px 12px',
              fontSize: '11px',
              color: '#6b7280',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              6 Pages
            </div>
          </div>
        </div>

        {/* 右側サイドバー */}
        <div style={{
          background: `linear-gradient(180deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 30px',
          position: 'relative'
        }}>
          {/* アイコン */}
          <div style={{
            width: '80px',
            height: '80px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white'
          }}>
            <AnalyticsIcon />
          </div>

          {/* サイドバーテキスト */}
          <div style={{
            textAlign: 'center',
            color: 'white'
          }}>
            <div style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              Data-Driven
            </div>
            <div style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '16px'
            }}>
              Strategy
            </div>
            <div style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: '1.5'
            }}>
              実績に基づく戦略と
              <br />
              データドリブンなアプローチ
            </div>
          </div>

          {/* 装飾要素 */}
          <div
            style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          />
          
          <div
            style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-30px',
              width: '80px',
              height: '80px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          />
        </div>
      </div>

      {/* ページ番号 */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '50px',
          fontSize: '11px',
          color: '#9ca3af',
          fontWeight: '500',
          zIndex: 15
        }}
      >
        01
      </div>
    </div>
  );
};