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
          <div class="mx-auto w-80 max-w-full my-4">
            <div class="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-xl p-6 shadow-lg border-2 border-green-300 dark:border-green-700">
              <div class="text-center">
                <div class="text-6xl mb-4">🧩📋</div>
                <div class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                  AI: "Tôi lập được kế hoạch!"
                </div>
                <div class="text-base text-gray-600 dark:text-gray-400">
                  Frontend: "Nhưng tôi mới làm cho nó có timeline đẹp! 🎯"
                </div>
              </div>
            </div>
          </div>
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
              <div class="text-gray-500 mb-2">// Raw JSON plan</div>
              <div class="text-gray-800 dark:text-gray-300">
                {<br>
                &nbsp;&nbsp;"steps": [<br>
                &nbsp;&nbsp;&nbsp;&nbsp;{"id": 1, "name": "Bước 1", "status": "pending"},<br>
                &nbsp;&nbsp;&nbsp;&nbsp;{"id": 2, "name": "Bước 2", "status": "pending"}<br>
                &nbsp;&nbsp;]<br>
                }
              </div>
            </div>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Chỉ có danh sách text, không có timeline</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Không thấy progress, không biết đang ở đâu</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Không có visual feedback khi execute</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>User cảm thấy lạc lối, không biết next step</span>
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
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">✓</div>
                  <div class="flex-1">
                    <div class="font-semibold text-gray-900 dark:text-white">Bước 1: Hoàn thành</div>
                    <div class="text-xs text-gray-500">Đã thực thi</div>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold animate-pulse">2</div>
                  <div class="flex-1">
                    <div class="font-semibold text-gray-900 dark:text-white">Bước 2: Đang chạy...</div>
                    <div class="text-xs text-blue-500">In progress</div>
                  </div>
                </div>
                <div class="flex items-center gap-3 opacity-50">
                  <div class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 font-bold">3</div>
                  <div class="flex-1">
                    <div class="font-semibold text-gray-500">Bước 3: Chờ</div>
                    <div class="text-xs text-gray-400">Pending</div>
                  </div>
                </div>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Timeline trực quan với progress bar</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Thấy rõ đang ở bước nào, đã hoàn thành bao nhiêu</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Animations, colors, icons cho từng trạng thái</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>User cảm thấy được hướng dẫn, không bị lạc lối</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            <strong class="text-green-700 dark:text-green-400">💡 Kết luận:</strong> 
            Cùng một kế hoạch từ AI, nhưng Frontend Developer biến nó thành timeline đẹp mắt, progress bar mượt mà, 
            và interactions khiến user cảm thấy được hướng dẫn. Đây chính là giá trị mà Frontend mang lại!
          </p>
        </div>
      </section>

      <!-- 📚 Lý thuyết chi tiết về Planning -->
      <section class="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">📚</span>
          <span>Lý thuyết về Planning Layer</span>
        </h2>

        <div class="space-y-6">
          <!-- Khái niệm -->
          <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-500">
            <h3 class="text-xl font-semibold text-green-900 dark:text-green-300 mb-3">
              🎯 Khái niệm Planning Layer
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Planning Layer</strong> là khả năng của AI để phân tích một mục tiêu phức tạp và chia nhỏ thành các bước có thể thực thi được:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li><strong>Goal Decomposition:</strong> Chia mục tiêu lớn thành các sub-tasks nhỏ hơn</li>
              <li><strong>Step Sequencing:</strong> Sắp xếp các bước theo thứ tự logic và dependencies</li>
              <li><strong>Resource Planning:</strong> Xác định resources cần thiết cho từng bước</li>
              <li><strong>Progress Tracking:</strong> Theo dõi tiến độ và điều chỉnh kế hoạch khi cần</li>
            </ul>
          </div>

          <!-- Cách hoạt động -->
          <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 class="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-3">
              ⚙️ Cách hoạt động
            </h3>
            <div class="space-y-4">
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">1. Goal Analysis</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  AI phân tích mục tiêu, hiểu context, constraints, và requirements.
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">2. Task Breakdown</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Chia mục tiêu thành các bước cụ thể, có thể thực thi được, với dependencies rõ ràng.
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">3. Plan Generation</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Tạo structured plan với timeline, priorities, và expected outcomes.
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">4. Execution & Adaptation</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Thực thi từng bước, theo dõi progress, và điều chỉnh plan khi có thay đổi.
                </p>
              </div>
            </div>
          </div>

          <!-- Ứng dụng thực tế -->
          <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border-l-4 border-purple-500">
            <h3 class="text-xl font-semibold text-purple-900 dark:text-purple-300 mb-3">
              💡 Ứng dụng thực tế
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-purple-700 dark:text-purple-400 mb-2">Onboarding Flows</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Tạo multi-step onboarding: setup profile → verify email → complete tutorial
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-purple-700 dark:text-purple-400 mb-2">Workflow Automation</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Tự động hóa quy trình: collect data → process → validate → notify
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-purple-700 dark:text-purple-400 mb-2">Project Management</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Break down project thành milestones và tasks với dependencies
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-purple-700 dark:text-purple-400 mb-2">Form Wizards</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Multi-step forms với validation và conditional logic
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 🎬 Kịch bản Test cụ thể -->
      <section class="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border-2 border-green-200 dark:border-green-800">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">🎬</span>
          <span>Kịch bản Test cụ thể</span>
        </h2>

        <div class="space-y-6">
          <!-- Test Case 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Case 1: Tạo Website Portfolio
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Input Goal:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                      "Tôi muốn tạo một website portfolio cá nhân với các phần: About, Projects, Contact"
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Kế hoạch mong đợi:</div>
                    <div class="bg-green-50 dark:bg-green-900/20 rounded p-3 text-sm">
                      <ol class="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li><strong>Bước 1:</strong> Setup project structure (HTML, CSS, JS files)</li>
                        <li><strong>Bước 2:</strong> Tạo navigation và header</li>
                        <li><strong>Bước 3:</strong> Xây dựng About section</li>
                        <li><strong>Bước 4:</strong> Xây dựng Projects section với gallery</li>
                        <li><strong>Bước 5:</strong> Tạo Contact form với validation</li>
                        <li><strong>Bước 6:</strong> Responsive design và testing</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Timeline nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Visual timeline với progress indicators<br>
                      - Click để execute từng bước<br>
                      - Status: pending → running → completed<br>
                      - Progress bar tổng thể (0% → 100%)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Test Case 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Case 2: Setup E-commerce Store
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Input Goal:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                      "Tôi cần setup một cửa hàng online để bán sản phẩm handmade"
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Kế hoạch mong đợi:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm">
                      <ol class="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li><strong>Bước 1:</strong> Tạo product catalog structure</li>
                        <li><strong>Bước 2:</strong> Setup shopping cart functionality</li>
                        <li><strong>Bước 3:</strong> Implement checkout process</li>
                        <li><strong>Bước 4:</strong> Add payment integration</li>
                        <li><strong>Bước 5:</strong> Setup order management system</li>
                        <li><strong>Bước 6:</strong> Add customer reviews và ratings</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Timeline nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Dependencies giữa các bước (bước 3 cần bước 2)<br>
                      - Parallel execution cho các bước độc lập<br>
                      - Error handling và retry mechanism<br>
                      - Estimated time cho mỗi bước
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
                  Test Case 3: Data Migration Project
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Input Goal:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                      "Migrate dữ liệu từ database cũ sang hệ thống mới với validation và backup"
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Kế hoạch mong đợi:</div>
                    <div class="bg-purple-50 dark:bg-purple-900/20 rounded p-3 text-sm">
                      <ol class="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li><strong>Bước 1:</strong> Backup database hiện tại</li>
                        <li><strong>Bước 2:</strong> Analyze data structure và mapping</li>
                        <li><strong>Bước 3:</strong> Transform data format</li>
                        <li><strong>Bước 4:</strong> Validate data integrity</li>
                        <li><strong>Bước 5:</strong> Import vào hệ thống mới</li>
                        <li><strong>Bước 6:</strong> Verify và test</li>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Timeline nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Critical path highlighting (bước 1 là bắt buộc)<br>
                      - Rollback option nếu có lỗi<br>
                      - Real-time progress với percentage<br>
                      - Warning indicators cho các bước quan trọng
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

