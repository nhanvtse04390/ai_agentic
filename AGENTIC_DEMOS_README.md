# Agentic Frontend Demos - Hướng dẫn

Project này chứa 5 demo minh họa năng lực agentic AI trong frontend:
1. **Perception** - Phân tích intent, tone, theme, mood
2. **Planning** - Tạo multi-step plan và execute từng bước
3. **Tool Use** - AI chọn tools và frontend thực thi
4. **Memory** - Short-term và long-term memory management
5. **Collaboration** - Multi-agent collaboration

## Tech Stack

- Vue 3 + Vite
- Pinia (store management)
- Vue Router
- Tailwind CSS
- GPT-4o-mini (qua proxy API)

## Cấu trúc Files

```
src/
├── components/agentic/          # Common components
│   ├── ChatBubble.vue           # Component hiển thị chat messages
│   ├── AgentAvatar.vue         # Avatar cho agents
│   ├── Timeline.vue            # Timeline cho planning steps
│   ├── StepCard.vue            # Card cho mỗi step
│   └── ConsoleLog.vue          # Console log cho agent reasoning
├── views/Agentic/               # 5 demo views
│   ├── Perception.vue
│   ├── Planning.vue
│   ├── ToolUse.vue
│   ├── Memory.vue
│   └── Collaboration.vue
├── utils/
│   └── ai.js                   # AI utility với caching
└── router/
    └── index.ts                # Routes cho 5 demos

api/
└── ai.js                       # Vercel Edge Function proxy
```

## Setup API Endpoint

### Option 1: Sử dụng Vercel (Recommended)

1. **Tạo Vercel Edge Function:**
   - File `api/ai.js` đã được tạo sẵn
   - Vercel sẽ tự động nhận diện file trong thư mục `/api`

2. **Thêm Environment Variable:**
   - Vào Vercel Dashboard → Project Settings → Environment Variables
   - Thêm: `OPENAI_API_KEY` = `sk-...` (your OpenAI API key)

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Local Development:**
   ```bash
   npm install -g vercel
   vercel dev
   ```

### Option 2: Sử dụng Mock (Fallback)

Nếu API endpoint chưa sẵn sàng, `src/utils/ai.js` sẽ tự động fallback về mock responses để demo vẫn hoạt động.

## Routes

Sau khi setup, truy cập các demo tại:
- `/agentic/perception` - Perception Demo
- `/agentic/planning` - Planning Demo
- `/agentic/tool-use` - Tool Use Demo
- `/agentic/memory` - Memory Demo
- `/agentic/collaboration` - Collaboration Demo

## Cách sử dụng từng Demo

### 1. Perception
- Nhập text bất kỳ
- AI sẽ phân tích intent, tone, theme, mood
- Kết quả hiển thị real-time trong console và result area

### 2. Planning
- Nhập mục tiêu/task
- AI tạo kế hoạch multi-step
- Có thể execute từng bước hoặc tất cả
- Timeline hiển thị progress

### 3. Tool Use
- Nhập request yêu cầu AI sử dụng tool
- Available tools: calculator, fetchMockData, generateChart
- AI chọn tool và arguments
- Frontend thực thi tool và hiển thị kết quả

### 4. Memory
- Chat với AI
- AI tự động lưu thông tin quan trọng vào memory
- Short-term: session memory (mất khi refresh)
- Long-term: localStorage (persist)

### 5. Collaboration
- Nhập task
- 3 agents (Planner, Executor, Reviewer) hợp tác
- Xem internal messages và final result

## Caching

`src/utils/ai.js` có cơ chế caching:
- In-memory cache với TTL 5 phút
- Tự động cache các prompt tương tự
- Có thể migrate sang localStorage nếu cần

## Notes

- Code được viết rõ ràng, có comments tiếng Việt
- Tối ưu cho live demo (ưu tiên clarity hơn micro-perf)
- API key được ẩn hoàn toàn (chỉ ở server-side)
- Mock responses cho fallback khi API chưa sẵn sàng

## Troubleshooting

**API không hoạt động:**
- Kiểm tra OPENAI_API_KEY trong Vercel
- Kiểm tra console logs trong browser
- Code sẽ tự động fallback về mock nếu API fail

**Lỗi import components:**
- Đảm bảo path alias `@/` được cấu hình trong `vite.config.ts`
- Hoặc đổi `@/` thành relative paths

**Routes không hoạt động:**
- Kiểm tra `src/router/index.ts` đã có routes
- Đảm bảo Vue Router đã được setup trong `main.ts`

