<!-- 🟡 Prompt Engineering Guide for Development -->
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <section class="mb-8 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 rounded-xl p-6 border-2 border-indigo-200 dark:border-indigo-800">
        <div class="text-center mb-6">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            ✍️ Prompt Engineering cho Development
          </h1>
          <p class="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Hướng dẫn chi tiết cách viết prompt hiệu quả để AI tạo ra code chất lượng, 
            dễ maintain và phù hợp với best practices của Frontend Development.
          </p>
        </div>
      </section>

      <!-- Mobile Table of Contents (hiển thị trên mobile) -->
      <div class="lg:hidden mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <span>📑</span>
          <span>Mục lục</span>
        </h3>
        <nav class="flex flex-wrap gap-2">
          <a 
            href="#introduction" 
            @click.prevent="scrollToSection('introduction')"
            class="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors text-xs font-medium"
          >
            1. Giới thiệu
          </a>
          <a 
            href="#principles" 
            @click.prevent="scrollToSection('principles')"
            class="px-3 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-xs font-medium"
          >
            2. Nguyên tắc
          </a>
          <a 
            href="#step-by-step" 
            @click.prevent="scrollToSection('step-by-step')"
            class="px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors text-xs font-medium"
          >
            3. Từng bước
          </a>
          <a 
            href="#best-practices" 
            @click.prevent="scrollToSection('best-practices')"
            class="px-3 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors text-xs font-medium"
          >
            4. Best Practices
          </a>
          <a 
            href="#examples" 
            @click.prevent="scrollToSection('examples')"
            class="px-3 py-1.5 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors text-xs font-medium"
          >
            5. Ví dụ
          </a>
          <a 
            href="#practice" 
            @click.prevent="scrollToSection('practice')"
            class="px-3 py-1.5 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 rounded-lg hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors text-xs font-medium"
          >
            6. Thực hành
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
                href="#introduction" 
                @click.prevent="scrollToSection('introduction')"
                class="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors text-sm font-medium text-left"
              >
                1. Giới thiệu
              </a>
              <a 
                href="#principles" 
                @click.prevent="scrollToSection('principles')"
                class="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-sm font-medium text-left"
              >
                2. Nguyên tắc cơ bản
              </a>
              <a 
                href="#step-by-step" 
                @click.prevent="scrollToSection('step-by-step')"
                class="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors text-sm font-medium text-left"
              >
                3. Từng bước cụ thể
              </a>
              <a 
                href="#best-practices" 
                @click.prevent="scrollToSection('best-practices')"
                class="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors text-sm font-medium text-left"
              >
                4. Best Practices
              </a>
              <a 
                href="#examples" 
                @click.prevent="scrollToSection('examples')"
                class="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors text-sm font-medium text-left"
              >
                5. Ví dụ cụ thể
              </a>
              <a 
                href="#practice" 
                @click.prevent="scrollToSection('practice')"
                class="px-4 py-2 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 rounded-lg hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors text-sm font-medium text-left"
              >
                6. Thực hành
              </a>
            </nav>
          </div>
        </aside>

        <!-- Main Content - Bên phải -->
        <div class="flex-1 min-w-0">
          <!-- 1. Introduction -->
      <section id="introduction" class="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 scroll-mt-24">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">1️⃣</span>
          <span>Giới thiệu về Prompt Engineering</span>
        </h2>
        
        <div class="space-y-6">
          <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border-l-4 border-indigo-500">
            <h3 class="text-xl font-semibold text-indigo-900 dark:text-indigo-300 mb-3">
              Prompt Engineering là gì?
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Prompt Engineering</strong> là nghệ thuật và khoa học viết instructions (hướng dẫn) 
              cho AI để đạt được kết quả mong muốn. Trong Development, prompt engineering giúp:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Tạo code chất lượng, dễ đọc và maintain</li>
              <li>Tuân thủ best practices và coding standards</li>
              <li>Giảm thời gian debug và refactor</li>
              <li>Tăng productivity của developer</li>
            </ul>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
              <h4 class="font-semibold text-red-700 dark:text-red-400 mb-2">❌ Prompt yếu</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">
                "Tạo component Vue"
              </p>
              <p class="text-xs text-gray-500 mt-2">→ Kết quả: Code generic, không rõ ràng, thiếu context</p>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <h4 class="font-semibold text-green-700 dark:text-green-400 mb-2">✅ Prompt mạnh</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">
                "Tạo Vue 3 component với Composition API, TypeScript, props validation, và responsive design"
              </p>
              <p class="text-xs text-gray-500 mt-2">→ Kết quả: Code rõ ràng, type-safe, maintainable</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Principles -->
      <section id="principles" class="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 scroll-mt-24">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">2️⃣</span>
          <span>5 Nguyên tắc vàng của Prompt Engineering</span>
        </h2>

        <div class="space-y-6">
          <!-- Principle 1 -->
          <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6 border-l-4 border-blue-500">
            <div class="flex items-start gap-4">
              <div class="text-3xl">🎯</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-2">
                  Nguyên tắc 1: Be Specific (Cụ thể)
                </h3>
                <p class="text-gray-700 dark:text-gray-300 mb-3">
                  Càng cụ thể càng tốt. Thay vì nói "tạo form", hãy nói:
                </p>
                <div class="bg-white dark:bg-gray-900 rounded p-4 font-mono text-sm">
                  "Tạo form đăng nhập với:<br>
                  - Email input (validation: required, email format)<br>
                  - Password input (min 8 chars, show/hide toggle)<br>
                  - Remember me checkbox<br>
                  - Submit button với loading state<br>
                  - Error messages hiển thị dưới mỗi field"
                </div>
              </div>
            </div>
          </div>

          <!-- Principle 2 -->
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border-l-4 border-green-500">
            <div class="flex items-start gap-4">
              <div class="text-3xl">📋</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-green-900 dark:text-green-300 mb-2">
                  Nguyên tắc 2: Provide Context (Cung cấp context)
                </h3>
                <p class="text-gray-700 dark:text-gray-300 mb-3">
                  AI cần biết bạn đang làm gì, với công nghệ gì, và mục tiêu là gì:
                </p>
                <div class="bg-white dark:bg-gray-900 rounded p-4 font-mono text-sm">
                  "Trong Vue 3 project với TypeScript và Tailwind CSS,<br>
                  tạo component hiển thị danh sách users từ API.<br>
                  Component cần:<br>
                  - Fetch data từ /api/users<br>
                  - Hiển thị loading state<br>
                  - Handle errors<br>
                  - Responsive grid layout"
                </div>
              </div>
            </div>
          </div>

          <!-- Principle 3 -->
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border-l-4 border-purple-500">
            <div class="flex items-start gap-4">
              <div class="text-3xl">📐</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-purple-900 dark:text-purple-300 mb-2">
                  Nguyên tắc 3: Define Structure (Định nghĩa cấu trúc)
                </h3>
                <p class="text-gray-700 dark:text-gray-300 mb-3">
                  Yêu cầu format output cụ thể:
                </p>
                <div class="bg-white dark:bg-gray-900 rounded p-4 font-mono text-sm">
                  "Trả về code với:<br>
                  - TypeScript interfaces cho props<br>
                  - JSDoc comments cho functions<br>
                  - Error handling với try-catch<br>
                  - Unit tests cho component"
                </div>
              </div>
            </div>
          </div>

          <!-- Principle 4 -->
          <div class="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-6 border-l-4 border-orange-500">
            <div class="flex items-start gap-4">
              <div class="text-3xl">✅</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-orange-900 dark:text-orange-300 mb-2">
                  Nguyên tắc 4: Set Constraints (Đặt giới hạn)
                </h3>
                <p class="text-gray-700 dark:text-gray-300 mb-3">
                  Giới hạn scope và yêu cầu cụ thể:
                </p>
                <div class="bg-white dark:bg-gray-900 rounded p-4 font-mono text-sm">
                  "Chỉ sử dụng:<br>
                  - Vue 3 Composition API (không dùng Options API)<br>
                  - TypeScript strict mode<br>
                  - Tailwind CSS utility classes (không inline styles)<br>
                  - Không dùng external libraries ngoài Vue ecosystem"
                </div>
              </div>
            </div>
          </div>

          <!-- Principle 5 -->
          <div class="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-lg p-6 border-l-4 border-cyan-500">
            <div class="flex items-start gap-4">
              <div class="text-3xl">🔄</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-cyan-900 dark:text-cyan-300 mb-2">
                  Nguyên tắc 5: Iterate & Refine (Lặp lại và tinh chỉnh)
                </h3>
                <p class="text-gray-700 dark:text-gray-300 mb-3">
                  Prompt engineering là quá trình iterative. Bắt đầu đơn giản, sau đó refine:
                </p>
                <div class="space-y-2 text-sm">
                  <div class="bg-white dark:bg-gray-900 rounded p-3">
                    <strong>Vòng 1:</strong> "Tạo component button"
                  </div>
                  <div class="bg-white dark:bg-gray-900 rounded p-3">
                    <strong>Vòng 2:</strong> "Thêm variants: primary, secondary, danger"
                  </div>
                  <div class="bg-white dark:bg-gray-900 rounded p-3">
                    <strong>Vòng 3:</strong> "Thêm loading state và disabled state"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Step-by-Step Process -->
      <section id="step-by-step" class="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 scroll-mt-24">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">3️⃣</span>
          <span>Quy trình 7 bước viết Prompt hiệu quả</span>
        </h2>

        <div class="space-y-6">
          <!-- Step 1 -->
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div class="flex-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 class="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Xác định mục tiêu rõ ràng
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">
                Trước khi viết prompt, hãy tự hỏi: "Tôi muốn AI làm gì?"
              </p>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <strong>Ví dụ:</strong> "Tôi muốn tạo một component hiển thị danh sách sản phẩm với search và filter"
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div class="flex-1 bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-500">
              <h3 class="text-xl font-semibold text-green-900 dark:text-green-300 mb-2">
                Thu thập context
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">
                Liệt kê tất cả thông tin liên quan:
              </p>
              <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Framework/Technology stack</li>
                <li>Existing code patterns trong project</li>
                <li>Dependencies có sẵn</li>
                <li>Design system hoặc style guide</li>
              </ul>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div class="flex-1 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 class="text-xl font-semibold text-purple-900 dark:text-purple-300 mb-2">
                Viết prompt cơ bản
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">
                Bắt đầu với prompt đơn giản, bao gồm mục tiêu và context cơ bản:
              </p>
              <div class="bg-white dark:bg-gray-900 rounded p-4 font-mono text-sm">
                "Tạo Vue 3 component ProductList với TypeScript"
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
              4
            </div>
            <div class="flex-1 bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border-l-4 border-orange-500">
              <h3 class="text-xl font-semibold text-orange-900 dark:text-orange-300 mb-2">
                Thêm requirements chi tiết
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">
                Mở rộng prompt với các yêu cầu cụ thể:
              </p>
              <div class="bg-white dark:bg-gray-900 rounded p-4 font-mono text-sm">
                "- Props: products (array), onSelect (function)<br>
                - Features: search, filter by category<br>
                - UI: responsive grid, loading state<br>
                - Error handling: display error message"
              </div>
            </div>
          </div>

          <!-- Step 5 -->
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
              5
            </div>
            <div class="flex-1 bg-pink-50 dark:bg-pink-900/20 rounded-lg p-6 border-l-4 border-pink-500">
              <h3 class="text-xl font-semibold text-pink-900 dark:text-pink-300 mb-2">
                Định nghĩa output format
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">
                Yêu cầu format output cụ thể:
              </p>
              <div class="bg-white dark:bg-gray-900 rounded p-4 font-mono text-sm">
                "Trả về:<br>
                - Component code với TypeScript<br>
                - Interface definitions<br>
                - JSDoc comments<br>
                - Example usage"
              </div>
            </div>
          </div>

          <!-- Step 6 -->
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
              6
            </div>
            <div class="flex-1 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-6 border-l-4 border-cyan-500">
              <h3 class="text-xl font-semibold text-cyan-900 dark:text-cyan-300 mb-2">
                Test và đánh giá kết quả
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">
                Kiểm tra code được tạo ra:
              </p>
              <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Code có chạy được không?</li>
                <li>Có đáp ứng đủ requirements không?</li>
                <li>Có follow best practices không?</li>
                <li>Có dễ maintain không?</li>
              </ul>
            </div>
          </div>

          <!-- Step 7 -->
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
              7
            </div>
            <div class="flex-1 bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6 border-l-4 border-teal-500">
              <h3 class="text-xl font-semibold text-teal-900 dark:text-teal-300 mb-2">
                Refine và iterate
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">
                Dựa trên kết quả, cải thiện prompt:
              </p>
              <div class="bg-white dark:bg-gray-900 rounded p-4">
                <div class="text-sm space-y-2">
                  <div><strong>Nếu thiếu feature:</strong> "Thêm pagination và sorting"</div>
                  <div><strong>Nếu code không clean:</strong> "Refactor để code ngắn gọn hơn, tách logic ra composables"</div>
                  <div><strong>Nếu thiếu tests:</strong> "Thêm unit tests với Vitest"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Best Practices -->
      <section id="best-practices" class="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 scroll-mt-24">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">4️⃣</span>
          <span>Best Practices & Tips</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3 flex items-center gap-2">
              <span>💡</span>
              <span>Tip 1: Sử dụng Examples</span>
            </h3>
            <p class="text-gray-700 dark:text-gray-300 text-sm mb-3">
              Đưa ví dụ cụ thể về output mong muốn:
            </p>
            <div class="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs">
              "Tương tự như component Button hiện có,<br>
              nhưng thay vì variant, dùng size prop"
            </div>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <h3 class="text-lg font-semibold text-green-900 dark:text-green-300 mb-3 flex items-center gap-2">
              <span>📝</span>
              <span>Tip 2: Chia nhỏ task</span>
            </h3>
            <p class="text-gray-700 dark:text-gray-300 text-sm mb-3">
              Thay vì một prompt lớn, chia thành nhiều prompt nhỏ:
            </p>
            <div class="bg-white dark:bg-gray-900 rounded p-3 text-xs">
              ❌ "Tạo toàn bộ dashboard"<br>
              ✅ "Tạo component Header" → "Tạo component Sidebar" → ...
            </div>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
            <h3 class="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-3 flex items-center gap-2">
              <span>🎯</span>
              <span>Tip 3: Đặt câu hỏi</span>
            </h3>
            <p class="text-gray-700 dark:text-gray-300 text-sm mb-3">
              Yêu cầu AI giải thích hoặc đưa ra alternatives:
            </p>
            <div class="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs">
              "Giải thích tại sao bạn chọn approach này"<br>
              "Đưa ra 2 alternatives và so sánh"
            </div>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
            <h3 class="text-lg font-semibold text-orange-900 dark:text-orange-300 mb-3 flex items-center gap-2">
              <span>🔍</span>
              <span>Tip 4: Request code review</span>
            </h3>
            <p class="text-gray-700 dark:text-gray-300 text-sm mb-3">
              Yêu cầu AI review code và suggest improvements:
            </p>
            <div class="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs">
              "Review code này và suggest improvements về:<br>
              - Performance<br>
              - Accessibility<br>
              - Code organization"
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Examples -->
      <section id="examples" class="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 scroll-mt-24">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">5️⃣</span>
          <span>Ví dụ cụ thể cho Development</span>
        </h2>

        <div class="space-y-6">
          <!-- Example 1 -->
          <div class="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Ví dụ 1: Tạo Component với TypeScript
            </h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">Prompt:</h4>
                <div class="bg-gray-900 text-green-400 rounded p-4 font-mono text-sm overflow-x-auto">
                  Tạo Vue 3 component UserCard với TypeScript:<br><br>
                  - Props: user (object với id, name, email, avatar)<br>
                  - Display: avatar, name, email<br>
                  - Actions: click để navigate đến /users/:id<br>
                  - Style: Tailwind CSS, card design với hover effect<br>
                  - TypeScript: định nghĩa interface cho props<br>
                  - Responsive: mobile-first design<br><br>
                  Trả về code với JSDoc comments và example usage.
                </div>
              </div>
              <div class="bg-blue-50 dark:bg-blue-900/20 rounded p-4 border-l-4 border-blue-500">
                <strong class="text-blue-700 dark:text-blue-400">Kết quả:</strong>
                <p class="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  Component hoàn chỉnh với TypeScript interfaces, proper typing, 
                  responsive design, và có thể sử dụng ngay.
                </p>
              </div>
            </div>
          </div>

          <!-- Example 2 -->
          <div class="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Ví dụ 2: Tạo Custom Hook/Composable
            </h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">Prompt:</h4>
                <div class="bg-gray-900 text-green-400 rounded p-4 font-mono text-sm overflow-x-auto">
                  Tạo Vue 3 composable useApi với TypeScript:<br><br>
                  - Function: fetchData(url, options)<br>
                  - Return: { data, loading, error, refetch }<br>
                  - Features:<br>
                    • Auto fetch on mount (optional)<br>
                    • Loading state management<br>
                    • Error handling với try-catch<br>
                    • Refetch function để reload data<br>
                  - TypeScript: Generic type cho data<br>
                  - Error: hiển thị user-friendly message<br><br>
                  Include example usage với async/await.
                </div>
              </div>
              <div class="bg-green-50 dark:bg-green-900/20 rounded p-4 border-l-4 border-green-500">
                <strong class="text-green-700 dark:text-green-400">Kết quả:</strong>
                <p class="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  Reusable composable với proper TypeScript generics, 
                  error handling, và có thể dùng cho nhiều API calls.
                </p>
              </div>
            </div>
          </div>

          <!-- Example 3 -->
          <div class="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Ví dụ 3: Refactor Code
            </h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">Prompt:</h4>
                <div class="bg-gray-900 text-green-400 rounded p-4 font-mono text-sm overflow-x-auto">
                  Refactor component này để:<br><br>
                  - Tách logic ra composables<br>
                  - Improve TypeScript types<br>
                  - Add error boundaries<br>
                  - Optimize re-renders với useMemo/useCallback<br>
                  - Add unit tests với Vitest<br><br>
                  Giữ nguyên functionality, chỉ improve code quality.
                </div>
              </div>
              <div class="bg-purple-50 dark:bg-purple-900/20 rounded p-4 border-l-4 border-purple-500">
                <strong class="text-purple-700 dark:text-purple-400">Kết quả:</strong>
                <p class="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  Code được refactor với better structure, 
                  improved performance, và có tests coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. Practice Demo -->
      <section id="practice" class="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 scroll-mt-24">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-4xl">6️⃣</span>
          <span>Thực hành: Interactive Prompt Builder</span>
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Prompt Builder -->
          <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              ✍️ Xây dựng Prompt của bạn
            </h3>
            
            <div class="space-y-4">
              <!-- Goal -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mục tiêu (Goal):
                </label>
                <input
                  v-model="promptBuilder.goal"
                  placeholder="Ví dụ: Tạo component button"
                  class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <!-- Context -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Context (Framework, Tech Stack):
                </label>
                <textarea
                  v-model="promptBuilder.context"
                  placeholder="Ví dụ: Vue 3, TypeScript, Tailwind CSS"
                  rows="3"
                  class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 resize-none"
                ></textarea>
              </div>

              <!-- Requirements -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Requirements (Yêu cầu chi tiết):
                </label>
                <textarea
                  v-model="promptBuilder.requirements"
                  placeholder="Ví dụ: - Props: variant, size, disabled&#10;- Loading state&#10;- Click handler"
                  rows="5"
                  class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 resize-none font-mono text-sm"
                ></textarea>
              </div>

              <!-- Output Format -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Output Format:
                </label>
                <select
                  v-model="promptBuilder.outputFormat"
                  class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="code">Code only</option>
                  <option value="code+comments">Code + Comments</option>
                  <option value="code+tests">Code + Tests</option>
                  <option value="full">Full (Code + Comments + Tests + Docs)</option>
                </select>
              </div>

              <button
                @click="generatePrompt"
                class="w-full bg-indigo-500 text-white py-3 px-4 rounded-lg hover:bg-indigo-600 transition-colors font-semibold"
              >
                🚀 Tạo Prompt
              </button>
            </div>
          </div>

          <!-- Generated Prompt -->
          <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              📋 Prompt được tạo
            </h3>
            
            <div v-if="generatedPrompt" class="space-y-4">
              <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto max-h-96 overflow-y-auto">
                <pre>{{ generatedPrompt }}</pre>
              </div>
              
              <div class="flex gap-2">
                <button
                  @click="copyPrompt"
                  class="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                >
                  📋 Copy Prompt
                </button>
                <button
                  @click="testPrompt"
                  :disabled="isTesting"
                  class="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                >
                  {{ isTesting ? '⏳ Testing...' : '🧪 Test với AI' }}
                </button>
              </div>

              <!-- Test Result -->
              <div v-if="testResult" class="mt-4">
                <div class="flex items-center justify-between mb-3">
                  <h4 class="font-semibold text-gray-900 dark:text-white">Kết quả test:</h4>
                  <div class="flex gap-2">
                    <button
                      @click="viewMode = 'code'"
                      :class="[
                        'px-3 py-1 rounded-lg text-sm font-medium transition-colors',
                        viewMode === 'code' 
                          ? 'bg-indigo-500 text-white' 
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                      ]"
                    >
                      📄 Code
                    </button>
                    <button
                      @click="viewMode = 'preview'"
                      :class="[
                        'px-3 py-1 rounded-lg text-sm font-medium transition-colors',
                        viewMode === 'preview' 
                          ? 'bg-indigo-500 text-white' 
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                      ]"
                    >
                      🎨 Preview
                    </button>
                  </div>
                </div>

                <!-- Code View -->
                <div v-if="viewMode === 'code'" class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono">{{ testResult }}</div>
                </div>

                <!-- Preview View -->
                <div v-if="viewMode === 'preview'" class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                    <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span>🎨</span>
                      <span>Live Preview</span>
                    </div>
                  </div>
                  <div class="p-6 min-h-[300px] bg-white dark:bg-gray-800 relative">
                    <!-- CSS được inject vào <head> tự động -->
                    
                    <!-- Render HTML từ AI response -->
                    <div 
                      v-if="renderedHTML" 
                      v-html="renderedHTML"
                      class="preview-content"
                    ></div>
                    <div v-else class="text-center py-12 text-gray-400">
                      <div class="text-4xl mb-4">🔍</div>
                      <p>Không tìm thấy HTML để render</p>
                      <p class="text-xs mt-2">AI có thể chỉ trả về code text, không có HTML</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-else class="text-center py-12 text-gray-400">
              <div class="text-4xl mb-4">📝</div>
              <p>Điền thông tin và click "Tạo Prompt"</p>
            </div>
          </div>
        </div>

        <!-- Prompt Templates -->
        <div class="mt-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800">
          <h3 class="text-xl font-semibold text-indigo-900 dark:text-indigo-300 mb-4">
            📚 Prompt Templates (Click để sử dụng)
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              @click="loadTemplate('component')"
              class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 transition-colors text-left"
            >
              <div class="font-semibold text-gray-900 dark:text-white mb-1">Component</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Tạo Vue component</div>
            </button>
            <button
              @click="loadTemplate('composable')"
              class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 transition-colors text-left"
            >
              <div class="font-semibold text-gray-900 dark:text-white mb-1">Composable</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Tạo custom hook</div>
            </button>
            <button
              @click="loadTemplate('refactor')"
              class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 transition-colors text-left"
            >
              <div class="font-semibold text-gray-900 dark:text-white mb-1">Refactor</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Cải thiện code</div>
            </button>
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { sendPrompt } from '@/utils/ai';

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

