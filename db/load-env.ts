import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, '../../.env') });

export const env = {
  webPort: process.env.WEB_PORT || 3000,
  thisPort: process.env.API_PORT || 4000,
  host: process.env.HOST || 'localhost',
};
