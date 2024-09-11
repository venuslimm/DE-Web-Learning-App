import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

// Interacts with openai
@Injectable()
export class ChatbotService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateChatbotResponse(prompt: string): Promise<string> {
    try {
      // const response = await this.openai.chat.completions.create({
      //   model: 'gpt-4o-mini',
      //   messages: [
      //     {
      //       role: 'system',
      //       content:
      //         'You are an expert in data domains, specifically data engineering.',
      //     },
      //     { role: 'user', content: prompt },
      //   ],
      //   // max_tokens: 100, // TODO: Change # of max tokens in response
      //   temperature: 0.5, // Control the randomness to avoid verbose answers
      //   top_p: 0.8, // Limits the diversity of the response
      // });

      // if (!response.choices[0].message.content) {
      //   throw new Error('Could not generate a response');
      // }

      // return response.choices[0].message.content;
      return prompt;
    } catch (error) {
      console.error('Error with OpenAI API:', error);
      throw new Error('Could not generate a response');
    }
  }
}
