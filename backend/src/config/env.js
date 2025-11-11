import dotenv from 'dotenv';

// Load environment variables từ file .env
dotenv.config();

export const config = {
  port: process.env.PORT || 8080,
  openaiApiKey: process.env.OPENAI_API_KEY,
  nodeEnv: process.env.NODE_ENV || 'development',
};

// Validate required environment variables
if (!config.openaiApiKey) {
  console.warn('⚠️  WARNING: OPENAI_API_KEY không được tìm thấy trong .env');
}

