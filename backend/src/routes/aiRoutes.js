import express from 'express';
import { askQuestion, sendPrompt } from '../controllers/aiController.js';

const router = express.Router();

/**
 * POST /api/ask
 * Gửi câu hỏi đến OpenAI và nhận câu trả lời
 * 
 * Body JSON:
 * {
 *   "question": "Câu hỏi của bạn"
 * }
 * 
 * Response JSON:
 * {
 *   "answer": "Câu trả lời từ AI",
 *   "model": "gpt-4o-mini",
 *   "usage": { ... }
 * }
 */
router.post('/ask', askQuestion);

/**
 * POST /api/ai
 * Endpoint tương thích với frontend hiện tại
 * 
 * Body JSON:
 * {
 *   "role": "user" | "system" | "assistant",
 *   "prompt": "Nội dung prompt",
 *   "context": { ... } (optional)
 * }
 * 
 * Response JSON:
 * {
 *   "content": "Nội dung trả lời từ AI",
 *   "model": "gpt-4o-mini",
 *   "usage": { ... }
 * }
 */
router.post('/ai', sendPrompt);

export default router;

