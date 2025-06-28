import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // バンドル分析ツール
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }) as any
  ],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    // チャンクサイズ最適化
    rollupOptions: {
      output: {
        manualChunks: {
          // React関連を分離
          'react-vendor': ['react', 'react-dom'],
          // チャートライブラリを分離
          'charts': ['recharts']
        }
      }
    },
    // チャンクサイズ警告の閾値を調整
    chunkSizeWarningLimit: 600,
    // ソースマップを本番では無効化してサイズ削減
    sourcemap: false,
    // CSS最適化
    cssCodeSplit: true,
    // ES2020をターゲットにして最適化
    target: 'es2020'
  },
  // 最適化設定
  optimizeDeps: {
    include: ['recharts', 'react', 'react-dom']
  },
  // プレビュー設定
  preview: {
    port: 4173,
    host: true
  }
});