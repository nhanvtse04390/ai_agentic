/**
 * AI Utility - Chuẩn hóa các calls đến GPT-4o-mini
 * Proxy qua /api/ai để ẩn API key
 * Có caching đơn giản để tiết kiệm token
 */

// Cache in-memory (có thể migrate sang localStorage nếu cần)
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 phút

/**
 * Tạo cache key từ prompt và context
 */
function createCacheKey(role, prompt, context) {
  return JSON.stringify({ role, prompt, context: context || {} });
}

/**
 * Kiểm tra cache và trả về nếu còn hợp lệ
 */
function getFromCache(key) {
  const cached = cache.get(key);
  if (!cached) return null;
  
  const now = Date.now();
  if (now - cached.timestamp > CACHE_TTL) {
    cache.delete(key);
    return null;
  }
  
  return cached.data;
}

/**
 * Lưu vào cache
 */
function setCache(key, data) {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
}

/**
 * Gửi prompt đến AI model
 * @param {Object} params
 * @param {string} params.role - 'system' | 'user' | 'assistant'
 * @param {string} params.prompt - Nội dung prompt
 * @param {Object} params.context - Context bổ sung (optional)
 * @param {boolean} params.useCache - Có sử dụng cache không (default: true)
 * @returns {Promise<string>} Response từ AI
 */
export async function sendPrompt({ role, prompt, context = {}, useCache = true }) {
  // Kiểm tra cache nếu enable
  if (useCache) {
    const cacheKey = createCacheKey(role, prompt, context);
    const cached = getFromCache(cacheKey);
    if (cached) {
      return cached;
    }
  }

  try {
    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role,
        prompt,
        context,
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const result = data.content || data.message || '';

    // Lưu vào cache nếu enable
    if (useCache && result) {
      const cacheKey = createCacheKey(role, prompt, context);
      setCache(cacheKey, result);
    }

    return result;
  } catch (error) {
    console.error('AI call error:', error);
    
    // Fallback: trả về mock response cho demo nếu API chưa sẵn sàng
    if (error.message.includes('Failed to fetch') || error.message.includes('404')) {
      console.warn('API endpoint not available, using mock response');
      return generateMockResponse(role, prompt, context);
    }
    
    throw error;
  }
}

/**
 * Mock response cho demo (khi API chưa sẵn sàng)
 */
function generateMockResponse(role, prompt, context) {
  // Mock responses dựa trên role và prompt
  if (role === 'system') {
    return 'Mock system response';
  }
  
  // Mock responses cho các demo
  if (prompt.includes('perception') || prompt.includes('intent')) {
    return JSON.stringify({
      intent: 'inquiry',
      tone: 'neutral',
      theme: 'information',
      mood: 'curious'
    });
  }
  
  if (prompt.includes('plan') || prompt.includes('step')) {
    return JSON.stringify({
      steps: [
        { id: 1, name: 'Step 1', description: 'Initial setup', status: 'pending' },
        { id: 2, name: 'Step 2', description: 'Process data', status: 'pending' },
        { id: 3, name: 'Step 3', description: 'Generate result', status: 'pending' }
      ]
    });
  }
  
  if (prompt.includes('tool') || prompt.includes('calculate')) {
    return JSON.stringify({
      tool: 'calculator',
      args: { operation: 'add', a: 5, b: 3 },
      result: 8
    });
  }
  
  return 'Mock AI response';
}

/**
 * Clear cache
 */
export function clearCache() {
  cache.clear();
}

/**
 * Get cache stats (for debugging)
 */
export function getCacheStats() {
  return {
    size: cache.size,
    entries: Array.from(cache.keys())
  };
}

