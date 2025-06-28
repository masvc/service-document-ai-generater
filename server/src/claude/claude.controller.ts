import { Controller, Post, Body, HttpStatus, HttpException } from '@nestjs/common';
import { ClaudeService } from './claude.service';
import { IsString, IsNotEmpty } from 'class-validator';

class GenerateContentDto {
  @IsString()
  @IsNotEmpty()
  content: string;
}

@Controller('api/claude')
export class ClaudeController {
  constructor(private readonly claudeService: ClaudeService) {}

  @Post('generate')
  async generate(@Body() generateContentDto: GenerateContentDto) {
    try {
      const result = await this.claudeService.generateContent(generateContentDto.content);
      return { success: true, data: result };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Failed to generate content',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}