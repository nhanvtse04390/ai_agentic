<!-- 🟡 Seminar Presentation Section Start -->
<!-- 
  🎤 Chủ đề: Memory - FE là người quyết định cách memory được hiển thị và quản lý
  AI có memory, nhưng FE mới khiến memory đó trở nên transparent và user-friendly
-->
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- 🟡 Seminar Intro Slide -->
      <section class="seminar-intro mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border-2 border-yellow-200 dark:border-yellow-800">
        <div class="text-center mb-6">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3 animate-bounce">
            🧠 Memory: AI nhớ, FE khiến memory trở nên transparent
          </h2>
          <img 
            src="https://i.imgflip.com/8zwv5a.jpg" 
            alt="meme memory" 
            class="mx-auto rounded-xl w-80 max-w-full my-4 shadow-lg"
            loading="lazy"
          />
          <p class="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            AI có thể lưu short-term và long-term memory. Nhưng <span class="font-bold text-yellow-600 dark:text-yellow-400">Frontend Developer</span> mới là người quyết định cách hiển thị memory đó: chat history, personalization UI, và cách user có thể xem/clear memory một cách intuitive. 💭
          </p>
        </div>

        <!-- 💬 Speaker Notes -->
        <aside class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
          <h3 class="font-semibold text-lg mb-3 flex items-center gap-2">
            💬 Speaker Notes
          </h3>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
            <li>"AI có memory, nhưng FE mới làm cho nó visible và controllable. User cần biết AI nhớ gì, và có thể xóa nếu muốn."</li>
            <li>"Memory không chỉ là 'data storage' - nó là foundation của personalization. FE là người biến memory thành UI personalization."</li>
            <li>"Short-term vs long-term memory - FE quyết định cái nào hiển thị ở đâu, và cách user quản lý chúng."</li>
            <li>"Demo này cho thấy: AI nhớ, nhưng UI mới khiến memory trở nên useful và user-friendly."</li>
          </ul>
        </aside>
      </section>
      <!-- 🟡 Seminar Presentation Section End -->

      <!-- Original Demo Section (unchanged) -->
      <div class="border-t-2 border-gray-200 dark:border-gray-700 pt-8 mt-8">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Memory Demo
          </h1>
          <p class="text-gray-600 dark:text-gray-400">
            AI lưu trữ và sử dụng short-term (session) và long-term (localStorage) memory
          </p>
        </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Chat Panel -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
          <h2 class="text-xl font-semibold mb-4">Chat với AI</h2>
          
          <!-- Chat Messages -->
          <div class="flex-1 overflow-y-auto mb-4 space-y-4 max-h-96">
            <div
              v-for="(msg, index) in chatHistory"
              :key="index"
              class="flex gap-3"
              :class="msg.role === 'user' ? 'justify-end' : 'justify-start'"
            >
              <div
                :class="[
                  'rounded-lg px-4 py-2 max-w-[75%]',
                  msg.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                ]"
              >
                {{ msg.content }}
              </div>
            </div>
          </div>

          <!-- Input -->
          <div class="flex gap-2">
            <input
              v-model="currentMessage"
              @keyup.enter="sendMessage"
              placeholder="Nhập tin nhắn..."
              class="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              @click="sendMessage"
              :disabled="!currentMessage.trim() || isProcessing"
              class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Gửi
            </button>
          </div>

          <button
            @click="clearSession"
            class="mt-2 text-sm text-red-500 hover:text-red-700"
          >
            Clear Session Memory
          </button>
        </div>

        <!-- Memory View -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Memory Storage</h2>
          
          <!-- Short-term Memory -->
          <div class="mb-6">
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-medium text-gray-700 dark:text-gray-300">
                Short-term (Session)
              </h3>
              <span class="text-xs text-gray-500">{{ sessionMemory.length }} items</span>
            </div>
            <div class="space-y-2 max-h-48 overflow-y-auto">
              <div
                v-for="(mem, index) in sessionMemory"
                :key="index"
                class="p-2 bg-gray-50 dark:bg-gray-700 rounded text-sm"
              >
                <div class="font-medium text-gray-600 dark:text-gray-400">
                  {{ mem.key }}
                </div>
                <div class="text-gray-700 dark:text-gray-300">
                  {{ mem.value }}
                </div>
              </div>
              <div v-if="sessionMemory.length === 0" class="text-sm text-gray-400 text-center py-4">
                Chưa có memory
              </div>
            </div>
          </div>

          <!-- Long-term Memory -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-medium text-gray-700 dark:text-gray-300">
                Long-term (LocalStorage)
              </h3>
              <span class="text-xs text-gray-500">{{ longTermMemory.length }} items</span>
            </div>
            <div class="space-y-2 max-h-48 overflow-y-auto">
              <div
                v-for="(mem, index) in longTermMemory"
                :key="index"
                class="p-2 bg-gray-50 dark:bg-gray-700 rounded text-sm"
              >
                <div class="font-medium text-gray-600 dark:text-gray-400">
                  {{ mem.key }}
                </div>
                <div class="text-gray-700 dark:text-gray-300">
                  {{ mem.value }}
                </div>
              </div>
              <div v-if="longTermMemory.length === 0" class="text-sm text-gray-400 text-center py-4">
                Chưa có memory
              </div>
            </div>
            <button
              @click="clearLongTerm"
              class="mt-2 text-sm text-red-500 hover:text-red-700"
            >
              Clear Long-term Memory
            </button>
          </div>
        </div>
      </div>

      <!-- Agent Console -->
      <div class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Agent Console</h2>
        <ConsoleLog :logs="consoleLogs" :is-thinking="isProcessing" />
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { sendPrompt } from '@/utils/ai';
import ConsoleLog from '@/components/agentic/ConsoleLog.vue';

