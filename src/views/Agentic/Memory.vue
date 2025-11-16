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
          <div class="mx-auto w-80 max-w-full my-4">
            <div class="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 rounded-xl p-6 shadow-lg border-2 border-yellow-300 dark:border-yellow-700">
              <div class="text-center">
                <div class="text-6xl mb-4">🧠💭</div>
                <div class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                  AI: "Tôi nhớ được thông tin!"
                </div>
                <div class="text-base text-gray-600 dark:text-gray-400">
                  Frontend: "Nhưng tôi mới làm cho nó transparent! 👁️"
                </div>
              </div>
            </div>
          </div>
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
              <div class="text-gray-500 mb-2">// Hidden memory storage</div>
              <div class="text-gray-800 dark:text-gray-300">
                Memory: {<br>
                &nbsp;&nbsp;"user_name": "John",<br>
                &nbsp;&nbsp;"preference": "dark_mode"<br>
                }<br>
                <br>
                // User không biết AI nhớ gì
              </div>
            </div>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Memory ẩn, user không biết AI nhớ gì</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Không thể xem, không thể xóa memory</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Không có personalization UI</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>User cảm thấy không kiểm soát được</span>
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
                <div class="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
                  <div class="text-xs font-medium text-yellow-600 dark:text-yellow-400 mb-1">Short-term Memory</div>
                  <div class="text-sm text-gray-700 dark:text-gray-300">Session: 3 items</div>
                </div>
                <div class="p-3 bg-orange-50 dark:bg-orange-900/30 rounded-lg border-l-4 border-orange-500">
                  <div class="text-xs font-medium text-orange-600 dark:text-orange-400 mb-1">Long-term Memory</div>
                  <div class="text-sm text-gray-700 dark:text-gray-300">Saved: 5 items</div>
                </div>
                <div class="flex items-center gap-2 text-xs">
                  <button class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/50">
                    Clear Memory
                  </button>
                </div>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Memory visible, user biết AI nhớ gì</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Có UI để xem, edit, xóa memory</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Personalization UI dựa trên memory</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>User cảm thấy kiểm soát và transparent</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            <strong class="text-yellow-700 dark:text-yellow-400">💡 Kết luận:</strong> 
            Cùng một memory từ AI, nhưng Frontend Developer biến nó thành UI transparent, cho phép user xem và quản lý memory, 
            và tạo ra personalization experience. Đây chính là giá trị mà Frontend mang lại!
          </p>
        </div>
      </section>

      <!-- 📚 Lý thuyết chi tiết về Memory -->
      <section class="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">📚</span>
          <span>Lý thuyết về Memory Layer</span>
        </h2>

        <div class="space-y-6">
          <!-- Khái niệm -->
          <div class="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 class="text-xl font-semibold text-yellow-900 dark:text-yellow-300 mb-3">
              🎯 Khái niệm Memory Layer
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Memory Layer</strong> là khả năng của AI để lưu trữ và sử dụng thông tin từ các interactions trước đó:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li><strong>Short-term Memory:</strong> Lưu thông tin trong session hiện tại (mất khi refresh)</li>
              <li><strong>Long-term Memory:</strong> Lưu thông tin persistent (localStorage, database)</li>
              <li><strong>Context Retrieval:</strong> AI sử dụng memory để hiểu context và đưa ra responses phù hợp</li>
              <li><strong>Memory Management:</strong> User có thể xem, edit, và xóa memory</li>
            </ul>
          </div>

          <!-- Cách hoạt động -->
          <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border-l-4 border-orange-500">
            <h3 class="text-xl font-semibold text-orange-900 dark:text-orange-300 mb-3">
              ⚙️ Cách hoạt động
            </h3>
            <div class="space-y-4">
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">1. Information Extraction</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  AI phân tích conversation và extract thông tin quan trọng (preferences, facts, context).
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">2. Memory Storage</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Lưu thông tin vào short-term (session) hoặc long-term (persistent) storage.
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">3. Context Building</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Khi user chat, AI retrieve relevant memory để build context và đưa ra responses phù hợp.
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">4. Personalization</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Frontend sử dụng memory để personalize UI: themes, preferences, recommendations.
                </p>
              </div>
            </div>
          </div>

          <!-- Ứng dụng thực tế -->
          <div class="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 border-l-4 border-amber-500">
            <h3 class="text-xl font-semibold text-amber-900 dark:text-amber-300 mb-3">
              💡 Ứng dụng thực tế
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-amber-700 dark:text-amber-400 mb-2">Personal Assistants</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Nhớ preferences, schedule, và habits của user để đưa ra suggestions phù hợp
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-amber-700 dark:text-amber-400 mb-2">E-commerce</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Nhớ browsing history, cart items, và purchase history để recommend products
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-amber-700 dark:text-amber-400 mb-2">Learning Platforms</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Nhớ progress, strengths, weaknesses để customize learning path
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-amber-700 dark:text-amber-400 mb-2">Settings & Preferences</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Nhớ theme, language, notifications preferences để apply automatically
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 🎬 Kịch bản Test cụ thể -->
      <section class="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8 border-2 border-yellow-200 dark:border-yellow-800">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">🎬</span>
          <span>Kịch bản Test cụ thể</span>
        </h2>

        <div class="space-y-6">
          <!-- Test Case 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Case 1: Lưu User Preferences
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Conversation Flow:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 text-sm space-y-2">
                      <div><strong>User:</strong> "Tôi thích dark mode và ngôn ngữ tiếng Việt"</div>
                      <div><strong>AI:</strong> "Đã lưu preferences của bạn!"</div>
                      <div><strong>User (sau 5 phút):</strong> "Bạn nhớ tôi thích gì không?"</div>
                      <div><strong>AI:</strong> "Bạn thích dark mode và tiếng Việt"</div>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Memory Storage mong đợi:</div>
                    <div class="bg-yellow-50 dark:bg-yellow-900/20 rounded p-3 text-sm">
                      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        <li><strong>Short-term:</strong> Conversation context</li>
                        <li><strong>Long-term:</strong> {theme: "dark", language: "vi"}</li>
                        <li><strong>Retrieval:</strong> AI có thể recall khi user hỏi lại</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Response nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Memory panel hiển thị saved preferences<br>
                      - Auto-apply theme và language<br>
                      - "Clear memory" button để reset<br>
                      - Visual indicator khi memory được sử dụng
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Test Case 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Case 2: Context Continuity
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Conversation Flow:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 text-sm space-y-2">
                      <div><strong>User:</strong> "Tôi tên là Nam, 25 tuổi, làm developer"</div>
                      <div><strong>AI:</strong> "Xin chào Nam! Bạn làm developer à?"</div>
                      <div><strong>User (sau đó):</strong> "Bạn nhớ tôi làm nghề gì không?"</div>
                      <div><strong>AI:</strong> "Bạn là developer, đúng không?"</div>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Memory Storage mong đợi:</div>
                    <div class="bg-orange-50 dark:bg-orange-900/20 rounded p-3 text-sm">
                      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        <li><strong>Key:</strong> user_name, user_age, user_profession</li>
                        <li><strong>Value:</strong> "Nam", "25", "developer"</li>
                        <li><strong>Type:</strong> Long-term (persistent across sessions)</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Response nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Chat history hiển thị context<br>
                      - Memory panel show saved facts<br>
                      - Personalization dựa trên memory<br>
                      - Edit/delete individual memory items
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Test Case 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Case 3: Session vs Persistent Memory
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Test Scenario:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 text-sm space-y-2">
                      <div>1. User nói: "Hôm nay tôi đang làm project React" (session memory)</div>
                      <div>2. User nói: "Tôi thích màu xanh" (long-term memory)</div>
                      <div>3. Refresh page</div>
                      <div>4. Check memory: session memory mất, long-term memory còn</div>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Memory Behavior mong đợi:</div>
                    <div class="bg-amber-50 dark:bg-amber-900/20 rounded p-3 text-sm">
                      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        <li><strong>Session Memory:</strong> Mất sau khi refresh</li>
                        <li><strong>Long-term Memory:</strong> Vẫn còn sau refresh</li>
                        <li><strong>UI:</strong> Hiển thị rõ ràng 2 loại memory</li>
                        <li><strong>Control:</strong> User có thể clear từng loại riêng</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Response nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Separate sections cho session và long-term<br>
                      - Visual distinction (màu sắc khác nhau)<br>
                      - Clear buttons riêng cho từng loại<br>
                      - Timestamp cho mỗi memory item
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

