import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatbotConvo } from './app.types';

// Interacts with openai
@Injectable()
export class AppService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateChatbotResponse(convo: ChatbotConvo): Promise<string> {
    try {
      convo[convo.length - 1].content =
        `Generate in maximum 5 sentences including pointers. ${convo[convo.length - 1].content}`;

      console.log(
        'Chatbot request sent to OpenAI without the system content:',
        convo,
      );

      const response = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'You are an expert in data domains, specifically data engineering.',
          },
          ...convo,
        ],
        // Refer to https://www.promptingguide.ai/
        max_tokens: 600,
        top_p: 0.2, // Higher = More diverse output, Lower = More confident output
        frequency_penalty: 0.6, // Higher = Less repetitive output
      });

      if (!response.choices[0].message.content) {
        throw new Error('Could not generate a response');
      }

      return response.choices[0].message.content;
      // return prompt;
    } catch (error) {
      console.error('Error with OpenAI API:', error);
      throw new Error('Could not generate a response');
    }
  }
}
