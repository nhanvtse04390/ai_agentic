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
          <div class="mx-auto w-80 max-w-full my-4">
            <div class="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-xl p-6 shadow-lg border-2 border-purple-300 dark:border-purple-700">
              <div class="text-center">
                <div class="text-6xl mb-4">🔧🎨</div>
                <div class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                  AI: "Tôi chọn được tool!"
                </div>
                <div class="text-base text-gray-600 dark:text-gray-400">
                  Frontend: "Nhưng tôi mới làm cho nó đẹp và dễ dùng! ✨"
                </div>
              </div>
            </div>
          </div>
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
              <div class="text-gray-500 mb-2">// Raw tool execution</div>
              <div class="text-gray-800 dark:text-gray-300">
                {<br>
                &nbsp;&nbsp;"tool": "calculator",<br>
                &nbsp;&nbsp;"args": {"operation": "add", "a": 15, "b": 27},<br>
                &nbsp;&nbsp;"result": 42<br>
                }
              </div>
            </div>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Chỉ có JSON response, không có visual</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Không có loading state, không biết đang chạy</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Error handling khó hiểu, chỉ có text</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500">✗</span>
                <span>Không có feedback, user không biết tool đã chạy chưa</span>
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
                <div class="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <div class="text-xs font-medium text-purple-600 dark:text-purple-400 mb-1">Tool được chọn</div>
                  <div class="flex items-center gap-2">
                    <span class="text-2xl">🔧</span>
                    <span class="font-bold text-purple-700 dark:text-purple-300">Calculator</span>
                  </div>
                </div>
                <div class="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <div class="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">Kết quả</div>
                  <div class="text-2xl font-bold text-blue-700 dark:text-blue-300">42</div>
                  <div class="text-xs text-gray-500 mt-1">15 + 27 = 42</div>
                </div>
                <div class="flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
                  <span>✓</span>
                  <span>Thực thi thành công</span>
                </div>
              </div>
            </div>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Visual cards với icons và colors</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Loading spinner, progress indicator</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Error messages đẹp với icons và suggestions</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500">✓</span>
                <span>Success animations, visual feedback rõ ràng</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            <strong class="text-purple-700 dark:text-purple-400">💡 Kết luận:</strong> 
            Cùng một tool execution từ AI, nhưng Frontend Developer biến nó thành UI đẹp mắt với loading states, 
            error handling thân thiện, và success animations. Đây chính là giá trị mà Frontend mang lại!
          </p>
        </div>
      </section>

      <!-- 📚 Lý thuyết chi tiết về Tool Use -->
      <section class="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">📚</span>
          <span>Lý thuyết về Tool Use Layer</span>
        </h2>

        <div class="space-y-6">
          <!-- Khái niệm -->
          <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border-l-4 border-purple-500">
            <h3 class="text-xl font-semibold text-purple-900 dark:text-purple-300 mb-3">
              🎯 Khái niệm Tool Use Layer
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Tool Use Layer</strong> là khả năng của AI để chọn và sử dụng các tools/functions để thực hiện tasks cụ thể:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li><strong>Tool Selection:</strong> AI phân tích request và chọn tool phù hợp nhất</li>
              <li><strong>Parameter Extraction:</strong> AI extract arguments cần thiết từ user input</li>
              <li><strong>Tool Execution:</strong> Frontend thực thi tool với arguments đã được parse</li>
              <li><strong>Result Presentation:</strong> Frontend hiển thị kết quả một cách dễ hiểu và đẹp mắt</li>
            </ul>
          </div>

          <!-- Cách hoạt động -->
          <div class="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-6 border-l-4 border-pink-500">
            <h3 class="text-xl font-semibold text-pink-900 dark:text-pink-300 mb-3">
              ⚙️ Cách hoạt động
            </h3>
            <div class="space-y-4">
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">1. Tool Registry</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Frontend định nghĩa available tools với descriptions và parameter schemas.
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">2. Intent Analysis</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  AI phân tích user request và match với tool phù hợp nhất.
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">3. Parameter Parsing</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  AI extract và validate parameters từ natural language input.
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-gray-900 dark:text-white mb-2">4. Execution & Feedback</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  Frontend execute tool, handle errors, và hiển thị kết quả với UX tốt.
                </p>
              </div>
            </div>
          </div>

          <!-- Ứng dụng thực tế -->
          <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border-l-4 border-indigo-500">
            <h3 class="text-xl font-semibold text-indigo-900 dark:text-indigo-300 mb-3">
              💡 Ứng dụng thực tế
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Calculator Tools</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  "Tính 15 + 27" → AI chọn calculator tool với args: {operation: "add", a: 15, b: 27}
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">API Calls</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  "Lấy thông tin user" → AI chọn fetchData tool với endpoint và params
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Data Visualization</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  "Vẽ biểu đồ doanh thu" → AI chọn chart tool với type, data, và styling
                </p>
              </div>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">File Operations</div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  "Export data ra CSV" → AI chọn export tool với format và data source
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 🎬 Kịch bản Test cụ thể -->
      <section class="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 border-2 border-purple-200 dark:border-purple-800">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">🎬</span>
          <span>Kịch bản Test cụ thể</span>
        </h2>

        <div class="space-y-6">
          <!-- Test Case 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Case 1: Calculator Tool
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Input Request:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                      "Tính 125 nhân 8 rồi cộng thêm 50"
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">AI Selection mong đợi:</div>
                    <div class="bg-purple-50 dark:bg-purple-900/20 rounded p-3 text-sm">
                      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        <li><strong>Tool:</strong> calculator</li>
                        <li><strong>Operation 1:</strong> multiply (125 * 8 = 1000)</li>
                        <li><strong>Operation 2:</strong> add (1000 + 50 = 1050)</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Response nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Calculator icon và visual feedback<br>
                      - Step-by-step calculation display<br>
                      - Final result highlighted (1050)<br>
                      - Success animation khi hoàn thành
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Test Case 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Case 2: Data Fetching Tool
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Input Request:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                      "Lấy danh sách 10 sản phẩm bán chạy nhất"
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">AI Selection mong đợi:</div>
                    <div class="bg-pink-50 dark:bg-pink-900/20 rounded p-3 text-sm">
                      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        <li><strong>Tool:</strong> fetchMockData</li>
                        <li><strong>Type:</strong> products</li>
                        <li><strong>Count:</strong> 10</li>
                        <li><strong>Filter:</strong> top-selling</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Response nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Loading spinner trong khi fetch<br>
                      - Product cards grid layout<br>
                      - Empty state nếu không có data<br>
                      - Error message nếu API fail
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Test Case 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-shrink-0 w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Case 3: Chart Generation Tool
                </h3>
                <div class="space-y-3">
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">Input Request:</div>
                    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                      "Vẽ biểu đồ đường thể hiện doanh thu theo tháng"
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">AI Selection mong đợi:</div>
                    <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded p-3 text-sm">
                      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        <li><strong>Tool:</strong> generateChart</li>
                        <li><strong>Type:</strong> line</li>
                        <li><strong>Data Points:</strong> 12 (12 tháng)</li>
                        <li><strong>Labels:</strong> ["Tháng 1", "Tháng 2", ...]</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">UI Response nên có:</div>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
                      - Chart preview với animation<br>
                      - Interactive tooltips khi hover<br>
                      - Download/export options<br>
                      - Responsive chart sizing
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