const promptBuilder = ref({
  goal: '',
  context: '',
  requirements: '',
  outputFormat: 'code+comments'
});

const generatedPrompt = ref('');
const testResult = ref('');
const isTesting = ref(false);
const viewMode = ref('code'); // 'code' or 'preview'
const renderedHTML = ref('');
const renderedCSS = ref('');

const templates = {
  component: {
    goal: 'Tạo Vue 3 component',
    context: 'Vue 3 với Composition API, TypeScript, Tailwind CSS',
    requirements: '- Props với TypeScript interfaces\n- Responsive design\n- Loading và error states\n- Accessibility (ARIA labels)',
    outputFormat: 'code+comments'
  },
  composable: {
    goal: 'Tạo Vue 3 composable',
    context: 'Vue 3 với Composition API, TypeScript',
    requirements: '- Reusable logic\n- TypeScript generics\n- Error handling\n- Return reactive state',
    outputFormat: 'code+comments'
  },
  refactor: {
    goal: 'Refactor code',
    context: 'Vue 3 project hiện tại',
    requirements: '- Improve code organization\n- Better TypeScript types\n- Performance optimization\n- Add tests',
    outputFormat: 'full'
  }
};

function generatePrompt() {
  if (!promptBuilder.value.goal) {
    alert('Vui lòng nhập mục tiêu!');
    return;
  }

  let prompt = `${promptBuilder.value.goal}\n\n`;

  if (promptBuilder.value.context) {
    prompt += `Context: ${promptBuilder.value.context}\n\n`;
  }

  if (promptBuilder.value.requirements) {
    prompt += `Requirements:\n${promptBuilder.value.requirements}\n\n`;
  }

  prompt += `Output Format: ${promptBuilder.value.outputFormat}\n\n`;
  prompt += `Trả về code với best practices, proper error handling, và documentation.`;

  generatedPrompt.value = prompt;
  testResult.value = '';
}

