// utils/claudeApi.ts
export const generateContentWithClaude = async (prompt: string) => {
    try {
      const response = await fetch('/api/claude/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: prompt }),
      });
  
      if (!response.ok) {
        throw new Error('API request failed');
      }
  
      const data = await response.json();
      console.log('Received data from API:', data);
      return data.data;
    } catch (error) {
      console.error('Claude API error:', error);
      return null;
    }
  };
  
  export const parseClaudeResponse = (content: string) => {
    console.log('Parsing content:', content);
    
    // より柔軟なパターンマッチング
    const summaryMatch = content.match(/(?:エグゼクティブサマリー|概要|要約)[\s\S]*?\n([\s\S]*?)(?=\n\n(?:現状|課題|問題|分析)|$)/i);
    const analysisMatch = content.match(/(?:現状分析|課題|問題分析|背景)[\s\S]*?\n([\s\S]*?)(?=\n\n(?:ソリューション|解決|戦略|対策)|$)/i);
    const solutionMatch = content.match(/(?:ソリューション|解決|戦略|対策|実装)[\s\S]*?\n([\s\S]*?)(?=\n\n(?:結論|まとめ|総括)|$)/i);
    const conclusionMatch = content.match(/(?:結論|まとめ|総括)[\s\S]*?\n([\s\S]*?)$/i);
  
    return {
      summary: summaryMatch ? summaryMatch[1].trim() : '',
      analysis: analysisMatch ? analysisMatch[1].trim() : '',
      solution: solutionMatch ? solutionMatch[1].trim() : '',
      conclusion: conclusionMatch ? conclusionMatch[1].trim() : ''
    };
  };