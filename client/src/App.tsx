
// App.tsxの上部に追加
import './styles/print-styles.css';
import { useState, useRef, useCallback } from 'react';
import { COLOR_THEMES } from './types/themes';
import type { FormData, ColorTheme } from './types/types';
import { CoverPage } from './components/CoverPage';
import { OverviewPage } from './components/OverviewPage';
import { AnalysisPage } from './components/AnalysisPage';
import { SolutionPage } from './components/SolutionPage';
import { ServicePage } from './components/ServicePage';
import { ContactPage } from './components/ContactPage';
import { generateContentWithClaude, parseClaudeResponse } from './utils/claudeApi';

// テンプレート選択用のプリセット
const TEMPLATES = {
  restaurant: {
    title: '飲食店向けデジタル変革による次世代ビジネス戦略',
    subtitle: '競合優位性確立のための包括的アプローチ',
    company: '株式会社Example',
    summary: '本ホワイトペーパーでは、飲食業界のデジタル変革について分析し、効率化と収益向上を実現するための具体的な手法を提示します。',
    analysis: '国内外食産業の市場規模は約26兆円で、デリバリー市場は前年比120%成長を記録\n人材不足と人件費上昇が深刻な課題\n顧客行動のデジタルシフトが加速',
    solution: 'クラウドベースPOSシステムの導入による業務効率化\nAIによる需要予測と自動発注システムの実装\nオムニチャネル対応によるカスタマーエクスペリエンス向上',
    conclusion: 'デジタル変革は飲食業界における競争優位性確保の必須要件となっている。適切な戦略立案と段階的な実装により、収益性向上と持続可能な成長の実現が可能である。'
  },
  tech: {
    title: 'AI活用による企業変革戦略',
    subtitle: 'デジタル時代の競争優位性構築',
    company: '株式会社TechSolution',
    summary: '人工知能技術の活用により、企業の生産性向上と新たなビジネス価値創出を実現するための戦略的アプローチを提示します。',
    analysis: 'AI市場は年率35%で成長中\n企業の86%がAI導入を検討\n人材不足とコスト削減が主要課題',
    solution: 'RPA導入による業務自動化\n機械学習による予測分析システム\nチャットボットによる顧客対応改善',
    conclusion: 'AI技術の戦略的活用により、企業は持続的な競争優位性を確立し、新たな成長機会を創出できる。'
  },
  marketing: {
    title: 'デジタルマーケティング最適化戦略',
    subtitle: 'ROI最大化のための統合アプローチ',
    company: '株式会社MarketingPro',
    summary: 'デジタル時代の顧客行動変化に対応し、マーケティング投資収益率を最大化するための包括的戦略を提案します。',
    analysis: 'デジタル広告費は年率12%増加\n顧客獲得コストが3年で40%上昇\nクッキーレス時代への対応が急務',
    solution: 'ファーストパーティデータ活用強化\nオムニチャネル体験の構築\nAI駆動型パーソナライゼーション',
    conclusion: 'データドリブンなアプローチにより、効率的な顧客獲得と長期的な顧客価値向上を同時に実現できる。'
  }
};

// ページ定義
const PAGES = [
  { name: '表紙', component: CoverPage, icon: '📄' },
  { name: '概要', component: OverviewPage, icon: '📋' },
  { name: '分析', component: AnalysisPage, icon: '📊' },
  { name: 'ソリューション', component: SolutionPage, icon: '💡' },
  { name: 'サービス', component: ServicePage, icon: '🔧' },
  { name: '問い合わせ', component: ContactPage, icon: '📞' }
];

