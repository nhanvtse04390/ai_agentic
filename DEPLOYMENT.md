# 🚀 Deployment Configuration

## Backend

**URL:** https://be-ai-agentic.onrender.com

**Status:** ✅ Deployed and running

**Endpoints:**
- Health: `GET https://be-ai-agentic.onrender.com/health`
- AI API: `POST https://be-ai-agentic.onrender.com/api/ai`

## Frontend Configuration

### Environment Variables

File `.env`:
```env
VITE_API_BASE_URL=https://be-ai-agentic.onrender.com
BASE_URL=/
```

### Cách sử dụng

1. **Restart frontend** sau khi thay đổi `.env`:
   ```bash
   npm run dev
   ```

2. **Kiểm tra trong browser console (F12):**
   - Bạn sẽ thấy: `🔗 Calling API URL: https://be-ai-agentic.onrender.com/api/ai`
   - Nếu thấy URL đúng, frontend đã load biến môi trường

3. **Test API:**
   - Mở browser tại `http://localhost:3000`
   - Sử dụng các tính năng AI trong app
   - Xem logs trong browser console

## Lưu ý

1. **Render Free Tier:**
   - Service sẽ sleep sau 15 phút không có traffic
   - Lần request đầu sau khi sleep mất ~30 giây (cold start)
   - Đây là bình thường với free tier

2. **CORS:**
   - Backend đã được cấu hình CORS
   - Cho phép tất cả origins trong development
   - Production: Set `ALLOWED_ORIGINS` trong Render dashboard

3. **Environment Variables:**
   - Frontend: Set trong file `.env` (local)
   - Backend: Set trong Render Dashboard (production)

## Troubleshooting

### Frontend không kết nối được backend

1. Kiểm tra `.env` có đúng URL không
2. Restart frontend dev server
3. Kiểm tra browser console để xem URL đang gọi
4. Kiểm tra backend có đang chạy: https://be-ai-agentic.onrender.com/health

### Backend trả về lỗi

1. Kiểm tra logs trong Render Dashboard
2. Kiểm tra `OPENAI_API_KEY` đã được set chưa
3. Kiểm tra CORS configuration

### Request timeout

- Render free tier có thể chậm khi service vừa wake up
- Đợi ~30 giây cho lần request đầu tiên
- Các request sau sẽ nhanh hơn

