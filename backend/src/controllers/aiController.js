import OpenAI from 'openai';
import { config } from '../config/env.js';

// Khởi tạo OpenAI client
const openai = new OpenAI({
  apiKey: config.openaiApiKey,
});

/**
 * Controller xử lý request đến OpenAI API
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const askQuestion = async (req, res) => {
  try {
    const { question } = req.body;

    // Validate input
    if (!question || typeof question !== 'string' || question.trim().length === 0) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Trường "question" là bắt buộc và phải là chuỗi không rỗng',
      });
    }

    // Validate API key
    if (!config.openaiApiKey) {
      return res.status(500).json({
        error: 'Server Error',
        message: 'OpenAI API key chưa được cấu hình',
      });
    }

    // Log request
    console.log(`[${new Date().toISOString()}] 📝 Question received:`, question.substring(0, 100));

    // Gọi OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: question,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    // Lấy answer từ response
    const answer = completion.choices[0]?.message?.content || '';

    // Log response
    console.log(`[${new Date().toISOString()}] ✅ Answer generated:`, answer.substring(0, 100));

    // Trả về response
    return res.status(200).json({
      answer: answer,
      model: completion.model,
      usage: completion.usage,
    });
  } catch (error) {
    // Log error
    const timestamp = new Date().toISOString();
    console.error(`\n[${timestamp}] ❌ Error occurred:`);
    console.error(`   Message: ${error.message}`);
    if (error.stack) {
      console.error(`   Stack: ${error.stack.split('\n')[0]}`);
    }

    // Xử lý các loại lỗi khác nhau
    if (error instanceof OpenAI.APIError) {
      return res.status(error.status || 500).json({
        error: 'OpenAI API Error',
        message: error.message,
        code: error.code,
      });
    }

    return res.status(500).json({
      error: 'Internal Server Error',
      message: error.message || 'Đã xảy ra lỗi khi xử lý request',
    });
  }
};

/**
 * Controller xử lý request từ frontend (format: role, prompt, context)
 * Tương thích với format của frontend hiện tại
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const sendPrompt = async (req, res) => {
  try {
    const { role, prompt, context = {} } = req.body;

    // Validate input
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Trường "prompt" là bắt buộc và phải là chuỗi không rỗng',
      });
    }

    // Validate API key
    if (!config.openaiApiKey) {
      return res.status(500).json({
        error: 'Server Error',
        message: 'OpenAI API key chưa được cấu hình',
      });
    }

    // Log request
    const timestamp = new Date().toISOString();
    console.log(`\n[${timestamp}] 📝 Prompt received:`);
    console.log(`   Role: ${role || 'user'}`);
    console.log(`   Prompt: ${prompt.substring(0, 150)}${prompt.length > 150 ? '...' : ''}`);
    if (context && Object.keys(context).length > 0) {
      console.log(`   Context:`, JSON.stringify(context).substring(0, 100));
    }

    // Build messages array
    const messages = [];
    
    // Add system message nếu có
    if (role === 'system' || context?.systemPrompt) {
      messages.push({
        role: 'system',
        content: context?.systemPrompt || prompt
      });
    }

    // Add user message
    messages.push({
      role: role === 'system' ? 'user' : (role || 'user'),
      content: prompt
    });

    // Gọi OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    // Lấy content từ response
    const content = completion.choices[0]?.message?.content || '';

    // Log response
    console.log(`[${new Date().toISOString()}] ✅ Content generated:`);
    console.log(`   Length: ${content.length} characters`);
    console.log(`   Preview: ${content.substring(0, 200)}${content.length > 200 ? '...' : ''}`);
    if (completion.usage) {
      console.log(`   Tokens used: ${completion.usage.total_tokens} (prompt: ${completion.usage.prompt_tokens}, completion: ${completion.usage.completion_tokens})`);
    }

    // Trả về response theo format mà frontend expect (content thay vì answer)
    return res.status(200).json({
      content: content,
      model: completion.model,
      usage: completion.usage,
    });
  } catch (error) {
    // Log error
    const timestamp = new Date().toISOString();
    console.error(`\n[${timestamp}] ❌ Error occurred:`);
    console.error(`   Message: ${error.message}`);
    if (error.stack) {
      console.error(`   Stack: ${error.stack.split('\n')[0]}`);
    }

    // Xử lý các loại lỗi khác nhau
    if (error instanceof OpenAI.APIError) {
      return res.status(error.status || 500).json({
        error: 'OpenAI API Error',
        message: error.message,
        code: error.code,
      });
    }

    return res.status(500).json({
      error: 'Internal Server Error',
      message: error.message || 'Đã xảy ra lỗi khi xử lý request',
    });
  }
};

