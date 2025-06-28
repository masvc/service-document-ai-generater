import React from 'react';
import type { ColorTheme } from '../types/types';

interface A4PageProps {
  children: React.ReactNode;
  theme: ColorTheme;
  pageNumber?: number;
  totalPages?: number;
  showPageNumber?: boolean;
  className?: string;
  headerHeight?: string;
  footerHeight?: string;
  padding?: string;
}

export const A4Page: React.FC<A4PageProps> = ({
  children,
  theme,
  pageNumber,
  totalPages = 6,
  showPageNumber = true,
  className = '',
  headerHeight = '60px',
  footerHeight = '40px',
  padding = '40px'
}) => {
  return (
    <div 
      className={`pdf-page ${className}`}
      style={{
        width: '297mm',
        height: '210mm',
        backgroundColor: 'white',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        padding: 0,
        margin: '0 auto 20px auto',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden',
        fontFamily: '"Noto Sans JP", sans-serif',
        // 印刷時の調整は別途CSSで定義
      }}
    >
      {/* ヘッダーエリア */}
      <div
        style={{
          height: headerHeight,
          background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
          position: 'relative',
          zIndex: 10
        }}
      />

      {/* メインコンテンツエリア */}
      <div
        style={{
          flex: 1,
          padding: padding,
          position: 'relative',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          minHeight: 0 // フレックスボックスの高さ制限を解除
        }}
      >
        {children}
      </div>

      {/* フッターエリア */}
      <div
        style={{
          height: footerHeight,
          backgroundColor: '#f8fafc',
          borderTop: `2px solid ${theme.accent}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div style={{ 
          fontSize: '12px', 
          color: theme.text,
          fontWeight: '500'
        }}>
          Professional Service Document Generator v2.0
        </div>
        
        {showPageNumber && pageNumber && (
          <div style={{ 
            fontSize: '12px', 
            color: theme.text,
            fontWeight: '600'
          }}>
            {pageNumber} / {totalPages}
          </div>
        )}
      </div>

      {/* デコレーション要素 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '200px',
          height: '200px',
          background: `radial-gradient(circle, ${theme.accent}15 0%, transparent 70%)`,
          borderRadius: '50%',
          transform: 'translate(50%, -50%)',
          zIndex: 1
        }}
      />
      
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '150px',
          height: '150px',
          background: `radial-gradient(circle, ${theme.light}40 0%, transparent 70%)`,
          borderRadius: '50%',
          transform: 'translate(-50%, 50%)',
          zIndex: 1
        }}
      />
    </div>
  );
};

// レスポンシブ対応のコンテナコンポーネント
export const ContentContainer: React.FC<{
  children: React.ReactNode;
  maxWidth?: string;
  spacing?: 'compact' | 'normal' | 'spacious';
}> = ({ 
  children, 
  maxWidth = '100%',
  spacing = 'normal'
}) => {
  const spacingValues = {
    compact: '20px',
    normal: '30px',
    spacious: '40px'
  };

  return (
    <div style={{
      maxWidth,
      margin: '0 auto',
      position: 'relative',
      zIndex: 10,
      gap: spacingValues[spacing],
      display: 'flex',
      flexDirection: 'column'
    }}>
      {children}
    </div>
  );
};

// セクションヘッダーコンポーネント
export const SectionHeader: React.FC<{
  title: string;
  subtitle?: string;
  theme: ColorTheme;
  icon?: string;
  alignment?: 'left' | 'center' | 'right';
}> = ({ 
  title, 
  subtitle, 
  theme, 
  icon,
  alignment = 'left'
}) => {
  return (
    <div style={{
      textAlign: alignment,
      marginBottom: '25px',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: alignment === 'center' ? 'center' : alignment === 'right' ? 'flex-end' : 'flex-start',
        gap: '10px',
        marginBottom: '8px'
      }}>
        {icon && (
          <span style={{
            fontSize: '24px',
            lineHeight: 1
          }}>
            {icon}
          </span>
        )}
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: theme.primary,
          margin: 0,
          lineHeight: '1.2'
        }}>
          {title}
        </h2>
      </div>
      
      {subtitle && (
        <p style={{
          fontSize: '16px',
          color: theme.text,
          margin: 0,
          lineHeight: '1.4',
          fontWeight: '400'
        }}>
          {subtitle}
        </p>
      )}
      
      {/* アンダーライン */}
      <div style={{
        width: alignment === 'center' ? '80px' : '60px',
        height: '3px',
        background: `linear-gradient(90deg, ${theme.primary} 0%, ${theme.accent} 100%)`,
        margin: alignment === 'center' ? '15px auto 0' : alignment === 'right' ? '15px 0 0 auto' : '15px 0 0 0',
        borderRadius: '2px'
      }} />
    </div>
  );
};

// カードコンポーネント
export const ContentCard: React.FC<{
  children: React.ReactNode;
  theme: ColorTheme;
  elevation?: 'none' | 'low' | 'medium' | 'high';
  padding?: string;
  backgroundColor?: string;
}> = ({ 
  children, 
  theme, 
  elevation = 'low',
  padding = '25px',
  backgroundColor = 'white'
}) => {
  const elevationStyles = {
    none: 'none',
    low: '0 2px 8px rgba(0,0,0,0.1)',
    medium: '0 4px 16px rgba(0,0,0,0.12)',
    high: '0 8px 32px rgba(0,0,0,0.15)'
  };

  return (
    <div style={{
      backgroundColor,
      borderRadius: '12px',
      padding,
      boxShadow: elevationStyles[elevation],
      border: `1px solid ${theme.accent}20`,
      position: 'relative',
      zIndex: 10
    }}>
      {children}
    </div>
  );
};