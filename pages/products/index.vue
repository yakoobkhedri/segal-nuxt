<template>
     <main class="mt-4 position-relative">

<!-- product -->
<section id="productDetails">
  <div class="container pt-md-3">
    <!-- product number -->
    <div class="position-relative h-114 mt-lg-3 mt-5 productNum">
      <!-- bg -->
      <img alt="bg" src="assets/img/productsNumBg.png" class="img-fluid -z-1 d-none d-md-block rotate-y-180-ltr">
      <!--  -->
      <div class="d-flex align-items-center flex-column flex-md-row gap-4 position-absolute top-0 mt-3 mt-xl-4 pt-xxl-3 w-100">
        <!-- svg -->
          <img alt="svg" src="assets/img/productsNumsvg.png" class="img-fluid position-absolute -top-23">
        <!--  -->
        <div class="d-flex align-items-center flex-shrink-0 gap-3 mx-xl-3 mx-lg-1 mx-3 position-relative -top-36">
          <svg class="d-none d-lg-block" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
            <path opacity="0.5" d="M9.16709 22.1693C9.16709 12.4572 16.8625 4.58301 26.3546 4.58301C35.8467 4.58301 43.5421 12.4572 43.5421 22.1693C43.5504 24.6321 43.0455 27.0698 42.0594 29.3267C41.0734 31.5836 39.628 33.6103 37.8152 35.2776C36.6465 36.3478 35.7779 37.143 35.1638 37.7205C34.8526 38.0127 34.547 38.3106 34.2471 38.6143L34.1898 38.6761L34.1715 38.699C33.6283 39.382 33.5115 39.5584 33.4427 39.7188C33.374 39.8793 33.3213 40.0855 33.1838 40.9563C33.131 41.3001 33.1242 41.8868 33.1242 43.4886V43.5574C33.1242 44.4947 33.1242 45.3036 33.0669 45.9659C33.005 46.6672 32.8675 47.3638 32.4985 48.017C32.09 48.7437 31.4972 49.35 30.7798 49.7747C30.1427 50.1528 29.4621 50.2926 28.7769 50.3568C28.1283 50.4163 27.3377 50.4163 26.421 50.4163H26.2881C25.3715 50.4163 24.5808 50.4163 23.9323 50.3568C23.2448 50.2926 22.5665 50.1505 21.9271 49.7747C21.2105 49.3497 20.6185 48.7434 20.2106 48.017C19.844 47.3638 19.7065 46.6695 19.6423 45.9659C19.5827 45.3013 19.5827 44.4947 19.5827 43.5574V43.4886C19.5827 41.8868 19.5781 41.3001 19.5231 40.9563C19.3856 40.0855 19.3375 39.8793 19.2665 39.7188C19.1977 39.5584 19.0808 39.382 18.5377 38.6968L18.5194 38.6738C18.2011 38.3488 17.8764 38.0302 17.5454 37.7182C16.9313 37.1453 16.0627 36.3478 14.894 35.2753C13.0815 33.6083 11.6362 31.5819 10.6502 29.3254C9.66418 27.0689 9.15908 24.6318 9.16709 22.1693Z" fill="white"/>
            <path d="M29.987 45.0884H22.7225C22.7293 45.3107 22.7385 45.5032 22.7545 45.6797C22.7958 46.1609 22.8691 46.3328 22.9173 46.4199C23.0533 46.6624 23.2509 46.8647 23.4902 47.0065C23.575 47.0546 23.7445 47.1303 24.2143 47.1715C24.7048 47.2174 25.351 47.2197 26.3548 47.2197C27.3562 47.2197 28.0048 47.2197 28.4952 47.1738C28.9627 47.128 29.1345 47.0546 29.2193 47.0065C29.4586 46.8647 29.6562 46.6624 29.7923 46.4199C29.8381 46.3328 29.9114 46.1586 29.9527 45.6797C29.9687 45.5055 29.9802 45.3107 29.987 45.0884ZM28.8985 18.7388C29.602 19.2522 29.7648 20.2513 29.2629 20.9686L26.5633 24.8369H29.7762C30.0653 24.8383 30.3482 24.9201 30.5935 25.0731C30.8387 25.226 31.0366 25.4442 31.165 25.7032C31.2967 25.965 31.3554 26.2576 31.3349 26.55C31.3143 26.8424 31.2152 27.1238 31.0481 27.3647L26.5839 33.7561C26.4674 33.9263 26.318 34.0713 26.1443 34.1826C25.9707 34.294 25.7765 34.3693 25.5733 34.4041C25.37 34.4389 25.1618 34.4326 24.9611 34.3855C24.7603 34.3383 24.5711 34.2513 24.4045 34.1297C24.0659 33.8782 23.8385 33.5048 23.7705 33.0886C23.7024 32.6724 23.7992 32.246 24.0402 31.8999L26.7398 28.0315H23.5268C23.2376 28.0299 22.9544 27.9478 22.7091 27.7944C22.4639 27.641 22.2661 27.4224 22.1381 27.163C22.0068 26.9014 21.9483 26.6093 21.9689 26.3174C21.9894 26.0254 22.0883 25.7444 22.255 25.5038L26.7191 19.1101C26.8356 18.9399 26.9851 18.7948 27.1587 18.6835C27.3323 18.5722 27.5265 18.4969 27.7298 18.4621C27.933 18.4272 28.1412 18.4336 28.342 18.4807C28.5427 18.5279 28.732 18.6149 28.8985 18.7365V18.7388Z" fill="white"/>
            </svg>
            <div class="text-white black-md">
              <p class="font-bold fs-18 mb-0">لوازم الکترونیک</p>
              <p class="fs-14 text-center text-md-end mb-0">۳۵۶۰ محصول</p>
            </div>
        </div>
        <div class="rounded-21 overflow-hidden shadow10 bg-white flex-grow-1 gap-5 h-141 position-relative -top-41 w-100 d-flex align-items-center px-3 me-xxl-3">
          <div class="products w-100">
           <SwiperMain
                  :slides-per-view="2"
                  :space-between="20"
                  :pagination="false"
                  :navigation="false"
                  :breakpoints="{
                    '576': {slidesPerView:3},
                    '768': {slidesPerView:4},
                    '992': {slidesPerView:5},
                    '1200': {slidesPerView:7.6},
                  }"
                >
                  <SwiperSlide v-for="n in 9" :key="n" class="shadow13">
                    <a class="d-flex flex-column text-center fw-bold fs-12 text-dark">
                <img alt="product" src="assets/img/productnum.png" class="img-fluid w-42 d-block mx-auto">
                 <p class="mb-0 mt-2"> ۳۰۰ + محصول</p>
               </a>
                  </SwiperSlide>
                </SwiperMain>
          </div>
        </div>
      </div>
    </div>
    <!-- product filter -->
    <div class="row g-4 mt-5 pt-5 pt-md-4">
      <div class="col-lg-3">
        <form class="rounded-21 shadow10 p-3">
          <div
            class="rounded-21 bg-gradient-main h-76 position-relative -top-34 d-flex align-items-center justify-content-center gap-3 fs-15 fw-bold text-white">
            <!-- shape -->
            <div class="position-absolute h-15 -top-15 start-0 end-0 mx-4 bg-main4 rounded-t-20"></div>
            <!--  -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5 3H19L8.816 13.184C8.65154 12.7626 8.38405 12.3893 8.038 12.098C7.81 11.9 7.491 11.721 6.855 11.362L3.942 9.722C2.993 9.189 2.519 8.922 2.26 8.492C2 8.061 2 7.541 2 6.503V5.813C2 4.487 2 3.823 2.44 3.411C2.878 3 3.585 3 5 3Z"
                fill="white" />
              <path opacity="0.5"
                d="M21.9999 6.504V5.814C21.9999 4.488 21.9999 3.824 21.5599 3.412C21.1219 3 20.4149 3 18.9999 3L8.81494 13.184C8.86494 13.313 8.90494 13.447 8.93594 13.587C8.99994 13.872 8.99994 14.206 8.99994 14.873V17.543C8.99994 18.452 8.99994 18.907 9.25194 19.261C9.50394 19.616 9.95194 19.791 10.8459 20.141C12.7249 20.875 13.6639 21.242 14.3319 20.824C14.9999 20.407 14.9999 19.452 14.9999 17.542V14.872C14.9999 14.206 14.9999 13.872 15.0629 13.587C15.1888 13.004 15.5055 12.4797 15.9629 12.097C16.1899 11.9 16.5079 11.721 17.1449 11.362L20.0579 9.722C21.0059 9.189 21.4809 8.922 21.7399 8.492C21.9999 8.062 21.9999 7.542 21.9999 6.504Z"
                fill="white" />
            </svg>
            <p class="mb-0">فیلتر نتایج جستجو</p>
          </div>
          <!-- search -->
          <div class="rounded-14 h-57 d-flex align-items-center fs-14 p-3 bg-gray5">
            <input placeholder="جستجو در عناوین ..." class="w-100 flex-grow-1 bg-transparent border-0 outline-none">
            <div class="rounded-9 d-flex align-items-center justify-content-center bg-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6.57987 0C10.2079 0 13.1591 2.95111 13.1591 6.57919C13.1591 8.2909 12.5022 9.85208 11.4272 11.0238L13.5424 13.1345C13.7404 13.3325 13.741 13.6527 13.5431 13.8507C13.4444 13.9507 13.314 14 13.1843 14C13.0553 14 12.9256 13.9507 12.8262 13.852L10.6855 11.7173C9.5594 12.6191 8.13155 13.1591 6.57987 13.1591C2.95179 13.1591 0 10.2073 0 6.57919C0 2.95111 2.95179 0 6.57987 0ZM6.57987 1.01343C3.51052 1.01343 1.01343 3.50985 1.01343 6.57919C1.01343 9.64853 3.51052 12.1456 6.57987 12.1456C9.64853 12.1456 12.1456 9.64853 12.1456 6.57919C12.1456 3.50985 9.64853 1.01343 6.57987 1.01343Z"
                  fill="#0E1935"></path>
              </svg>
            </div>
          </div>
          <!-- filter -->
          <div>
            <div class="mt-3 fs-15">
              <div @click="toggleTabs(1)"
                class="d-flex align-items-center filterBtn justify-content-between cursor-pointer py-3 border-bottom border-2">
                <p class="mb-0">قیمت </p>
                <svg :class="{ 'active': openTab === 1 }" xmlns="http://www.w3.org/2000/svg" width="10" height="6" class="transition" viewBox="0 0 10 6"
                  fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684095 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684094 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z"
                    fill="#0F172A"></path>
                </svg>
              </div>
              <!--  -->
              <div :class="{ 'active': openTab === 1 }" class="filterContent transition overflow-hidden">
                <label class="form-label d-block mb-2 cursor-pointer px-1 pt-3">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  2,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  4,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  5,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  7,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  سایر
                </label>
              </div>
            </div>
            <div class="fs-15">
              <div @click="toggleTabs(2)"
                class="d-flex align-items-center filterBtn justify-content-between cursor-pointer py-3 border-bottom border-2">
                <p class="mb-0">رنگ </p>
                <svg :class="{ 'active': openTab === 2 }" xmlns="http://www.w3.org/2000/svg" width="10" height="6" class="transition" viewBox="0 0 10 6"
                  fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684095 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684094 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z"
                    fill="#0F172A"></path>
                </svg>
              </div>
              <!--  -->
              <div :class="{ 'active': openTab === 2 }" class="filterContent transition overflow-hidden">
                <label class="form-label d-block mb-2 cursor-pointer px-1 pt-3">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  2,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  4,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  5,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  7,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  سایر
                </label>
              </div>
            </div>
            <div class="fs-15">
              <div @click="toggleTabs(3)"
                class="d-flex align-items-center filterBtn justify-content-between cursor-pointer py-3 border-bottom border-2">
                <p class="mb-0">برند </p>
                <svg :class="{ 'active': openTab === 3 }" xmlns="http://www.w3.org/2000/svg" width="10" height="6" class="transition" viewBox="0 0 10 6"
                  fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684095 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684094 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z"
                    fill="#0F172A"></path>
                </svg>
              </div>
              <!--  -->
              <div :class="{ 'active': openTab === 3 }" class="filterContent transition overflow-hidden">
                <label class="form-label d-block mb-2 cursor-pointer px-1 pt-3">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  2,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  4,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  5,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  7,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  سایر
                </label>
              </div>
            </div>
            <div class="fs-15">
              <div @click="toggleTabs(4)"
                class="d-flex align-items-center filterBtn justify-content-between cursor-pointer py-3 border-bottom border-2">
                <p class="mb-0">امتیاز </p>
                <svg :class="{ 'active': openTab === 4 }" xmlns="http://www.w3.org/2000/svg" width="10" height="6" class="transition" viewBox="0 0 10 6"
                  fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684095 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684094 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z"
                    fill="#0F172A"></path>
                </svg>
              </div>
              <!--  -->
              <div :class="{ 'active': openTab === 4 }" class="filterContent transition overflow-hidden">
                <label class="form-label d-block mb-2 cursor-pointer px-1 pt-3">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  2,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  4,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  5,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  7,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  سایر
                </label>
              </div>
            </div>
            <div class="fs-15">
              <div @click="toggleTabs(5)"
                class="d-flex align-items-center filterBtn justify-content-between cursor-pointer py-3 border-bottom border-2">
                <p class="mb-0">میزان فروش </p>
                <svg :class="{ 'active': openTab === 5 }" xmlns="http://www.w3.org/2000/svg" width="10" height="6" class="transition" viewBox="0 0 10 6"
                  fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684095 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684094 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z"
                    fill="#0F172A"></path>
                </svg>
              </div>
              <!--  -->
              <div :class="{ 'active': openTab === 5 }" class="filterContent transition overflow-hidden">
                <label class="form-label d-block mb-2 cursor-pointer px-1 pt-3">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  2,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  4,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  5,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  7,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  سایر
                </label>
              </div>
            </div>
            <div class="fs-15">
              <div @click="toggleTabs(6)" class="d-flex align-items-center filterBtn justify-content-between cursor-pointer py-3">
                <p class="mb-0">نوع </p>
                <svg :class="{ 'active': openTab === 6 }" xmlns="http://www.w3.org/2000/svg" width="10" height="6" class="transition" viewBox="0 0 10 6"
                  fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684095 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684094 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z"
                    fill="#0F172A"></path>
                </svg>
              </div>
              <!--  -->
              <div :class="{ 'active': openTab === 6 }" class="filterContent transition overflow-hidden">
                <label class="form-label d-block mb-2 cursor-pointer px-1 pt-3">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  2,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  4,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  5,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block mb-2 cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  7,000,000 میلیون تومان به بالا
                </label>
                <label class="form-label d-block cursor-pointer px-1">
                  <input type="checkbox" name="type" class="form-check-input ms-2 cursor-pointer">
                  سایر
                </label>
              </div>
            </div>
          </div>
          <!-- submit -->
          <input value="جستجو" type="submit" class="bg-gradient-main text-white rounded-21 border-0 w-100 p-3 font-bold mt-4">
        </form>
      </div>
      <div class="col-lg-9 mt-lg-3 mt-5">
        <div class="row g-4 mx-0 bg-white p-2 pb-4 shadow8 rounded-21">
          <div v-for="(product,index) in products.products" :key="index" class="col-xxl-4 col-xl-4 col-md-6">
            <div class="rounded-21 bg-white p-3 shadow10 position-relative">
              <!-- options -->
              <ul class="list-unstyled pe-0 mb-0 min-w-50 position-absolute start-0 left-ltr-auto">
                <li class="mb-2 compare-product "
                compare-img="assets/img/related-product.png"
                compare-title=" لامپ ال ای دی هوشمند ۷ وات مدل رنگین کمانی 121" 
                compare-price="3,150,000"
                compare-oldPrice="4,100,000"
                compare-off="10%" compare-id="3">
                  <a class="px-0">
                    <svg class="d-block mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24" fill="none">
                      <path opacity="0.5"
                        d="M13 15.4C13 13.326 13 12.289 13.659 11.644C14.318 11 15.379 11 17.5 11C19.621 11 20.682 11 21.341 11.644C22 12.29 22 13.326 22 15.4V17.6C22 19.674 22 20.711 21.341 21.356C20.682 22 19.621 22 17.5 22C15.379 22 14.318 22 13.659 21.356C13 20.71 13 19.674 13 17.6V15.4Z"
                        fill="black" />
                      <path
                        d="M2 8.6C2 10.674 2 11.711 2.659 12.356C3.318 13 4.379 13 6.5 13C8.621 13 9.682 13 10.341 12.356C11 11.71 11 10.674 11 8.6V6.4C11 4.326 11 3.289 10.341 2.644C9.682 2 8.621 2 6.5 2C4.379 2 3.318 2 2.659 2.644C2 3.29 2 4.326 2 6.4V8.6ZM13 5.5C13 4.413 13 3.87 13.171 3.44C13.3937 2.87455 13.8318 2.42064 14.389 2.178C14.802 2 15.327 2 16.375 2H18.625C19.673 2 20.198 2 20.611 2.178C21.162 2.414 21.601 2.868 21.829 3.44C22 3.87 22 4.413 22 5.5C22 6.587 22 7.13 21.829 7.56C21.6063 8.12545 21.1682 8.57936 20.611 8.822C20.198 9 19.673 9 18.625 9H16.375C15.327 9 14.802 9 14.389 8.822C13.8318 8.57936 13.3937 8.12545 13.171 7.56C13 7.13 13 6.587 13 5.5Z"
                        fill="black" />
                      <path opacity="0.5"
                        d="M2 18.5C2 19.587 2 20.13 2.171 20.56C2.39372 21.1255 2.8318 21.5794 3.389 21.822C3.802 22 4.327 22 5.375 22H7.625C8.673 22 9.198 22 9.611 21.822C10.162 21.586 10.601 21.132 10.829 20.56C11 20.13 11 19.587 11 18.5C11 17.413 11 16.87 10.829 16.44C10.6063 15.8745 10.1682 15.4206 9.611 15.178C9.198 15 8.673 15 7.625 15H5.375C4.327 15 3.802 15 3.389 15.178C2.838 15.414 2.399 15.868 2.171 16.44C2 16.87 2 17.413 2 18.5Z"
                        fill="black" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a class="px-0">
                    <svg class="d-block mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M13.803 5.33301C13.803 3.49301 15.303 2.00001 17.151 2.00001C17.5897 1.99896 18.0244 2.08433 18.4302 2.25126C18.8359 2.41819 19.2048 2.66341 19.5158 2.97291C19.8268 3.2824 20.0738 3.65012 20.2426 4.05507C20.4115 4.46002 20.499 4.89426 20.5 5.33301C20.5 7.17401 19 8.66701 17.151 8.66701C16.7076 8.66756 16.2685 8.57996 15.8592 8.40932C15.45 8.23868 15.0787 7.98839 14.767 7.67301L10.132 10.829C10.2611 11.472 10.1978 12.1388 9.95 12.746L15.032 16.086C15.6306 15.5978 16.3796 15.3318 17.152 15.333C17.5907 15.3321 18.0254 15.4176 18.4311 15.5846C18.8368 15.7517 19.2056 15.997 19.5165 16.3066C19.8274 16.6162 20.0743 16.984 20.243 17.389C20.4118 17.794 20.4991 18.2283 20.5 18.667C20.5 20.507 19 22 17.151 22C16.2651 22.0019 15.4147 21.6518 14.7869 21.0268C14.159 20.4017 13.8051 19.5529 13.803 18.667C13.8022 18.1996 13.9007 17.7374 14.092 17.311L9.05 14C8.43941 14.5309 7.65712 14.8226 6.848 14.821C6.40922 14.8221 5.97453 14.7366 5.56877 14.5696C5.16301 14.4026 4.79413 14.1573 4.48321 13.8477C4.17229 13.5381 3.92543 13.1702 3.75673 12.7652C3.58802 12.3601 3.50079 11.9258 3.5 11.487C3.50092 11.0483 3.58825 10.6141 3.75701 10.2091C3.92578 9.80421 4.17266 9.43648 4.48356 9.12697C4.79447 8.81746 5.1633 8.57223 5.569 8.40528C5.97469 8.23834 6.4093 8.15296 6.848 8.15401C7.912 8.15401 8.858 8.64701 9.471 9.41501L13.964 6.35601C13.8571 6.02554 13.8028 5.68034 13.803 5.33301Z"
                        fill="black" />
                    </svg>
                  </a>
                </li>
              </ul>
              <!--  -->
              <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
              <NuxtLink :to="`/products/${product.id}`" class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
               {{product.title}}
              </NuxtLink>
              <div class="d-flex align-items-center gap-3 h-65">
                <a class="d-flex flex-shrink-0 align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M6.25 15C6.58152 15 6.89946 15.1317 7.13388 15.3661C7.3683 15.6005 7.5 15.9185 7.5 16.25C7.5 16.5815 7.3683 16.8995 7.13388 17.1339C6.89946 17.3683 6.58152 17.5 6.25 17.5C5.91848 17.5 5.60054 17.3683 5.36612 17.1339C5.1317 16.8995 5 16.5815 5 16.25C5 15.9185 5.1317 15.6005 5.36612 15.3661C5.60054 15.1317 5.91848 15 6.25 15ZM13.75 15C14.0815 15 14.3995 15.1317 14.6339 15.3661C14.8683 15.6005 15 15.9185 15 16.25C15 16.5815 14.8683 16.8995 14.6339 17.1339C14.3995 17.3683 14.0815 17.5 13.75 17.5C13.4185 17.5 13.1005 17.3683 12.8661 17.1339C12.6317 16.8995 12.5 16.5815 12.5 16.25C12.5 15.9185 12.6317 15.6005 12.8661 15.3661C13.1005 15.1317 13.4185 15 13.75 15Z"
                      fill="#27817A"></path>
                    <path opacity="0.5"
                      d="M1.73648 2.29254C1.79142 2.13619 1.90622 2.00806 2.05561 1.93633C2.20501 1.8646 2.37678 1.85514 2.53315 1.91004L2.78398 1.99837C3.29815 2.1792 3.73398 2.33254 4.07815 2.50087C4.44481 2.6817 4.75981 2.90337 4.99648 3.25004C5.23148 3.59337 5.32898 3.97087 5.37315 4.38504C5.39315 4.57004 5.40398 4.77504 5.40981 5.00004H14.2748C15.679 5.00004 16.9431 5.00004 17.3131 5.48087C17.6831 5.9617 17.5381 6.6867 17.249 8.13587L16.8323 10.1567C16.5698 11.43 16.439 12.0675 15.979 12.4417C15.519 12.8167 14.869 12.8167 13.5681 12.8167H9.14898C6.82398 12.8167 5.66231 12.8167 4.94065 12.055C4.21898 11.2934 4.16565 10.485 4.16565 8.03337V5.86504C4.16565 5.24837 4.16565 4.83587 4.13065 4.5192C4.09731 4.2167 4.03981 4.06504 3.96398 3.95504C3.89148 3.84754 3.78065 3.7467 3.52731 3.62337C3.25815 3.4917 2.89231 3.3617 2.33565 3.16587L2.11898 3.09004C2.04139 3.06292 1.96991 3.02076 1.90864 2.96598C1.84737 2.9112 1.7975 2.84488 1.76189 2.7708C1.72628 2.69672 1.70564 2.61635 1.70113 2.53428C1.69663 2.45222 1.70836 2.37007 1.73565 2.29254H1.73648Z"
                      fill="#27817A"></path>
                    <path
                      d="M11.4582 7.5C11.4582 7.33424 11.3923 7.17527 11.2751 7.05806C11.1579 6.94085 10.9989 6.875 10.8332 6.875C10.6674 6.875 10.5084 6.94085 10.3912 7.05806C10.274 7.17527 10.2082 7.33424 10.2082 7.5V8.54167H9.1665C9.00074 8.54167 8.84177 8.60752 8.72456 8.72473C8.60735 8.84194 8.5415 9.00091 8.5415 9.16667C8.5415 9.33243 8.60735 9.4914 8.72456 9.60861C8.84177 9.72582 9.00074 9.79167 9.1665 9.79167H10.2082V10.8333C10.2082 10.9991 10.274 11.1581 10.3912 11.2753C10.5084 11.3925 10.6674 11.4583 10.8332 11.4583C10.9989 11.4583 11.1579 11.3925 11.2751 11.2753C11.3923 11.1581 11.4582 10.9991 11.4582 10.8333V9.79167H12.4998C12.6656 9.79167 12.8246 9.72582 12.9418 9.60861C13.059 9.4914 13.1248 9.33243 13.1248 9.16667C13.1248 9.00091 13.059 8.84194 12.9418 8.72473C12.8246 8.60752 12.6656 8.54167 12.4998 8.54167H11.4582V7.5Z"
                      fill="#27817A"></path>
                  </svg>
                </a>
                <div class="flex-grow-1">
                  <div class="d-flex align-items-center justify-content-end gap-2">
                    <p class="fs-12 text-gray text-decoration-line-through mb-0">4،۱۰۰،۰۰۰</p>
                    <p class="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill">۱0٪</p>
                  </div>
                  <div class="d-flex align-items-end justify-content-end gap-1 mt-1">
                    <p class="fs-17 font-bold mb-0">{{ product.price }}</p>
                    <p class="mb-1 fs-12 fw-bold">تومان</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- pagination -->
        <div id="pagination" class="bg-white rounded-22 shadow8 h-68 mx-2 mt-4 overflow-hidden">
          <ul class="d-flex align-items-center justify-content-between mb-0 gap-sm-4 w-100 h-100 gap-3 fs-15 pagination pe-0">
            <li class="ms-auto mr-ltr-auto h-100">
              <a class="d-flex align-items-center gap-2 px-4 h-100 shadow">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                  <path
                    d="M8.408 7.80005L5.29614 4.06672C5.07776 3.80005 4.7502 3.80005 4.53182 4.06672C4.31344 4.33338 4.31344 4.73338 4.53182 5.00005L7.20693 8.33338L4.53182 11.6667C4.31344 11.9334 4.31344 12.3334 4.53182 12.6C4.64101 12.7334 4.7502 12.8 4.91398 12.8C5.07776 12.8 5.18695 12.7334 5.29614 12.6L8.408 8.86672C8.62637 8.53338 8.62637 8.13338 8.408 7.80005C8.408 7.86672 8.408 7.86672 8.408 7.80005Z"
                    fill="#1E2D48"></path>
                </svg>
                <p class="mb-0 text-gray fs-15"><span class="d-none d-sm-inline-block">صفحه</span> قبل</p>
              </a>
            </li>
            <li><a class="text-gray">15</a></li>
            <li><a class="text-gray">...</a></li>
            <li class="d-none d-md-block"><a class="text-gray">7</a></li>
            <li class="d-none d-md-block"><a class="text-gray">6</a></li>
            <li class="d-none d-md-block"><a class="text-gray">5</a></li>
            <li class="d-none d-md-block"><a class="text-gray ">4</a></li>
            <li><a class="text-gray">2</a></li>
            <li><a class="text-gray">3</a></li>
            <li><a class="active">1</a></li>
            <li class="me-auto h-100">
              <a class="d-flex align-items-center gap-2 px-4 h-100 shadow">
                <p class="mb-0 text-second fs-15"><span class="d-none d-sm-inline-block">صفحه</span> بعد</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                  <path
                    d="M4.77316 8.19995L7.88502 11.9333C8.10339 12.2 8.43096 12.2 8.64933 11.9333C8.86771 11.6666 8.86771 11.2666 8.64933 11L5.97423 7.66662L8.64933 4.33328C8.86771 4.06662 8.86771 3.66662 8.64933 3.39995C8.54015 3.26662 8.43096 3.19995 8.26717 3.19995C8.10339 3.19995 7.9942 3.26662 7.88502 3.39995L4.77316 7.13328C4.55478 7.46662 4.55478 7.86662 4.77316 8.19995C4.77316 8.13328 4.77316 8.13328 4.77316 8.19995Z"
                    fill="url(#paint0_linear_56_2128)"></path>
                  <defs>
                    <linearGradient id="paint0_linear_56_2128" x1="4.60937" y1="11.0837" x2="9.77231" y2="10.3955"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#5B6CCC"></stop>
                      <stop offset="1" stop-color="#4834AC"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <!-- not found -->
        <div class="rounded-21 mt-4 py-sm-5 py-4 px-3 shadow10 d-flex align-items-center justify-content-center text-center">
          <div class="my-sm-5 py-sm-5">
            <img alt="icon" src="assets/img/Title=No results; Cololr=purple; Fill=Gradient;.png" class="img-fluid">
            <p class="fs-18 font-bold mt-4 mb-1">متاسفانه طبق جستجوی شما نتیجه ای در سایت یافت نشد </p>
            <p class="text-gray">لطفا کلمات کلیدی و یا فیلتر جستجو را تغییر دهید</p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div class="pt-5">
      <div class="mt-5 pt-5">
        <div class="position-relative end-0 rounded-33 bg-white shadow8 px-4 pt-5 pb-3">
          <!-- shape -->
          <img alt="shape" src="assets/img/productsSvg.png" class="position-absolute start-0 top-0 z-0 rotate-y-180-ltr right-ltr-0">
          <!-- tiltle -->
          <div class="position-absolute -top-83 font-bold fs-20 text-white h-131 w-407 mx-2 aboutTitle">
            <!-- svg && bg -->
            <img alt="svg" src="assets/img/aboutShape2.png"
              class="img-fluid position-absolute top-0 start-0 bottom-0 end-0">
            <img alt="svg" src="assets/img/aboutSvg.png" class="img-fluid rotate-0 position-absolute top-0 start-0">
            <!--  -->
            <div class="d-flex align-items-center gap-2 px-4 position-relative mt-sm-5 mt-4 pt-1 pt-sm-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                <path
                  d="M11.2646 26.2433C13.4892 27.4113 14.6015 27.9941 15.7974 27.9941V15.3255L3.93716 9.08374C3.91992 9.11183 3.90303 9.14012 3.88649 9.16862C3.12891 10.4532 3.12891 12.0532 3.12891 15.2521V15.4003C3.12891 18.5978 3.12891 20.1979 3.88522 21.4824C4.6428 22.7683 6.00593 23.4841 8.73093 24.9143L11.2646 26.2433Z"
                  fill="white"></path>
                <path opacity="0.7"
                  d="M22.8621 5.73822L20.3283 4.40802C18.105 3.24125 16.9927 2.65723 15.7968 2.65723C14.5996 2.65723 13.4886 3.23998 11.264 4.40802L8.7303 5.73822C6.06484 7.13682 4.7017 7.85133 3.93652 9.08271L15.7968 15.3258L27.6571 9.08398C26.8894 7.85133 25.5288 7.13682 22.8621 5.73822Z"
                  fill="white"></path>
                <path opacity="0.5"
                  d="M27.7091 9.16862C27.6921 9.14011 27.6748 9.11182 27.6572 9.08374L15.7969 15.3255V27.9941C16.9928 27.9941 18.1051 27.4113 20.3297 26.2433L22.8634 24.9131C25.5884 23.4828 26.9515 22.7683 27.7091 21.4824C28.4654 20.1979 28.4654 18.5978 28.4654 15.4015V15.2533C28.4654 12.0545 28.4654 10.4532 27.7091 9.16862Z"
                  fill="white"></path>
              </svg>
              <p class="mb-0">لورم ایپسوم متن ساختگی طراحان</p>
            </div>
          </div>
          <!--  -->
          <p class="text-gray lh-34 fs-14 p-0">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
            شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
            دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی
            با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
            در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
            را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو
            در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
            سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
            موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
            شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
            و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
            بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
            متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
            افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
            رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با
            تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
            را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو
            در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
            سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
            موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
            شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در
            شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری
            را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می
            توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز
            شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
            گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
      </div>
    </div>
    <!-- compare -->
    <div class="mt-5 pt-5 d-none compare-modal" id="compare-product-modal">
      <!-- title -->
      <div class="rounded-19 bg-gray6 d-flex flex-column flex-md-row gap-3 justify-content-between p-3 position-relative">
        <svg class="position-absolute top-0 me-3" xmlns="http://www.w3.org/2000/svg" width="32" height="55"
          viewBox="0 0 32 55" fill="none">
          <path
            d="M0 0H32V51.4865C32 53.037 30.3121 53.9978 28.9789 53.2062L17.0211 46.1063C16.3917 45.7325 15.6083 45.7325 14.9789 46.1063L3.02108 53.2062C1.6879 53.9978 0 53.037 0 51.4865V0Z"
            fill="#27817A" />
          <path opacity="0.5"
            d="M16.833 26.8333C16.833 25.105 16.833 24.2408 17.3822 23.7033C17.9313 23.1666 18.8155 23.1666 20.583 23.1666C22.3505 23.1666 23.2347 23.1666 23.7838 23.7033C24.333 24.2416 24.333 25.105 24.333 26.8333V28.6666C24.333 30.395 24.333 31.2591 23.7838 31.7966C23.2347 32.3333 22.3505 32.3333 20.583 32.3333C18.8155 32.3333 17.9313 32.3333 17.3822 31.7966C16.833 31.2583 16.833 30.395 16.833 28.6666V26.8333Z"
            fill="white" />
          <path
            d="M7.6665 21.1666C7.6665 22.895 7.6665 23.7591 8.21567 24.2966C8.76484 24.8333 9.649 24.8333 11.4165 24.8333C13.184 24.8333 14.0682 24.8333 14.6173 24.2966C15.1665 23.7583 15.1665 22.895 15.1665 21.1666V19.3333C15.1665 17.605 15.1665 16.7408 14.6173 16.2033C14.0682 15.6666 13.184 15.6666 11.4165 15.6666C9.649 15.6666 8.76484 15.6666 8.21567 16.2033C7.6665 16.7416 7.6665 17.605 7.6665 19.3333V21.1666ZM16.8332 18.5833C16.8332 17.6775 16.8332 17.225 16.9757 16.8666C17.1613 16.3954 17.5263 16.0172 17.9907 15.815C18.3348 15.6666 18.7723 15.6666 19.6457 15.6666H21.5207C22.394 15.6666 22.8315 15.6666 23.1757 15.815C23.6348 16.0116 24.0007 16.39 24.1907 16.8666C24.3332 17.225 24.3332 17.6775 24.3332 18.5833C24.3332 19.4891 24.3332 19.9416 24.1907 20.3C24.0051 20.7712 23.64 21.1494 23.1757 21.3516C22.8315 21.5 22.394 21.5 21.5207 21.5H19.6457C18.7723 21.5 18.3348 21.5 17.9907 21.3516C17.5263 21.1494 17.1613 20.7712 16.9757 20.3C16.8332 19.9416 16.8332 19.4891 16.8332 18.5833Z"
            fill="white" />
          <path opacity="0.5"
            d="M7.6665 29.4167C7.6665 30.3225 7.6665 30.775 7.809 31.1333C7.9946 31.6045 8.35967 31.9828 8.824 32.185C9.16817 32.3333 9.60567 32.3333 10.479 32.3333H12.354C13.2273 32.3333 13.6648 32.3333 14.009 32.185C14.4682 31.9883 14.834 31.61 15.024 31.1333C15.1665 30.775 15.1665 30.3225 15.1665 29.4167C15.1665 28.5108 15.1665 28.0583 15.024 27.7C14.8384 27.2288 14.4733 26.8505 14.009 26.6483C13.6648 26.5 13.2273 26.5 12.354 26.5H10.479C9.60567 26.5 9.16817 26.5 8.824 26.6483C8.36484 26.845 7.999 27.2233 7.809 27.7C7.6665 28.0583 7.6665 28.5108 7.6665 29.4167Z"
            fill="white" />
        </svg>
        <div class="mx-5 pe-3 -mt-4">
          <p class="mb-2"><span class="font-bold">مقایسه</span> محصولات</p>
          <p class="fs-12 text-gray mb-0">مقایسه محصولات انتخابی</p>
        </div>
        <div class="d-flex align-items-md-stretch gap-3">
          <a
            class="compare-all bg-gradient-main shadow8 text-white fw-bold px-3 py-3 py-md-0 rounded-14 d-flex align-items-center justify-content-center gap-2 fs-14">
            <p class="mb-0">مقایسه محصولات</p>
            <svg class="rotate-y-180-ltr" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
              <path
                d="M4.74923 8.19995L7.86109 11.9333C8.07947 12.2 8.40703 12.2 8.62541 11.9333C8.84378 11.6666 8.84378 11.2666 8.62541 11L5.9503 7.66662L8.62541 4.33328C8.84378 4.06662 8.84378 3.66662 8.62541 3.39995C8.51622 3.26662 8.40703 3.19995 8.24325 3.19995C8.07947 3.19995 7.97028 3.26662 7.86109 3.39995L4.74923 7.13328C4.53086 7.46662 4.53086 7.86662 4.74923 8.19995C4.74923 8.13328 4.74923 8.13328 4.74923 8.19995Z"
                fill="white" />
            </svg>
          </a>
          <a
            class="bg-white clear-compare shadow8 text-dark px-3 py-3 py-md-0 rounded-14 d-flex align-items-center justify-content-center gap-2 fs-14">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6.52401C3 6.12901 3.327 5.81001 3.73 5.81001H8.518C8.524 4.96801 8.616 3.81501 9.45 3.01701C10.137 2.36178 11.0506 1.9974 12 2.00001C12.9494 1.9974 13.863 2.36178 14.55 3.01701C15.384 3.81501 15.476 4.96801 15.482 5.81001H20.27C20.673 5.81001 21 6.13001 21 6.52401C20.999 6.61883 20.9792 6.71251 20.942 6.79971C20.9047 6.88691 20.8507 6.96591 20.7829 7.03222C20.7151 7.09852 20.6349 7.15082 20.5469 7.18613C20.4589 7.22144 20.3648 7.23907 20.27 7.23801H3.73C3.63518 7.23907 3.54109 7.22144 3.45309 7.18613C3.36509 7.15082 3.2849 7.09852 3.21711 7.03222C3.14933 6.96591 3.09526 6.88691 3.05801 6.79971C3.02076 6.71251 3.00104 6.61883 3 6.52401Z"
                fill="#DF4F4F" />
              <path opacity="0.5"
                d="M11.5962 22H12.4042C15.1872 22 16.5782 22 17.4842 21.114C18.3882 20.228 18.4802 18.775 18.6652 15.869L18.9322 11.681C19.0322 10.104 19.0822 9.31504 18.6292 8.81604C18.1752 8.31604 17.4092 8.31604 15.8762 8.31604H8.12422C6.59122 8.31604 5.82422 8.31604 5.37122 8.81604C4.91722 9.31604 4.96722 10.104 5.06822 11.681L5.33522 15.869C5.52022 18.775 5.61222 20.229 6.51722 21.114C7.42222 22 8.81322 22 11.5962 22Z"
                fill="#DF4F4F" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M9.42523 11.482C9.83823 11.438 10.2052 11.755 10.2462 12.189L10.7462 17.452C10.7872 17.885 10.4862 18.272 10.0752 18.316C9.66323 18.359 9.29523 18.043 9.25423 17.609L8.75423 12.346C8.71323 11.912 9.01423 11.525 9.42523 11.482ZM14.5752 11.482C14.9872 11.525 15.2882 11.912 15.2462 12.346L14.7462 17.609C14.7062 18.043 14.3382 18.359 13.9262 18.316C13.5132 18.272 13.2132 17.886 13.2542 17.452L13.7542 12.188C13.7952 11.755 14.1632 11.438 14.5742 11.481L14.5752 11.482Z"
                fill="#DF4F4F" />
            </svg>
            <p class="mb-0">پاک کردن لیست</p>
          </a>
        </div>
      </div>
      <!-- compare grid -->
      <div class="row g-4 mx-0 bg-white p-3 mt-4 pb-4 pt-0 shadow8 rounded-21 compare-list">
      
      </div>
    </div>
  </div>
</section>


<!-- shoar -->
<Features />

<!-- wave -->
<img alt="wave" src="assets/img/footerWave.png"
  class="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-md-block d-none">
<img alt="wave" src="assets/img/footerBg2.png"
  class="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-block d-md-none">

</main>
</template>

<script setup>

useHead({
  title: "محصولات",
});

const openTab = ref(1);

function toggleTabs(tabNumber) {
  openTab.value = tabNumber;
}
const products = await $fetch('https://dummyjson.com/products');
</script>

<style>
</style>