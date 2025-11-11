<!-- 🟡 Seminar Presentation Section Start -->
<!-- 
  🎤 Chủ đề: Perception - FE là cầu nối giữa người và AI trong perception layer
  AI có thể "đọc" intent, nhưng FE mới khiến insights đó thành trải nghiệm có cảm xúc
-->
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- 🟡 Seminar Intro Slide -->
      <section class="seminar-intro mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800">
        <div class="text-center mb-6">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3 animate-pulse">
            👁️ Perception: AI "đọc" người dùng, FE "kể" câu chuyện
          </h2>
          <img 
            src="https://i.imgflip.com/8zwv5a.jpg" 
            alt="meme perception" 
            class="mx-auto rounded-xl w-80 max-w-full my-4 shadow-lg"
            loading="lazy"
          />
          <p class="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            AI có thể phân tích intent, tone, theme và mood từ text. Nhưng <span class="font-bold text-blue-600 dark:text-blue-400">Frontend Developer</span> mới là người biến những insights đó thành UI có cảm xúc, giúp người dùng cảm thấy được hiểu và quan tâm. 💙
          </p>
        </div>

        <!-- 💬 Speaker Notes -->
        <aside class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
          <h3 class="font-semibold text-lg mb-3 flex items-center gap-2">
            💬 Speaker Notes
          </h3>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
            <li>"AI giỏi phân tích, nhưng FE giỏi kể chuyện. Chúng ta không chỉ hiển thị data - ta tạo ra trải nghiệm."</li>
            <li>"Ví dụ: AI biết user đang 'frustrated', nhưng FE mới làm cho button chuyển màu đỏ nhẹ, thêm icon cảm thông, hay hiển thị message ấm áp."</li>
            <li>"Perception layer không phải là thay thế FE - nó là công cụ mới để FE làm việc tốt hơn!"</li>
            <li>"Bây giờ hãy xem demo - AI phân tích intent, nhưng UI mới khiến nó trở nên sống động."</li>
          </ul>
        </aside>
      </section>
      <!-- 🟡 Seminar Presentation Section End -->

      <!-- Original Demo Section (unchanged) -->
      <div class="border-t-2 border-gray-200 dark:border-gray-700 pt-8 mt-8">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Perception Demo
          </h1>
          <p class="text-gray-600 dark:text-gray-400">
            AI phân tích intent, tone, theme và mood từ input của người dùng
          </p>
        </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Input Panel -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Input</h2>
          <textarea
            v-model="userInput"
            placeholder="Nhập câu hỏi hoặc yêu cầu của bạn..."
            class="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
          <button
            @click="analyzeInput"
            :disabled="isAnalyzing || !userInput.trim()"
            class="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {{ isAnalyzing ? 'Đang phân tích...' : 'Phân tích' }}
          </button>
        </div>

        <!-- Result Area -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Kết quả phân tích</h2>
          
          <div v-if="analysisResult" class="space-y-4">
            <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Intent
              </div>
              <div class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ analysisResult.intent }}
              </div>
            </div>

            <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Tone
              </div>
              <div class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ analysisResult.tone }}
              </div>
            </div>

            <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Theme
              </div>
              <div class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ analysisResult.theme }}
              </div>
            </div>

            <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Mood
              </div>
              <div class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ analysisResult.mood }}
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
        <ConsoleLog :logs="consoleLogs" :is-thinking="isAnalyzing" />
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { sendPrompt } from '@/utils/ai';
import ConsoleLog from '@/components/agentic/ConsoleLog.vue';

const userInput = ref('');
const isAnalyzing = ref(false);
const analysisResult = ref(null);
const consoleLogs = ref([]);

function addLog(type, message) {
  consoleLogs.value.push({
    type,
    message,
    timestamp: Date.now()
  });
}

async function analyzeInput() {
  if (!userInput.value.trim()) return;

  isAnalyzing.value = true;
  analysisResult.value = null;
  addLog('info', 'Bắt đầu phân tích input...');
  addLog('info', `Input: "${userInput.value}"`);

  try {
    // Gọi AI để phân tích
    const systemPrompt = `Bạn là AI chuyên phân tích intent, tone, theme và mood từ text. 
Trả về JSON với format:
{
  "intent": "inquiry|request|complaint|feedback|other",
  "tone": "formal|casual|friendly|neutral|urgent",
  "theme": "information|support|purchase|technical|other",
  "mood": "positive|neutral|negative|curious|excited"
}
Chỉ trả về JSON, không có text khác.`;

    const response = await sendPrompt({
      role: 'system',
      prompt: systemPrompt + '\n\nUser input: ' + userInput.value,
      context: { input: userInput.value }
    });

    addLog('success', 'Nhận được response từ AI');
    
    // Log response để debug
    console.log('Response từ AI:', response);
    console.log('Response type:', typeof response);
    console.log('Response length:', response?.length);

    // Kiểm tra nếu response rỗng
    if (!response || typeof response !== 'string' || response.trim().length === 0) {
      throw new Error('Response rỗng từ AI');
    }

    // Parse JSON response
    try {
      // Thử parse trực tiếp
      const parsed = JSON.parse(response);
      analysisResult.value = parsed;
      addLog('success', 'Phân tích thành công');
    } catch (e) {
      console.warn('Parse JSON trực tiếp thất bại, thử extract JSON:', e.message);
      
      // Nếu không parse được, thử extract JSON từ text
      // Loại bỏ markdown code blocks nếu có
      let cleanedResponse = response
        .replace(/```json\s*/g, '')
        .replace(/```\s*/g, '')
        .trim();
      
      const jsonMatch = cleanedResponse.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          analysisResult.value = JSON.parse(jsonMatch[0]);
          addLog('success', 'Phân tích thành công (extracted JSON)');
        } catch (parseError) {
          console.error('Parse extracted JSON thất bại:', parseError);
          throw new Error(`Không thể parse response: ${parseError.message}. Response: ${response.substring(0, 200)}`);
        }
      } else {
        console.error('Không tìm thấy JSON trong response:', response);
        throw new Error(`Không thể parse response: Không tìm thấy JSON. Response: ${response.substring(0, 200)}`);
      }
    }
  } catch (error) {
    addLog('error', `Lỗi: ${error.message}`);
    // Fallback: tạo mock result
    analysisResult.value = {
      intent: 'inquiry',
      tone: 'neutral',
      theme: 'information',
      mood: 'curious'
    };
  } finally {
    isAnalyzing.value = false;
  }
}
</script>