function loadTemplate(templateKey) {
  const template = templates[templateKey];
  if (template) {
    promptBuilder.value = { ...template };
    generatePrompt();
  }
}

function copyPrompt() {
  if (generatedPrompt.value) {
    navigator.clipboard.writeText(generatedPrompt.value);
    alert('✅ Đã copy prompt vào clipboard!');
  }
}

function extractHTML(response) {
  // Tìm HTML trong response (có thể trong code blocks hoặc trực tiếp)
  const htmlPatterns = [
    // Tìm trong ```html hoặc ```vue blocks
    /```(?:html|vue)\s*([\s\S]*?)```/gi,
    // Tìm trong <template> tags
    /<template[^>]*>([\s\S]*?)<\/template>/gi,
  ];

  let htmlContent = '';
  let cssContent = '';

  // Thử extract từ code blocks trước
  for (const pattern of htmlPatterns) {
    const matches = response.matchAll(pattern);
    for (const match of matches) {
      if (match[1]) {
        const fullHTML = match[1].trim();
        
        // Nếu là full HTML document
        if (fullHTML.includes('<!DOCTYPE') || fullHTML.includes('<html')) {
          // Extract body content
          const bodyMatch = fullHTML.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
          if (bodyMatch) {
            htmlContent = bodyMatch[1].trim();
          } else {
            // Nếu không có body tag, lấy phần sau </head> hoặc toàn bộ
            const afterHead = fullHTML.split(/<\/head>/i)[1];
            if (afterHead) {
              htmlContent = afterHead.replace(/<\/?html[^>]*>/gi, '').replace(/<\/?body[^>]*>/gi, '').trim();
            } else {
              htmlContent = fullHTML;
            }
          }
          
          // Extract CSS từ <style> tag
          const styleMatch = fullHTML.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
          if (styleMatch) {
            cssContent = styleMatch[1].trim();
          }
        } else {
          // Nếu chỉ là HTML fragment
          htmlContent = fullHTML;
          
          // Vẫn thử tìm style tag
          const styleMatch = fullHTML.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
          if (styleMatch) {
            cssContent = styleMatch[1].trim();
          }
        }
        break;
      }
    }
    if (htmlContent) break;
  }

  // Nếu không tìm thấy trong code blocks, tìm HTML trực tiếp
  if (!htmlContent) {
    // Thử tìm full HTML document
    const fullDocMatch = response.match(/<!DOCTYPE[\s\S]*?<\/html>/i);
    if (fullDocMatch) {
      const fullHTML = fullDocMatch[0];
      const bodyMatch = fullHTML.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      if (bodyMatch) {
        htmlContent = bodyMatch[1].trim();
      }
      const styleMatch = fullHTML.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
      if (styleMatch) {
        cssContent = styleMatch[1].trim();
      }
    } else {
      // Tìm HTML fragment
      const directHTMLMatch = response.match(/<[a-z][\s\S]*?<\/[a-z]+>/i);
      if (directHTMLMatch) {
        htmlContent = directHTMLMatch[0];
      }
    }
  }

  return {
    html: htmlContent,
    css: cssContent
  };
}

