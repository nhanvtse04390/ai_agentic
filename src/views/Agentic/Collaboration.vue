<!-- 🟡 Seminar Presentation Section Start -->
<!-- 
  🎤 Chủ đề: Collaboration - FE là người orchestrator của multi-agent system
  AI agents có thể hợp tác, nhưng FE mới khiến collaboration đó visible và understandable
-->
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- 🟡 Seminar Intro Slide -->
      <section class="seminar-intro mb-8 bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-xl p-6 border-2 border-pink-200 dark:border-pink-800">
        <div class="text-center mb-6">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3 animate-pulse">
            👥 Collaboration: AI agents hợp tác, FE orchestrator
          </h2>
          <img 
            src="https://i.imgflip.com/8zwv5a.jpg" 
            alt="meme collaboration" 
            class="mx-auto rounded-xl w-80 max-w-full my-4 shadow-lg"
            loading="lazy"
          />
          <p class="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            AI agents có thể hợp tác để giải quyết task phức tạp. Nhưng <span class="font-bold text-pink-600 dark:text-pink-400">Frontend Developer</span> mới là người orchestrate toàn bộ flow: hiển thị internal messages, progress của từng agent, và final result một cách clear và engaging. 🎭
          </p>
        </div>

        <!-- 💬 Speaker Notes -->
        <aside class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
          <h3 class="font-semibold text-lg mb-3 flex items-center gap-2">
            💬 Speaker Notes
          </h3>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
            <li>"Multi-agent collaboration là tương lai, nhưng FE là người làm cho nó visible và understandable. User cần thấy agents đang làm gì, không chỉ là 'waiting...'"</li>
            <li>"FE orchestrator không chỉ hiển thị kết quả - ta hiển thị cả journey: planner nghĩ gì, executor làm gì, reviewer đánh giá ra sao."</li>
            <li>"Đây là ví dụ perfect: AI agents hợp tác, nhưng UI mới khiến collaboration đó trở nên transparent và trustworthy."</li>
            <li>"FE không chỉ là 'presentation layer' - ta là orchestrator của cả agentic system. Ta quyết định user experience của AI collaboration."</li>
          </ul>
        </aside>
      </section>
      <!-- 🟡 Seminar Presentation Section End -->

      <!-- Original Demo Section (unchanged) -->
      <div class="border-t-2 border-gray-200 dark:border-gray-700 pt-8 mt-8">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Collaboration Demo
          </h1>
          <p class="text-gray-600 dark:text-gray-400">
            Multi-agent collaboration: các agents trao đổi và hợp tác để giải quyết task
          </p>
        </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Input Panel -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Task</h2>
          <textarea
            v-model="task"
            placeholder="Nhập task cho các agents..."
            class="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
          <button
            @click="startCollaboration"
            :disabled="isProcessing || !task.trim()"
            class="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {{ isProcessing ? 'Đang xử lý...' : 'Bắt đầu Collaboration' }}
          </button>

          <!-- Agent Roles -->
          <div class="mt-6">
            <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Agent Roles:
            </h3>
            <div class="space-y-2 text-sm">
              <div class="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span class="font-medium">Planner</span> - Lên kế hoạch
              </div>
              <div class="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span class="font-medium">Executor</span> - Thực thi
              </div>
              <div class="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span class="font-medium">Reviewer</span> - Kiểm tra
              </div>
            </div>
          </div>
        </div>

        <!-- Agent Messages -->
        <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Agent Messages</h2>
          
          <div class="space-y-4 max-h-[500px] overflow-y-auto">
            <div
              v-for="(msg, index) in agentMessages"
              :key="index"
              class="flex gap-3"
            >
              <AgentAvatar :name="msg.agent" class="flex-shrink-0" />
              <div class="flex-1">
                <div class="font-semibold text-gray-900 dark:text-white mb-1">
                  {{ msg.agent }}
                </div>
                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-3 text-sm">
                  {{ msg.message }}
                </div>
                <div class="text-xs text-gray-500 mt-1">
                  {{ formatTime(msg.timestamp) }}
                </div>
              </div>
            </div>

            <div v-if="agentMessages.length === 0" class="text-center py-12 text-gray-400">
              Messages sẽ hiển thị ở đây
            </div>
          </div>
        </div>
      </div>

      <!-- Final Result -->
      <div class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Final Result</h2>
        <div v-if="finalResult" class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div class="text-gray-900 dark:text-white whitespace-pre-wrap">
            {{ finalResult }}
          </div>
        </div>
        <div v-else class="text-center py-12 text-gray-400">
          Kết quả cuối cùng sẽ hiển thị ở đây
        </div>
      </div>

      <!-- Agent Console -->
      <div class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Internal Agent Console</h2>
        <ConsoleLog :logs="consoleLogs" :is-thinking="isProcessing" />
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { sendPrompt } from '@/utils/ai';
import AgentAvatar from '@/components/agentic/AgentAvatar.vue';
import ConsoleLog from '@/components/agentic/ConsoleLog.vue';