function WhitepaperGenerator() {
  const [selectedTheme, setSelectedTheme] = useState('professionalBlue');
  const [isGeneratingWithClaude, setIsGeneratingWithClaude] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [formData, setFormData] = useState<FormData>(TEMPLATES.restaurant);
  
  const pdfRef = useRef<HTMLDivElement>(null);
  const theme: ColorTheme = COLOR_THEMES[selectedTheme as keyof typeof COLOR_THEMES];

  // 入力変更処理をメモ化
  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  // テンプレート選択処理
  const handleTemplateSelect = useCallback((templateKey: keyof typeof TEMPLATES) => {
    setFormData(TEMPLATES[templateKey]);
  }, []);

  // Claude生成処理
  const generateWithClaude = async () => {
    setIsGeneratingWithClaude(true);
    try {
      const prompt = `以下のテーマでビジネス向けホワイトペーパーのコンテンツを生成してください：

テーマ: ${formData.title}
対象業界: ${formData.company}

以下の形式で回答してください：

概要
（2-3文でビジネスサマリーを記述）

現状分析
（現在の市場状況と課題について詳しく分析）

ソリューション
（具体的な解決策と実装戦略を提示）

結論
（1-2文で総括）

ビジネス専門用語を使い、説得力のある内容にしてください。`;

      const result = await generateContentWithClaude(prompt);
      
      if (result) {
        console.log('Claude response received:', result);
        const parsed = parseClaudeResponse(result);
        console.log('Parsed content:', parsed);
        
        if (parsed.summary || parsed.analysis || parsed.solution || parsed.conclusion) {
          setFormData(prev => ({
            ...prev,
            summary: parsed.summary || prev.summary,
            analysis: parsed.analysis || prev.analysis,
            solution: parsed.solution || prev.solution,
            conclusion: parsed.conclusion || prev.conclusion
          }));
          
          alert('✅ Claude AIによるコンテンツ生成が完了しました！');
        } else {
          const sections = result.split('\n\n').filter((section: string) => section.trim().length > 0);
          if (sections.length >= 4) {
            setFormData(prev => ({
              ...prev,
              summary: sections[0].replace(/^(概要|エグゼクティブサマリー)\s*/, ''),
              analysis: sections[1].replace(/^(現状分析|課題|分析)\s*/, ''),
              solution: sections[2].replace(/^(ソリューション|解決策|戦略)\s*/, ''),
              conclusion: sections[3].replace(/^(結論|まとめ|総括)\s*/, '')
            }));
            alert('✅ Claude AIによるコンテンツ生成が完了しました！');
          } else {
            alert('⚠️ コンテンツの解析に問題がありました。生の結果をコンソールで確認してください。');
          }
        }
      } else {
        alert('❌ Claude APIからの応答がありませんでした。');
      }
    } catch (error) {
      console.error('コンテンツ生成エラー:', error);
      alert('❌ コンテンツの生成に失敗しました。サーバーログを確認してください。');
    }
    setIsGeneratingWithClaude(false);
  };

  // PDF生成処理（最適化版）
  const generatePDF = useCallback(() => {
    if (!pdfRef.current) return;
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      const content = pdfRef.current.innerHTML;
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>whitepaper_${formData.title.replace(/[^a-zA-Z0-9]/g, '_')}</title>
            <meta charset="utf-8">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap" rel="stylesheet">
            <style>
              @page { 
                size: A4 landscape; 
                margin: 0; 
              }
              * {
                box-sizing: border-box;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              body { 
                margin: 0; 
                font-family: "Noto Sans JP", sans-serif;
                font-size: 13px;
                line-height: 1.6;
                font-weight: 400;
              }
              .pdf-page { 
                page-break-after: always;
                page-break-inside: avoid;
                display: block !important;
                width: 297mm !important;
                height: 210mm !important;
                margin: 0 !important;
                box-shadow: none !important;
                border: none !important;
              }
              .pdf-page:last-child { 
                page-break-after: avoid; 
              }
              @media print {
                .pdf-page {
                  width: 297mm !important;
                  height: 210mm !important;
                  margin: 0 !important;
                  padding: 15mm !important;
                }
              }
            </style>
          </head>
          <body>
            ${content}
          </body>
        </html>
      `);
      printWindow.document.close();
      
      setTimeout(() => {
        printWindow.print();
      }, 1000);
    }
  }, [formData.title]);

  // 現在のページコンポーネントを取得
  const getCurrentPageComponent = () => {
    const PageComponent = PAGES[currentPage].component;
    return <PageComponent data={formData} theme={theme} />;
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8fafc',
      fontFamily: '"Noto Sans JP", sans-serif'
    }}>
      {/* ヘッダー */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '20px', 
            color: '#1f2937',
            fontWeight: '700'
          }}>
            📄 プロフェッショナル ホワイトペーパー生成ツール v2.0
          </h1>
          
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* プレビューモード切り替え */}
            <button
              onClick={() => setIsPreviewMode(!isPreviewMode)}
              style={{
                backgroundColor: isPreviewMode ? theme.primary : '#6b7280',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                fontFamily: '"Noto Sans JP", sans-serif'
              }}
            >
              {isPreviewMode ? '📝 編集モード' : '👁️ プレビューモード'}
            </button>

            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              style={{
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                minWidth: '140px',
                fontFamily: '"Noto Sans JP", sans-serif'
              }}
            >
              {Object.entries(COLOR_THEMES).map(([key, themeOption]) => (
                <option key={key} value={key}>{themeOption.name}</option>
              ))}
            </select>
            
            <button
              onClick={generateWithClaude}
              disabled={isGeneratingWithClaude}
              style={{
                backgroundColor: isGeneratingWithClaude ? '#9ca3af' : '#10b981',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: isGeneratingWithClaude ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                fontFamily: '"Noto Sans JP", sans-serif'
              }}
            >
              {isGeneratingWithClaude ? '🤖 生成中...' : '🤖 Claude自動生成'}
            </button>
            
            <button
              onClick={generatePDF}
              style={{
                backgroundColor: theme.primary,
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                fontFamily: '"Noto Sans JP", sans-serif'
              }}
            >
              📄 PDF出力
            </button>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isPreviewMode ? '1fr' : '350px 1fr',
        gap: '20px',
        padding: '20px'
      }}>
        {/* 左側: 入力フォーム */}
        {!isPreviewMode && (
          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            height: 'fit-content',
            position: 'sticky',
            top: '100px'
          }}>
            <h2 style={{ 
              marginBottom: '20px', 
              color: theme.primary,
              fontSize: '18px',
              fontWeight: '700'
            }}>
              📝 コンテンツ編集
            </h2>

            {/* テンプレート選択 */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600', 
                color: '#374151',
                fontSize: '13px'
              }}>
                🎯 テンプレート選択:
              </label>
              <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                {Object.keys(TEMPLATES).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleTemplateSelect(key as keyof typeof TEMPLATES)}
                    style={{
                      padding: '6px 12px',
                      border: `1px solid ${theme.primary}`,
                      borderRadius: '4px',
                      fontSize: '12px',
                      backgroundColor: 'white',
                      color: theme.primary,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      fontFamily: '"Noto Sans JP", sans-serif'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.primary;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.color = theme.primary;
                    }}
                  >
                    {key === 'restaurant' ? '🍽️ 飲食店' : 
                     key === 'tech' ? '💻 AI・テック' : 
                     '📈 マーケティング'}
                  </button>
                ))}
              </div>
            </div>
            
            {[
              { label: 'タイトル', field: 'title', type: 'input' },
              { label: 'サブタイトル', field: 'subtitle', type: 'input' },
              { label: '企業名', field: 'company', type: 'input' },
              { label: '概要・課題提示', field: 'summary', type: 'textarea', height: '70px' },
              { label: '現状分析', field: 'analysis', type: 'textarea', height: '80px' },
              { label: 'ソリューション', field: 'solution', type: 'textarea', height: '80px' },
              { label: '結論', field: 'conclusion', type: 'textarea', height: '60px' }
            ].map(({ label, field, type, height }) => (
              <div key={field} style={{ marginBottom: '18px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '6px', 
                  fontWeight: '600', 
                  color: '#374151',
                  fontSize: '13px'
                }}>
                  {label}:
                </label>
                {type === 'input' ? (
                  <input
                    type="text"
                    value={formData[field as keyof FormData]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontFamily: '"Noto Sans JP", sans-serif',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = theme.primary;
                      e.target.style.boxShadow = `0 0 0 2px ${theme.primary}20`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                ) : (
                  <textarea
                    value={formData[field as keyof FormData]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    style={{
                      width: '100%',
                      height: height || '80px',
                      padding: '10px 12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontFamily: '"Noto Sans JP", sans-serif',
                      resize: 'vertical' as const,
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      lineHeight: '1.5',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = theme.primary;
                      e.target.style.boxShadow = `0 0 0 2px ${theme.primary}20`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                )}
              </div>
            ))}

            <div style={{
              padding: '15px',
              backgroundColor: theme.light,
              borderRadius: '8px',
              border: `1px solid ${theme.accent}40`,
              marginTop: '20px'
            }}>
              <p style={{ margin: 0, fontSize: '12px', color: theme.text, lineHeight: '1.5' }}>
                💡 <strong>v2.0の新機能</strong><br />
                • プレビューモード追加<br />
                • テンプレート選択機能<br />
                • バンドル最適化でパフォーマンス向上<br />
                • レスポンシブ対応
              </p>
            </div>
          </div>
        )}

        {/* 右側: プレビューエリア */}
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <h2 style={{ 
              margin: 0,
              color: theme.primary,
              fontSize: '18px',
              fontWeight: '700'
            }}>
              📄 プレビュー {isPreviewMode ? '(フルスクリーン)' : '(A4 × 6ページ - 横向き)'}
            </h2>

            {/* ページナビゲーション */}
            {isPreviewMode && (
              <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                {PAGES.map((page, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    style={{
                      padding: '8px 12px',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      backgroundColor: currentPage === index ? theme.primary : '#f3f4f6',
                      color: currentPage === index ? 'white' : '#6b7280',
                      fontFamily: '"Noto Sans JP", sans-serif'
                    }}
                  >
                    {page.icon} {page.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {isPreviewMode ? (
            // プレビューモード: 単一ページ表示
            <div style={{
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#fff'
            }}>
              {getCurrentPageComponent()}
            </div>
          ) : (
            // 編集モード: 全ページ縮小表示
            <div 
              ref={pdfRef} 
              style={{ 
                transform: 'scale(0.45)',
                transformOrigin: 'top center',
                width: '222%',
                marginLeft: '-61%',
                marginTop: '-40px'
              }}
            >
              <CoverPage data={formData} theme={theme} />
              <OverviewPage data={formData} theme={theme} />
              <AnalysisPage data={formData} theme={theme} />
              <SolutionPage data={formData} theme={theme} />
              <ServicePage data={formData} theme={theme} />
              <ContactPage data={formData} theme={theme} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WhitepaperGenerator;