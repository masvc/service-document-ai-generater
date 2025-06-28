// server/src/claude/claude.service.ts
import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';

@Injectable()
export class ClaudeService {
  private readonly logger = new Logger(ClaudeService.name);
  private readonly apiUrl = 'https://api.anthropic.com/v1/messages';
  
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    // 設定値の確認
    this.logger.log(`API Key: ${this.configService.get('CLAUDE_API_KEY') ? '設定済み' : '未設定'}`);
    this.logger.log(`Model: ${this.configService.get('CLAUDE_MODEL')}`);
  }

  async generateContent(prompt: string): Promise<string> {
    const apiKey = this.configService.get<string>('CLAUDE_API_KEY');
    const model = this.configService.get<string>('CLAUDE_MODEL', 'claude-3-opus-20240229');

    this.logger.log(`Sending request to Claude API with model: ${model}`);
    this.logger.debug(`Prompt: ${prompt}`);

    try {
      const response: AxiosResponse = await firstValueFrom(
        this.httpService.post(
          this.apiUrl,
          {
            model,
            max_tokens: 1000,
            messages: [
              {
                role: 'user',
                content: `以下の内容をホワイトペーパー用に整形してください：\n\n${prompt}`,
              },
            ],
          },
          {
            headers: {
              'x-api-key': apiKey,
              'anthropic-version': '2023-06-01',
              'content-type': 'application/json',
            },
          },
        ),
      );

      this.logger.debug('API Response:', JSON.stringify(response.data, null, 2));
      return response.data.content[0].text;
    } catch (error) {
      const axiosError = error as AxiosError;
      this.logger.error('Claude API Error:', {
        message: axiosError.message,
        response: axiosError.response?.data,
        status: axiosError.response?.status,
        config: {
          url: axiosError.config?.url,
          method: axiosError.config?.method,
          headers: axiosError.config?.headers,
          data: axiosError.config?.data
        }
      });
      
      throw new HttpException(
        (axiosError.response?.data as any)?.error?.message || 'Failed to generate content',
        axiosError.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}