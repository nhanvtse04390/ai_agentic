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
          <div class="mx-auto w-80 max-w-full my-4">
            <div class="bg-gradient-to-br from-pink-100 to-red-100 dark:from-pink-900 dark:to-red-900 rounded-xl p-6 shadow-lg border-2 border-pink-300 dark:border-pink-700">
              <div class="text-center">
                <div class="text-6xl mb-4">👥🎭</div>
                <div class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                  AI Agents: "Chúng tôi hợp tác được!"
                </div>
                <div class="text-base text-gray-600 dark:text-gray-400">
                  Frontend: "Nhưng tôi mới orchestrate toàn bộ flow! 🎼"
                </div>
              </div>
            </div>
          </div>
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
              <div class="text-gray-500 mb-2">// Black box collaboration</div>
              <div class="text-gray-800 dark:text-gray-300">
                Task: "Create report"<br>
                Status: "processing..."<br>
                Result: "..."<br>
                <br>
                // User không biết agents đang làm gì
              </div>
            </div>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Black box, không thấy agents làm gì</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Chỉ có "waiting..." hoặc final result</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Không biết ai đang làm gì, progress ra sao</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>User cảm thấy không trust, không hiểu process</span>
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
                <div class="flex items-center gap-3 p-2 bg-blue-50 dark:bg-blue-900/30 rounded">
                  <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">P</div>
                  <div class="flex-1">
                    <div class="text-xs font-medium text-blue-600 dark:text-blue-400">Planner</div>
                    <div class="text-xs text-gray-600 dark:text-gray-400">Đang lên kế hoạch...</div>
                  </div>
                </div>
                <div class="flex items-center gap-3 p-2 bg-green-50 dark:bg-green-900/30 rounded">
                  <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">E</div>
                  <div class="flex-1">
                    <div class="text-xs font-medium text-green-600 dark:text-green-400">Executor</div>
                    <div class="text-xs text-gray-600 dark:text-gray-400">Đang thực thi...</div>
                  </div>
                </div>
                <div class="flex items-center gap-3 p-2 bg-purple-50 dark:bg-purple-900/30 rounded opacity-50">
                  <div class="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">R</div>
                  <div class="flex-1">
                    <div class="text-xs font-medium text-gray-500">Reviewer</div>
                    <div class="text-xs text-gray-400">Chờ...</div>
                  </div>
                </div>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Visible agents với avatars và roles</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Real-time messages, progress của từng agent</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Timeline của collaboration, ai làm gì khi nào</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>User cảm thấy trust, hiểu rõ process</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-6 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg border-l-4 border-pink-500">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            <strong class="text-pink-700 dark:text-pink-400">💡 Kết luận:</strong> 
            Cùng một collaboration từ AI agents, nhưng Frontend Developer biến nó thành UI transparent, hiển thị real-time progress, 
            và orchestrate toàn bộ flow một cách engaging. Đây chính là giá trị mà Frontend mang lại!
          </p>
        </div>
      </section>

      <!-- 📚 Lý thuyết chi tiết về Collaboration -->
      <section class="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">📚</span>
          <span>Lý thuyết về Multi-Agent Collaboration</span>
        </h2>

        <div class="space-y-6">
          <!-- Khái niệm -->
          <div class="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-6 border-l-4 border-pink-500">
            <h3 class="text-xl font-semibold text-pink-900 dark:text-pink-300 mb-3">
              🎯 Khái niệm Multi-Agent Collaboration
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Multi-Agent Collaboration</strong> là hệ thống nhiều AI agents làm việc cùng nhau để giải quyết tasks phức tạp:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li><strong>Role Specialization:</strong> Mỗi agent có vai trò riêng (Planner, Executor, Reviewer)</li>
              <li><strong>Communication:</strong> Agents trao đổi thông tin và kết quả với nhau</li>
              <li><strong>Coordination:</strong> Agents phối hợp để đạt mục tiêu chung</li>
              <li><strong>Orchestration:</strong> Frontend điều phối và hiển thị toàn bộ process</li>
            </ul>
          </div>

          <!-- Cách hoạt động -->
          <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border-l-4 border-red-500">
            <h3 class="text-xl font-semibold text-red-900 dark:text-red-300 mb-3">
              ⚙️ Cách hoạt động
            </h3>
            <div class="space-y-4">
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">1. Task Assignment</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  User đưa ra task, hệ thống phân tích và assign cho agents phù hợp.
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">2. Sequential/Parallel Execution</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Agents làm việc tuần tự (Planner → Executor → Reviewer) hoặc song song khi có thể.
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">3. Information Sharing</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Agents share context, results, và feedback với nhau qua internal messages.
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">4. Result Aggregation</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Frontend tổng hợp kết quả từ tất cả agents và hiển thị final output.
                </p>
              </div>
            </div>
          </div>

          <!-- Ứng dụng thực tế -->
          <div class="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-6 border-l-4 border-rose-500">
            <h3 class="text-xl font-semibold text-rose-900 dark:text-rose-300 mb-3">
              💡 Ứng dụng thực tế
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-rose-700 dark:text-rose-400 mb-2">Content Creation</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Writer → Editor → Reviewer để tạo content chất lượng
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-rose-700 dark:text-rose-400 mb-2">Code Review</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Analyzer → Reviewer → Fixer để review và fix code issues
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-rose-700 dark:text-rose-400 mb-2">Research Tasks</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Researcher → Synthesizer → Writer để tạo research reports
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-rose-700 dark:text-rose-400 mb-2">Quality Assurance</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Tester → Validator → Reporter để đảm bảo chất lượng
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 🎬 Kịch bản Test cụ thể -->
      <section class="mb-8 bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-xl p-8 border-2 border-pink-200 dark:border-pink-800">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">🎬</span>
          <span>Kịch bản Test cụ thể</span>
        </h2>

        <div class="space-y-6">
          <!-- Test Case 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Case 1: Tạo Blog Post
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Input Task:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                      "Tạo một blog post về Vue 3 Composition API với 500 từ"
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Agent Flow mong đợi:</div>
                    <div class="bg-pink-50 dark:bg-pink-900/20 rounded p-3 text-sm space-y-2">
                      <div><strong>Planner:</strong> "Tôi sẽ tạo outline: Intro → Main content → Examples → Conclusion"</div>
                      <div><strong>Executor:</strong> "Đang viết content theo outline..."</div>
                      <div><strong>Reviewer:</strong> "Đã review, content chất lượng, đủ 500 từ"</div>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Response nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Agent messages timeline với avatars<br>
                      - Real-time progress của từng agent<br>
                      - Final result với formatted content<br>
                      - Expandable sections để xem chi tiết
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Test Case 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Case 2: Code Review Task
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Input Task:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                      "Review và cải thiện code Vue component này"
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Agent Flow mong đợi:</div>
                    <div class="bg-red-50 dark:bg-red-900/20 rounded p-3 text-sm space-y-2">
                      <div><strong>Planner:</strong> "Tôi sẽ phân tích: structure → performance → best practices"</div>
                      <div><strong>Executor:</strong> "Đang refactor code, optimize re-renders..."</div>
                      <div><strong>Reviewer:</strong> "Code đã được cải thiện, thêm TypeScript types, better structure"</div>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Response nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Side-by-side comparison (before/after)<br>
                      - Highlighted changes với diff view<br>
                      - Agent reasoning hiển thị rõ ràng<br>
                      - Accept/reject buttons cho suggestions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Test Case 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-10 h-10 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Case 3: Research & Analysis Task
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Input Task:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                      "Nghiên cứu về best practices của Vue 3 và tạo summary"
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Agent Flow mong đợi:</div>
                    <div class="bg-rose-50 dark:bg-rose-900/20 rounded p-3 text-sm space-y-2">
                      <div><strong>Planner:</strong> "Tôi sẽ research: Composition API → Performance → TypeScript → Testing"</div>
                      <div><strong>Executor:</strong> "Đang gather information từ các nguồn..."</div>
                      <div><strong>Reviewer:</strong> "Đã tổng hợp, summary đầy đủ và chính xác"</div>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Response nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Research progress với sources<br>
                      - Structured summary với sections<br>
                      - Citations và references<br>
                      - Download/export options
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

