import React from 'react';
import type { FormData, ColorTheme } from '../types/types';

interface ServicePageProps {
  data: FormData;
  theme: ColorTheme;
}

// アイコンコンポーネント
const ServiceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const FeatureIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9,11 12,14 22,4"/>
    <path d="M21,12v7a2,2 0 01-2,2H5a2,2 0 01-2-2V5a2,2 0 012-2h11"/>
  </svg>
);

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const RocketIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

export const ServicePage: React.FC<ServicePageProps> = ({ data, theme }) => {
  const serviceFeatures = [
    {
      icon: <RocketIcon />,
      title: '高速導入',
      description: '最短2週間での導入が可能'
    },
    {
      icon: <ShieldIcon />,
      title: 'セキュリティ',
      description: '企業レベルの安全性を確保'
    },
    {
      icon: <FeatureIcon />,
      title: 'カスタマイズ',
      description: '業務フローに合わせた設計'
    }
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
        padding: '35px 50px 25px 50px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* ページタイトル */}
        <div style={{
          marginBottom: '25px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '8px'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: `linear-gradient(135deg, ${theme.primary}15 0%, ${theme.accent}15 100%)`,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.primary
            }}>
              <ServiceIcon />
            </div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#111827',
              margin: 0,
              letterSpacing: '-0.01em'
            }}>
              サービス概要
            </h1>
          </div>
          
          <div style={{
            width: '50px',
            height: '2px',
            background: theme.primary,
            borderRadius: '1px'
          }} />
        </div>

        {/* コンテンツエリア */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          gap: '30px'
        }}>
          {/* 左側：メインサービス */}
          <div>
            {/* サービス紹介 */}
            <div style={{
              marginBottom: '20px'
            }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '12px'
              }}>
                {data.company}のソリューション
              </h2>
              
              <div style={{
                fontSize: '13px',
                color: '#4b5563',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                企業の課題解決と成長を支援する、包括的なデジタルソリューションをご提供します。
                最新技術と豊富な実績を組み合わせ、お客様のビジネス価値向上に貢献いたします。
              </div>
            </div>

            {/* 主要機能 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '16px',
              marginBottom: '20px'
            }}>
              {serviceFeatures.map((feature, index) => (
                <div key={index} style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  padding: '16px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: `linear-gradient(135deg, ${theme.primary}15 0%, ${theme.accent}15 100%)`,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: theme.primary,
                    margin: '0 auto 10px auto'
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '6px'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: '10px',
                    color: '#6b7280',
                    lineHeight: '1.4',
                    margin: 0
                  }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* サービス詳細 */}
            <div style={{
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              padding: '18px'
            }}>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <div style={{
                  width: '3px',
                  height: '14px',
                  background: theme.primary,
                  borderRadius: '2px'
                }} />
                提供サービス詳細
              </h3>
              
              <div style={{
                fontSize: '12px',
                color: '#4b5563',
                lineHeight: '1.5',
                whiteSpace: 'pre-line'
              }}>
                {data.solution}
              </div>
            </div>
          </div>

          {/* 右側：サポート情報 */}
          <div>
            {/* 評価・実績 */}
            <div style={{
              background: `linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}08 100%)`,
              border: `1px solid ${theme.primary}20`,
              borderRadius: '6px',
              padding: '18px',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '12px'
              }}>
                お客様評価
              </h3>
              
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2px',
                marginBottom: '6px'
              }}>
                {[1,2,3,4,5].map((star) => (
                  <div key={star} style={{ color: '#fbbf24' }}>
                    <StarIcon />
                  </div>
                ))}
              </div>
              
              <div style={{
                fontSize: '20px',
                fontWeight: '700',
                color: theme.primary,
                marginBottom: '3px'
              }}>
                4.8/5.0
              </div>
              
              <div style={{
                fontSize: '10px',
                color: '#6b7280'
              }}>
                (導入企業200社以上の平均評価)
              </div>
            </div>

            {/* 導入実績 */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              padding: '16px',
              marginBottom: '16px'
            }}>
              <h3 style={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '12px'
              }}>
                導入実績
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {[
                  { label: '導入企業数', value: '200+社' },
                  { label: '業界実績', value: '15業界' },
                  { label: '満足度', value: '98%' },
                  { label: 'サポート', value: '24/7' }
                ].map((stat, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: '6px',
                    borderBottom: index < 3 ? '1px solid #f3f4f6' : 'none'
                  }}>
                    <span style={{
                      fontSize: '10px',
                      color: '#6b7280'
                    }}>
                      {stat.label}
                    </span>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: theme.primary
                    }}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* お問い合わせCTA */}
            <div style={{
              background: theme.primary,
              borderRadius: '6px',
              padding: '16px',
              textAlign: 'center',
              color: 'white'
            }}>
              <h3 style={{
                fontSize: '12px',
                fontWeight: '600',
                marginBottom: '6px'
              }}>
                詳細なご相談はこちら
              </h3>
              <p style={{
                fontSize: '9px',
                marginBottom: '10px',
                opacity: 0.9
              }}>
                専門スタッフが丁寧に<br />
                サポートいたします
              </p>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '4px',
                padding: '6px 12px',
                fontSize: '10px',
                fontWeight: '600'
              }}>
                無料相談実施中
              </div>
            </div>
          </div>
        </div>

        {/* フッター */}
        <div style={{
          marginTop: '20px',
          paddingTop: '15px',
          borderTop: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '9px',
            color: '#9ca3af',
            fontWeight: '500'
          }}>
            Professional Service Document Generator v2.0
          </div>
          
          <div style={{
            fontSize: '9px',
            color: '#9ca3af',
            fontWeight: '500'
          }}>
            05 / 06
          </div>
        </div>
      </div>
    </div>
  );
};