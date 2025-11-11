# Backend Node.js với Express và OpenAI API

Backend server sử dụng Express.js để tạo API endpoint gọi OpenAI API.

## 📋 Yêu cầu

- Node.js >= 18.x
- npm hoặc yarn
- OpenAI API Key (lấy tại [OpenAI Platform](https://platform.openai.com/api-keys))

## 🚀 Cài đặt

1. **Clone hoặc tải project về**

2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

3. **Tạo file `.env` từ template:**
   ```bash
   cp .env.example .env
   ```

4. **Cấu hình API key trong file `.env`:**
   ```env
   OPENAI_API_KEY=sk-your-actual-api-key-here
   PORT=3000
   NODE_ENV=development
   ```

## 🏃 Chạy ứng dụng

### Development mode (với nodemon - tự động restart khi code thay đổi):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

Server sẽ chạy tại: `http://localhost:3000`

## 📡 API Endpoints

### 1. Health Check
```bash
GET /health
```

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "development"
}
```

### 2. Ask Question
```bash
POST /api/ask
```

**Request Body:**
```json
{
  "question": "Giải thích về Node.js là gì?"
}
```

**Response:**
```json
{
  "answer": "Node.js là một runtime environment...",
  "model": "gpt-4o-mini",
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 50,
    "total_tokens": 60
  }
}
```

## 🧪 Testing

### Sử dụng curl:
```bash
# Health check
curl http://localhost:3000/health

# Ask question
curl -X POST http://localhost:3000/api/ask \
  -H "Content-Type: application/json" \
  -d '{"question": "Hello, how are you?"}'
```

### Sử dụng Postman:
1. Tạo request mới
2. Method: `POST`
3. URL: `http://localhost:3000/api/ask`
4. Headers: `Content-Type: application/json`
5. Body (raw JSON):
   ```json
   {
     "question": "Giải thích về Express.js"
   }
   ```

### Sử dụng JavaScript (fetch):
```javascript
const response = await fetch('http://localhost:3000/api/ask', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    question: 'What is Express.js?'
  })
});

const data = await response.json();
console.log(data.answer);
```

## 🌐 Deploy

### Deploy lên Render:

1. **Tạo tài khoản tại [Render.com](https://render.com)**

2. **Tạo New Web Service:**
   - Connect repository của bạn
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: `Node`

3. **Thêm Environment Variables:**
   - `OPENAI_API_KEY`: API key của bạn
   - `PORT`: Render sẽ tự động set (hoặc để 3000)
   - `NODE_ENV`: `production`

4. **Deploy!**

### Deploy lên Vercel:

1. **Cài đặt Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Tạo file `vercel.json`:**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "src/app.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "src/app.js"
       }
     ]
   }
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Thêm Environment Variables trong Vercel Dashboard:**
   - `OPENAI_API_KEY`

### Deploy lên Railway:

1. **Tạo tài khoản tại [Railway.app](https://railway.app)**

2. **New Project → Deploy from GitHub**

3. **Thêm Environment Variables:**
   - `OPENAI_API_KEY`
   - `PORT` (Railway tự động set)

4. **Deploy!**

## 📁 Cấu trúc thư mục

```
backend/
├── src/
│   ├── config/
│   │   └── env.js          # Cấu hình environment variables
│   ├── controllers/
│   │   └── aiController.js # Controller xử lý logic OpenAI
│   ├── routes/
│   │   └── aiRoutes.js     # Định nghĩa routes
│   └── app.js              # Entry point, Express app setup
├── .env.example            # Template cho file .env
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies và scripts
└── README.md             # Tài liệu này
```

## 🔧 Cấu hình

### Environment Variables:

- `PORT`: Port để chạy server (mặc định: 3000)
- `NODE_ENV`: Environment (`development` | `production`)
- `OPENAI_API_KEY`: OpenAI API key (bắt buộc)

### Model Configuration:

Mặc định sử dụng `gpt-4o-mini`. Để thay đổi, sửa trong `src/controllers/aiController.js`:

```javascript
model: 'gpt-4o-mini', // Có thể đổi thành 'gpt-3.5-turbo', 'gpt-4', etc.
```

## 🐛 Troubleshooting

### Lỗi "OPENAI_API_KEY not configured":
- Kiểm tra file `.env` có tồn tại không
- Đảm bảo `OPENAI_API_KEY` đã được set trong `.env`
- Restart server sau khi thay đổi `.env`

### Lỗi CORS:
- Server đã cấu hình CORS cho phép tất cả origins
- Nếu vẫn lỗi, kiểm tra frontend có gọi đúng URL không

### Lỗi "Module not found":
- Chạy `npm install` để cài đặt dependencies
- Đảm bảo đang dùng Node.js >= 18.x

## 📝 License

ISC

## 👤 Author

Created with ❤️

