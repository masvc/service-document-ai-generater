import React from 'react';
import type { FormData, ColorTheme } from '../types/types';

interface SolutionPageProps {
  data: FormData;
  theme: ColorTheme;
}

// アイコンコンポーネント
const LightbulbIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21h6"/>
    <path d="M12 3a6 6 0 0 1 6 6c0 3-2 3-2 6H8c0-3-2-3-2-6a6 6 0 0 1 6-6z"/>
    <path d="M8 19h8"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22,4 12,14.01 9,11.01"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12,5 19,12 12,19"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v6m0 6v6"/>
    <path d="M21 12h-6m-6 0H3"/>
  </svg>
);

export const SolutionPage: React.FC<SolutionPageProps> = ({ data, theme }) => {
  const solutionSteps = data.solution.split('\n').filter(step => step.trim()).slice(0, 3); // 最大3ステップに制限

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
              <LightbulbIcon />
            </div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#111827',
              margin: 0,
              letterSpacing: '-0.01em'
            }}>
              ソリューション
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
          {/* 左側：メインソリューション */}
          <div>
            {/* 導入部 */}
            <div style={{
              background: `linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}08 100%)`,
              border: `1px solid ${theme.primary}20`,
              borderRadius: '6px',
              padding: '16px',
              marginBottom: '20px'
            }}>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '6px'
              }}>
                課題解決のアプローチ
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                lineHeight: '1.5'
              }}>
                現状分析で明らかになった課題に対して、段階的かつ効果的な解決策をご提案します。
              </div>
            </div>

            {/* ソリューションステップ - 横並びレイアウト */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px'
            }}>
              {solutionSteps.map((step, index) => (
                <div key={index} style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  padding: '16px',
                  position: 'relative',
                  height: 'fit-content'
                }}>
                  {/* ステップ番号 */}
                  <div style={{
                    position: 'absolute',
                    top: '-6px',
                    left: '16px',
                    width: '20px',
                    height: '20px',
                    background: theme.primary,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '9px',
                    color: 'white',
                    fontWeight: '600'
                  }}>
                    {index + 1}
                  </div>

                  {/* ステップ内容 */}
                  <div style={{
                    paddingTop: '8px'
                  }}>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '6px',
                      lineHeight: '1.3'
                    }}>
                      {step.split('による')[0] || step.split('の')[0]}
                    </div>
                    <div style={{
                      fontSize: '10px',
                      color: '#6b7280',
                      lineHeight: '1.4'
                    }}>
                      {step.length > 50 ? step.substring(0, 47) + '...' : step}
                    </div>
                  </div>

                  {/* 矢印 - 最後以外 */}
                  {index < solutionSteps.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      right: '-8px',
                      transform: 'translateY(-50%)',
                      color: theme.accent,
                      background: 'white',
                      borderRadius: '50%',
                      padding: '2px'
                    }}>
                      <ArrowRightIcon />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 右側：メリット・効果 */}
          <div>
            <h2 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div style={{
                width: '3px',
                height: '16px',
                background: theme.secondary,
                borderRadius: '2px'
              }} />
              期待効果
            </h2>

            {/* 効果リスト */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              marginBottom: '20px'
            }}>
              {[
                '業務効率30%向上',
                'コスト削減効果',
                '顧客満足度向上',
                '競争力強化'
              ].map((effect, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px',
                  background: '#f9fafb',
                  borderRadius: '4px',
                  border: '1px solid #e5e7eb'
                }}>
                  <div style={{ color: theme.primary }}>
                    <CheckCircleIcon />
                  </div>
                  <span style={{
                    fontSize: '11px',
                    color: '#374151',
                    fontWeight: '500'
                  }}>
                    {effect}
                  </span>
                </div>
              ))}
            </div>

            {/* 実装タイムライン */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              padding: '16px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '12px'
              }}>
                <div style={{ color: theme.primary }}>
                  <SettingsIcon />
                </div>
                <h3 style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#374151',
                  margin: 0
                }}>
                  実装スケジュール
                </h3>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}>
                {[
                  { phase: 'Phase 1', duration: '1-2ヶ月', desc: '現状調査・設計' },
                  { phase: 'Phase 2', duration: '2-3ヶ月', desc: 'システム導入' },
                  { phase: 'Phase 3', duration: '1ヶ月', desc: '運用開始・効果測定' }
                ].map((item, index) => (
                  <div key={index} style={{
                    padding: '6px 0',
                    borderBottom: index < 2 ? '1px solid #f3f4f6' : 'none'
                  }}>
                    <div style={{
                      fontSize: '10px',
                      fontWeight: '600',
                      color: theme.primary,
                      marginBottom: '1px'
                    }}>
                      {item.phase} ({item.duration})
                    </div>
                    <div style={{
                      fontSize: '9px',
                      color: '#6b7280'
                    }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
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
            Professional Whitepaper Generator v2.0
          </div>
          
          <div style={{
            fontSize: '9px',
            color: '#9ca3af',
            fontWeight: '500'
          }}>
            04 / 06
          </div>
        </div>
      </div>
    </div>
  );
};