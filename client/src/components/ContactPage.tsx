import React from 'react';
import type { FormData, ColorTheme } from '../types/types';

interface ContactPageProps {
  data: FormData;
  theme: ColorTheme;
}

// アイコンコンポーネント
const ContactIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const WebIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const MessageIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);

export const ContactPage: React.FC<ContactPageProps> = ({ data, theme }) => {
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
              <ContactIcon />
            </div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#111827',
              margin: 0,
              letterSpacing: '-0.01em'
            }}>
              お問い合わせ
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
          gridTemplateColumns: '1fr 1fr 280px',
          gap: '30px'
        }}>
          {/* 左側：お問い合わせ情報 */}
          <div>
            {/* 導入部 */}
            <div style={{
              marginBottom: '20px'
            }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '10px'
              }}>
                さらに詳しい情報をご希望の方は
              </h2>
              
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                本ホワイトペーパーの内容について、より詳細なご相談や
                個別のお打ち合わせをご希望の場合は、お気軽にお問い合わせください。
              </div>
            </div>

            {/* 対応可能な相談内容 */}
            <div style={{
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              padding: '16px'
            }}>
              <h3 style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <div style={{ color: theme.primary }}>
                  <MessageIcon />
                </div>
                ご相談可能な内容
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '6px'
              }}>
                {[
                  '導入スケジュールのご相談',
                  'カスタマイズ要件の検討',
                  'コスト・ROIの詳細試算',
                  '他社事例のご紹介'
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '11px',
                    color: '#4b5563'
                  }}>
                    <div style={{ color: theme.primary }}>
                      <CheckIcon />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 中央：結論 */}
          <div>
            <div style={{
              background: `linear-gradient(135deg, ${theme.primary}08 0%, ${theme.accent}08 100%)`,
              border: `1px solid ${theme.primary}20`,
              borderRadius: '6px',
              padding: '18px',
              height: 'fit-content'
            }}>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '10px'
              }}>
                まとめ
              </h3>
              <div style={{
                fontSize: '11px',
                color: '#4b5563',
                lineHeight: '1.5',
                whiteSpace: 'pre-line'
              }}>
                {data.conclusion}
              </div>
            </div>

            {/* 感謝メッセージ */}
            <div style={{
              textAlign: 'center',
              padding: '16px',
              background: '#f9fafb',
              borderRadius: '6px',
              border: '1px solid #e5e7eb',
              marginTop: '16px'
            }}>
              <div style={{
                fontSize: '12px',
                color: '#374151',
                fontWeight: '600',
                marginBottom: '6px'
              }}>
                Thank you
              </div>
              <div style={{
                fontSize: '10px',
                color: '#6b7280',
                lineHeight: '1.4'
              }}>
                最後までお読みいただき<br />
                ありがとうございました
              </div>
            </div>
          </div>

          {/* 右側：企業情報・連絡先 */}
          <div>
            {/* 企業情報 */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              padding: '18px',
              marginBottom: '16px'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: theme.primary,
                marginBottom: '12px'
              }}>
                {data.company}
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{ color: theme.primary }}>
                    <MailIcon />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '9px',
                      color: '#6b7280',
                      marginBottom: '1px'
                    }}>
                      Email
                    </div>
                    <div style={{
                      fontSize: '11px',
                      color: '#374151',
                      fontWeight: '500'
                    }}>
                      info@example.com
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{ color: theme.primary }}>
                    <PhoneIcon />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '9px',
                      color: '#6b7280',
                      marginBottom: '1px'
                    }}>
                      Phone
                    </div>
                    <div style={{
                      fontSize: '11px',
                      color: '#374151',
                      fontWeight: '500'
                    }}>
                      03-1234-5678
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{ color: theme.primary }}>
                    <WebIcon />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '9px',
                      color: '#6b7280',
                      marginBottom: '1px'
                    }}>
                      Website
                    </div>
                    <div style={{
                      fontSize: '11px',
                      color: '#374151',
                      fontWeight: '500'
                    }}>
                      https://example.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* お問い合わせCTA */}
            <div style={{
              background: theme.primary,
              borderRadius: '6px',
              padding: '18px',
              textAlign: 'center',
              color: 'white'
            }}>
              <h3 style={{
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '6px'
              }}>
                無料相談実施中
              </h3>
              <p style={{
                fontSize: '9px',
                marginBottom: '12px',
                opacity: 0.9,
                lineHeight: '1.4'
              }}>
                専門スタッフがお客様の課題に合わせて<br />
                最適なソリューションをご提案いたします
              </p>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '4px',
                padding: '8px 16px',
                fontSize: '11px',
                fontWeight: '600',
                border: '1px solid rgba(255,255,255,0.3)'
              }}>
                お問い合わせはこちら
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
            06 / 06
          </div>
        </div>
      </div>
    </div>
  );
};