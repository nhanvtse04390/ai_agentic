import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import aiRoutes from './routes/aiRoutes.js';

// Khởi tạo Express app
const app = express();

// Middleware CORS - Cho phép tất cả origins trong development
app.use(cors({
  origin: true, // Cho phép tất cả origins trong development
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  exposedHeaders: ['Content-Length', 'Content-Type'],
  maxAge: 86400 // 24 hours
})); 
app.use(express.json()); // Parse JSON body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded body

// Request logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`\n[${timestamp}] 📥 ${req.method} ${req.path}`);
  console.log(`[${timestamp}] 🌐 Origin: ${req.headers.origin || 'No origin'}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log(`[${timestamp}] 📦 Body:`, JSON.stringify(req.body).substring(0, 200));
  }
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv,
  });
});

// API Routes
app.use('/api', aiRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} không tồn tại`,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] ❌ Unhandled Error:`, err);

  res.status(err.status || 500).json({
    error: 'Internal Server Error',
    message: err.message || 'Đã xảy ra lỗi không xác định',
    ...(config.nodeEnv === 'development' && { stack: err.stack }),
  });
});

// Start server
const PORT = config.port;
app.listen(PORT, () => {
  console.log('\n' + '='.repeat(60));
  console.log(`🚀 Backend Server đang chạy tại http://localhost:${PORT}`);
  console.log(`📝 Environment: ${config.nodeEnv}`);
  console.log(`🔑 OpenAI API Key: ${config.openaiApiKey ? '✅ Đã cấu hình' : '❌ Chưa cấu hình'}`);
  console.log(`\n📌 Available Endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/health - Health check`);
  console.log(`   POST http://localhost:${PORT}/api/ask - Gửi câu hỏi đến OpenAI`);
  console.log(`   POST http://localhost:${PORT}/api/ai - Endpoint cho frontend`);
  console.log(`\n💡 Frontend URL: http://localhost:3000`);
  console.log(`💡 Logs sẽ hiển thị ở đây khi có request từ frontend\n`);
  console.log('='.repeat(60) + '\n');
});

export default app;

