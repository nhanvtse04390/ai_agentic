# 🚀 Hướng dẫn chạy Frontend

## 📋 Cách chạy Frontend:

```bash
npm run dev
```

**Frontend sẽ chạy tại:** `http://localhost:3000`

## 🔍 Kiểm tra cấu hình:

### File `.env` (root):
```env
VITE_API_BASE_URL=https://your-backend-url.com
BASE_URL=/
```

**Lưu ý:** 
- Thay `https://your-backend-url.com` bằng URL backend thực tế của bạn (đã deploy trên Render hoặc Railway)
- Nếu chạy backend local, dùng: `http://localhost:8080`

## 🐛 Debug:

Nếu frontend không kết nối được backend, kiểm tra trong browser console (F12):
- Bạn sẽ thấy: `🔗 Calling API URL: https://your-backend-url.com/api/ai`
- Kiểm tra `VITE_API_BASE_URL` trong file `.env` đã đúng chưa

## 📝 Lưu ý:

1. **Backend đã được tách ra thành repository riêng**
2. **Frontend cần restart** sau khi thay đổi `.env`
3. **Đảm bảo backend đã được deploy và đang chạy** trước khi test frontend