const currentMessage = ref('');
const isProcessing = ref(false);
const chatHistory = ref([]);
const sessionMemory = ref([]); // Short-term
const longTermMemory = ref([]); // Long-term (from localStorage)
const consoleLogs = ref([]);

const MEMORY_KEY = 'agentic_long_term_memory';

function addLog(type, message) {
  consoleLogs.value.push({
    type,
    message,
    timestamp: Date.now()
  });
}

function loadLongTermMemory() {
  try {
    const stored = localStorage.getItem(MEMORY_KEY);
    if (stored) {
      longTermMemory.value = JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error loading long-term memory:', e);
  }
}

function saveLongTermMemory() {
  try {
    localStorage.setItem(MEMORY_KEY, JSON.stringify(longTermMemory.value));
  } catch (e) {
    console.error('Error saving long-term memory:', e);
  }
}

function addToMemory(key, value, isLongTerm = false) {
  const memory = {
    key,
    value,
    timestamp: Date.now()
  };

  if (isLongTerm) {
    longTermMemory.value.push(memory);
    saveLongTermMemory();
  } else {
    sessionMemory.value.push(memory);
  }
}

onMounted(() => {
  loadLongTermMemory();
  addLog('info', 'Memory system initialized');
});

async function sendMessage() {
  if (!currentMessage.value.trim() || isProcessing.value) return;

  const userMsg = currentMessage.value.trim();
  chatHistory.value.push({ role: 'user', content: userMsg });
  currentMessage.value = '';
  isProcessing.value = true;

  addLog('info', `User: ${userMsg}`);

  try {
    // Build context từ memory
    const context = {
      sessionMemory: sessionMemory.value.slice(-5), // Last 5 items
      longTermMemory: longTermMemory.value.slice(-5)
    };

    const systemPrompt = `Bạn là AI assistant có memory. Bạn có thể:
1. Trả lời câu hỏi dựa trên memory
2. Lưu thông tin quan trọng vào memory (trả về {"action": "save", "key": "...", "value": "...", "longTerm": true/false})
3. Sử dụng thông tin từ memory để trả lời

Memory hiện tại:
Session: ${JSON.stringify(context.sessionMemory)}
Long-term: ${JSON.stringify(context.longTermMemory)}

Trả về JSON: {"response": "...", "action": "save"|null, "key": "...", "value": "...", "longTerm": true/false}`;

    const response = await sendPrompt({
      role: 'system',
      prompt: systemPrompt + '\n\nUser: ' + userMsg,
      context
    });

    addLog('success', 'Nhận được response từ AI');

    try {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        
        // Hiển thị response
        chatHistory.value.push({ role: 'assistant', content: parsed.response });

        // Save memory nếu có
        if (parsed.action === 'save' && parsed.key && parsed.value) {
          addToMemory(parsed.key, parsed.value, parsed.longTerm);
          addLog('info', `Đã lưu memory: ${parsed.key} (${parsed.longTerm ? 'long-term' : 'short-term'})`);
        }
      } else {
        // Fallback: treat as plain response
        chatHistory.value.push({ role: 'assistant', content: response });
      }
    } catch (e) {
      chatHistory.value.push({ role: 'assistant', content: response });
    }
  } catch (error) {
    addLog('error', `Lỗi: ${error.message}`);
    chatHistory.value.push({ role: 'assistant', content: 'Xin lỗi, có lỗi xảy ra.' });
  } finally {
    isProcessing.value = false;
  }
}

function clearSession() {
  sessionMemory.value = [];
  chatHistory.value = [];
  addLog('info', 'Session memory cleared');
}

function clearLongTerm() {
  longTermMemory.value = [];
  localStorage.removeItem(MEMORY_KEY);
  addLog('info', 'Long-term memory cleared');
}
</script>

