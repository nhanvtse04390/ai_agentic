# 🚀 Hướng dẫn chạy lại Frontend và Backend

## ✅ Đã tắt tất cả process

## 📋 Cách chạy lại:

### 1. Backend (Terminal 1):
```bash
cd backend
npm run dev
```

**Bạn sẽ thấy:**
```
============================================================
🚀 Backend Server đang chạy tại http://localhost:8080
📝 Environment: development
🔑 OpenAI API Key: ✅ Đã cấu hình

📌 Available Endpoints:
   GET  http://localhost:8080/health - Health check
   POST http://localhost:8080/api/ask - Gửi câu hỏi đến OpenAI
   POST http://localhost:8080/api/ai - Endpoint cho frontend

💡 Frontend URL: http://localhost:3000
💡 Logs sẽ hiển thị ở đây khi có request từ frontend

============================================================
```

### 2. Frontend (Terminal 2 - Terminal mới):
```bash
npm run dev
```

**Frontend sẽ chạy tại:** `http://localhost:3000`

## 🔍 Kiểm tra cấu hình:

### File `.env` (root):
```env
VITE_API_BASE_URL=http://localhost:8080
BASE_URL=/
```

### File `backend/.env`:
```env
PORT=8080
NODE_ENV=development
OPENAI_API_KEY=sk-your-actual-key-here
```

## 🐛 Debug:

Nếu frontend vẫn gọi sai port, kiểm tra trong browser console (F12):
- Bạn sẽ thấy: `🔗 Calling API URL: http://localhost:8080/api/ai`
- Nếu thấy `localhost:3000` → Frontend chưa restart hoặc có file `.env.local`

## 📝 Lưu ý:

1. **Backend phải chạy trước** frontend
2. **Frontend cần restart** sau khi thay đổi `.env`
3. **Logs backend** sẽ hiển thị trong terminal backend khi có request