let injectedStyleElement = null;

function injectCSS(css) {
  // Remove existing injected style if any
  removeInjectedCSS();
  
  if (css) {
    // Tạo style element và inject vào head
    injectedStyleElement = document.createElement('style');
    injectedStyleElement.setAttribute('data-preview-css', 'true');
    injectedStyleElement.textContent = css;
    document.head.appendChild(injectedStyleElement);
  }
}

function removeInjectedCSS() {
  if (injectedStyleElement) {
    injectedStyleElement.remove();
    injectedStyleElement = null;
  }
  // Also remove any orphaned style elements
  const existing = document.querySelector('style[data-preview-css]');
  if (existing) {
    existing.remove();
  }
}

function sanitizeHTML(html) {
  // Basic sanitization - chỉ cho phép safe HTML tags
  // Trong production, nên dùng thư viện như DOMPurify
  const allowedTags = ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
                       'button', 'input', 'label', 'form', 'img', 'a', 'ul', 'ol', 'li',
                       'table', 'tr', 'td', 'th', 'thead', 'tbody', 'section', 'article',
                       'header', 'footer', 'nav', 'main', 'aside', 'figure', 'figcaption',
                       'strong', 'em', 'b', 'i', 'u', 'code', 'pre', 'blockquote'];
  
  // Tạo một div tạm để parse HTML
  const temp = document.createElement('div');
  temp.innerHTML = html;
  
  // Remove script và style tags
  const scripts = temp.querySelectorAll('script, style, iframe, object, embed');
  scripts.forEach(el => el.remove());
  
  // Remove các event handlers (onclick, onerror, etc.)
  const allElements = temp.querySelectorAll('*');
  allElements.forEach(el => {
    Array.from(el.attributes).forEach(attr => {
      if (attr.name.startsWith('on')) {
        el.removeAttribute(attr.name);
      }
    });
  });
  
  return temp.innerHTML;
}

