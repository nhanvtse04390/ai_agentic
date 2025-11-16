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
          <div class="mx-auto w-80 max-w-full my-4">
            <div class="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl p-6 shadow-lg border-2 border-blue-300 dark:border-blue-700">
              <div class="text-center">
                <div class="text-6xl mb-4">🤖👨‍💻</div>
                <div class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                  AI: "Tôi phân tích được intent!"
                </div>
                <div class="text-base text-gray-600 dark:text-gray-400">
                  Frontend: "Nhưng tôi mới làm cho nó có cảm xúc! 💙"
                </div>
              </div>
            </div>
          </div>
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

      <!-- 🔄 Comparison Section: AI without UI vs AI with UI -->
      <section class="mb-8 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border-2 border-gray-300 dark:border-gray-600">
        <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          ⚖️ So sánh: AI không có UI vs AI có UI
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- AI không có UI -->
          <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border-2 border-red-300 dark:border-red-700">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-2xl">❌</span>
              <h3 class="text-xl font-bold text-red-700 dark:text-red-400">AI không có UI</h3>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded p-4 font-mono text-sm mb-4 border border-red-200 dark:border-red-800">
              <div class="text-gray-500 mb-2">// Raw JSON output</div>
              <div class="text-gray-800 dark:text-gray-300">
                {<br>
                &nbsp;&nbsp;"intent": "inquiry",<br>
                &nbsp;&nbsp;"tone": "neutral",<br>
                &nbsp;&nbsp;"theme": "information",<br>
                &nbsp;&nbsp;"mood": "curious"<br>
                }
              </div>
            </div>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Chỉ có raw data, khó đọc</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Không có visual feedback</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Không có cảm xúc, không có context</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>User phải tự interpret data</span>
              </li>
            </ul>
          </div>

          <!-- AI có UI (Frontend) -->
          <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-2 border-green-300 dark:border-green-700">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-2xl">✅</span>
              <h3 class="text-xl font-bold text-green-700 dark:text-green-400">AI có UI (Frontend)</h3>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-lg p-4 mb-4 border border-green-200 dark:border-green-800">
              <div class="space-y-3">
                <div class="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
                  <div class="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">Intent</div>
                  <div class="text-lg font-bold text-blue-700 dark:text-blue-300">Inquiry</div>
                </div>
                <div class="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg border-l-4 border-purple-500">
                  <div class="text-xs font-medium text-purple-600 dark:text-purple-400 mb-1">Tone</div>
                  <div class="text-lg font-bold text-purple-700 dark:text-purple-300">Neutral</div>
                </div>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Visual cards với màu sắc phân biệt</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Loading states, animations mượt mà</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Có cảm xúc, có context, dễ hiểu</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>User cảm thấy được hiểu và quan tâm</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            <strong class="text-blue-700 dark:text-blue-400">💡 Kết luận:</strong> 
            Cùng một data từ AI, nhưng Frontend Developer biến nó thành trải nghiệm có cảm xúc, dễ hiểu và engaging. 
            Đây chính là giá trị mà Frontend mang lại!
          </p>
        </div>
      </section>

      <!-- 📚 Lý thuyết chi tiết về Perception -->
      <section class="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">📚</span>
          <span>Lý thuyết về Perception Layer</span>
        </h2>

        <div class="space-y-6">
          <!-- Khái niệm -->
          <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 class="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-3">
              🎯 Khái niệm Perception Layer
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Perception Layer</strong> là khả năng của AI để "đọc" và hiểu người dùng thông qua:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li><strong>Intent (Mục đích):</strong> User muốn làm gì? (inquiry, request, complaint, feedback)</li>
              <li><strong>Tone (Giọng điệu):</strong> User nói như thế nào? (formal, casual, friendly, urgent)</li>
              <li><strong>Theme (Chủ đề):</strong> Về cái gì? (information, support, purchase, technical)</li>
              <li><strong>Mood (Tâm trạng):</strong> User cảm thấy thế nào? (positive, neutral, negative, curious, excited)</li>
            </ul>
          </div>

          <!-- Cách hoạt động -->
          <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border-l-4 border-purple-500">
            <h3 class="text-xl font-semibold text-purple-900 dark:text-purple-300 mb-3">
              ⚙️ Cách hoạt động
            </h3>
            <div class="space-y-4">
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">1. Input Processing</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  AI nhận text input từ user và phân tích semantic meaning, context, và emotional cues.
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">2. Multi-dimensional Analysis</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  AI phân tích cùng lúc nhiều khía cạnh: intent, tone, theme, mood để có cái nhìn toàn diện.
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">3. Structured Output</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  AI trả về structured data (JSON) với các labels cho từng dimension.
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">4. Frontend Transformation</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Frontend nhận data và biến nó thành UI có cảm xúc: colors, animations, messages phù hợp với mood.
                </p>
              </div>
            </div>
          </div>

          <!-- Ứng dụng thực tế -->
          <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-500">
            <h3 class="text-xl font-semibold text-green-900 dark:text-green-300 mb-3">
              💡 Ứng dụng thực tế
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-green-700 dark:text-green-400 mb-2">Customer Support</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Phát hiện user frustrated → hiển thị message ấm áp, priority support button
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-green-700 dark:text-green-400 mb-2">E-commerce</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Phát hiện user excited về sản phẩm → highlight features, show reviews tích cực
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-green-700 dark:text-green-400 mb-2">Form Validation</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Phát hiện user confused → hiển thị tooltips, examples, helper text
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-green-700 dark:text-green-400 mb-2">Chatbots</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Phát hiện tone và mood → điều chỉnh response style, emoji, suggestions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 🎬 Kịch bản Test cụ thể -->
      <section class="mb-8 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 rounded-xl p-8 border-2 border-indigo-200 dark:border-indigo-800">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">🎬</span>
          <span>Kịch bản Test cụ thể</span>
        </h2>

        <div class="space-y-6">
          <!-- Test Case 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Case 1: User Frustrated (Tâm trạng tiêu cực)
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Input:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                      "Tôi đã thử nhiều lần rồi nhưng vẫn không đăng nhập được. Hệ thống của các bạn có vấn đề gì không?"
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Kết quả mong đợi:</div>
                    <div class="bg-red-50 dark:bg-red-900/20 rounded p-3 text-sm">
                      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        <li><strong>Intent:</strong> complaint</li>
                        <li><strong>Tone:</strong> frustrated/urgent</li>
                        <li><strong>Theme:</strong> support/technical</li>
                        <li><strong>Mood:</strong> negative</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Response nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Message cảm thông: "Chúng tôi rất xin lỗi về sự bất tiện này..."<br>
                      - Priority support button (màu đỏ nhẹ)<br>
                      - Quick action: "Reset password" hoặc "Contact support"<br>
                      - Icon cảm thông (😔 hoặc ❤️)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Test Case 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Case 2: User Curious (Tâm trạng tích cực, muốn tìm hiểu)
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Input:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                      "Tính năng này hoạt động như thế nào? Có thể cho tôi biết thêm chi tiết không?"
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Kết quả mong đợi:</div>
                    <div class="bg-green-50 dark:bg-green-900/20 rounded p-3 text-sm">
                      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        <li><strong>Intent:</strong> inquiry</li>
                        <li><strong>Tone:</strong> friendly/casual</li>
                        <li><strong>Theme:</strong> information</li>
                        <li><strong>Mood:</strong> curious/positive</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Response nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Detailed explanation với expandable sections<br>
                      - "Learn more" links hoặc tooltips<br>
                      - Visual examples hoặc diagrams<br>
                      - Friendly tone với emoji (😊 hoặc 💡)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Test Case 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Case 3: User Excited (Tâm trạng rất tích cực)
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Input:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                      "Wow! Tính năng này thật tuyệt vời! Tôi muốn mua ngay!"
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Kết quả mong đợi:</div>
                    <div class="bg-purple-50 dark:bg-purple-900/20 rounded p-3 text-sm">
                      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        <li><strong>Intent:</strong> request/purchase</li>
                        <li><strong>Tone:</strong> excited/casual</li>
                        <li><strong>Theme:</strong> purchase</li>
                        <li><strong>Mood:</strong> excited/positive</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Response nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Highlighted CTA button (màu sáng, animation)<br>
                      - Special offers hoặc discounts<br>
                      - Success-oriented messaging<br>
                      - Celebratory emoji (🎉 hoặc ⭐)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Test Case 4 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Case 4: User Neutral (Tâm trạng trung tính)
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Input:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                      "Tôi cần thông tin về giá cả và tính năng của sản phẩm này."
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Kết quả mong đợi:</div>
                    <div class="bg-orange-50 dark:bg-orange-900/20 rounded p-3 text-sm">
                      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        <li><strong>Intent:</strong> inquiry</li>
                        <li><strong>Tone:</strong> formal/neutral</li>
                        <li><strong>Theme:</strong> information</li>
                        <li><strong>Mood:</strong> neutral</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Response nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Clear, structured information display<br>
                      - Comparison tables hoặc feature lists<br>
                      - Professional tone, không quá casual<br>
                      - Neutral colors, clean design
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

