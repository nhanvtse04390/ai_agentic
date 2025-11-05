<!-- 🟡 Seminar Presentation Section Start -->
<!-- 
  🎤 Chủ đề: Tool Use - FE là người quyết định cách tools được hiển thị và tương tác
  AI chọn tool, nhưng FE mới khiến tool đó trở nên dễ dùng và đẹp mắt
-->
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- 🟡 Seminar Intro Slide -->
      <section class="seminar-intro mb-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-800">
        <div class="text-center mb-6">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3 animate-pulse">
            🔧 Tool Use: AI chọn tool, FE khiến nó đẹp và dễ dùng
          </h2>
          <img 
            src="https://i.imgflip.com/8zwv5a.jpg" 
            alt="meme tool use" 
            class="mx-auto rounded-xl w-80 max-w-full my-4 shadow-lg"
            loading="lazy"
          />
          <p class="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            AI có thể chọn tool và arguments. Nhưng <span class="font-bold text-purple-600 dark:text-purple-400">Frontend Developer</span> mới là người quyết định tool đó được hiển thị như thế nào: loading state, error handling, success animation, và cách integrate vào flow của user. 🎨
          </p>
        </div>

        <!-- 💬 Speaker Notes -->
        <aside class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
          <h3 class="font-semibold text-lg mb-3 flex items-center gap-2">
            💬 Speaker Notes
          </h3>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
            <li>"AI biết 'cần dùng calculator', nhưng FE mới làm cho nó có button đẹp, keyboard shortcuts, và visual feedback khi tính toán."</li>
            <li>"Tool execution không chỉ là 'gọi function' - nó là cả một journey: loading, success, error handling, và cách hiển thị result."</li>
            <li>"FE là người quyết định UX của tools. AI cung cấp logic, nhưng FE làm cho nó feel good."</li>
            <li>"Demo này cho thấy: AI chọn tool, nhưng UI mới khiến nó trở nên intuitive và delightful."</li>
          </ul>
        </aside>
      </section>
      <!-- 🟡 Seminar Presentation Section End -->

      <!-- Original Demo Section (unchanged) -->
      <div class="border-t-2 border-gray-200 dark:border-gray-700 pt-8 mt-8">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Tool Use Demo
          </h1>
          <p class="text-gray-600 dark:text-gray-400">
            AI chọn tool và arguments, frontend thực thi tool
          </p>
        </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Input Panel -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Request</h2>
          <textarea
            v-model="userRequest"
            placeholder="Yêu cầu AI sử dụng tool (ví dụ: 'Tính 15 + 27', 'Lấy dữ liệu user', 'Vẽ biểu đồ')..."
            class="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
          <button
            @click="processRequest"
            :disabled="isProcessing || !userRequest.trim()"
            class="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {{ isProcessing ? 'Đang xử lý...' : 'Xử lý' }}
          </button>

          <!-- Available Tools -->
          <div class="mt-6">
            <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Available Tools:
            </h3>
            <div class="space-y-2 text-sm">
              <div class="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span class="font-medium">calculator</span> - Tính toán số học
              </div>
              <div class="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span class="font-medium">fetchMockData</span> - Lấy dữ liệu mock
              </div>
              <div class="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span class="font-medium">generateChart</span> - Tạo biểu đồ
              </div>
            </div>
          </div>
        </div>

        <!-- Result Area -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Kết quả</h2>
          
          <div v-if="toolResult" class="space-y-4">
            <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Tool được chọn
              </div>
              <div class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ toolResult.tool }}
              </div>
            </div>

            <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Arguments
              </div>
              <pre class="text-sm bg-gray-900 text-green-400 p-3 rounded overflow-x-auto">{{ JSON.stringify(toolResult.args, null, 2) }}</pre>
            </div>

            <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Kết quả thực thi
              </div>
              <div class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ toolResult.result }}
              </div>
            </div>

            <!-- Chart preview (nếu là generateChart) -->
            <div v-if="toolResult.tool === 'generateChart' && chartData" class="mt-4">
              <div class="h-64 bg-gray-100 dark:bg-gray-900 rounded flex items-center justify-center">
                <div class="text-center">
                  <div class="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                    📊 Chart Preview
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ chartData.type }} chart với {{ chartData.dataPoints }} data points
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="text-center py-12 text-gray-400">
            Kết quả sẽ hiển thị ở đây
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
import { ref } from 'vue';
import { sendPrompt } from '@/utils/ai';
import ConsoleLog from '@/components/agentic/ConsoleLog.vue';

