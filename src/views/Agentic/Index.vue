<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <div class="max-w-7xl mx-auto p-6">
      <!-- Header -->
      <div class="mb-12 text-center animate-fade-in">
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🚀 Frontend trong kỷ nguyên AI
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          <strong>AI không chỉ là công cụ hỗ trợ coding — nó đang tái định nghĩa toàn bộ ngành phát triển phần mềm.</strong>
        </p>
        <p class="text-lg text-gray-500 dark:text-gray-500 max-w-3xl mx-auto mt-4">
          Từ việc tự động hóa các task lặp lại đến tạo ra những vai trò công việc hoàn toàn mới, AI đang thay đổi cách chúng ta nghĩ về nghề lập trình viên, đặc biệt là trong lĩnh vực Frontend Development.
        </p>
      </div>

      <!-- Giới thiệu về người thuyết trình -->
      <div class="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
            👨‍💻
          </div>
          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-1">
              Về người thuyết trình
            </h2>
            <p class="text-gray-700 dark:text-gray-300">
              Xin chào, tôi là <strong class="text-blue-600 dark:text-blue-400">Nhẫn</strong> — một Frontend Developer và là người dẫn dắt buổi seminar hôm nay. 
              Rất vui được chia sẻ với các bạn về những thay đổi thú vị mà AI đang mang lại cho ngành Frontend Development.
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile Table of Contents (hiển thị trên mobile) -->
      <div class="lg:hidden mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <span>📑</span>
          <span>Mục lục</span>
        </h3>
        <nav class="flex flex-wrap gap-2">
          <a 
            href="#section-1" 
            @click.prevent="scrollToSection('section-1')"
            class="px-3 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-xs font-medium"
          >
            1. Năng suất
          </a>
          <a 
            href="#section-2" 
            @click.prevent="scrollToSection('section-2')"
            class="px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors text-xs font-medium"
          >
            2. Vai trò
          </a>
          <a 
            href="#section-3" 
            @click.prevent="scrollToSection('section-3')"
            class="px-3 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors text-xs font-medium"
          >
            3. Ngành nghề
          </a>
          <a 
            href="#section-4" 
            @click.prevent="scrollToSection('section-4')"
            class="px-3 py-1.5 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors text-xs font-medium"
          >
            4. Thị trường
          </a>
          <a 
            href="#section-5" 
            @click.prevent="scrollToSection('section-5')"
            class="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors text-xs font-medium"
          >
            5. Tương lai
          </a>
          <a 
            href="#key-message" 
            @click.prevent="scrollToSection('key-message')"
            class="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors text-xs font-medium"
          >
            Key Message
          </a>
        </nav>
      </div>

      <!-- Layout với mục lục bên trái -->
      <div class="flex gap-6">
        <!-- Sticky Table of Contents - Bên trái (Desktop) -->
        <aside class="hidden lg:block w-64 flex-shrink-0">
          <div class="sticky top-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span>📑</span>
              <span>Mục lục</span>
            </h3>
            <nav class="flex flex-col gap-2">
              <a 
                href="#section-1" 
                @click.prevent="scrollToSection('section-1')"
                class="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-sm font-medium text-left"
              >
                1. Năng suất tăng vọt
              </a>
              <a 
                href="#section-2" 
                @click.prevent="scrollToSection('section-2')"
                class="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors text-sm font-medium text-left"
              >
                2. Vai trò mở rộng
              </a>
              <a 
                href="#section-3" 
                @click.prevent="scrollToSection('section-3')"
                class="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors text-sm font-medium text-left"
              >
                3. Ngành nghề mới
              </a>
              <a 
                href="#section-4" 
                @click.prevent="scrollToSection('section-4')"
                class="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors text-sm font-medium text-left"
              >
                4. Thị trường lao động
              </a>
              <a 
                href="#section-5" 
                @click.prevent="scrollToSection('section-5')"
                class="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors text-sm font-medium text-left"
              >
                5. Tương lai
              </a>
              <a 
                href="#key-message" 
                @click.prevent="scrollToSection('key-message')"
                class="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors text-sm font-medium text-left"
              >
                Key Message
              </a>
            </nav>
          </div>
        </aside>

        <!-- Main Content - Bên phải -->
        <div class="flex-1 min-w-0">
          <!-- Main Content Cards -->
          <div class="space-y-8">
        <!-- 1. Năng suất Developer tăng vọt -->
        <div id="section-1" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500 scroll-mt-24">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
              📈
            </div>
            <div class="flex-1">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Năng suất của Developer tăng vọt
              </h2>
              
              <div class="space-y-4">
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">📊 Số liệu:</h3>
                  <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                    <li class="flex items-start gap-2">
                      <span class="text-blue-500 mt-1">•</span>
                      <span><strong>55% developers code nhanh hơn</strong> với GitHub Copilot <span class="text-sm text-gray-500">(GitHub Research, 2023)</span></span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-blue-500 mt-1">•</span>
                      <span><strong>88% developers cảm thấy tập trung hơn</strong> vào giải quyết vấn đề thay vì viết code lặp lại</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-blue-500 mt-1">•</span>
                      <span><strong>Tốc độ hoàn thành task tăng 2-3 lần</strong> với AI tools <span class="text-sm text-gray-500">(State of AI in Software Development 2024)</span></span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">🔄 Thay đổi nhân sự:</h3>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                      <p class="font-semibold text-red-700 dark:text-red-400 mb-2">Trước AI:</p>
                      <p class="text-sm text-gray-700 dark:text-gray-300">Developers dành 40-50% thời gian cho boilerplate code và debugging</p>
                    </div>
                    <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <p class="font-semibold text-green-700 dark:text-green-400 mb-2">Sau AI:</p>
                      <p class="text-sm text-gray-700 dark:text-gray-300">Developers tập trung 70-80% thời gian vào architecture, logic phức tạp, và optimization</p>
                    </div>
                  </div>
                  <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    <strong>Kỹ năng mới cần thiết:</strong> Prompt engineering, AI tool proficiency, code review với AI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Vai trò Frontend Developer mở rộng -->
        <div id="section-2" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500 scroll-mt-24">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
              🔄
            </div>
            <div class="flex-1">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Vai trò Frontend Developer đang mở rộng
              </h2>
              
              <div class="space-y-4">
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">📊 Số liệu:</h3>
                  <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                    <li class="flex items-start gap-2">
                      <span class="text-green-500 mt-1">•</span>
                      <span><strong>73% Frontend developers</strong> đang sử dụng ít nhất 1 AI tool trong workflow <span class="text-sm text-gray-500">(Frontend Tooling Survey 2024)</span></span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-green-500 mt-1">•</span>
                      <span><strong>45% developers</strong> cho biết AI giúp họ học framework mới nhanh hơn 2-3 lần</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-green-500 mt-1">•</span>
                      <span><strong>Demand cho Full-stack developers tăng 35%</strong> vì AI giúp họ làm việc hiệu quả hơn <span class="text-sm text-gray-500">(LinkedIn Jobs Report 2024)</span></span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">🔄 Thay đổi nhân sự:</h3>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <p class="font-semibold text-gray-800 dark:text-gray-200 mb-2">Trước AI:</p>
                      <p class="text-sm text-gray-700 dark:text-gray-300">Frontend Developer = HTML/CSS/JS + Framework knowledge</p>
                    </div>
                    <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <p class="font-semibold text-green-700 dark:text-green-400 mb-2">Sau AI:</p>
                      <p class="text-sm text-gray-700 dark:text-gray-300">Frontend Developer = UI/UX thinking + AI tool mastery + Performance optimization + Business logic understanding</p>
                    </div>
                  </div>
                  <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    <strong>Skill shift:</strong> Từ "code nhiều" sang "think strategically" và "leverage AI effectively"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Ngành nghề mới xuất hiện -->
        <div id="section-3" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500 scroll-mt-24">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
              🆕
            </div>
            <div class="flex-1">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. Ngành nghề mới xuất hiện nhờ AI
              </h2>
              
              <div class="grid md:grid-cols-2 gap-6">
                <!-- A. AI Prompt Engineer -->
                <div class="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
                  <h3 class="font-bold text-lg text-purple-700 dark:text-purple-400 mb-2">A. AI Prompt Engineer cho Frontend</h3>
                  <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Mô tả:</strong> Chuyên gia tối ưu hóa prompts để AI tạo UI components tốt nhất</li>
                    <li><strong>Nhu cầu:</strong> Tăng 200% trong 12 tháng qua <span class="text-gray-500">(Indeed Job Trends)</span></li>
                    <li><strong>Mức lương:</strong> $80K - $150K/năm <span class="text-gray-500">(Glassdoor 2024)</span></li>
                    <li><strong>Ví dụ:</strong> Tạo prompt templates cho v0.dev, Builder.io AI</li>
                  </ul>
                </div>

                <!-- B. AI-Assisted UX Developer -->
                <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
                  <h3 class="font-bold text-lg text-blue-700 dark:text-blue-400 mb-2">B. AI-Assisted UX Developer</h3>
                  <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Mô tả:</strong> Kết hợp UX design với AI tools để tạo personalized user experiences</li>
                    <li><strong>Nhu cầu:</strong> 150+ job postings mới mỗi tháng <span class="text-gray-500">(LinkedIn)</span></li>
                    <li><strong>Kỹ năng:</strong> UX design + AI tool proficiency + Data analysis</li>
                    <li><strong>Ví dụ:</strong> Sử dụng AI để A/B test và optimize UI tự động</li>
                  </ul>
                </div>

                <!-- C. No-Code Solution Architect -->
                <div class="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
                  <h3 class="font-bold text-lg text-yellow-700 dark:text-yellow-400 mb-2">C. No-Code Solution Architect</h3>
                  <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Mô tả:</strong> Thiết kế và triển khai solutions sử dụng no-code/low-code platforms với AI</li>
                    <li><strong>Nhu cầu:</strong> Tăng 180% từ 2023-2024 <span class="text-gray-500">(Gartner Report)</span></li>
                    <li><strong>Mức lương:</strong> $90K - $160K/năm</li>
                    <li><strong>Ví dụ:</strong> Architect solutions trên Webflow AI, Framer AI</li>
                  </ul>
                </div>

                <!-- D. AI Code Quality Specialist -->
                <div class="bg-pink-50 dark:bg-pink-900/20 p-5 rounded-lg">
                  <h3 class="font-bold text-lg text-pink-700 dark:text-pink-400 mb-2">D. AI Code Quality Specialist</h3>
                  <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Mô tả:</strong> Chuyên gia review và optimize code được AI generate</li>
                    <li><strong>Nhu cầu:</strong> Mới xuất hiện, dự kiến tăng 300% trong 2 năm tới</li>
                    <li><strong>Kỹ năng:</strong> Code review + AI understanding + Security best practices</li>
                    <li><strong>Ví dụ:</strong> Đảm bảo AI-generated code đáp ứng standards và security</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. Thị trường lao động chuyển dịch -->
        <div id="section-4" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500 scroll-mt-24">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
              📉📈
            </div>
            <div class="flex-1">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Thị trường lao động đang chuyển dịch
              </h2>
              
              <div class="space-y-4">
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">📊 Số liệu:</h3>
                  <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                    <li class="flex items-start gap-2">
                      <span class="text-orange-500 mt-1">•</span>
                      <span><strong>67% companies</strong> đang tìm kiếm developers có kinh nghiệm với AI tools <span class="text-sm text-gray-500">(Tech Hiring Report 2024)</span></span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-orange-500 mt-1">•</span>
                      <span><strong>Junior developers với AI skills</strong> có mức lương cao hơn 25-30% so với không có <span class="text-sm text-gray-500">(Stack Overflow Salary Survey 2024)</span></span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-orange-500 mt-1">•</span>
                      <span><strong>Demand cho traditional "code-only" developers giảm 15%</strong>, trong khi demand cho "AI-assisted developers" tăng 85% <span class="text-sm text-gray-500">(GitHub Jobs Data)</span></span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">🔄 Thay đổi nhân sự:</h3>
                  <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <p class="font-semibold text-gray-800 dark:text-gray-200 mb-2">Trước AI:</p>
                      <ul class="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                        <li>• Junior: Code theo spec</li>
                        <li>• Senior: Architecture + Code</li>
                        <li>• Lead: Team management + Code review</li>
                      </ul>
                    </div>
                    <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <p class="font-semibold text-green-700 dark:text-green-400 mb-2">Sau AI:</p>
                      <ul class="text-xs space-y-1 text-gray-700 dark:text-gray-300">
                        <li>• Junior: AI-assisted coding + Learning từ AI</li>
                        <li>• Senior: Strategic thinking + AI tool selection</li>
                        <li>• Lead: AI workflow design + Team AI adoption</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. Tương lai -->
        <div id="section-5" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-500 scroll-mt-24">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
              🔮
            </div>
            <div class="flex-1">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Tương lai: AI không thay thế, mà nâng cấp Developer
              </h2>
              
              <div class="space-y-4">
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">📊 Số liệu:</h3>
                  <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                    <li class="flex items-start gap-2">
                      <span class="text-indigo-500 mt-1">•</span>
                      <span><strong>92% developers</strong> tin rằng AI sẽ làm công việc của họ thú vị hơn <span class="text-sm text-gray-500">(GitHub Developer Survey 2024)</span></span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-indigo-500 mt-1">•</span>
                      <span><strong>78% developers</strong> cho rằng AI sẽ tạo ra nhiều cơ hội nghề nghiệp mới hơn là mất việc <span class="text-sm text-gray-500">(Stack Overflow Survey 2024)</span></span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-indigo-500 mt-1">•</span>
                      <span><strong>Dự đoán:</strong> 2.3 triệu việc làm mới liên quan đến AI trong software development đến 2027 <span class="text-sm text-gray-500">(World Economic Forum)</span></span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">🔄 Thay đổi nhân sự:</h3>
                  <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <p class="font-semibold text-gray-800 dark:text-gray-200 mb-2">Trước AI:</p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Developer = Code writer</p>
                    </div>
                    <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                      <p class="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Sau AI:</p>
                      <p class="text-sm text-gray-700 dark:text-gray-300">Developer = Problem solver + AI orchestrator + Creative thinker</p>
                    </div>
                    <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <p class="font-semibold text-purple-700 dark:text-purple-400 mb-2">Tương lai:</p>
                      <p class="text-sm text-gray-700 dark:text-gray-300">Developer = AI collaborator, tập trung vào innovation và user experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Message -->
        <div id="key-message" class="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl p-8 text-white scroll-mt-24">
          <h3 class="text-2xl font-bold mb-4 text-center">🎯 Key Message</h3>
          <p class="text-lg mb-4 text-center">
            <strong>AI không phải là mối đe dọa, mà là cơ hội để Frontend Developers:</strong>
          </p>
          <div class="grid md:grid-cols-2 gap-4 mt-6">
            <div class="flex items-center gap-3">
              <span class="text-2xl">✅</span>
              <span>Làm việc thông minh hơn, không chỉ chăm chỉ hơn</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-2xl">✅</span>
              <span>Tập trung vào giải quyết vấn đề thực sự</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-2xl">✅</span>
              <span>Mở rộng kỹ năng và vai trò</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-2xl">✅</span>
              <span>Tạo ra giá trị cao hơn cho business</span>
            </div>
          </div>
          <div class="mt-8 text-center">
            <p class="text-xl font-semibold italic">
              "Bạn đã sẵn sàng để trở thành Frontend Developer của tương lai chưa?"
            </p>
          </div>
        </div>

        <!-- References -->
        <div class="mt-8 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">📚 Nguồn tham khảo</h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>• GitHub Copilot Research 2023</li>
            <li>• State of AI in Software Development 2024</li>
            <li>• Frontend Tooling Survey 2024 (State of JS)</li>
            <li>• Stack Overflow Developer Survey 2024</li>
            <li>• LinkedIn Jobs Report 2024</li>
            <li>• Gartner Report on Low-Code/No-Code Platforms 2024</li>
            <li>• World Economic Forum - Future of Jobs Report 2024</li>
          </ul>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// Smooth scroll to section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Offset for sticky header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Highlight active section in TOC on scroll
onMounted(() => {
  const sections = document.querySelectorAll('[id^="section-"], #key-message');
  const tocLinks = document.querySelectorAll('nav a[href^="#"]');
  
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active class from all links
        tocLinks.forEach(link => {
          link.classList.remove('ring-2', 'ring-offset-2');
        });
        
        // Add active class to corresponding link
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`nav a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('ring-2', 'ring-offset-2');
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
</style>