const task = ref('');
const isProcessing = ref(false);
const agentMessages = ref([]);
const finalResult = ref('');
const consoleLogs = ref([]);

const agents = [
  { name: 'Planner', role: 'Lên kế hoạch chi tiết cho task' },
  { name: 'Executor', role: 'Thực thi các bước trong kế hoạch' },
  { name: 'Reviewer', role: 'Kiểm tra và đánh giá kết quả' }
];

function addLog(type, message) {
  consoleLogs.value.push({
    type,
    message,
    timestamp: Date.now()
  });
}

function addMessage(agent, message) {
  agentMessages.value.push({
    agent,
    message,
    timestamp: Date.now()
  });
}

function formatTime(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

async function simulateAgent(agentName, agentRole, context) {
  addLog('info', `${agentName} đang xử lý...`);
  
  const systemPrompt = `Bạn là ${agentName}, một AI agent với vai trò: ${agentRole}.
Bạn đang làm việc trong một team với các agents khác để giải quyết task.

Context: ${JSON.stringify(context)}

Hãy trả lời như một agent đang làm việc, có thể trao đổi với agents khác.
Trả về JSON: {"message": "...", "nextAgent": "..." hoặc null, "result": "..." hoặc null}`;

  try {
    const response = await sendPrompt({
      role: 'system',
      prompt: systemPrompt,
      context
    });

    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    // Fallback
    return {
      message: response,
      nextAgent: null,
      result: null
    };
  } catch (error) {
    addLog('error', `${agentName} error: ${error.message}`);
    return {
      message: `${agentName} đã xử lý xong.`,
      nextAgent: null,
      result: null
    };
  }
}

async function startCollaboration() {
  if (!task.value.trim()) return;

  isProcessing.value = true;
  agentMessages.value = [];
  finalResult.value = '';
  consoleLogs.value = [];
  
  addLog('info', `Bắt đầu collaboration cho task: "${task.value}"`);

  try {
    // Step 1: Planner
    const plannerResult = await simulateAgent(
      'Planner',
      agents[0].role,
      { task: task.value, step: 'planning' }
    );
    addMessage('Planner', plannerResult.message);
    await new Promise(resolve => setTimeout(resolve, 800));

    // Step 2: Executor
    const executorContext = {
      task: task.value,
      plan: plannerResult.message,
      step: 'execution'
    };
    const executorResult = await simulateAgent(
      'Executor',
      agents[1].role,
      executorContext
    );
    addMessage('Executor', executorResult.message);
    await new Promise(resolve => setTimeout(resolve, 800));

    // Step 3: Reviewer
    const reviewerContext = {
      task: task.value,
      plan: plannerResult.message,
      execution: executorResult.message,
      step: 'review'
    };
    const reviewerResult = await simulateAgent(
      'Reviewer',
      agents[2].role,
      reviewerContext
    );
    addMessage('Reviewer', reviewerResult.message);
    
    // Final result
    finalResult.value = reviewerResult.result || reviewerResult.message || 'Task đã hoàn thành.';
    addLog('success', 'Collaboration hoàn thành');
  } catch (error) {
    addLog('error', `Lỗi: ${error.message}`);
    finalResult.value = 'Có lỗi xảy ra trong quá trình collaboration.';
  } finally {
    isProcessing.value = false;
  }
}
</script>