const userRequest = ref('');
const isProcessing = ref(false);
const toolResult = ref(null);
const chartData = ref(null);
const consoleLogs = ref([]);

// Tool definitions
const tools = {
  calculator: (args) => {
    const { operation, a, b } = args;
    switch (operation) {
      case 'add': return a + b;
      case 'subtract': return a - b;
      case 'multiply': return a * b;
      case 'divide': return b !== 0 ? a / b : 'Error: Division by zero';
      default: return 'Unknown operation';
    }
  },
  
  fetchMockData: async (args) => {
    const { type, count = 5 } = args;
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      type,
      count,
      data: Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
        value: Math.floor(Math.random() * 100)
      }))
    };
  },
  
  generateChart: (args) => {
    const { type, dataPoints = 10 } = args;
    return {
      type,
      dataPoints,
      labels: Array.from({ length: dataPoints }, (_, i) => `Point ${i + 1}`),
      values: Array.from({ length: dataPoints }, () => Math.floor(Math.random() * 100))
    };
  }
};

function addLog(type, message) {
  consoleLogs.value.push({
    type,
    message,
    timestamp: Date.now()
  });
}

async function processRequest() {
  if (!userRequest.value.trim()) return;

  isProcessing.value = true;
  toolResult.value = null;
  chartData.value = null;
  addLog('info', `Xử lý request: "${userRequest.value}"`);

  try {
    const systemPrompt = `Bạn là AI assistant có thể sử dụng tools. 
Available tools: calculator, fetchMockData, generateChart.

Khi user yêu cầu, hãy chọn tool phù hợp và trả về JSON:
{
  "tool": "toolName",
  "args": { ... }
}

Ví dụ:
- "Tính 15 + 27" → {"tool": "calculator", "args": {"operation": "add", "a": 15, "b": 27}}
- "Lấy dữ liệu user" → {"tool": "fetchMockData", "args": {"type": "user", "count": 5}}
- "Vẽ biểu đồ" → {"tool": "generateChart", "args": {"type": "line", "dataPoints": 10}}

Chỉ trả về JSON, không có text khác.`;

    const response = await sendPrompt({
      role: 'system',
      prompt: systemPrompt + '\n\nUser request: ' + userRequest.value,
      context: { request: userRequest.value }
    });

    addLog('success', 'Nhận được tool selection từ AI');

    // Parse JSON
    try {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        const { tool, args } = parsed;

        addLog('info', `Tool được chọn: ${tool}`);
        addLog('info', `Arguments: ${JSON.stringify(args)}`);

        // Execute tool
        if (tools[tool]) {
          const result = await tools[tool](args);
          toolResult.value = {
            tool,
            args,
            result: typeof result === 'object' ? JSON.stringify(result, null, 2) : String(result)
          };

          if (tool === 'generateChart') {
            chartData.value = result;
          }

          addLog('success', `Tool execution thành công`);
        } else {
          throw new Error(`Unknown tool: ${tool}`);
        }
      } else {
        throw new Error('Không tìm thấy JSON trong response');
      }
    } catch (e) {
      addLog('error', `Lỗi parse hoặc execute: ${e.message}`);
      // Fallback
      toolResult.value = {
        tool: 'calculator',
        args: { operation: 'add', a: 5, b: 3 },
        result: '8'
      };
    }
  } catch (error) {
    addLog('error', `Lỗi: ${error.message}`);
  } finally {
    isProcessing.value = false;
  }
}
</script>

