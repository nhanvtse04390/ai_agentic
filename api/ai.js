/**
 * Vercel Edge Function - Proxy endpoint cho AI calls
 * Ẩn API key và chuẩn hóa requests đến OpenAI
 * 
 * Cách sử dụng:
 * 1. Tạo file này trong thư mục /api (Vercel sẽ tự động nhận diện)
 * 2. Thêm biến môi trường OPENAI_API_KEY trong Vercel dashboard
 * 3. Deploy lên Vercel
 * 
 * Hoặc nếu dùng local dev:
 * - Cài đặt Vercel CLI: npm i -g vercel
 * - Chạy: vercel dev
 */

export default async function handler(req) {
  // Chỉ cho phép POST
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const { role, prompt, context } = await req.json();

    // Validate input
    if (!prompt) {
      return new Response(
        JSON.stringify({ error: 'Prompt is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Lấy API key từ environment variable
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
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
      role: role === 'system' ? 'user' : role,
      content: prompt
    });

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Hoặc 'gpt-3.5-turbo' để tiết kiệm hơn
        messages: messages,
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'OpenAI API error');
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content || '';

    return new Response(
      JSON.stringify({ content }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }
    );
  } catch (error) {
    console.error('AI API Error:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Internal server error',
        message: error.message 
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}

// Handle OPTIONS for CORS
export const config = {
  runtime: 'edge',
};