async function testPrompt() {
  if (!generatedPrompt.value) {
    alert('Vui lòng tạo prompt trước!');
    return;
  }

  isTesting.value = true;
  testResult.value = '';
  renderedHTML.value = '';
  renderedCSS.value = '';
  viewMode.value = 'code';

  try {
    // Thêm instruction để AI trả về HTML nếu có thể
    const enhancedPrompt = `${generatedPrompt.value}\n\nLưu ý: Nếu bạn tạo HTML/UI, hãy đảm bảo code HTML nằm trong code block \`\`\`html hoặc \`\`\`vue để có thể render được. Nếu có CSS, hãy đặt trong thẻ <style> bên trong code block.`;

    const response = await sendPrompt({
      role: 'system',
      prompt: enhancedPrompt,
      context: {}
    });

    testResult.value = response;

    // Extract và render HTML + CSS
    const extracted = extractHTML(response);
    if (extracted && extracted.html) {
      renderedHTML.value = sanitizeHTML(extracted.html);
      renderedCSS.value = extracted.css || '';
      // Tự động chuyển sang preview mode nếu có HTML
      viewMode.value = 'preview';
      
      // Inject CSS vào DOM sau khi render
      await nextTick();
      injectCSS(extracted.css || '');
    } else {
      // Nếu không có HTML, giữ ở code mode
      viewMode.value = 'code';
      renderedHTML.value = '';
      renderedCSS.value = '';
      removeInjectedCSS();
    }
  } catch (error) {
    testResult.value = `❌ Lỗi: ${error.message}\n\nVui lòng kiểm tra lại kết nối API hoặc thử lại sau.`;
    renderedHTML.value = '';
    renderedCSS.value = '';
    viewMode.value = 'code';
    removeInjectedCSS();
  } finally {
    isTesting.value = false;
  }
}

onMounted(() => {
  const sections = document.querySelectorAll('[id^="introduction"], [id^="principles"], [id^="step-by-step"], [id^="best-practices"], [id^="examples"], [id^="practice"]');
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

onUnmounted(() => {
  removeInjectedCSS();
});
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}

/* Styles cho preview content */
.preview-content :deep(*) {
  max-width: 100%;
}

.preview-content :deep(img) {
  max-width: 100%;
  height: auto;
}

.preview-content :deep(button) {
  cursor: pointer;
}

.preview-content :deep(input),
.preview-content :deep(textarea),
.preview-content :deep(select) {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
}

.preview-content :deep(.dark *) {
  color: inherit;
}
</style>

