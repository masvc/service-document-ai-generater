import { useState } from 'react';
import { Box, Container, TextField, Button, CircularProgress, Paper, Typography } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/claude/generate`, {
        content: input,
      });
      setOutput(response.data.data);
    } catch (err) {
      console.error('Error generating content:', err);
      setError('コンテンツの生成中にエラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        ホワイトペーパー生成ツール
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          label="ホワイトペーパーにしたい内容を入力してください"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
        >
          {loading ? '生成中...' : '生成する'}
        </Button>
      </Box>

      {error && (
        <Paper elevation={2} sx={{ p: 2, mb: 2, bgcolor: 'error.light' }}>
          <Typography color="error">{error}</Typography>
        </Paper>
      )}

      {output && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            生成されたホワイトペーパー
          </Typography>
          <Paper elevation={3} sx={{ p: 3, minHeight: '300px' }}>
            <MDEditor.Markdown source={output} style={{ whiteSpace: 'pre-wrap' }} />
          </Paper>
        </Box>
      )}
    </Container>
  );
}

export default App;