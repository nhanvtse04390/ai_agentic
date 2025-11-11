# Cách xem log Backend

## Cách 1: Xem terminal đang chạy backend
- Tìm terminal đang chạy `npm run dev` hoặc `nodemon`
- Log sẽ hiển thị trực tiếp ở đó

## Cách 2: Chạy lại backend trong terminal mới

1. Mở terminal mới
2. Chạy lệnh:
```bash
cd backend
npm run dev
```

Bạn sẽ thấy log như:
```
🚀 Server đang chạy tại http://localhost:3001
📝 Environment: development
🔑 OpenAI API Key: ✅ Đã cấu hình

📌 Endpoints:
   GET  /health - Health check
   POST /api/ask - Gửi câu hỏi đến OpenAI
   POST /api/ai - Endpoint cho frontend (role, prompt, context)

[2025-11-11T...] POST /api/ai
[2025-11-11T...] 📝 Prompt received (role: user): ...
[2025-11-11T...] ✅ Content generated: ...
```

## Cách 3: Test và xem log real-time

Gọi API từ frontend hoặc dùng curl, log sẽ hiện trong terminal backend.

