# 📄 サービス資料作成ツール

AIを活用したプロフェッショナルなサービス資料・企画書を簡単作成。

![サンプルプレビュー](sample.png)

## ✨ 特徴

- 🎨 **美しいデザイン** - 5つのカラーテーマとレスポンシブレイアウト
- ⚡ **高速動作** - 最適化されたコードでサクサク動作
- 🤖 **AI連携** - Claude AIでコンテンツを自動生成
- 📱 **モダンな技術スタック** - React + TypeScript + Vite + NestJS

## 🚀 クイックスタート

### 必要なもの

- Node.js 18+
- Claude APIキー（[Anthropic](https://console.anthropic.com/)で取得）

### セットアップ

```bash
git clone https://github.com/masvc/wp-maker.git
cd wp-maker
npm install

# 環境変数の設定
cp server/.env.example server/.env
# .envファイルにAPIキーを設定

# 開発サーバー起動
npm run dev
```

## 📋 機能一覧

### 1. プロフェッショナルな6ページ構成
- 表紙
- 概要
- 分析
- ソリューション
- サービス
- お問い合わせ

### 2. デザインオプション
- 5つのカラーテーマ
- レスポンシブレイアウト
- 高品質なSVGアイコン

### 3. AI連携機能
- コンテンツ自動生成
- 業界別テンプレート
- リアルタイムプレビュー

## 🏗️ 技術スタック

### フロントエンド
- React 18
- TypeScript
- Vite
- Tailwind CSS

### バックエンド
- NestJS
- Claude API

## 🛠 開発

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# バンドル分析
npm run analyze
```

## 🤝 コントリビューション

1. リポジトリをフォーク
2. 機能ブランチを作成
3. 変更をコミット
4. プルリクエストを送信
2. 機能ブランチを作成（`git checkout -b feature/素晴らしい機能`）
3. 変更をコミット（`git commit -m '素晴らしい機能を追加'`）
4. ブランチにプッシュ（`git push origin feature/素晴らしい機能`）
5. プルリクエストを開く

### 開発ガイドライン

- TypeScript strict modeに従う
- A4レイアウト互換性を維持
- 複数ブラウザでテスト
- 印刷・PDF出力を最適化

## 🏆 謝辞

- **Anthropic Claude** - AIコンテンツ生成
- **Recharts** - データ可視化
- **Inter Font** - タイポグラフィ
- **Vite** - ビルド最適化

## 📞 サポート

- **Issue報告**: [GitHub Issues](https://github.com/masvc/wp-maker/issues)
- **ディスカッション**: [GitHub Discussions](https://github.com/masvc/wp-maker/discussions)
- **メール**: info@example.com

## 🚀 今後の予定

- **画像アップロード機能** - ロゴ・図表挿入
- **縦向きレイアウト対応** - A4縦向けオプション
- **エクスポート形式拡張** - Word、PowerPoint対応
- **多言語対応** - 英語版実装
- **クラウド保存機能** - データベース連携

---

<div align="center">

**[⭐ このリポジトリにスター](https://github.com/masvc/wp-maker)** をつけて応援してください！

プロフェッショナルなビジネスコミュニケーションのために ❤️ で作成

</div>
