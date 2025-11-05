<!-- 🟡 Seminar Presentation Section Start -->
<!-- 
  🎤 Chủ đề: Planning - FE là người biến kế hoạch của AI thành trải nghiệm có cảm xúc
  AI có thể lập kế hoạch, nhưng FE mới khiến kế hoạch đó thành UI thực sự "sống"
-->
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- 🟡 Seminar Intro Slide -->
      <section class="seminar-intro mb-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-800">
        <div class="text-center mb-6">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3 animate-bounce">
            🧩 Planning: AI lập kế hoạch, FE khiến nó thành trải nghiệm
          </h2>
          <img 
            src="https://i.imgflip.com/8zwv5a.jpg" 
            alt="meme planning" 
            class="mx-auto rounded-xl w-80 max-w-full my-4 shadow-lg"
            loading="lazy"
          />
          <p class="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            AI có thể tạo multi-step plan chi tiết. Nhưng <span class="font-bold text-green-600 dark:text-green-400">Frontend Developer</span> mới là người biến những bước đó thành timeline đẹp mắt, progress bar mượt mà, và interactions khiến user cảm thấy được hướng dẫn, không bị lạc lối. 🎯
          </p>
        </div>

        <!-- 💬 Speaker Notes -->
        <aside class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
          <h3 class="font-semibold text-lg mb-3 flex items-center gap-2">
            💬 Speaker Notes
          </h3>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
            <li>"AI giỏi lên kế hoạch, nhưng người FE hiểu cảm xúc của người dùng. Mỗi bước không chỉ là 'done' - nó phải có feedback, animation, và cảm giác progress."</li>
            <li>"UI là nơi kế hoạch AI trở nên 'sống'. Timeline không chỉ là text - nó là visual story của journey."</li>
            <li>"Chúng ta không biến mất — ta chỉ cần học nói chuyện với AI tốt hơn. Planning layer cho ta blueprint, nhưng FE là người xây nhà."</li>
            <li>"Hãy xem demo - AI tạo plan, nhưng UI mới khiến user cảm thấy được dẫn dắt."</li>
          </ul>
        </aside>
      </section>
      <!-- 🟡 Seminar Presentation Section End -->

      <!-- Original Demo Section (unchanged) -->
      <div class="border-t-2 border-gray-200 dark:border-gray-700 pt-8 mt-8">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Planning Demo
          </h1>
          <p class="text-gray-600 dark:text-gray-400">
            AI tạo multi-step plan và cho phép execute từng bước
          </p>
        </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Input Panel -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Mục tiêu</h2>
          <textarea
            v-model="goal"
            placeholder="Mô tả mục tiêu hoặc task bạn muốn AI lên kế hoạch..."
            class="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
          <button
            @click="generatePlan"
            :disabled="isGenerating || !goal.trim()"
            class="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {{ isGenerating ? 'Đang tạo kế hoạch...' : 'Tạo kế hoạch' }}
          </button>
        </div>

        <!-- Plan Timeline -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Kế hoạch</h2>
          
          <div v-if="planSteps.length > 0">
            <Timeline :steps="planSteps" />
            
            <div class="mt-6 flex gap-2">
              <button
                @click="executeNextStep"
                :disabled="currentStepIndex >= planSteps.length || isExecuting"
                class="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {{ isExecuting ? 'Đang thực thi...' : 'Thực thi bước tiếp theo' }}
              </button>
              <button
                @click="executeAll"
                :disabled="planSteps.length === 0 || isExecuting"
                class="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Thực thi tất cả
              </button>
            </div>
          </div>

          <div v-else class="text-center py-12 text-gray-400">
            Kế hoạch sẽ hiển thị ở đây
          </div>
        </div>
      </div>

      <!-- Agent Console -->
      <div class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Agent Console</h2>
        <ConsoleLog :logs="consoleLogs" :is-thinking="isGenerating || isExecuting" />
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { sendPrompt } from '@/utils/ai';
import Timeline from '@/components/agentic/Timeline.vue';
import ConsoleLog from '@/components/agentic/ConsoleLog.vue';

const goal = ref('');
const isGenerating = ref(false);
const isExecuting = ref(false);
const planSteps = ref([]);
const currentStepIndex = ref(0);
const consoleLogs = ref([]);

function addLog(type, message) {
  consoleLogs.value.push({
    type,
    message,
    timestamp: Date.now()
  });
}

async function generatePlan() {
  if (!goal.value.trim()) return;

  isGenerating.value = true;
  planSteps.value = [];
  currentStepIndex.value = 0;
  addLog('info', 'Bắt đầu tạo kế hoạch...');
  addLog('info', `Mục tiêu: "${goal.value}"`);

  try {
    const systemPrompt = `Bạn là AI planner. Tạo kế hoạch chi tiết cho mục tiêu được đưa ra.
Trả về JSON với format:
{
  "steps": [
    {
      "id": 1,
      "name": "Tên bước",
      "description": "Mô tả chi tiết",
      "status": "pending"
    }
  ]
}
Chỉ trả về JSON, không có text khác.`;

    const response = await sendPrompt({
      role: 'system',
      prompt: systemPrompt + '\n\nMục tiêu: ' + goal.value,
      context: { goal: goal.value }
    });

    addLog('success', 'Nhận được kế hoạch từ AI');

    // Parse JSON
    try {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        planSteps.value = parsed.steps.map(step => ({
          ...step,
          status: 'pending',
          result: ''
        }));
        addLog('success', `Đã tạo ${planSteps.value.length} bước`);
      } else {
        throw new Error('Không tìm thấy JSON trong response');
      }
    } catch (e) {
      // Fallback: tạo mock plan
      planSteps.value = [
        { id: 1, name: 'Bước 1', description: 'Khởi tạo và chuẩn bị', status: 'pending', result: '' },
        { id: 2, name: 'Bước 2', description: 'Xử lý dữ liệu', status: 'pending', result: '' },
        { id: 3, name: 'Bước 3', description: 'Tạo kết quả', status: 'pending', result: '' }
      ];
      addLog('warning', 'Sử dụng mock plan');
    }
  } catch (error) {
    addLog('error', `Lỗi: ${error.message}`);
  } finally {
    isGenerating.value = false;
  }
}

async function executeNextStep() {
  if (currentStepIndex.value >= planSteps.value.length) return;

  isExecuting.value = true;
  const step = planSteps.value[currentStepIndex.value];
  step.status = 'running';
  
  addLog('info', `Thực thi bước ${step.id}: ${step.name}`);

  // Simulate execution (có thể gọi AI hoặc thực thi logic thực tế)
  await new Promise(resolve => setTimeout(resolve, 1500));

  step.status = 'completed';
  step.result = `Đã hoàn thành: ${step.description}`;
  addLog('success', `Hoàn thành bước ${step.id}`);
  
  currentStepIndex.value++;
  isExecuting.value = false;
}

async function executeAll() {
  while (currentStepIndex.value < planSteps.value.length) {
    await executeNextStep();
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}
</script>

