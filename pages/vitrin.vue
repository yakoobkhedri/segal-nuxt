<template>
  <main class="position-relative">
    <!-- banner -->
    <Banner />

    <!-- category -->
    <section style="overflow-x: hidden">
      <div class="container px-0 px-md-3">
        <div class="position-relative">
          <div class="category py-lg-5 py-4 px-lg-3 px-2">
            <SwiperMain
            :slides-per-view="1.3"
                :space-between="20"
                :pagination="false"
                :navigation="false"
                :breakpoints="{
                    '400': {slidesPerView:2.2},
                    '768': {slidesPerView:3},
                    '992': {slidesPerView:4},
                    '1200': {slidesPerView:5},
                  }"
                >
                  <SwiperSlide v-for="n in 7" :key="n">
                    <div class="d-block bg-white rounded-20 shadow2 p-md-4 p-3">
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <p class="fs-26 mb-0">۱۲۳۴</p>
                    <a
                      class="w-38 h-38 rounded-14 bg-white d-flex align-items-center justify-content-center shadow2"
                    >
                      <svg
                        class="rotate-y-180-ltr"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="11"
                        viewBox="0 0 9 11"
                        fill="none"
                      >
                        <path
                          d="M0.326223 4.30099C0.376135 4.24976 0.564592 4.03069 0.740142 3.85049C1.76934 2.71716 4.45422 0.862141 5.85948 0.295919C6.07289 0.204935 6.61245 0.0123667 6.90073 -8.44839e-08C7.17696 -7.24094e-08 7.44029 0.0636005 7.69156 0.192568C8.0048 0.37277 8.25608 0.656323 8.39376 0.991109C8.4824 1.22343 8.62008 1.91862 8.62008 1.93098C8.75777 2.69154 8.8335 3.92734 8.8335 5.29298C8.8335 6.59414 8.75777 7.77959 8.64504 8.55163C8.63213 8.564 8.49444 9.4279 8.34385 9.72382C8.06762 10.2644 7.52806 10.6001 6.95064 10.6001L6.90073 10.6001C6.52467 10.5868 5.73384 10.2512 5.73384 10.2388C4.40431 9.67171 1.78139 7.90767 0.727235 6.73548C0.727235 6.73548 0.430348 6.43426 0.301267 6.24611C0.0999019 5.9758 7.98621e-05 5.64102 7.98767e-05 5.30623C7.9893e-05 4.93258 0.11281 4.58454 0.326223 4.30099Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </div>
                  <p class="mb-3 text-gray">محصول</p>
                  <p class="mb-0 font-bold fs-sm-14">اتوماسیون صنعتی</p>
                    </div>
                  </SwiperSlide>
                </SwiperMain>
          </div>
        </div>
      </div>
    </section>

    <!-- special products -->
    <section class="mt-5 pt-1">
      <div class="container">
        <div
          class="rounded-19 bg-gray6 d-flex justify-content-between p-3 position-relative mt-5"
        >
          <svg
            class="position-absolute top-0 me-3"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="55"
            viewBox="0 0 32 55"
            fill="none"
          >
            <path
              d="M0 0H32V51.4865C32 53.037 30.3121 53.9978 28.9789 53.2062L17.0211 46.1063C16.3917 45.7325 15.6083 45.7325 14.9789 46.1063L3.02108 53.2062C1.6879 53.9978 0 53.037 0 51.4865V0Z"
              fill="#27817A"
            ></path>
            <path
              d="M13.0182 31.1818C14.4815 31.9501 15.2132 32.3335 15.9998 32.3335V24.0001L8.19817 19.8943C8.18683 19.9128 8.17572 19.9314 8.16484 19.9501C7.6665 20.7951 7.6665 21.8476 7.6665 23.9518V24.0493C7.6665 26.1526 7.6665 27.2051 8.164 28.0501C8.66234 28.896 9.559 29.3668 11.3515 30.3076L13.0182 31.1818Z"
              fill="white"
            ></path>
            <path
              opacity="0.7"
              d="M20.6474 17.6934L18.9807 16.8184C17.5182 16.0509 16.7866 15.6667 15.9999 15.6667C15.2124 15.6667 14.4816 16.0501 13.0182 16.8184L11.3516 17.6934C9.59824 18.6134 8.70158 19.0834 8.19824 19.8934L15.9999 24.0001L23.8016 19.8942C23.2966 19.0834 22.4016 18.6134 20.6474 17.6934Z"
              fill="white"
            ></path>
            <path
              opacity="0.5"
              d="M23.8358 19.9501C23.8247 19.9314 23.8133 19.9128 23.8017 19.8943L16 24.0001V32.3335C16.7867 32.3335 17.5183 31.9501 18.9817 31.1818L20.6483 30.3068C22.4408 29.366 23.3375 28.896 23.8358 28.0501C24.3333 27.2051 24.3333 26.1526 24.3333 24.0501V23.9526C24.3333 21.8485 24.3333 20.7951 23.8358 19.9501Z"
              fill="white"
            ></path>
          </svg>
          <div class="mx-5 pe-3 -mt-4">
            <p class="mb-2"><span class="font-bold">محصولات</span> ویژه</p>
            <p class="fs-12 text-gray mb-0">آخرین محصولات منتشر</p>
          </div>
          <a
            class="bg-white shadow8 text-dark px-sm-3 px-2 rounded-14 d-flex align-items-center justify-content-center gap-3 fs-14"
          >
            <p class="mb-0">مشاهده همه</p>
            <svg
              class="rotate-y-180-ltr"
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="6"
              viewBox="0 0 5 6"
              fill="none"
            >
              <path
                d="M0.184608 2.4345C0.212859 2.4055 0.319532 2.2815 0.418899 2.1795C1.00146 1.538 2.52119 0.488 3.31661 0.1675C3.43741 0.116 3.74282 0.00699994 3.90599 -4.78206e-08C4.06235 -4.09861e-08 4.2114 0.036 4.35363 0.109C4.53093 0.211 4.67316 0.3715 4.7511 0.561C4.80127 0.6925 4.8792 1.086 4.8792 1.093C4.95714 1.5235 5 2.223 5 2.996C5 3.7325 4.95714 4.4035 4.89333 4.8405C4.88602 4.8475 4.80809 5.3365 4.72284 5.504C4.56649 5.81 4.26108 6 3.93424 6L3.90599 6C3.69313 5.9925 3.24549 5.8025 3.24549 5.7955C2.49294 5.4745 1.00828 4.476 0.411593 3.8125C0.411593 3.8125 0.243546 3.642 0.170482 3.5355C0.0565027 3.3825 -1.3957e-07 3.193 -1.31287e-07 3.0035C-1.22042e-07 2.792 0.0638088 2.595 0.184608 2.4345Z"
                fill="black"
              ></path>
            </svg>
          </a>
        </div>
        <!-- swiper -->
        <div class="bg-white rounded-20 shadow10 mt-4">
        <div class="specialProduct">
          <SwiperMain class="p-3"
          :slides-per-view="1"
                :space-between="20"
                :pagination="false"
                :navigation="false"
                :breakpoints="{
                    '768': {slidesPerView:2},
                    '992': {slidesPerView:3},
                    '1200': {slidesPerView:4},
                  }"
                >
                  <SwiperSlide class="my-3">
                    <div class="rounded-20 bg-white p-3 shadow10">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <a class="d-flex align-items-center justify-content-center px-2 bg-white rounded-15 gap-2 fs-11 fw-bold text-second-gradient shadow8 h-65">
                      <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g opacity="0.4">
                          <path d="M12.5149 4.57512C12.1182 4.50184 11.7539 4.755 11.6783 5.14224C11.6028 5.52947 11.8568 5.90754 12.2427 5.98333C13.4046 6.20984 14.3017 7.10922 14.5291 8.27508C14.5938 8.61069 14.8893 8.85552 15.2296 8.85552C15.2752 8.85552 15.3208 8.85136 15.3673 8.84303C15.7532 8.76558 16.0072 8.38834 15.9317 8.00027C15.5922 6.25897 14.2519 4.91406 12.5149 4.57512Z" fill="url(#paint0_linear_751_278)"></path>
                          <path d="M12.463 1.67336C12.2771 1.64671 12.0904 1.70167 11.9419 1.81992C11.7892 1.93984 11.6937 2.11305 11.673 2.30709C11.629 2.69932 11.912 3.05407 12.3037 3.09821C15.0051 3.39967 17.1048 5.50406 17.4085 8.21387C17.4492 8.57695 17.7538 8.85093 18.1173 8.85093C18.1447 8.85093 18.1712 8.84926 18.1986 8.84593C18.3887 8.82511 18.558 8.73101 18.6775 8.58111C18.7961 8.43122 18.8501 8.24468 18.8285 8.05398C18.4501 4.67296 15.8333 2.04893 12.463 1.67336Z" fill="url(#paint1_linear_751_278)"></path>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69295 10.8103C13.0172 14.1336 13.7713 10.2889 15.8879 12.404C17.9284 14.444 19.1012 14.8527 16.5159 17.4373C16.192 17.6975 14.1345 20.8285 6.90367 13.5997C-0.328061 6.37 2.80116 4.31037 3.06148 3.98662C5.65306 1.39487 6.05472 2.57449 8.09524 4.61444C10.2118 6.73041 6.36872 7.48701 9.69295 10.8103Z" fill="url(#paint2_linear_751_278)"></path>
                        <defs>
                          <linearGradient id="paint0_linear_751_278" x1="11.665" y1="8.35113" x2="16.6198" y2="6.95183" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint1_linear_751_278" x1="11.6685" y1="8.00686" x2="19.9624" y2="5.6637" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint2_linear_751_278" x1="2.1665" y1="16.4731" x2="20.4879" y2="11.2829" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <p class="mb-0">لطفا برای اطلاع از قیمت با ما تماس بگیرید</p>
                    </a>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide class="my-3">
                    <div class="rounded-20 bg-white p-3 shadow10">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <div class="d-flex align-items-center gap-3 h-65">
                      <a class="d-flex align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path
                            d="M6.75 15C7.08152 15 7.39946 15.1317 7.63388 15.3661C7.8683 15.6005 8 15.9185 8 16.25C8 16.5815 7.8683 16.8995 7.63388 17.1339C7.39946 17.3683 7.08152 17.5 6.75 17.5C6.41848 17.5 6.10054 17.3683 5.86612 17.1339C5.6317 16.8995 5.5 16.5815 5.5 16.25C5.5 15.9185 5.6317 15.6005 5.86612 15.3661C6.10054 15.1317 6.41848 15 6.75 15ZM14.25 15C14.5815 15 14.8995 15.1317 15.1339 15.3661C15.3683 15.6005 15.5 15.9185 15.5 16.25C15.5 16.5815 15.3683 16.8995 15.1339 17.1339C14.8995 17.3683 14.5815 17.5 14.25 17.5C13.9185 17.5 13.6005 17.3683 13.3661 17.1339C13.1317 16.8995 13 16.5815 13 16.25C13 15.9185 13.1317 15.6005 13.3661 15.3661C13.6005 15.1317 13.9185 15 14.25 15Z"
                            fill="url(#paint0_linear_50_361)" />
                          <path opacity="0.5"
                            d="M2.23648 2.29254C2.29142 2.13619 2.40622 2.00806 2.55561 1.93633C2.70501 1.8646 2.87678 1.85514 3.03315 1.91004L3.28398 1.99837C3.79815 2.1792 4.23398 2.33254 4.57815 2.50087C4.94481 2.6817 5.25981 2.90337 5.49648 3.25004C5.73148 3.59337 5.82898 3.97087 5.87315 4.38504C5.89315 4.57004 5.90398 4.77504 5.90981 5.00004H14.7748C16.179 5.00004 17.4431 5.00004 17.8131 5.48087C18.1831 5.9617 18.0381 6.6867 17.749 8.13587L17.3323 10.1567C17.0698 11.43 16.939 12.0675 16.479 12.4417C16.019 12.8167 15.369 12.8167 14.0681 12.8167H9.64898C7.32398 12.8167 6.16231 12.8167 5.44065 12.055C4.71898 11.2934 4.66565 10.485 4.66565 8.03337V5.86504C4.66565 5.24837 4.66565 4.83587 4.63065 4.5192C4.59731 4.2167 4.53981 4.06504 4.46398 3.95504C4.39148 3.84754 4.28065 3.7467 4.02731 3.62337C3.75815 3.4917 3.39231 3.3617 2.83565 3.16587L2.61898 3.09004C2.54139 3.06292 2.46991 3.02076 2.40864 2.96598C2.34737 2.9112 2.2975 2.84488 2.26189 2.7708C2.22628 2.69672 2.20564 2.61635 2.20113 2.53428C2.19663 2.45222 2.20836 2.37007 2.23565 2.29254H2.23648Z"
                            fill="url(#paint1_linear_50_361)" />
                          <path
                            d="M11.9582 7.5C11.9582 7.33424 11.8923 7.17527 11.7751 7.05806C11.6579 6.94085 11.4989 6.875 11.3332 6.875C11.1674 6.875 11.0084 6.94085 10.8912 7.05806C10.774 7.17527 10.7082 7.33424 10.7082 7.5V8.54167H9.6665C9.50074 8.54167 9.34177 8.60752 9.22456 8.72473C9.10735 8.84194 9.0415 9.00091 9.0415 9.16667C9.0415 9.33243 9.10735 9.4914 9.22456 9.60861C9.34177 9.72582 9.50074 9.79167 9.6665 9.79167H10.7082V10.8333C10.7082 10.9991 10.774 11.1581 10.8912 11.2753C11.0084 11.3925 11.1674 11.4583 11.3332 11.4583C11.4989 11.4583 11.6579 11.3925 11.7751 11.2753C11.8923 11.1581 11.9582 10.9991 11.9582 10.8333V9.79167H12.9998C13.1656 9.79167 13.3246 9.72582 13.4418 9.60861C13.559 9.4914 13.6248 9.33243 13.6248 9.16667C13.6248 9.00091 13.559 8.84194 13.4418 8.72473C13.3246 8.60752 13.1656 8.54167 12.9998 8.54167H11.9582V7.5Z"
                            fill="url(#paint2_linear_50_361)" />
                          <defs>
                            <linearGradient id="paint0_linear_50_361" x1="5.5" y1="17.2063" x2="10.9729" y2="11.0048"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_50_361" x1="2.2002" y1="11.5311" x2="19.1452" y2="4.58471"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_50_361" x1="9.0415" y1="10.9198" x2="14.3451" y2="9.41743"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </a>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                          <p class="fs-12 text-gray text-decoration-line-through mb-0">۵،۱۰۰،۰۰۰</p>
                          <p class="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill">۱۵٪</p>
                        </div>
                        <div class="d-flex align-items-end justify-content-end gap-1 mt-1">
                          <p class="fs-17 font-bold mb-0">۳،۶۵۰،۰۰۰</p>
                          <p class="mb-1 fs-12 fw-bold">تومان</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide class="my-3">
                    <div class="rounded-20 bg-white p-3 shadow10">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <a class="d-flex align-items-center justify-content-center px-2 bg-white rounded-15 gap-2 fs-11 fw-bold text-second-gradient shadow8 h-65">
                      <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g opacity="0.4">
                          <path d="M12.5149 4.57512C12.1182 4.50184 11.7539 4.755 11.6783 5.14224C11.6028 5.52947 11.8568 5.90754 12.2427 5.98333C13.4046 6.20984 14.3017 7.10922 14.5291 8.27508C14.5938 8.61069 14.8893 8.85552 15.2296 8.85552C15.2752 8.85552 15.3208 8.85136 15.3673 8.84303C15.7532 8.76558 16.0072 8.38834 15.9317 8.00027C15.5922 6.25897 14.2519 4.91406 12.5149 4.57512Z" fill="url(#paint0_linear_751_278)"></path>
                          <path d="M12.463 1.67336C12.2771 1.64671 12.0904 1.70167 11.9419 1.81992C11.7892 1.93984 11.6937 2.11305 11.673 2.30709C11.629 2.69932 11.912 3.05407 12.3037 3.09821C15.0051 3.39967 17.1048 5.50406 17.4085 8.21387C17.4492 8.57695 17.7538 8.85093 18.1173 8.85093C18.1447 8.85093 18.1712 8.84926 18.1986 8.84593C18.3887 8.82511 18.558 8.73101 18.6775 8.58111C18.7961 8.43122 18.8501 8.24468 18.8285 8.05398C18.4501 4.67296 15.8333 2.04893 12.463 1.67336Z" fill="url(#paint1_linear_751_278)"></path>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69295 10.8103C13.0172 14.1336 13.7713 10.2889 15.8879 12.404C17.9284 14.444 19.1012 14.8527 16.5159 17.4373C16.192 17.6975 14.1345 20.8285 6.90367 13.5997C-0.328061 6.37 2.80116 4.31037 3.06148 3.98662C5.65306 1.39487 6.05472 2.57449 8.09524 4.61444C10.2118 6.73041 6.36872 7.48701 9.69295 10.8103Z" fill="url(#paint2_linear_751_278)"></path>
                        <defs>
                          <linearGradient id="paint0_linear_751_278" x1="11.665" y1="8.35113" x2="16.6198" y2="6.95183" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint1_linear_751_278" x1="11.6685" y1="8.00686" x2="19.9624" y2="5.6637" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint2_linear_751_278" x1="2.1665" y1="16.4731" x2="20.4879" y2="11.2829" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <p class="mb-0">لطفا برای اطلاع از قیمت با ما تماس بگیرید</p>
                    </a>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide class="my-3">
                    <div class="rounded-20 bg-white p-3 shadow10">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <div class="d-flex align-items-center gap-3 h-65">
                      <a class="d-flex align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path
                            d="M6.75 15C7.08152 15 7.39946 15.1317 7.63388 15.3661C7.8683 15.6005 8 15.9185 8 16.25C8 16.5815 7.8683 16.8995 7.63388 17.1339C7.39946 17.3683 7.08152 17.5 6.75 17.5C6.41848 17.5 6.10054 17.3683 5.86612 17.1339C5.6317 16.8995 5.5 16.5815 5.5 16.25C5.5 15.9185 5.6317 15.6005 5.86612 15.3661C6.10054 15.1317 6.41848 15 6.75 15ZM14.25 15C14.5815 15 14.8995 15.1317 15.1339 15.3661C15.3683 15.6005 15.5 15.9185 15.5 16.25C15.5 16.5815 15.3683 16.8995 15.1339 17.1339C14.8995 17.3683 14.5815 17.5 14.25 17.5C13.9185 17.5 13.6005 17.3683 13.3661 17.1339C13.1317 16.8995 13 16.5815 13 16.25C13 15.9185 13.1317 15.6005 13.3661 15.3661C13.6005 15.1317 13.9185 15 14.25 15Z"
                            fill="url(#paint0_linear_50_361)" />
                          <path opacity="0.5"
                            d="M2.23648 2.29254C2.29142 2.13619 2.40622 2.00806 2.55561 1.93633C2.70501 1.8646 2.87678 1.85514 3.03315 1.91004L3.28398 1.99837C3.79815 2.1792 4.23398 2.33254 4.57815 2.50087C4.94481 2.6817 5.25981 2.90337 5.49648 3.25004C5.73148 3.59337 5.82898 3.97087 5.87315 4.38504C5.89315 4.57004 5.90398 4.77504 5.90981 5.00004H14.7748C16.179 5.00004 17.4431 5.00004 17.8131 5.48087C18.1831 5.9617 18.0381 6.6867 17.749 8.13587L17.3323 10.1567C17.0698 11.43 16.939 12.0675 16.479 12.4417C16.019 12.8167 15.369 12.8167 14.0681 12.8167H9.64898C7.32398 12.8167 6.16231 12.8167 5.44065 12.055C4.71898 11.2934 4.66565 10.485 4.66565 8.03337V5.86504C4.66565 5.24837 4.66565 4.83587 4.63065 4.5192C4.59731 4.2167 4.53981 4.06504 4.46398 3.95504C4.39148 3.84754 4.28065 3.7467 4.02731 3.62337C3.75815 3.4917 3.39231 3.3617 2.83565 3.16587L2.61898 3.09004C2.54139 3.06292 2.46991 3.02076 2.40864 2.96598C2.34737 2.9112 2.2975 2.84488 2.26189 2.7708C2.22628 2.69672 2.20564 2.61635 2.20113 2.53428C2.19663 2.45222 2.20836 2.37007 2.23565 2.29254H2.23648Z"
                            fill="url(#paint1_linear_50_361)" />
                          <path
                            d="M11.9582 7.5C11.9582 7.33424 11.8923 7.17527 11.7751 7.05806C11.6579 6.94085 11.4989 6.875 11.3332 6.875C11.1674 6.875 11.0084 6.94085 10.8912 7.05806C10.774 7.17527 10.7082 7.33424 10.7082 7.5V8.54167H9.6665C9.50074 8.54167 9.34177 8.60752 9.22456 8.72473C9.10735 8.84194 9.0415 9.00091 9.0415 9.16667C9.0415 9.33243 9.10735 9.4914 9.22456 9.60861C9.34177 9.72582 9.50074 9.79167 9.6665 9.79167H10.7082V10.8333C10.7082 10.9991 10.774 11.1581 10.8912 11.2753C11.0084 11.3925 11.1674 11.4583 11.3332 11.4583C11.4989 11.4583 11.6579 11.3925 11.7751 11.2753C11.8923 11.1581 11.9582 10.9991 11.9582 10.8333V9.79167H12.9998C13.1656 9.79167 13.3246 9.72582 13.4418 9.60861C13.559 9.4914 13.6248 9.33243 13.6248 9.16667C13.6248 9.00091 13.559 8.84194 13.4418 8.72473C13.3246 8.60752 13.1656 8.54167 12.9998 8.54167H11.9582V7.5Z"
                            fill="url(#paint2_linear_50_361)" />
                          <defs>
                            <linearGradient id="paint0_linear_50_361" x1="5.5" y1="17.2063" x2="10.9729" y2="11.0048"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_50_361" x1="2.2002" y1="11.5311" x2="19.1452" y2="4.58471"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_50_361" x1="9.0415" y1="10.9198" x2="14.3451" y2="9.41743"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </a>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                          <p class="fs-12 text-gray text-decoration-line-through mb-0">۵،۱۰۰،۰۰۰</p>
                          <p class="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill">۱۵٪</p>
                        </div>
                        <div class="d-flex align-items-end justify-content-end gap-1 mt-1">
                          <p class="fs-17 font-bold mb-0">۳،۶۵۰،۰۰۰</p>
                          <p class="mb-1 fs-12 fw-bold">تومان</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide class="my-3">
                    <div class="rounded-20 bg-white p-3 shadow10">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <a class="d-flex align-items-center justify-content-center px-2 bg-white rounded-15 gap-2 fs-11 fw-bold text-second-gradient shadow8 h-65">
                      <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g opacity="0.4">
                          <path d="M12.5149 4.57512C12.1182 4.50184 11.7539 4.755 11.6783 5.14224C11.6028 5.52947 11.8568 5.90754 12.2427 5.98333C13.4046 6.20984 14.3017 7.10922 14.5291 8.27508C14.5938 8.61069 14.8893 8.85552 15.2296 8.85552C15.2752 8.85552 15.3208 8.85136 15.3673 8.84303C15.7532 8.76558 16.0072 8.38834 15.9317 8.00027C15.5922 6.25897 14.2519 4.91406 12.5149 4.57512Z" fill="url(#paint0_linear_751_278)"></path>
                          <path d="M12.463 1.67336C12.2771 1.64671 12.0904 1.70167 11.9419 1.81992C11.7892 1.93984 11.6937 2.11305 11.673 2.30709C11.629 2.69932 11.912 3.05407 12.3037 3.09821C15.0051 3.39967 17.1048 5.50406 17.4085 8.21387C17.4492 8.57695 17.7538 8.85093 18.1173 8.85093C18.1447 8.85093 18.1712 8.84926 18.1986 8.84593C18.3887 8.82511 18.558 8.73101 18.6775 8.58111C18.7961 8.43122 18.8501 8.24468 18.8285 8.05398C18.4501 4.67296 15.8333 2.04893 12.463 1.67336Z" fill="url(#paint1_linear_751_278)"></path>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69295 10.8103C13.0172 14.1336 13.7713 10.2889 15.8879 12.404C17.9284 14.444 19.1012 14.8527 16.5159 17.4373C16.192 17.6975 14.1345 20.8285 6.90367 13.5997C-0.328061 6.37 2.80116 4.31037 3.06148 3.98662C5.65306 1.39487 6.05472 2.57449 8.09524 4.61444C10.2118 6.73041 6.36872 7.48701 9.69295 10.8103Z" fill="url(#paint2_linear_751_278)"></path>
                        <defs>
                          <linearGradient id="paint0_linear_751_278" x1="11.665" y1="8.35113" x2="16.6198" y2="6.95183" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint1_linear_751_278" x1="11.6685" y1="8.00686" x2="19.9624" y2="5.6637" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint2_linear_751_278" x1="2.1665" y1="16.4731" x2="20.4879" y2="11.2829" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <p class="mb-0">لطفا برای اطلاع از قیمت با ما تماس بگیرید</p>
                    </a>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide class="my-3">
                    <div class="rounded-20 bg-white p-3 shadow10">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <div class="d-flex align-items-center gap-3 h-65">
                      <a class="d-flex align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path
                            d="M6.75 15C7.08152 15 7.39946 15.1317 7.63388 15.3661C7.8683 15.6005 8 15.9185 8 16.25C8 16.5815 7.8683 16.8995 7.63388 17.1339C7.39946 17.3683 7.08152 17.5 6.75 17.5C6.41848 17.5 6.10054 17.3683 5.86612 17.1339C5.6317 16.8995 5.5 16.5815 5.5 16.25C5.5 15.9185 5.6317 15.6005 5.86612 15.3661C6.10054 15.1317 6.41848 15 6.75 15ZM14.25 15C14.5815 15 14.8995 15.1317 15.1339 15.3661C15.3683 15.6005 15.5 15.9185 15.5 16.25C15.5 16.5815 15.3683 16.8995 15.1339 17.1339C14.8995 17.3683 14.5815 17.5 14.25 17.5C13.9185 17.5 13.6005 17.3683 13.3661 17.1339C13.1317 16.8995 13 16.5815 13 16.25C13 15.9185 13.1317 15.6005 13.3661 15.3661C13.6005 15.1317 13.9185 15 14.25 15Z"
                            fill="url(#paint0_linear_50_361)" />
                          <path opacity="0.5"
                            d="M2.23648 2.29254C2.29142 2.13619 2.40622 2.00806 2.55561 1.93633C2.70501 1.8646 2.87678 1.85514 3.03315 1.91004L3.28398 1.99837C3.79815 2.1792 4.23398 2.33254 4.57815 2.50087C4.94481 2.6817 5.25981 2.90337 5.49648 3.25004C5.73148 3.59337 5.82898 3.97087 5.87315 4.38504C5.89315 4.57004 5.90398 4.77504 5.90981 5.00004H14.7748C16.179 5.00004 17.4431 5.00004 17.8131 5.48087C18.1831 5.9617 18.0381 6.6867 17.749 8.13587L17.3323 10.1567C17.0698 11.43 16.939 12.0675 16.479 12.4417C16.019 12.8167 15.369 12.8167 14.0681 12.8167H9.64898C7.32398 12.8167 6.16231 12.8167 5.44065 12.055C4.71898 11.2934 4.66565 10.485 4.66565 8.03337V5.86504C4.66565 5.24837 4.66565 4.83587 4.63065 4.5192C4.59731 4.2167 4.53981 4.06504 4.46398 3.95504C4.39148 3.84754 4.28065 3.7467 4.02731 3.62337C3.75815 3.4917 3.39231 3.3617 2.83565 3.16587L2.61898 3.09004C2.54139 3.06292 2.46991 3.02076 2.40864 2.96598C2.34737 2.9112 2.2975 2.84488 2.26189 2.7708C2.22628 2.69672 2.20564 2.61635 2.20113 2.53428C2.19663 2.45222 2.20836 2.37007 2.23565 2.29254H2.23648Z"
                            fill="url(#paint1_linear_50_361)" />
                          <path
                            d="M11.9582 7.5C11.9582 7.33424 11.8923 7.17527 11.7751 7.05806C11.6579 6.94085 11.4989 6.875 11.3332 6.875C11.1674 6.875 11.0084 6.94085 10.8912 7.05806C10.774 7.17527 10.7082 7.33424 10.7082 7.5V8.54167H9.6665C9.50074 8.54167 9.34177 8.60752 9.22456 8.72473C9.10735 8.84194 9.0415 9.00091 9.0415 9.16667C9.0415 9.33243 9.10735 9.4914 9.22456 9.60861C9.34177 9.72582 9.50074 9.79167 9.6665 9.79167H10.7082V10.8333C10.7082 10.9991 10.774 11.1581 10.8912 11.2753C11.0084 11.3925 11.1674 11.4583 11.3332 11.4583C11.4989 11.4583 11.6579 11.3925 11.7751 11.2753C11.8923 11.1581 11.9582 10.9991 11.9582 10.8333V9.79167H12.9998C13.1656 9.79167 13.3246 9.72582 13.4418 9.60861C13.559 9.4914 13.6248 9.33243 13.6248 9.16667C13.6248 9.00091 13.559 8.84194 13.4418 8.72473C13.3246 8.60752 13.1656 8.54167 12.9998 8.54167H11.9582V7.5Z"
                            fill="url(#paint2_linear_50_361)" />
                          <defs>
                            <linearGradient id="paint0_linear_50_361" x1="5.5" y1="17.2063" x2="10.9729" y2="11.0048"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_50_361" x1="2.2002" y1="11.5311" x2="19.1452" y2="4.58471"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_50_361" x1="9.0415" y1="10.9198" x2="14.3451" y2="9.41743"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </a>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                          <p class="fs-12 text-gray text-decoration-line-through mb-0">۵،۱۰۰،۰۰۰</p>
                          <p class="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill">۱۵٪</p>
                        </div>
                        <div class="d-flex align-items-end justify-content-end gap-1 mt-1">
                          <p class="fs-17 font-bold mb-0">۳،۶۵۰،۰۰۰</p>
                          <p class="mb-1 fs-12 fw-bold">تومان</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
          </SwiperMain>
        </div>
      </div>
      </div>
    </section>

    <!-- suggest -->
    <section
      id="customer"
      class="mt-5 pt-5 mb-5 h-497 h-lg-auto overflow-hidden"
    >
      <div class="container position-relative h-100">
        <img
          alt="bg"
          src="assets/img/suggestBg.png"
          class="position-absolute end-0 start-0 img-fluid w-100 h-100 d-none d-lg-block -z-1 rotate-y-180-ltr"
        />
        <div class="row">
          <div
            class="col-xl-9 col-lg-8 order-1 order-lg-0 pt-3 pt-xxl-0 pb-4 pb-lg-0"
          >
            <!-- swiper -->
            <div
              class="bg-white w-100 rounded-20 shadow10 position-relative right-lg-0 -right-40 mt-1 mt-xxl-3"
            >
              <!-- shape -->
              <div
                class="position-absolute d-none d-lg-block rounded-l-29 my-auto rotate-y-180-ltr -left-15 -right-15-ltr bg-main2 w-15 h-91 top-0 bottom-0"
              ></div>
              <div
                class="position-absolute d-none d-lg-block rounded-l-29 my-auto rotate-y-180-ltr -left-30 -right-30-ltr bg-white-opacity-20 w-15 h-81 top-0 bottom-0"
              ></div>
              <!--  -->
              <div
                class="services p-4"
              >
              <SwiperMain
              :slides-per-view="1"
                :space-between="20"
                :pagination="false"
                :navigation="false"
                :breakpoints="{
                    '768': {slidesPerView:2},
                    '1200': {slidesPerView:3},
                  }"
                >
                  <SwiperSlide>
                    <div class="rounded-20 bg-white p-3 border">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <a class="d-flex align-items-center justify-content-center px-2 bg-white rounded-15 gap-2 fs-11 fw-bold text-second-gradient shadow8 h-65">
                      <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g opacity="0.4">
                          <path d="M12.5149 4.57512C12.1182 4.50184 11.7539 4.755 11.6783 5.14224C11.6028 5.52947 11.8568 5.90754 12.2427 5.98333C13.4046 6.20984 14.3017 7.10922 14.5291 8.27508C14.5938 8.61069 14.8893 8.85552 15.2296 8.85552C15.2752 8.85552 15.3208 8.85136 15.3673 8.84303C15.7532 8.76558 16.0072 8.38834 15.9317 8.00027C15.5922 6.25897 14.2519 4.91406 12.5149 4.57512Z" fill="url(#paint0_linear_751_278)"></path>
                          <path d="M12.463 1.67336C12.2771 1.64671 12.0904 1.70167 11.9419 1.81992C11.7892 1.93984 11.6937 2.11305 11.673 2.30709C11.629 2.69932 11.912 3.05407 12.3037 3.09821C15.0051 3.39967 17.1048 5.50406 17.4085 8.21387C17.4492 8.57695 17.7538 8.85093 18.1173 8.85093C18.1447 8.85093 18.1712 8.84926 18.1986 8.84593C18.3887 8.82511 18.558 8.73101 18.6775 8.58111C18.7961 8.43122 18.8501 8.24468 18.8285 8.05398C18.4501 4.67296 15.8333 2.04893 12.463 1.67336Z" fill="url(#paint1_linear_751_278)"></path>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69295 10.8103C13.0172 14.1336 13.7713 10.2889 15.8879 12.404C17.9284 14.444 19.1012 14.8527 16.5159 17.4373C16.192 17.6975 14.1345 20.8285 6.90367 13.5997C-0.328061 6.37 2.80116 4.31037 3.06148 3.98662C5.65306 1.39487 6.05472 2.57449 8.09524 4.61444C10.2118 6.73041 6.36872 7.48701 9.69295 10.8103Z" fill="url(#paint2_linear_751_278)"></path>
                        <defs>
                          <linearGradient id="paint0_linear_751_278" x1="11.665" y1="8.35113" x2="16.6198" y2="6.95183" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint1_linear_751_278" x1="11.6685" y1="8.00686" x2="19.9624" y2="5.6637" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint2_linear_751_278" x1="2.1665" y1="16.4731" x2="20.4879" y2="11.2829" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <p class="mb-0">لطفا برای اطلاع از قیمت با ما تماس بگیرید</p>
                    </a>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="rounded-20 bg-white p-3 border">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <div class="d-flex align-items-center gap-3 h-65">
                      <a class="d-flex align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path
                            d="M6.75 15C7.08152 15 7.39946 15.1317 7.63388 15.3661C7.8683 15.6005 8 15.9185 8 16.25C8 16.5815 7.8683 16.8995 7.63388 17.1339C7.39946 17.3683 7.08152 17.5 6.75 17.5C6.41848 17.5 6.10054 17.3683 5.86612 17.1339C5.6317 16.8995 5.5 16.5815 5.5 16.25C5.5 15.9185 5.6317 15.6005 5.86612 15.3661C6.10054 15.1317 6.41848 15 6.75 15ZM14.25 15C14.5815 15 14.8995 15.1317 15.1339 15.3661C15.3683 15.6005 15.5 15.9185 15.5 16.25C15.5 16.5815 15.3683 16.8995 15.1339 17.1339C14.8995 17.3683 14.5815 17.5 14.25 17.5C13.9185 17.5 13.6005 17.3683 13.3661 17.1339C13.1317 16.8995 13 16.5815 13 16.25C13 15.9185 13.1317 15.6005 13.3661 15.3661C13.6005 15.1317 13.9185 15 14.25 15Z"
                            fill="url(#paint0_linear_50_361)" />
                          <path opacity="0.5"
                            d="M2.23648 2.29254C2.29142 2.13619 2.40622 2.00806 2.55561 1.93633C2.70501 1.8646 2.87678 1.85514 3.03315 1.91004L3.28398 1.99837C3.79815 2.1792 4.23398 2.33254 4.57815 2.50087C4.94481 2.6817 5.25981 2.90337 5.49648 3.25004C5.73148 3.59337 5.82898 3.97087 5.87315 4.38504C5.89315 4.57004 5.90398 4.77504 5.90981 5.00004H14.7748C16.179 5.00004 17.4431 5.00004 17.8131 5.48087C18.1831 5.9617 18.0381 6.6867 17.749 8.13587L17.3323 10.1567C17.0698 11.43 16.939 12.0675 16.479 12.4417C16.019 12.8167 15.369 12.8167 14.0681 12.8167H9.64898C7.32398 12.8167 6.16231 12.8167 5.44065 12.055C4.71898 11.2934 4.66565 10.485 4.66565 8.03337V5.86504C4.66565 5.24837 4.66565 4.83587 4.63065 4.5192C4.59731 4.2167 4.53981 4.06504 4.46398 3.95504C4.39148 3.84754 4.28065 3.7467 4.02731 3.62337C3.75815 3.4917 3.39231 3.3617 2.83565 3.16587L2.61898 3.09004C2.54139 3.06292 2.46991 3.02076 2.40864 2.96598C2.34737 2.9112 2.2975 2.84488 2.26189 2.7708C2.22628 2.69672 2.20564 2.61635 2.20113 2.53428C2.19663 2.45222 2.20836 2.37007 2.23565 2.29254H2.23648Z"
                            fill="url(#paint1_linear_50_361)" />
                          <path
                            d="M11.9582 7.5C11.9582 7.33424 11.8923 7.17527 11.7751 7.05806C11.6579 6.94085 11.4989 6.875 11.3332 6.875C11.1674 6.875 11.0084 6.94085 10.8912 7.05806C10.774 7.17527 10.7082 7.33424 10.7082 7.5V8.54167H9.6665C9.50074 8.54167 9.34177 8.60752 9.22456 8.72473C9.10735 8.84194 9.0415 9.00091 9.0415 9.16667C9.0415 9.33243 9.10735 9.4914 9.22456 9.60861C9.34177 9.72582 9.50074 9.79167 9.6665 9.79167H10.7082V10.8333C10.7082 10.9991 10.774 11.1581 10.8912 11.2753C11.0084 11.3925 11.1674 11.4583 11.3332 11.4583C11.4989 11.4583 11.6579 11.3925 11.7751 11.2753C11.8923 11.1581 11.9582 10.9991 11.9582 10.8333V9.79167H12.9998C13.1656 9.79167 13.3246 9.72582 13.4418 9.60861C13.559 9.4914 13.6248 9.33243 13.6248 9.16667C13.6248 9.00091 13.559 8.84194 13.4418 8.72473C13.3246 8.60752 13.1656 8.54167 12.9998 8.54167H11.9582V7.5Z"
                            fill="url(#paint2_linear_50_361)" />
                          <defs>
                            <linearGradient id="paint0_linear_50_361" x1="5.5" y1="17.2063" x2="10.9729" y2="11.0048"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_50_361" x1="2.2002" y1="11.5311" x2="19.1452" y2="4.58471"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_50_361" x1="9.0415" y1="10.9198" x2="14.3451" y2="9.41743"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </a>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                          <p class="fs-12 text-gray text-decoration-line-through mb-0">۵،۱۰۰،۰۰۰</p>
                          <p class="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill">۱۵٪</p>
                        </div>
                        <div class="d-flex align-items-end justify-content-end gap-1 mt-1">
                          <p class="fs-17 font-bold mb-0">۳،۶۵۰،۰۰۰</p>
                          <p class="mb-1 fs-12 fw-bold">تومان</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="rounded-20 bg-white p-3 border">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <a class="d-flex align-items-center justify-content-center px-2 bg-white rounded-15 gap-2 fs-11 fw-bold text-second-gradient shadow8 h-65">
                      <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g opacity="0.4">
                          <path d="M12.5149 4.57512C12.1182 4.50184 11.7539 4.755 11.6783 5.14224C11.6028 5.52947 11.8568 5.90754 12.2427 5.98333C13.4046 6.20984 14.3017 7.10922 14.5291 8.27508C14.5938 8.61069 14.8893 8.85552 15.2296 8.85552C15.2752 8.85552 15.3208 8.85136 15.3673 8.84303C15.7532 8.76558 16.0072 8.38834 15.9317 8.00027C15.5922 6.25897 14.2519 4.91406 12.5149 4.57512Z" fill="url(#paint0_linear_751_278)"></path>
                          <path d="M12.463 1.67336C12.2771 1.64671 12.0904 1.70167 11.9419 1.81992C11.7892 1.93984 11.6937 2.11305 11.673 2.30709C11.629 2.69932 11.912 3.05407 12.3037 3.09821C15.0051 3.39967 17.1048 5.50406 17.4085 8.21387C17.4492 8.57695 17.7538 8.85093 18.1173 8.85093C18.1447 8.85093 18.1712 8.84926 18.1986 8.84593C18.3887 8.82511 18.558 8.73101 18.6775 8.58111C18.7961 8.43122 18.8501 8.24468 18.8285 8.05398C18.4501 4.67296 15.8333 2.04893 12.463 1.67336Z" fill="url(#paint1_linear_751_278)"></path>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69295 10.8103C13.0172 14.1336 13.7713 10.2889 15.8879 12.404C17.9284 14.444 19.1012 14.8527 16.5159 17.4373C16.192 17.6975 14.1345 20.8285 6.90367 13.5997C-0.328061 6.37 2.80116 4.31037 3.06148 3.98662C5.65306 1.39487 6.05472 2.57449 8.09524 4.61444C10.2118 6.73041 6.36872 7.48701 9.69295 10.8103Z" fill="url(#paint2_linear_751_278)"></path>
                        <defs>
                          <linearGradient id="paint0_linear_751_278" x1="11.665" y1="8.35113" x2="16.6198" y2="6.95183" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint1_linear_751_278" x1="11.6685" y1="8.00686" x2="19.9624" y2="5.6637" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint2_linear_751_278" x1="2.1665" y1="16.4731" x2="20.4879" y2="11.2829" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <p class="mb-0">لطفا برای اطلاع از قیمت با ما تماس بگیرید</p>
                    </a>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="rounded-20 bg-white p-3 border">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <div class="d-flex align-items-center gap-3 h-65">
                      <a class="d-flex align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path
                            d="M6.75 15C7.08152 15 7.39946 15.1317 7.63388 15.3661C7.8683 15.6005 8 15.9185 8 16.25C8 16.5815 7.8683 16.8995 7.63388 17.1339C7.39946 17.3683 7.08152 17.5 6.75 17.5C6.41848 17.5 6.10054 17.3683 5.86612 17.1339C5.6317 16.8995 5.5 16.5815 5.5 16.25C5.5 15.9185 5.6317 15.6005 5.86612 15.3661C6.10054 15.1317 6.41848 15 6.75 15ZM14.25 15C14.5815 15 14.8995 15.1317 15.1339 15.3661C15.3683 15.6005 15.5 15.9185 15.5 16.25C15.5 16.5815 15.3683 16.8995 15.1339 17.1339C14.8995 17.3683 14.5815 17.5 14.25 17.5C13.9185 17.5 13.6005 17.3683 13.3661 17.1339C13.1317 16.8995 13 16.5815 13 16.25C13 15.9185 13.1317 15.6005 13.3661 15.3661C13.6005 15.1317 13.9185 15 14.25 15Z"
                            fill="url(#paint0_linear_50_361)" />
                          <path opacity="0.5"
                            d="M2.23648 2.29254C2.29142 2.13619 2.40622 2.00806 2.55561 1.93633C2.70501 1.8646 2.87678 1.85514 3.03315 1.91004L3.28398 1.99837C3.79815 2.1792 4.23398 2.33254 4.57815 2.50087C4.94481 2.6817 5.25981 2.90337 5.49648 3.25004C5.73148 3.59337 5.82898 3.97087 5.87315 4.38504C5.89315 4.57004 5.90398 4.77504 5.90981 5.00004H14.7748C16.179 5.00004 17.4431 5.00004 17.8131 5.48087C18.1831 5.9617 18.0381 6.6867 17.749 8.13587L17.3323 10.1567C17.0698 11.43 16.939 12.0675 16.479 12.4417C16.019 12.8167 15.369 12.8167 14.0681 12.8167H9.64898C7.32398 12.8167 6.16231 12.8167 5.44065 12.055C4.71898 11.2934 4.66565 10.485 4.66565 8.03337V5.86504C4.66565 5.24837 4.66565 4.83587 4.63065 4.5192C4.59731 4.2167 4.53981 4.06504 4.46398 3.95504C4.39148 3.84754 4.28065 3.7467 4.02731 3.62337C3.75815 3.4917 3.39231 3.3617 2.83565 3.16587L2.61898 3.09004C2.54139 3.06292 2.46991 3.02076 2.40864 2.96598C2.34737 2.9112 2.2975 2.84488 2.26189 2.7708C2.22628 2.69672 2.20564 2.61635 2.20113 2.53428C2.19663 2.45222 2.20836 2.37007 2.23565 2.29254H2.23648Z"
                            fill="url(#paint1_linear_50_361)" />
                          <path
                            d="M11.9582 7.5C11.9582 7.33424 11.8923 7.17527 11.7751 7.05806C11.6579 6.94085 11.4989 6.875 11.3332 6.875C11.1674 6.875 11.0084 6.94085 10.8912 7.05806C10.774 7.17527 10.7082 7.33424 10.7082 7.5V8.54167H9.6665C9.50074 8.54167 9.34177 8.60752 9.22456 8.72473C9.10735 8.84194 9.0415 9.00091 9.0415 9.16667C9.0415 9.33243 9.10735 9.4914 9.22456 9.60861C9.34177 9.72582 9.50074 9.79167 9.6665 9.79167H10.7082V10.8333C10.7082 10.9991 10.774 11.1581 10.8912 11.2753C11.0084 11.3925 11.1674 11.4583 11.3332 11.4583C11.4989 11.4583 11.6579 11.3925 11.7751 11.2753C11.8923 11.1581 11.9582 10.9991 11.9582 10.8333V9.79167H12.9998C13.1656 9.79167 13.3246 9.72582 13.4418 9.60861C13.559 9.4914 13.6248 9.33243 13.6248 9.16667C13.6248 9.00091 13.559 8.84194 13.4418 8.72473C13.3246 8.60752 13.1656 8.54167 12.9998 8.54167H11.9582V7.5Z"
                            fill="url(#paint2_linear_50_361)" />
                          <defs>
                            <linearGradient id="paint0_linear_50_361" x1="5.5" y1="17.2063" x2="10.9729" y2="11.0048"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_50_361" x1="2.2002" y1="11.5311" x2="19.1452" y2="4.58471"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_50_361" x1="9.0415" y1="10.9198" x2="14.3451" y2="9.41743"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </a>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                          <p class="fs-12 text-gray text-decoration-line-through mb-0">۵،۱۰۰،۰۰۰</p>
                          <p class="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill">۱۵٪</p>
                        </div>
                        <div class="d-flex align-items-end justify-content-end gap-1 mt-1">
                          <p class="fs-17 font-bold mb-0">۳،۶۵۰،۰۰۰</p>
                          <p class="mb-1 fs-12 fw-bold">تومان</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="rounded-20 bg-white p-3 border">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <a class="d-flex align-items-center justify-content-center px-2 bg-white rounded-15 gap-2 fs-11 fw-bold text-second-gradient shadow8 h-65">
                      <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g opacity="0.4">
                          <path d="M12.5149 4.57512C12.1182 4.50184 11.7539 4.755 11.6783 5.14224C11.6028 5.52947 11.8568 5.90754 12.2427 5.98333C13.4046 6.20984 14.3017 7.10922 14.5291 8.27508C14.5938 8.61069 14.8893 8.85552 15.2296 8.85552C15.2752 8.85552 15.3208 8.85136 15.3673 8.84303C15.7532 8.76558 16.0072 8.38834 15.9317 8.00027C15.5922 6.25897 14.2519 4.91406 12.5149 4.57512Z" fill="url(#paint0_linear_751_278)"></path>
                          <path d="M12.463 1.67336C12.2771 1.64671 12.0904 1.70167 11.9419 1.81992C11.7892 1.93984 11.6937 2.11305 11.673 2.30709C11.629 2.69932 11.912 3.05407 12.3037 3.09821C15.0051 3.39967 17.1048 5.50406 17.4085 8.21387C17.4492 8.57695 17.7538 8.85093 18.1173 8.85093C18.1447 8.85093 18.1712 8.84926 18.1986 8.84593C18.3887 8.82511 18.558 8.73101 18.6775 8.58111C18.7961 8.43122 18.8501 8.24468 18.8285 8.05398C18.4501 4.67296 15.8333 2.04893 12.463 1.67336Z" fill="url(#paint1_linear_751_278)"></path>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69295 10.8103C13.0172 14.1336 13.7713 10.2889 15.8879 12.404C17.9284 14.444 19.1012 14.8527 16.5159 17.4373C16.192 17.6975 14.1345 20.8285 6.90367 13.5997C-0.328061 6.37 2.80116 4.31037 3.06148 3.98662C5.65306 1.39487 6.05472 2.57449 8.09524 4.61444C10.2118 6.73041 6.36872 7.48701 9.69295 10.8103Z" fill="url(#paint2_linear_751_278)"></path>
                        <defs>
                          <linearGradient id="paint0_linear_751_278" x1="11.665" y1="8.35113" x2="16.6198" y2="6.95183" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint1_linear_751_278" x1="11.6685" y1="8.00686" x2="19.9624" y2="5.6637" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint2_linear_751_278" x1="2.1665" y1="16.4731" x2="20.4879" y2="11.2829" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <p class="mb-0">لطفا برای اطلاع از قیمت با ما تماس بگیرید</p>
                    </a>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="rounded-20 bg-white p-3 border">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <div class="d-flex align-items-center gap-3 h-65">
                      <a class="d-flex align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path
                            d="M6.75 15C7.08152 15 7.39946 15.1317 7.63388 15.3661C7.8683 15.6005 8 15.9185 8 16.25C8 16.5815 7.8683 16.8995 7.63388 17.1339C7.39946 17.3683 7.08152 17.5 6.75 17.5C6.41848 17.5 6.10054 17.3683 5.86612 17.1339C5.6317 16.8995 5.5 16.5815 5.5 16.25C5.5 15.9185 5.6317 15.6005 5.86612 15.3661C6.10054 15.1317 6.41848 15 6.75 15ZM14.25 15C14.5815 15 14.8995 15.1317 15.1339 15.3661C15.3683 15.6005 15.5 15.9185 15.5 16.25C15.5 16.5815 15.3683 16.8995 15.1339 17.1339C14.8995 17.3683 14.5815 17.5 14.25 17.5C13.9185 17.5 13.6005 17.3683 13.3661 17.1339C13.1317 16.8995 13 16.5815 13 16.25C13 15.9185 13.1317 15.6005 13.3661 15.3661C13.6005 15.1317 13.9185 15 14.25 15Z"
                            fill="url(#paint0_linear_50_361)" />
                          <path opacity="0.5"
                            d="M2.23648 2.29254C2.29142 2.13619 2.40622 2.00806 2.55561 1.93633C2.70501 1.8646 2.87678 1.85514 3.03315 1.91004L3.28398 1.99837C3.79815 2.1792 4.23398 2.33254 4.57815 2.50087C4.94481 2.6817 5.25981 2.90337 5.49648 3.25004C5.73148 3.59337 5.82898 3.97087 5.87315 4.38504C5.89315 4.57004 5.90398 4.77504 5.90981 5.00004H14.7748C16.179 5.00004 17.4431 5.00004 17.8131 5.48087C18.1831 5.9617 18.0381 6.6867 17.749 8.13587L17.3323 10.1567C17.0698 11.43 16.939 12.0675 16.479 12.4417C16.019 12.8167 15.369 12.8167 14.0681 12.8167H9.64898C7.32398 12.8167 6.16231 12.8167 5.44065 12.055C4.71898 11.2934 4.66565 10.485 4.66565 8.03337V5.86504C4.66565 5.24837 4.66565 4.83587 4.63065 4.5192C4.59731 4.2167 4.53981 4.06504 4.46398 3.95504C4.39148 3.84754 4.28065 3.7467 4.02731 3.62337C3.75815 3.4917 3.39231 3.3617 2.83565 3.16587L2.61898 3.09004C2.54139 3.06292 2.46991 3.02076 2.40864 2.96598C2.34737 2.9112 2.2975 2.84488 2.26189 2.7708C2.22628 2.69672 2.20564 2.61635 2.20113 2.53428C2.19663 2.45222 2.20836 2.37007 2.23565 2.29254H2.23648Z"
                            fill="url(#paint1_linear_50_361)" />
                          <path
                            d="M11.9582 7.5C11.9582 7.33424 11.8923 7.17527 11.7751 7.05806C11.6579 6.94085 11.4989 6.875 11.3332 6.875C11.1674 6.875 11.0084 6.94085 10.8912 7.05806C10.774 7.17527 10.7082 7.33424 10.7082 7.5V8.54167H9.6665C9.50074 8.54167 9.34177 8.60752 9.22456 8.72473C9.10735 8.84194 9.0415 9.00091 9.0415 9.16667C9.0415 9.33243 9.10735 9.4914 9.22456 9.60861C9.34177 9.72582 9.50074 9.79167 9.6665 9.79167H10.7082V10.8333C10.7082 10.9991 10.774 11.1581 10.8912 11.2753C11.0084 11.3925 11.1674 11.4583 11.3332 11.4583C11.4989 11.4583 11.6579 11.3925 11.7751 11.2753C11.8923 11.1581 11.9582 10.9991 11.9582 10.8333V9.79167H12.9998C13.1656 9.79167 13.3246 9.72582 13.4418 9.60861C13.559 9.4914 13.6248 9.33243 13.6248 9.16667C13.6248 9.00091 13.559 8.84194 13.4418 8.72473C13.3246 8.60752 13.1656 8.54167 12.9998 8.54167H11.9582V7.5Z"
                            fill="url(#paint2_linear_50_361)" />
                          <defs>
                            <linearGradient id="paint0_linear_50_361" x1="5.5" y1="17.2063" x2="10.9729" y2="11.0048"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_50_361" x1="2.2002" y1="11.5311" x2="19.1452" y2="4.58471"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_50_361" x1="9.0415" y1="10.9198" x2="14.3451" y2="9.41743"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </a>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                          <p class="fs-12 text-gray text-decoration-line-through mb-0">۵،۱۰۰،۰۰۰</p>
                          <p class="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill">۱۵٪</p>
                        </div>
                        <div class="d-flex align-items-end justify-content-end gap-1 mt-1">
                          <p class="fs-17 font-bold mb-0">۳،۶۵۰،۰۰۰</p>
                          <p class="mb-1 fs-12 fw-bold">تومان</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
          </SwiperMain>
              </div>
            </div>
          </div>
          <div
            class="col-xl-3 col-lg-2 order-0 order-lg-1 me-auto ms-5 mr-5-ltr ms-xl-0 d-flex align-items-center justify-content-center"
          >
            <div class="text-center mt-lg-4">
              <h6 class="fs-24 font-bold text-lg-black text-white">
                پــیــشــنـهـاد
              </h6>
              <p class="fs-24 text-lg-black text-white">شـگـفت انگیز</p>
              <p
                class="fs-14 text-lg-black text-white-50 border-top border-bottom border-white-opacity-10 py-2"
              >
                محصولات تخفیف دار
              </p>
              <a
                class="d-flex align-items-center justify-content-center mx-auto w-126 h-45 mt-3 rounded-14 gap-3 shadow8 bg-white"
              >
                <p class="mb-0 fs-14 text-dark">مشاهده همه</p>
                <svg
                  class="rotate-y-180-ltr"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="7"
                  viewBox="0 0 6 7"
                  fill="none"
                >
                  <path
                    d="M0.684608 2.9345C0.712859 2.9055 0.819532 2.7815 0.918899 2.6795C1.50146 2.038 3.02119 0.988 3.81661 0.6675C3.93741 0.616 4.24282 0.507 4.40599 0.5C4.56235 0.5 4.7114 0.536 4.85363 0.609C5.03093 0.711 5.17316 0.8715 5.2511 1.061C5.30127 1.1925 5.3792 1.586 5.3792 1.593C5.45714 2.0235 5.5 2.723 5.5 3.496C5.5 4.2325 5.45714 4.9035 5.39333 5.3405C5.38602 5.3475 5.30809 5.8365 5.22284 6.004C5.06649 6.31 4.76108 6.5 4.43424 6.5L4.40599 6.5C4.19313 6.4925 3.74549 6.3025 3.74549 6.2955C2.99294 5.9745 1.50828 4.976 0.911593 4.3125C0.911593 4.3125 0.743546 4.142 0.670482 4.0355C0.556503 3.8825 0.5 3.693 0.5 3.5035C0.5 3.292 0.563809 3.095 0.684608 2.9345Z"
                    fill="#27817A"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- services -->
    <section class="my-5 pt-4" id="services">
      <div class="container">
        <div>
          <div>
            <div class="position-relative h-100">
              <div class="swiper specialProduct px-3 py-5 h-100">
                
                <SwiperMain
                :slides-per-view="1"
                :space-between="20"
                :pagination="false"
                :navigation="false"
                :breakpoints="{
                    '768': {slidesPerView:2},
                    '992': {slidesPerView:3},
                    '1200': {slidesPerView:4},
                  }"
                >
                  <SwiperSlide>
                    <div
                      class="overflow-hidden rounded-25 h-100 bg-white position-relative border"
                    >
                      <!-- shape -->
                      <img
                        alt="shape"
                        src="assets/img/service4.png"
                        class="img-fluid position-absolute w-232 top-0 end-0 z-0"
                      />
                      <!--  -->
                      <div class="p-4">
                        <div
                          class="d-flex gap-2 position-relative z-10 mt-235 h-90"
                        >
                          <svg
                            class="mt-2 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="9"
                            viewBox="0 0 21 9"
                            fill="none"
                          >
                            <rect
                              width="21"
                              height="9"
                              rx="4.5"
                              fill="url(#paint0_linear_35_427)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_35_427"
                                x1="-3.12924e-07"
                                y1="7.94259"
                                x2="18.2683"
                                y2="-4.13266"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#5B6CCC" />
                                <stop offset="1" stop-color="#4834AC" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <p class="font-bold mb-0 fs-20">
                            توزیع کلیه ملزومات برق صنعتی، روشنایی و انواع کابل و
                            سینی کابل
                          </p>
                        </div>
                        <!-- more -->
                        <a
                          class="d-flex align-items-center justify-content-center w-126 h-45 mt-5 rounded-14 gap-3 shadow8 bg-white py-2 px-3"
                        >
                          <p class="mb-0 fs-14 text-dark">بیشتر بدانید</p>
                          <svg
                            class="rotate-y-180-ltr"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                          >
                            <path
                              d="M0.51786 2.9345C0.546111 2.9055 0.652784 2.7815 0.752151 2.6795C1.33471 2.038 2.85444 0.988 3.64986 0.6675C3.77066 0.616 4.07607 0.507 4.23924 0.5C4.3956 0.5 4.54465 0.536 4.68688 0.609C4.86418 0.711 5.00641 0.8715 5.08435 1.061C5.13452 1.1925 5.21245 1.586 5.21245 1.593C5.29039 2.0235 5.33325 2.723 5.33325 3.496C5.33325 4.2325 5.29039 4.9035 5.22658 5.3405C5.21927 5.3475 5.14134 5.8365 5.0561 6.004C4.89974 6.31 4.59433 6.5 4.26749 6.5L4.23924 6.5C4.02638 6.4925 3.57875 6.3025 3.57875 6.2955C2.82619 5.9745 1.34153 4.976 0.744845 4.3125C0.744845 4.3125 0.576798 4.142 0.503734 4.0355C0.389755 3.8825 0.333252 3.693 0.333252 3.5035C0.333252 3.292 0.397061 3.095 0.51786 2.9345Z"
                              fill="url(#paint0_linear_35_482)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_35_482"
                                x1="0.920702"
                                y1="0.5"
                                x2="3.20614"
                                y2="7.22309"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#5B6CCC" />
                                <stop offset="1" stop-color="#4834AC" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      class="overflow-hidden rounded-25 h-100 bg-white position-relative border"
                    >
                      <!-- shape -->
                      <img
                        alt="shape"
                        src="assets/img/service1.png"
                        class="img-fluid position-absolute w-232 top-0 start-0 z-0"
                      />
                      <!--  -->
                      <div class="p-4">
                        <div
                          class="d-flex gap-2 position-relative z-10 mt-235 h-90"
                        >
                          <svg
                            class="flex-shrink-0 mt-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="10"
                            viewBox="0 0 21 10"
                            fill="none"
                          >
                            <rect
                              y="0.5"
                              width="21"
                              height="9"
                              rx="4.5"
                              fill="#27817A"
                            />
                          </svg>
                          <p class="font-bold mb-0 fs-20">
                            طراحی و ساخت انواع تابلوهای برق (MV-LV-HV) و بانک
                            خازن
                          </p>
                        </div>
                        <!-- more -->
                        <a
                          class="d-flex align-items-center justify-content-center w-126 h-45 mt-5 rounded-14 gap-3 shadow8 bg-white py-2 px-3"
                        >
                          <p class="mb-0 fs-14 text-dark">بیشتر بدانید</p>
                          <svg
                            class="rotate-y-180-ltr"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                          >
                            <path
                              d="M0.51786 2.9345C0.546111 2.9055 0.652784 2.7815 0.752151 2.6795C1.33471 2.038 2.85444 0.988 3.64986 0.6675C3.77066 0.616 4.07607 0.507 4.23924 0.5C4.3956 0.5 4.54465 0.536 4.68688 0.609C4.86418 0.711 5.00641 0.8715 5.08435 1.061C5.13452 1.1925 5.21245 1.586 5.21245 1.593C5.29039 2.0235 5.33325 2.723 5.33325 3.496C5.33325 4.2325 5.29039 4.9035 5.22658 5.3405C5.21927 5.3475 5.14134 5.8365 5.0561 6.004C4.89974 6.31 4.59433 6.5 4.26749 6.5L4.23924 6.5C4.02638 6.4925 3.57875 6.3025 3.57875 6.2955C2.82619 5.9745 1.34153 4.976 0.744845 4.3125C0.744845 4.3125 0.576798 4.142 0.503734 4.0355C0.389755 3.8825 0.333252 3.693 0.333252 3.5035C0.333252 3.292 0.397061 3.095 0.51786 2.9345Z"
                              fill="url(#paint0_linear_35_482)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_35_482"
                                x1="0.920702"
                                y1="0.5"
                                x2="3.20614"
                                y2="7.22309"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#5B6CCC" />
                                <stop offset="1" stop-color="#4834AC" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      class="overflow-hidden rounded-25 h-100 bg-white position-relative border"
                    >
                      <!-- shape -->
                      <img
                        alt="shape"
                        src="assets/img/service4.png"
                        class="img-fluid position-absolute w-232 top-0 end-0 z-0"
                      />
                      <!--  -->
                      <div class="p-4">
                        <div
                          class="d-flex gap-2 position-relative z-10 mt-235 h-90"
                        >
                          <svg
                            class="mt-2 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="9"
                            viewBox="0 0 21 9"
                            fill="none"
                          >
                            <rect
                              width="21"
                              height="9"
                              rx="4.5"
                              fill="url(#paint0_linear_35_427)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_35_427"
                                x1="-3.12924e-07"
                                y1="7.94259"
                                x2="18.2683"
                                y2="-4.13266"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#5B6CCC" />
                                <stop offset="1" stop-color="#4834AC" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <p class="font-bold mb-0 fs-20">
                            مجری کلیه پروژه های برق و اتوماسیون (PLC) با سابقه
                            درخشان
                          </p>
                        </div>
                        <!-- more -->
                        <a
                          class="d-flex align-items-center justify-content-center w-126 h-45 mt-5 rounded-14 gap-3 shadow8 bg-white py-2 px-3"
                        >
                          <p class="mb-0 fs-14 text-dark">بیشتر بدانید</p>
                          <svg
                            class="rotate-y-180-ltr"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                          >
                            <path
                              d="M0.51786 2.9345C0.546111 2.9055 0.652784 2.7815 0.752151 2.6795C1.33471 2.038 2.85444 0.988 3.64986 0.6675C3.77066 0.616 4.07607 0.507 4.23924 0.5C4.3956 0.5 4.54465 0.536 4.68688 0.609C4.86418 0.711 5.00641 0.8715 5.08435 1.061C5.13452 1.1925 5.21245 1.586 5.21245 1.593C5.29039 2.0235 5.33325 2.723 5.33325 3.496C5.33325 4.2325 5.29039 4.9035 5.22658 5.3405C5.21927 5.3475 5.14134 5.8365 5.0561 6.004C4.89974 6.31 4.59433 6.5 4.26749 6.5L4.23924 6.5C4.02638 6.4925 3.57875 6.3025 3.57875 6.2955C2.82619 5.9745 1.34153 4.976 0.744845 4.3125C0.744845 4.3125 0.576798 4.142 0.503734 4.0355C0.389755 3.8825 0.333252 3.693 0.333252 3.5035C0.333252 3.292 0.397061 3.095 0.51786 2.9345Z"
                              fill="url(#paint0_linear_35_482)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_35_482"
                                x1="0.920702"
                                y1="0.5"
                                x2="3.20614"
                                y2="7.22309"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#5B6CCC" />
                                <stop offset="1" stop-color="#4834AC" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      class="overflow-hidden rounded-25 h-100 bg-white position-relative border"
                    >
                      <!-- shape -->
                      <img
                        alt="shape"
                        src="assets/img/service4.png"
                        class="img-fluid position-absolute w-232 top-0 end-0 z-0"
                      />
                      <!--  -->
                      <div class="p-4">
                        <div
                          class="d-flex gap-2 position-relative z-10 mt-235 h-90"
                        >
                          <svg
                            class="mt-2 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="9"
                            viewBox="0 0 21 9"
                            fill="none"
                          >
                            <rect
                              width="21"
                              height="9"
                              rx="4.5"
                              fill="url(#paint0_linear_35_427)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_35_427"
                                x1="-3.12924e-07"
                                y1="7.94259"
                                x2="18.2683"
                                y2="-4.13266"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#5B6CCC" />
                                <stop offset="1" stop-color="#4834AC" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <p class="font-bold mb-0 fs-20">
                            توزیع کلیه ملزومات برق صنعتی، روشنایی و انواع کابل و
                            سینی کابل
                          </p>
                        </div>
                        <!-- more -->
                        <a
                          class="d-flex align-items-center justify-content-center w-126 h-45 mt-5 rounded-14 gap-3 shadow8 bg-white py-2 px-3"
                        >
                          <p class="mb-0 fs-14 text-dark">بیشتر بدانید</p>
                          <svg
                            class="rotate-y-180-ltr"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                          >
                            <path
                              d="M0.51786 2.9345C0.546111 2.9055 0.652784 2.7815 0.752151 2.6795C1.33471 2.038 2.85444 0.988 3.64986 0.6675C3.77066 0.616 4.07607 0.507 4.23924 0.5C4.3956 0.5 4.54465 0.536 4.68688 0.609C4.86418 0.711 5.00641 0.8715 5.08435 1.061C5.13452 1.1925 5.21245 1.586 5.21245 1.593C5.29039 2.0235 5.33325 2.723 5.33325 3.496C5.33325 4.2325 5.29039 4.9035 5.22658 5.3405C5.21927 5.3475 5.14134 5.8365 5.0561 6.004C4.89974 6.31 4.59433 6.5 4.26749 6.5L4.23924 6.5C4.02638 6.4925 3.57875 6.3025 3.57875 6.2955C2.82619 5.9745 1.34153 4.976 0.744845 4.3125C0.744845 4.3125 0.576798 4.142 0.503734 4.0355C0.389755 3.8825 0.333252 3.693 0.333252 3.5035C0.333252 3.292 0.397061 3.095 0.51786 2.9345Z"
                              fill="url(#paint0_linear_35_482)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_35_482"
                                x1="0.920702"
                                y1="0.5"
                                x2="3.20614"
                                y2="7.22309"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#5B6CCC" />
                                <stop offset="1" stop-color="#4834AC" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      class="overflow-hidden rounded-25 h-100 bg-white position-relative border"
                    >
                      <!-- shape -->
                      <img
                        alt="shape"
                        src="assets/img/service1.png"
                        class="img-fluid position-absolute w-232 top-0 start-0 z-0"
                      />
                      <!--  -->
                      <div class="p-4">
                        <div
                          class="d-flex gap-2 position-relative z-10 mt-235 h-90"
                        >
                          <svg
                            class="flex-shrink-0 mt-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="10"
                            viewBox="0 0 21 10"
                            fill="none"
                          >
                            <rect
                              y="0.5"
                              width="21"
                              height="9"
                              rx="4.5"
                              fill="#27817A"
                            />
                          </svg>
                          <p class="font-bold mb-0 fs-20">
                            طراحی و ساخت انواع تابلوهای برق (MV-LV-HV) و بانک
                            خازن
                          </p>
                        </div>
                        <!-- more -->
                        <a
                          class="d-flex align-items-center justify-content-center w-126 h-45 mt-5 rounded-14 gap-3 shadow8 bg-white py-2 px-3"
                        >
                          <p class="mb-0 fs-14 text-dark">بیشتر بدانید</p>
                          <svg
                            class="rotate-y-180-ltr"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                          >
                            <path
                              d="M0.51786 2.9345C0.546111 2.9055 0.652784 2.7815 0.752151 2.6795C1.33471 2.038 2.85444 0.988 3.64986 0.6675C3.77066 0.616 4.07607 0.507 4.23924 0.5C4.3956 0.5 4.54465 0.536 4.68688 0.609C4.86418 0.711 5.00641 0.8715 5.08435 1.061C5.13452 1.1925 5.21245 1.586 5.21245 1.593C5.29039 2.0235 5.33325 2.723 5.33325 3.496C5.33325 4.2325 5.29039 4.9035 5.22658 5.3405C5.21927 5.3475 5.14134 5.8365 5.0561 6.004C4.89974 6.31 4.59433 6.5 4.26749 6.5L4.23924 6.5C4.02638 6.4925 3.57875 6.3025 3.57875 6.2955C2.82619 5.9745 1.34153 4.976 0.744845 4.3125C0.744845 4.3125 0.576798 4.142 0.503734 4.0355C0.389755 3.8825 0.333252 3.693 0.333252 3.5035C0.333252 3.292 0.397061 3.095 0.51786 2.9345Z"
                              fill="url(#paint0_linear_35_482)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_35_482"
                                x1="0.920702"
                                y1="0.5"
                                x2="3.20614"
                                y2="7.22309"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#5B6CCC" />
                                <stop offset="1" stop-color="#4834AC" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      class="overflow-hidden rounded-25 h-100 bg-white position-relative border"
                    >
                      <!-- shape -->
                      <img
                        alt="shape"
                        src="assets/img/service4.png"
                        class="img-fluid position-absolute w-232 top-0 end-0 z-0"
                      />
                      <!--  -->
                      <div class="p-4">
                        <div
                          class="d-flex gap-2 position-relative z-10 mt-235 h-90"
                        >
                          <svg
                            class="mt-2 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="9"
                            viewBox="0 0 21 9"
                            fill="none"
                          >
                            <rect
                              width="21"
                              height="9"
                              rx="4.5"
                              fill="url(#paint0_linear_35_427)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_35_427"
                                x1="-3.12924e-07"
                                y1="7.94259"
                                x2="18.2683"
                                y2="-4.13266"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#5B6CCC" />
                                <stop offset="1" stop-color="#4834AC" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <p class="font-bold mb-0 fs-20">
                            مجری کلیه پروژه های برق و اتوماسیون (PLC) با سابقه
                            درخشان
                          </p>
                        </div>
                        <!-- more -->
                        <a
                          class="d-flex align-items-center justify-content-center w-126 h-45 mt-5 rounded-14 gap-3 shadow8 bg-white py-2 px-3"
                        >
                          <p class="mb-0 fs-14 text-dark">بیشتر بدانید</p>
                          <svg
                            class="rotate-y-180-ltr"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                          >
                            <path
                              d="M0.51786 2.9345C0.546111 2.9055 0.652784 2.7815 0.752151 2.6795C1.33471 2.038 2.85444 0.988 3.64986 0.6675C3.77066 0.616 4.07607 0.507 4.23924 0.5C4.3956 0.5 4.54465 0.536 4.68688 0.609C4.86418 0.711 5.00641 0.8715 5.08435 1.061C5.13452 1.1925 5.21245 1.586 5.21245 1.593C5.29039 2.0235 5.33325 2.723 5.33325 3.496C5.33325 4.2325 5.29039 4.9035 5.22658 5.3405C5.21927 5.3475 5.14134 5.8365 5.0561 6.004C4.89974 6.31 4.59433 6.5 4.26749 6.5L4.23924 6.5C4.02638 6.4925 3.57875 6.3025 3.57875 6.2955C2.82619 5.9745 1.34153 4.976 0.744845 4.3125C0.744845 4.3125 0.576798 4.142 0.503734 4.0355C0.389755 3.8825 0.333252 3.693 0.333252 3.5035C0.333252 3.292 0.397061 3.095 0.51786 2.9345Z"
                              fill="url(#paint0_linear_35_482)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_35_482"
                                x1="0.920702"
                                y1="0.5"
                                x2="3.20614"
                                y2="7.22309"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#5B6CCC" />
                                <stop offset="1" stop-color="#4834AC" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </SwiperMain>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- sensor -->
    <section class="mt-5 pt-2">
      <div class="container mt-5">
        <div class="row">
          <div class="col-xl-3 d-flex justify-content-end flex-column">
            <div class="rounded-29 bg-second2 p-4 position-relative h-237 mb-5">
              <!-- svg -->
              <img
                alt="shape"
                src="assets/img/sensorSvg.png"
                class="img-fluid position-absolute end-0 top-0 h-100 w-100"
              />
              <div
                class="position-absolute bg-second4 rounded-b-29 h-20 mx-4 end-0 start-0 -bottom-15 -z-1"
              ></div>
              <div
                class="position-absolute bg-second3 rounded-b-29 h-12 mx-5 end-0 start-0 -bottom-27 -z-1"
              ></div>
              <!--  -->
              <div
                class="d-flex align-items-center justify-content-center rounded-29 bg-white position-relative -top-lg-133 -top-xl-87 -top-114 shadow10"
              >
                <img
                  alt="product"
                  src="assets/img/sensor.png"
                  class="img-fluid"
                />
              </div>
              <p
                class="font-bold fs-20 text-white text-center mb-0 position-absolute bottom-0 end-0 start-0 mb-4"
              >
                سنسور
              </p>
            </div>
          </div>
          <div class="col-xl-9">
            <!-- swiper -->
            <div
              class="services"
            >
            <SwiperMain class=""
            :slides-per-view="1"
                :space-between="20"
                :pagination="false"
                :navigation="false"
                :breakpoints="{
                    '768': {slidesPerView:2},
                    '1200': {slidesPerView:3},
                  }"
                >
                  <SwiperSlide class="p-1">
                    <div class="rounded-20 bg-white p-3 border">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <a class="d-flex align-items-center justify-content-center px-2 bg-white rounded-15 gap-2 fs-11 fw-bold text-second-gradient shadow8 h-65">
                      <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g opacity="0.4">
                          <path d="M12.5149 4.57512C12.1182 4.50184 11.7539 4.755 11.6783 5.14224C11.6028 5.52947 11.8568 5.90754 12.2427 5.98333C13.4046 6.20984 14.3017 7.10922 14.5291 8.27508C14.5938 8.61069 14.8893 8.85552 15.2296 8.85552C15.2752 8.85552 15.3208 8.85136 15.3673 8.84303C15.7532 8.76558 16.0072 8.38834 15.9317 8.00027C15.5922 6.25897 14.2519 4.91406 12.5149 4.57512Z" fill="url(#paint0_linear_751_278)"></path>
                          <path d="M12.463 1.67336C12.2771 1.64671 12.0904 1.70167 11.9419 1.81992C11.7892 1.93984 11.6937 2.11305 11.673 2.30709C11.629 2.69932 11.912 3.05407 12.3037 3.09821C15.0051 3.39967 17.1048 5.50406 17.4085 8.21387C17.4492 8.57695 17.7538 8.85093 18.1173 8.85093C18.1447 8.85093 18.1712 8.84926 18.1986 8.84593C18.3887 8.82511 18.558 8.73101 18.6775 8.58111C18.7961 8.43122 18.8501 8.24468 18.8285 8.05398C18.4501 4.67296 15.8333 2.04893 12.463 1.67336Z" fill="url(#paint1_linear_751_278)"></path>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69295 10.8103C13.0172 14.1336 13.7713 10.2889 15.8879 12.404C17.9284 14.444 19.1012 14.8527 16.5159 17.4373C16.192 17.6975 14.1345 20.8285 6.90367 13.5997C-0.328061 6.37 2.80116 4.31037 3.06148 3.98662C5.65306 1.39487 6.05472 2.57449 8.09524 4.61444C10.2118 6.73041 6.36872 7.48701 9.69295 10.8103Z" fill="url(#paint2_linear_751_278)"></path>
                        <defs>
                          <linearGradient id="paint0_linear_751_278" x1="11.665" y1="8.35113" x2="16.6198" y2="6.95183" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint1_linear_751_278" x1="11.6685" y1="8.00686" x2="19.9624" y2="5.6637" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint2_linear_751_278" x1="2.1665" y1="16.4731" x2="20.4879" y2="11.2829" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <p class="mb-0">لطفا برای اطلاع از قیمت با ما تماس بگیرید</p>
                    </a>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide class="p-1">
                    <div class="rounded-20 bg-white p-3 border">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <div class="d-flex align-items-center gap-3 h-65">
                      <a class="d-flex align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path
                            d="M6.75 15C7.08152 15 7.39946 15.1317 7.63388 15.3661C7.8683 15.6005 8 15.9185 8 16.25C8 16.5815 7.8683 16.8995 7.63388 17.1339C7.39946 17.3683 7.08152 17.5 6.75 17.5C6.41848 17.5 6.10054 17.3683 5.86612 17.1339C5.6317 16.8995 5.5 16.5815 5.5 16.25C5.5 15.9185 5.6317 15.6005 5.86612 15.3661C6.10054 15.1317 6.41848 15 6.75 15ZM14.25 15C14.5815 15 14.8995 15.1317 15.1339 15.3661C15.3683 15.6005 15.5 15.9185 15.5 16.25C15.5 16.5815 15.3683 16.8995 15.1339 17.1339C14.8995 17.3683 14.5815 17.5 14.25 17.5C13.9185 17.5 13.6005 17.3683 13.3661 17.1339C13.1317 16.8995 13 16.5815 13 16.25C13 15.9185 13.1317 15.6005 13.3661 15.3661C13.6005 15.1317 13.9185 15 14.25 15Z"
                            fill="url(#paint0_linear_50_361)" />
                          <path opacity="0.5"
                            d="M2.23648 2.29254C2.29142 2.13619 2.40622 2.00806 2.55561 1.93633C2.70501 1.8646 2.87678 1.85514 3.03315 1.91004L3.28398 1.99837C3.79815 2.1792 4.23398 2.33254 4.57815 2.50087C4.94481 2.6817 5.25981 2.90337 5.49648 3.25004C5.73148 3.59337 5.82898 3.97087 5.87315 4.38504C5.89315 4.57004 5.90398 4.77504 5.90981 5.00004H14.7748C16.179 5.00004 17.4431 5.00004 17.8131 5.48087C18.1831 5.9617 18.0381 6.6867 17.749 8.13587L17.3323 10.1567C17.0698 11.43 16.939 12.0675 16.479 12.4417C16.019 12.8167 15.369 12.8167 14.0681 12.8167H9.64898C7.32398 12.8167 6.16231 12.8167 5.44065 12.055C4.71898 11.2934 4.66565 10.485 4.66565 8.03337V5.86504C4.66565 5.24837 4.66565 4.83587 4.63065 4.5192C4.59731 4.2167 4.53981 4.06504 4.46398 3.95504C4.39148 3.84754 4.28065 3.7467 4.02731 3.62337C3.75815 3.4917 3.39231 3.3617 2.83565 3.16587L2.61898 3.09004C2.54139 3.06292 2.46991 3.02076 2.40864 2.96598C2.34737 2.9112 2.2975 2.84488 2.26189 2.7708C2.22628 2.69672 2.20564 2.61635 2.20113 2.53428C2.19663 2.45222 2.20836 2.37007 2.23565 2.29254H2.23648Z"
                            fill="url(#paint1_linear_50_361)" />
                          <path
                            d="M11.9582 7.5C11.9582 7.33424 11.8923 7.17527 11.7751 7.05806C11.6579 6.94085 11.4989 6.875 11.3332 6.875C11.1674 6.875 11.0084 6.94085 10.8912 7.05806C10.774 7.17527 10.7082 7.33424 10.7082 7.5V8.54167H9.6665C9.50074 8.54167 9.34177 8.60752 9.22456 8.72473C9.10735 8.84194 9.0415 9.00091 9.0415 9.16667C9.0415 9.33243 9.10735 9.4914 9.22456 9.60861C9.34177 9.72582 9.50074 9.79167 9.6665 9.79167H10.7082V10.8333C10.7082 10.9991 10.774 11.1581 10.8912 11.2753C11.0084 11.3925 11.1674 11.4583 11.3332 11.4583C11.4989 11.4583 11.6579 11.3925 11.7751 11.2753C11.8923 11.1581 11.9582 10.9991 11.9582 10.8333V9.79167H12.9998C13.1656 9.79167 13.3246 9.72582 13.4418 9.60861C13.559 9.4914 13.6248 9.33243 13.6248 9.16667C13.6248 9.00091 13.559 8.84194 13.4418 8.72473C13.3246 8.60752 13.1656 8.54167 12.9998 8.54167H11.9582V7.5Z"
                            fill="url(#paint2_linear_50_361)" />
                          <defs>
                            <linearGradient id="paint0_linear_50_361" x1="5.5" y1="17.2063" x2="10.9729" y2="11.0048"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_50_361" x1="2.2002" y1="11.5311" x2="19.1452" y2="4.58471"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_50_361" x1="9.0415" y1="10.9198" x2="14.3451" y2="9.41743"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </a>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                          <p class="fs-12 text-gray text-decoration-line-through mb-0">۵،۱۰۰،۰۰۰</p>
                          <p class="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill">۱۵٪</p>
                        </div>
                        <div class="d-flex align-items-end justify-content-end gap-1 mt-1">
                          <p class="fs-17 font-bold mb-0">۳،۶۵۰،۰۰۰</p>
                          <p class="mb-1 fs-12 fw-bold">تومان</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide class="p-1">
                    <div class="rounded-20 bg-white p-3 border">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <a class="d-flex align-items-center justify-content-center px-2 bg-white rounded-15 gap-2 fs-11 fw-bold text-second-gradient shadow8 h-65">
                      <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g opacity="0.4">
                          <path d="M12.5149 4.57512C12.1182 4.50184 11.7539 4.755 11.6783 5.14224C11.6028 5.52947 11.8568 5.90754 12.2427 5.98333C13.4046 6.20984 14.3017 7.10922 14.5291 8.27508C14.5938 8.61069 14.8893 8.85552 15.2296 8.85552C15.2752 8.85552 15.3208 8.85136 15.3673 8.84303C15.7532 8.76558 16.0072 8.38834 15.9317 8.00027C15.5922 6.25897 14.2519 4.91406 12.5149 4.57512Z" fill="url(#paint0_linear_751_278)"></path>
                          <path d="M12.463 1.67336C12.2771 1.64671 12.0904 1.70167 11.9419 1.81992C11.7892 1.93984 11.6937 2.11305 11.673 2.30709C11.629 2.69932 11.912 3.05407 12.3037 3.09821C15.0051 3.39967 17.1048 5.50406 17.4085 8.21387C17.4492 8.57695 17.7538 8.85093 18.1173 8.85093C18.1447 8.85093 18.1712 8.84926 18.1986 8.84593C18.3887 8.82511 18.558 8.73101 18.6775 8.58111C18.7961 8.43122 18.8501 8.24468 18.8285 8.05398C18.4501 4.67296 15.8333 2.04893 12.463 1.67336Z" fill="url(#paint1_linear_751_278)"></path>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69295 10.8103C13.0172 14.1336 13.7713 10.2889 15.8879 12.404C17.9284 14.444 19.1012 14.8527 16.5159 17.4373C16.192 17.6975 14.1345 20.8285 6.90367 13.5997C-0.328061 6.37 2.80116 4.31037 3.06148 3.98662C5.65306 1.39487 6.05472 2.57449 8.09524 4.61444C10.2118 6.73041 6.36872 7.48701 9.69295 10.8103Z" fill="url(#paint2_linear_751_278)"></path>
                        <defs>
                          <linearGradient id="paint0_linear_751_278" x1="11.665" y1="8.35113" x2="16.6198" y2="6.95183" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint1_linear_751_278" x1="11.6685" y1="8.00686" x2="19.9624" y2="5.6637" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint2_linear_751_278" x1="2.1665" y1="16.4731" x2="20.4879" y2="11.2829" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <p class="mb-0">لطفا برای اطلاع از قیمت با ما تماس بگیرید</p>
                    </a>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide class="p-1">
                    <div class="rounded-20 bg-white p-3 border">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <div class="d-flex align-items-center gap-3 h-65">
                      <a class="d-flex align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path
                            d="M6.75 15C7.08152 15 7.39946 15.1317 7.63388 15.3661C7.8683 15.6005 8 15.9185 8 16.25C8 16.5815 7.8683 16.8995 7.63388 17.1339C7.39946 17.3683 7.08152 17.5 6.75 17.5C6.41848 17.5 6.10054 17.3683 5.86612 17.1339C5.6317 16.8995 5.5 16.5815 5.5 16.25C5.5 15.9185 5.6317 15.6005 5.86612 15.3661C6.10054 15.1317 6.41848 15 6.75 15ZM14.25 15C14.5815 15 14.8995 15.1317 15.1339 15.3661C15.3683 15.6005 15.5 15.9185 15.5 16.25C15.5 16.5815 15.3683 16.8995 15.1339 17.1339C14.8995 17.3683 14.5815 17.5 14.25 17.5C13.9185 17.5 13.6005 17.3683 13.3661 17.1339C13.1317 16.8995 13 16.5815 13 16.25C13 15.9185 13.1317 15.6005 13.3661 15.3661C13.6005 15.1317 13.9185 15 14.25 15Z"
                            fill="url(#paint0_linear_50_361)" />
                          <path opacity="0.5"
                            d="M2.23648 2.29254C2.29142 2.13619 2.40622 2.00806 2.55561 1.93633C2.70501 1.8646 2.87678 1.85514 3.03315 1.91004L3.28398 1.99837C3.79815 2.1792 4.23398 2.33254 4.57815 2.50087C4.94481 2.6817 5.25981 2.90337 5.49648 3.25004C5.73148 3.59337 5.82898 3.97087 5.87315 4.38504C5.89315 4.57004 5.90398 4.77504 5.90981 5.00004H14.7748C16.179 5.00004 17.4431 5.00004 17.8131 5.48087C18.1831 5.9617 18.0381 6.6867 17.749 8.13587L17.3323 10.1567C17.0698 11.43 16.939 12.0675 16.479 12.4417C16.019 12.8167 15.369 12.8167 14.0681 12.8167H9.64898C7.32398 12.8167 6.16231 12.8167 5.44065 12.055C4.71898 11.2934 4.66565 10.485 4.66565 8.03337V5.86504C4.66565 5.24837 4.66565 4.83587 4.63065 4.5192C4.59731 4.2167 4.53981 4.06504 4.46398 3.95504C4.39148 3.84754 4.28065 3.7467 4.02731 3.62337C3.75815 3.4917 3.39231 3.3617 2.83565 3.16587L2.61898 3.09004C2.54139 3.06292 2.46991 3.02076 2.40864 2.96598C2.34737 2.9112 2.2975 2.84488 2.26189 2.7708C2.22628 2.69672 2.20564 2.61635 2.20113 2.53428C2.19663 2.45222 2.20836 2.37007 2.23565 2.29254H2.23648Z"
                            fill="url(#paint1_linear_50_361)" />
                          <path
                            d="M11.9582 7.5C11.9582 7.33424 11.8923 7.17527 11.7751 7.05806C11.6579 6.94085 11.4989 6.875 11.3332 6.875C11.1674 6.875 11.0084 6.94085 10.8912 7.05806C10.774 7.17527 10.7082 7.33424 10.7082 7.5V8.54167H9.6665C9.50074 8.54167 9.34177 8.60752 9.22456 8.72473C9.10735 8.84194 9.0415 9.00091 9.0415 9.16667C9.0415 9.33243 9.10735 9.4914 9.22456 9.60861C9.34177 9.72582 9.50074 9.79167 9.6665 9.79167H10.7082V10.8333C10.7082 10.9991 10.774 11.1581 10.8912 11.2753C11.0084 11.3925 11.1674 11.4583 11.3332 11.4583C11.4989 11.4583 11.6579 11.3925 11.7751 11.2753C11.8923 11.1581 11.9582 10.9991 11.9582 10.8333V9.79167H12.9998C13.1656 9.79167 13.3246 9.72582 13.4418 9.60861C13.559 9.4914 13.6248 9.33243 13.6248 9.16667C13.6248 9.00091 13.559 8.84194 13.4418 8.72473C13.3246 8.60752 13.1656 8.54167 12.9998 8.54167H11.9582V7.5Z"
                            fill="url(#paint2_linear_50_361)" />
                          <defs>
                            <linearGradient id="paint0_linear_50_361" x1="5.5" y1="17.2063" x2="10.9729" y2="11.0048"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_50_361" x1="2.2002" y1="11.5311" x2="19.1452" y2="4.58471"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_50_361" x1="9.0415" y1="10.9198" x2="14.3451" y2="9.41743"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </a>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                          <p class="fs-12 text-gray text-decoration-line-through mb-0">۵،۱۰۰،۰۰۰</p>
                          <p class="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill">۱۵٪</p>
                        </div>
                        <div class="d-flex align-items-end justify-content-end gap-1 mt-1">
                          <p class="fs-17 font-bold mb-0">۳،۶۵۰،۰۰۰</p>
                          <p class="mb-1 fs-12 fw-bold">تومان</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide class="p-1">
                    <div class="rounded-20 bg-white p-3 border">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <a class="d-flex align-items-center justify-content-center px-2 bg-white rounded-15 gap-2 fs-11 fw-bold text-second-gradient shadow8 h-65">
                      <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g opacity="0.4">
                          <path d="M12.5149 4.57512C12.1182 4.50184 11.7539 4.755 11.6783 5.14224C11.6028 5.52947 11.8568 5.90754 12.2427 5.98333C13.4046 6.20984 14.3017 7.10922 14.5291 8.27508C14.5938 8.61069 14.8893 8.85552 15.2296 8.85552C15.2752 8.85552 15.3208 8.85136 15.3673 8.84303C15.7532 8.76558 16.0072 8.38834 15.9317 8.00027C15.5922 6.25897 14.2519 4.91406 12.5149 4.57512Z" fill="url(#paint0_linear_751_278)"></path>
                          <path d="M12.463 1.67336C12.2771 1.64671 12.0904 1.70167 11.9419 1.81992C11.7892 1.93984 11.6937 2.11305 11.673 2.30709C11.629 2.69932 11.912 3.05407 12.3037 3.09821C15.0051 3.39967 17.1048 5.50406 17.4085 8.21387C17.4492 8.57695 17.7538 8.85093 18.1173 8.85093C18.1447 8.85093 18.1712 8.84926 18.1986 8.84593C18.3887 8.82511 18.558 8.73101 18.6775 8.58111C18.7961 8.43122 18.8501 8.24468 18.8285 8.05398C18.4501 4.67296 15.8333 2.04893 12.463 1.67336Z" fill="url(#paint1_linear_751_278)"></path>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69295 10.8103C13.0172 14.1336 13.7713 10.2889 15.8879 12.404C17.9284 14.444 19.1012 14.8527 16.5159 17.4373C16.192 17.6975 14.1345 20.8285 6.90367 13.5997C-0.328061 6.37 2.80116 4.31037 3.06148 3.98662C5.65306 1.39487 6.05472 2.57449 8.09524 4.61444C10.2118 6.73041 6.36872 7.48701 9.69295 10.8103Z" fill="url(#paint2_linear_751_278)"></path>
                        <defs>
                          <linearGradient id="paint0_linear_751_278" x1="11.665" y1="8.35113" x2="16.6198" y2="6.95183" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint1_linear_751_278" x1="11.6685" y1="8.00686" x2="19.9624" y2="5.6637" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint2_linear_751_278" x1="2.1665" y1="16.4731" x2="20.4879" y2="11.2829" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <p class="mb-0">لطفا برای اطلاع از قیمت با ما تماس بگیرید</p>
                    </a>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide class="p-1">
                    <div class="rounded-20 bg-white p-3 border">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <div class="d-flex align-items-center gap-3 h-65">
                      <a class="d-flex align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path
                            d="M6.75 15C7.08152 15 7.39946 15.1317 7.63388 15.3661C7.8683 15.6005 8 15.9185 8 16.25C8 16.5815 7.8683 16.8995 7.63388 17.1339C7.39946 17.3683 7.08152 17.5 6.75 17.5C6.41848 17.5 6.10054 17.3683 5.86612 17.1339C5.6317 16.8995 5.5 16.5815 5.5 16.25C5.5 15.9185 5.6317 15.6005 5.86612 15.3661C6.10054 15.1317 6.41848 15 6.75 15ZM14.25 15C14.5815 15 14.8995 15.1317 15.1339 15.3661C15.3683 15.6005 15.5 15.9185 15.5 16.25C15.5 16.5815 15.3683 16.8995 15.1339 17.1339C14.8995 17.3683 14.5815 17.5 14.25 17.5C13.9185 17.5 13.6005 17.3683 13.3661 17.1339C13.1317 16.8995 13 16.5815 13 16.25C13 15.9185 13.1317 15.6005 13.3661 15.3661C13.6005 15.1317 13.9185 15 14.25 15Z"
                            fill="url(#paint0_linear_50_361)" />
                          <path opacity="0.5"
                            d="M2.23648 2.29254C2.29142 2.13619 2.40622 2.00806 2.55561 1.93633C2.70501 1.8646 2.87678 1.85514 3.03315 1.91004L3.28398 1.99837C3.79815 2.1792 4.23398 2.33254 4.57815 2.50087C4.94481 2.6817 5.25981 2.90337 5.49648 3.25004C5.73148 3.59337 5.82898 3.97087 5.87315 4.38504C5.89315 4.57004 5.90398 4.77504 5.90981 5.00004H14.7748C16.179 5.00004 17.4431 5.00004 17.8131 5.48087C18.1831 5.9617 18.0381 6.6867 17.749 8.13587L17.3323 10.1567C17.0698 11.43 16.939 12.0675 16.479 12.4417C16.019 12.8167 15.369 12.8167 14.0681 12.8167H9.64898C7.32398 12.8167 6.16231 12.8167 5.44065 12.055C4.71898 11.2934 4.66565 10.485 4.66565 8.03337V5.86504C4.66565 5.24837 4.66565 4.83587 4.63065 4.5192C4.59731 4.2167 4.53981 4.06504 4.46398 3.95504C4.39148 3.84754 4.28065 3.7467 4.02731 3.62337C3.75815 3.4917 3.39231 3.3617 2.83565 3.16587L2.61898 3.09004C2.54139 3.06292 2.46991 3.02076 2.40864 2.96598C2.34737 2.9112 2.2975 2.84488 2.26189 2.7708C2.22628 2.69672 2.20564 2.61635 2.20113 2.53428C2.19663 2.45222 2.20836 2.37007 2.23565 2.29254H2.23648Z"
                            fill="url(#paint1_linear_50_361)" />
                          <path
                            d="M11.9582 7.5C11.9582 7.33424 11.8923 7.17527 11.7751 7.05806C11.6579 6.94085 11.4989 6.875 11.3332 6.875C11.1674 6.875 11.0084 6.94085 10.8912 7.05806C10.774 7.17527 10.7082 7.33424 10.7082 7.5V8.54167H9.6665C9.50074 8.54167 9.34177 8.60752 9.22456 8.72473C9.10735 8.84194 9.0415 9.00091 9.0415 9.16667C9.0415 9.33243 9.10735 9.4914 9.22456 9.60861C9.34177 9.72582 9.50074 9.79167 9.6665 9.79167H10.7082V10.8333C10.7082 10.9991 10.774 11.1581 10.8912 11.2753C11.0084 11.3925 11.1674 11.4583 11.3332 11.4583C11.4989 11.4583 11.6579 11.3925 11.7751 11.2753C11.8923 11.1581 11.9582 10.9991 11.9582 10.8333V9.79167H12.9998C13.1656 9.79167 13.3246 9.72582 13.4418 9.60861C13.559 9.4914 13.6248 9.33243 13.6248 9.16667C13.6248 9.00091 13.559 8.84194 13.4418 8.72473C13.3246 8.60752 13.1656 8.54167 12.9998 8.54167H11.9582V7.5Z"
                            fill="url(#paint2_linear_50_361)" />
                          <defs>
                            <linearGradient id="paint0_linear_50_361" x1="5.5" y1="17.2063" x2="10.9729" y2="11.0048"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_50_361" x1="2.2002" y1="11.5311" x2="19.1452" y2="4.58471"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_50_361" x1="9.0415" y1="10.9198" x2="14.3451" y2="9.41743"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </a>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                          <p class="fs-12 text-gray text-decoration-line-through mb-0">۵،۱۰۰،۰۰۰</p>
                          <p class="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill">۱۵٪</p>
                        </div>
                        <div class="d-flex align-items-end justify-content-end gap-1 mt-1">
                          <p class="fs-17 font-bold mb-0">۳،۶۵۰،۰۰۰</p>
                          <p class="mb-1 fs-12 fw-bold">تومان</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
          </SwiperMain>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- special products -->
    <section class="mt-5 pt-4">
      <div class="container">
        <div
          class="rounded-19 bg-gray6 d-flex justify-content-between p-3 position-relative mt-5"
        >
          <svg
            class="position-absolute top-0 me-3"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="55"
            viewBox="0 0 32 55"
            fill="none"
          >
            <path
              d="M0 0H32V51.4865C32 53.037 30.3121 53.9978 28.9789 53.2062L17.0211 46.1063C16.3917 45.7325 15.6083 45.7325 14.9789 46.1063L3.02108 53.2062C1.6879 53.9978 0 53.037 0 51.4865V0Z"
              fill="#27817A"
            ></path>
            <path
              d="M13.0182 31.1818C14.4815 31.9501 15.2132 32.3335 15.9998 32.3335V24.0001L8.19817 19.8943C8.18683 19.9128 8.17572 19.9314 8.16484 19.9501C7.6665 20.7951 7.6665 21.8476 7.6665 23.9518V24.0493C7.6665 26.1526 7.6665 27.2051 8.164 28.0501C8.66234 28.896 9.559 29.3668 11.3515 30.3076L13.0182 31.1818Z"
              fill="white"
            ></path>
            <path
              opacity="0.7"
              d="M20.6474 17.6934L18.9807 16.8184C17.5182 16.0509 16.7866 15.6667 15.9999 15.6667C15.2124 15.6667 14.4816 16.0501 13.0182 16.8184L11.3516 17.6934C9.59824 18.6134 8.70158 19.0834 8.19824 19.8934L15.9999 24.0001L23.8016 19.8942C23.2966 19.0834 22.4016 18.6134 20.6474 17.6934Z"
              fill="white"
            ></path>
            <path
              opacity="0.5"
              d="M23.8358 19.9501C23.8247 19.9314 23.8133 19.9128 23.8017 19.8943L16 24.0001V32.3335C16.7867 32.3335 17.5183 31.9501 18.9817 31.1818L20.6483 30.3068C22.4408 29.366 23.3375 28.896 23.8358 28.0501C24.3333 27.2051 24.3333 26.1526 24.3333 24.0501V23.9526C24.3333 21.8485 24.3333 20.7951 23.8358 19.9501Z"
              fill="white"
            ></path>
          </svg>
          <div class="mx-5 pe-3 -mt-4">
            <p class="mb-2"><span class="font-bold">محصولات</span> ویژه</p>
            <p class="fs-12 text-gray mb-0">آخرین محصولات منتشر</p>
          </div>
          <a
            class="bg-white shadow8 text-dark px-sm-3 px-2 rounded-14 d-flex align-items-center justify-content-center gap-3 fs-14"
          >
            <p class="mb-0">مشاهده همه</p>
            <svg
              class="rotate-y-180-ltr"
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="6"
              viewBox="0 0 5 6"
              fill="none"
            >
              <path
                d="M0.184608 2.4345C0.212859 2.4055 0.319532 2.2815 0.418899 2.1795C1.00146 1.538 2.52119 0.488 3.31661 0.1675C3.43741 0.116 3.74282 0.00699994 3.90599 -4.78206e-08C4.06235 -4.09861e-08 4.2114 0.036 4.35363 0.109C4.53093 0.211 4.67316 0.3715 4.7511 0.561C4.80127 0.6925 4.8792 1.086 4.8792 1.093C4.95714 1.5235 5 2.223 5 2.996C5 3.7325 4.95714 4.4035 4.89333 4.8405C4.88602 4.8475 4.80809 5.3365 4.72284 5.504C4.56649 5.81 4.26108 6 3.93424 6L3.90599 6C3.69313 5.9925 3.24549 5.8025 3.24549 5.7955C2.49294 5.4745 1.00828 4.476 0.411593 3.8125C0.411593 3.8125 0.243546 3.642 0.170482 3.5355C0.0565027 3.3825 -1.3957e-07 3.193 -1.31287e-07 3.0035C-1.22042e-07 2.792 0.0638088 2.595 0.184608 2.4345Z"
                fill="black"
              ></path>
            </svg>
          </a>
        </div>
        <!-- swiper -->
        <div class="bg-white rounded-20 shadow10 mt-4">
          <div class="specialProduct">
          <SwiperMain class="p-3"
          :slides-per-view="1"
                :space-between="20"
                :pagination="false"
                :navigation="false"
                :breakpoints="{
                    '768': {slidesPerView:2},
                    '992': {slidesPerView:3},
                    '1200': {slidesPerView:4},
                  }"
                >
                  <SwiperSlide class="my-3">
                    <div class="rounded-20 bg-white p-3 shadow10">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <a class="d-flex align-items-center justify-content-center px-2 bg-white rounded-15 gap-2 fs-11 fw-bold text-second-gradient shadow8 h-65">
                      <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g opacity="0.4">
                          <path d="M12.5149 4.57512C12.1182 4.50184 11.7539 4.755 11.6783 5.14224C11.6028 5.52947 11.8568 5.90754 12.2427 5.98333C13.4046 6.20984 14.3017 7.10922 14.5291 8.27508C14.5938 8.61069 14.8893 8.85552 15.2296 8.85552C15.2752 8.85552 15.3208 8.85136 15.3673 8.84303C15.7532 8.76558 16.0072 8.38834 15.9317 8.00027C15.5922 6.25897 14.2519 4.91406 12.5149 4.57512Z" fill="url(#paint0_linear_751_278)"></path>
                          <path d="M12.463 1.67336C12.2771 1.64671 12.0904 1.70167 11.9419 1.81992C11.7892 1.93984 11.6937 2.11305 11.673 2.30709C11.629 2.69932 11.912 3.05407 12.3037 3.09821C15.0051 3.39967 17.1048 5.50406 17.4085 8.21387C17.4492 8.57695 17.7538 8.85093 18.1173 8.85093C18.1447 8.85093 18.1712 8.84926 18.1986 8.84593C18.3887 8.82511 18.558 8.73101 18.6775 8.58111C18.7961 8.43122 18.8501 8.24468 18.8285 8.05398C18.4501 4.67296 15.8333 2.04893 12.463 1.67336Z" fill="url(#paint1_linear_751_278)"></path>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69295 10.8103C13.0172 14.1336 13.7713 10.2889 15.8879 12.404C17.9284 14.444 19.1012 14.8527 16.5159 17.4373C16.192 17.6975 14.1345 20.8285 6.90367 13.5997C-0.328061 6.37 2.80116 4.31037 3.06148 3.98662C5.65306 1.39487 6.05472 2.57449 8.09524 4.61444C10.2118 6.73041 6.36872 7.48701 9.69295 10.8103Z" fill="url(#paint2_linear_751_278)"></path>
                        <defs>
                          <linearGradient id="paint0_linear_751_278" x1="11.665" y1="8.35113" x2="16.6198" y2="6.95183" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint1_linear_751_278" x1="11.6685" y1="8.00686" x2="19.9624" y2="5.6637" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint2_linear_751_278" x1="2.1665" y1="16.4731" x2="20.4879" y2="11.2829" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <p class="mb-0">لطفا برای اطلاع از قیمت با ما تماس بگیرید</p>
                    </a>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide class="my-3">
                    <div class="rounded-20 bg-white p-3 shadow10">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <div class="d-flex align-items-center gap-3 h-65">
                      <a class="d-flex align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path
                            d="M6.75 15C7.08152 15 7.39946 15.1317 7.63388 15.3661C7.8683 15.6005 8 15.9185 8 16.25C8 16.5815 7.8683 16.8995 7.63388 17.1339C7.39946 17.3683 7.08152 17.5 6.75 17.5C6.41848 17.5 6.10054 17.3683 5.86612 17.1339C5.6317 16.8995 5.5 16.5815 5.5 16.25C5.5 15.9185 5.6317 15.6005 5.86612 15.3661C6.10054 15.1317 6.41848 15 6.75 15ZM14.25 15C14.5815 15 14.8995 15.1317 15.1339 15.3661C15.3683 15.6005 15.5 15.9185 15.5 16.25C15.5 16.5815 15.3683 16.8995 15.1339 17.1339C14.8995 17.3683 14.5815 17.5 14.25 17.5C13.9185 17.5 13.6005 17.3683 13.3661 17.1339C13.1317 16.8995 13 16.5815 13 16.25C13 15.9185 13.1317 15.6005 13.3661 15.3661C13.6005 15.1317 13.9185 15 14.25 15Z"
                            fill="url(#paint0_linear_50_361)" />
                          <path opacity="0.5"
                            d="M2.23648 2.29254C2.29142 2.13619 2.40622 2.00806 2.55561 1.93633C2.70501 1.8646 2.87678 1.85514 3.03315 1.91004L3.28398 1.99837C3.79815 2.1792 4.23398 2.33254 4.57815 2.50087C4.94481 2.6817 5.25981 2.90337 5.49648 3.25004C5.73148 3.59337 5.82898 3.97087 5.87315 4.38504C5.89315 4.57004 5.90398 4.77504 5.90981 5.00004H14.7748C16.179 5.00004 17.4431 5.00004 17.8131 5.48087C18.1831 5.9617 18.0381 6.6867 17.749 8.13587L17.3323 10.1567C17.0698 11.43 16.939 12.0675 16.479 12.4417C16.019 12.8167 15.369 12.8167 14.0681 12.8167H9.64898C7.32398 12.8167 6.16231 12.8167 5.44065 12.055C4.71898 11.2934 4.66565 10.485 4.66565 8.03337V5.86504C4.66565 5.24837 4.66565 4.83587 4.63065 4.5192C4.59731 4.2167 4.53981 4.06504 4.46398 3.95504C4.39148 3.84754 4.28065 3.7467 4.02731 3.62337C3.75815 3.4917 3.39231 3.3617 2.83565 3.16587L2.61898 3.09004C2.54139 3.06292 2.46991 3.02076 2.40864 2.96598C2.34737 2.9112 2.2975 2.84488 2.26189 2.7708C2.22628 2.69672 2.20564 2.61635 2.20113 2.53428C2.19663 2.45222 2.20836 2.37007 2.23565 2.29254H2.23648Z"
                            fill="url(#paint1_linear_50_361)" />
                          <path
                            d="M11.9582 7.5C11.9582 7.33424 11.8923 7.17527 11.7751 7.05806C11.6579 6.94085 11.4989 6.875 11.3332 6.875C11.1674 6.875 11.0084 6.94085 10.8912 7.05806C10.774 7.17527 10.7082 7.33424 10.7082 7.5V8.54167H9.6665C9.50074 8.54167 9.34177 8.60752 9.22456 8.72473C9.10735 8.84194 9.0415 9.00091 9.0415 9.16667C9.0415 9.33243 9.10735 9.4914 9.22456 9.60861C9.34177 9.72582 9.50074 9.79167 9.6665 9.79167H10.7082V10.8333C10.7082 10.9991 10.774 11.1581 10.8912 11.2753C11.0084 11.3925 11.1674 11.4583 11.3332 11.4583C11.4989 11.4583 11.6579 11.3925 11.7751 11.2753C11.8923 11.1581 11.9582 10.9991 11.9582 10.8333V9.79167H12.9998C13.1656 9.79167 13.3246 9.72582 13.4418 9.60861C13.559 9.4914 13.6248 9.33243 13.6248 9.16667C13.6248 9.00091 13.559 8.84194 13.4418 8.72473C13.3246 8.60752 13.1656 8.54167 12.9998 8.54167H11.9582V7.5Z"
                            fill="url(#paint2_linear_50_361)" />
                          <defs>
                            <linearGradient id="paint0_linear_50_361" x1="5.5" y1="17.2063" x2="10.9729" y2="11.0048"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_50_361" x1="2.2002" y1="11.5311" x2="19.1452" y2="4.58471"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_50_361" x1="9.0415" y1="10.9198" x2="14.3451" y2="9.41743"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </a>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                          <p class="fs-12 text-gray text-decoration-line-through mb-0">۵،۱۰۰،۰۰۰</p>
                          <p class="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill">۱۵٪</p>
                        </div>
                        <div class="d-flex align-items-end justify-content-end gap-1 mt-1">
                          <p class="fs-17 font-bold mb-0">۳،۶۵۰،۰۰۰</p>
                          <p class="mb-1 fs-12 fw-bold">تومان</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide class="my-3">
                    <div class="rounded-20 bg-white p-3 shadow10">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <a class="d-flex align-items-center justify-content-center px-2 bg-white rounded-15 gap-2 fs-11 fw-bold text-second-gradient shadow8 h-65">
                      <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g opacity="0.4">
                          <path d="M12.5149 4.57512C12.1182 4.50184 11.7539 4.755 11.6783 5.14224C11.6028 5.52947 11.8568 5.90754 12.2427 5.98333C13.4046 6.20984 14.3017 7.10922 14.5291 8.27508C14.5938 8.61069 14.8893 8.85552 15.2296 8.85552C15.2752 8.85552 15.3208 8.85136 15.3673 8.84303C15.7532 8.76558 16.0072 8.38834 15.9317 8.00027C15.5922 6.25897 14.2519 4.91406 12.5149 4.57512Z" fill="url(#paint0_linear_751_278)"></path>
                          <path d="M12.463 1.67336C12.2771 1.64671 12.0904 1.70167 11.9419 1.81992C11.7892 1.93984 11.6937 2.11305 11.673 2.30709C11.629 2.69932 11.912 3.05407 12.3037 3.09821C15.0051 3.39967 17.1048 5.50406 17.4085 8.21387C17.4492 8.57695 17.7538 8.85093 18.1173 8.85093C18.1447 8.85093 18.1712 8.84926 18.1986 8.84593C18.3887 8.82511 18.558 8.73101 18.6775 8.58111C18.7961 8.43122 18.8501 8.24468 18.8285 8.05398C18.4501 4.67296 15.8333 2.04893 12.463 1.67336Z" fill="url(#paint1_linear_751_278)"></path>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69295 10.8103C13.0172 14.1336 13.7713 10.2889 15.8879 12.404C17.9284 14.444 19.1012 14.8527 16.5159 17.4373C16.192 17.6975 14.1345 20.8285 6.90367 13.5997C-0.328061 6.37 2.80116 4.31037 3.06148 3.98662C5.65306 1.39487 6.05472 2.57449 8.09524 4.61444C10.2118 6.73041 6.36872 7.48701 9.69295 10.8103Z" fill="url(#paint2_linear_751_278)"></path>
                        <defs>
                          <linearGradient id="paint0_linear_751_278" x1="11.665" y1="8.35113" x2="16.6198" y2="6.95183" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint1_linear_751_278" x1="11.6685" y1="8.00686" x2="19.9624" y2="5.6637" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint2_linear_751_278" x1="2.1665" y1="16.4731" x2="20.4879" y2="11.2829" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <p class="mb-0">لطفا برای اطلاع از قیمت با ما تماس بگیرید</p>
                    </a>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide class="my-3">
                    <div class="rounded-20 bg-white p-3 shadow10">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <div class="d-flex align-items-center gap-3 h-65">
                      <a class="d-flex align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path
                            d="M6.75 15C7.08152 15 7.39946 15.1317 7.63388 15.3661C7.8683 15.6005 8 15.9185 8 16.25C8 16.5815 7.8683 16.8995 7.63388 17.1339C7.39946 17.3683 7.08152 17.5 6.75 17.5C6.41848 17.5 6.10054 17.3683 5.86612 17.1339C5.6317 16.8995 5.5 16.5815 5.5 16.25C5.5 15.9185 5.6317 15.6005 5.86612 15.3661C6.10054 15.1317 6.41848 15 6.75 15ZM14.25 15C14.5815 15 14.8995 15.1317 15.1339 15.3661C15.3683 15.6005 15.5 15.9185 15.5 16.25C15.5 16.5815 15.3683 16.8995 15.1339 17.1339C14.8995 17.3683 14.5815 17.5 14.25 17.5C13.9185 17.5 13.6005 17.3683 13.3661 17.1339C13.1317 16.8995 13 16.5815 13 16.25C13 15.9185 13.1317 15.6005 13.3661 15.3661C13.6005 15.1317 13.9185 15 14.25 15Z"
                            fill="url(#paint0_linear_50_361)" />
                          <path opacity="0.5"
                            d="M2.23648 2.29254C2.29142 2.13619 2.40622 2.00806 2.55561 1.93633C2.70501 1.8646 2.87678 1.85514 3.03315 1.91004L3.28398 1.99837C3.79815 2.1792 4.23398 2.33254 4.57815 2.50087C4.94481 2.6817 5.25981 2.90337 5.49648 3.25004C5.73148 3.59337 5.82898 3.97087 5.87315 4.38504C5.89315 4.57004 5.90398 4.77504 5.90981 5.00004H14.7748C16.179 5.00004 17.4431 5.00004 17.8131 5.48087C18.1831 5.9617 18.0381 6.6867 17.749 8.13587L17.3323 10.1567C17.0698 11.43 16.939 12.0675 16.479 12.4417C16.019 12.8167 15.369 12.8167 14.0681 12.8167H9.64898C7.32398 12.8167 6.16231 12.8167 5.44065 12.055C4.71898 11.2934 4.66565 10.485 4.66565 8.03337V5.86504C4.66565 5.24837 4.66565 4.83587 4.63065 4.5192C4.59731 4.2167 4.53981 4.06504 4.46398 3.95504C4.39148 3.84754 4.28065 3.7467 4.02731 3.62337C3.75815 3.4917 3.39231 3.3617 2.83565 3.16587L2.61898 3.09004C2.54139 3.06292 2.46991 3.02076 2.40864 2.96598C2.34737 2.9112 2.2975 2.84488 2.26189 2.7708C2.22628 2.69672 2.20564 2.61635 2.20113 2.53428C2.19663 2.45222 2.20836 2.37007 2.23565 2.29254H2.23648Z"
                            fill="url(#paint1_linear_50_361)" />
                          <path
                            d="M11.9582 7.5C11.9582 7.33424 11.8923 7.17527 11.7751 7.05806C11.6579 6.94085 11.4989 6.875 11.3332 6.875C11.1674 6.875 11.0084 6.94085 10.8912 7.05806C10.774 7.17527 10.7082 7.33424 10.7082 7.5V8.54167H9.6665C9.50074 8.54167 9.34177 8.60752 9.22456 8.72473C9.10735 8.84194 9.0415 9.00091 9.0415 9.16667C9.0415 9.33243 9.10735 9.4914 9.22456 9.60861C9.34177 9.72582 9.50074 9.79167 9.6665 9.79167H10.7082V10.8333C10.7082 10.9991 10.774 11.1581 10.8912 11.2753C11.0084 11.3925 11.1674 11.4583 11.3332 11.4583C11.4989 11.4583 11.6579 11.3925 11.7751 11.2753C11.8923 11.1581 11.9582 10.9991 11.9582 10.8333V9.79167H12.9998C13.1656 9.79167 13.3246 9.72582 13.4418 9.60861C13.559 9.4914 13.6248 9.33243 13.6248 9.16667C13.6248 9.00091 13.559 8.84194 13.4418 8.72473C13.3246 8.60752 13.1656 8.54167 12.9998 8.54167H11.9582V7.5Z"
                            fill="url(#paint2_linear_50_361)" />
                          <defs>
                            <linearGradient id="paint0_linear_50_361" x1="5.5" y1="17.2063" x2="10.9729" y2="11.0048"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_50_361" x1="2.2002" y1="11.5311" x2="19.1452" y2="4.58471"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_50_361" x1="9.0415" y1="10.9198" x2="14.3451" y2="9.41743"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </a>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                          <p class="fs-12 text-gray text-decoration-line-through mb-0">۵،۱۰۰،۰۰۰</p>
                          <p class="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill">۱۵٪</p>
                        </div>
                        <div class="d-flex align-items-end justify-content-end gap-1 mt-1">
                          <p class="fs-17 font-bold mb-0">۳،۶۵۰،۰۰۰</p>
                          <p class="mb-1 fs-12 fw-bold">تومان</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide class="my-3">
                    <div class="rounded-20 bg-white p-3 shadow10">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <a class="d-flex align-items-center justify-content-center px-2 bg-white rounded-15 gap-2 fs-11 fw-bold text-second-gradient shadow8 h-65">
                      <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g opacity="0.4">
                          <path d="M12.5149 4.57512C12.1182 4.50184 11.7539 4.755 11.6783 5.14224C11.6028 5.52947 11.8568 5.90754 12.2427 5.98333C13.4046 6.20984 14.3017 7.10922 14.5291 8.27508C14.5938 8.61069 14.8893 8.85552 15.2296 8.85552C15.2752 8.85552 15.3208 8.85136 15.3673 8.84303C15.7532 8.76558 16.0072 8.38834 15.9317 8.00027C15.5922 6.25897 14.2519 4.91406 12.5149 4.57512Z" fill="url(#paint0_linear_751_278)"></path>
                          <path d="M12.463 1.67336C12.2771 1.64671 12.0904 1.70167 11.9419 1.81992C11.7892 1.93984 11.6937 2.11305 11.673 2.30709C11.629 2.69932 11.912 3.05407 12.3037 3.09821C15.0051 3.39967 17.1048 5.50406 17.4085 8.21387C17.4492 8.57695 17.7538 8.85093 18.1173 8.85093C18.1447 8.85093 18.1712 8.84926 18.1986 8.84593C18.3887 8.82511 18.558 8.73101 18.6775 8.58111C18.7961 8.43122 18.8501 8.24468 18.8285 8.05398C18.4501 4.67296 15.8333 2.04893 12.463 1.67336Z" fill="url(#paint1_linear_751_278)"></path>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69295 10.8103C13.0172 14.1336 13.7713 10.2889 15.8879 12.404C17.9284 14.444 19.1012 14.8527 16.5159 17.4373C16.192 17.6975 14.1345 20.8285 6.90367 13.5997C-0.328061 6.37 2.80116 4.31037 3.06148 3.98662C5.65306 1.39487 6.05472 2.57449 8.09524 4.61444C10.2118 6.73041 6.36872 7.48701 9.69295 10.8103Z" fill="url(#paint2_linear_751_278)"></path>
                        <defs>
                          <linearGradient id="paint0_linear_751_278" x1="11.665" y1="8.35113" x2="16.6198" y2="6.95183" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint1_linear_751_278" x1="11.6685" y1="8.00686" x2="19.9624" y2="5.6637" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                          <linearGradient id="paint2_linear_751_278" x1="2.1665" y1="16.4731" x2="20.4879" y2="11.2829" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5B6CCC"></stop>
                            <stop offset="1" stop-color="#4834AC"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <p class="mb-0">لطفا برای اطلاع از قیمت با ما تماس بگیرید</p>
                    </a>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide class="my-3">
                    <div class="rounded-20 bg-white p-3 shadow10">
                    <img alt="product" src="assets/img/related-product.png" class=" img-fluid mx-auto d-block mt-4">
                    <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
                      لامپ ال ای دی هوشمند ۷ وات
                      مدل رنگین کمانی ۱۲۴
                    </a>
                    <div class="d-flex align-items-center gap-3 h-65">
                      <a class="d-flex align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path
                            d="M6.75 15C7.08152 15 7.39946 15.1317 7.63388 15.3661C7.8683 15.6005 8 15.9185 8 16.25C8 16.5815 7.8683 16.8995 7.63388 17.1339C7.39946 17.3683 7.08152 17.5 6.75 17.5C6.41848 17.5 6.10054 17.3683 5.86612 17.1339C5.6317 16.8995 5.5 16.5815 5.5 16.25C5.5 15.9185 5.6317 15.6005 5.86612 15.3661C6.10054 15.1317 6.41848 15 6.75 15ZM14.25 15C14.5815 15 14.8995 15.1317 15.1339 15.3661C15.3683 15.6005 15.5 15.9185 15.5 16.25C15.5 16.5815 15.3683 16.8995 15.1339 17.1339C14.8995 17.3683 14.5815 17.5 14.25 17.5C13.9185 17.5 13.6005 17.3683 13.3661 17.1339C13.1317 16.8995 13 16.5815 13 16.25C13 15.9185 13.1317 15.6005 13.3661 15.3661C13.6005 15.1317 13.9185 15 14.25 15Z"
                            fill="url(#paint0_linear_50_361)" />
                          <path opacity="0.5"
                            d="M2.23648 2.29254C2.29142 2.13619 2.40622 2.00806 2.55561 1.93633C2.70501 1.8646 2.87678 1.85514 3.03315 1.91004L3.28398 1.99837C3.79815 2.1792 4.23398 2.33254 4.57815 2.50087C4.94481 2.6817 5.25981 2.90337 5.49648 3.25004C5.73148 3.59337 5.82898 3.97087 5.87315 4.38504C5.89315 4.57004 5.90398 4.77504 5.90981 5.00004H14.7748C16.179 5.00004 17.4431 5.00004 17.8131 5.48087C18.1831 5.9617 18.0381 6.6867 17.749 8.13587L17.3323 10.1567C17.0698 11.43 16.939 12.0675 16.479 12.4417C16.019 12.8167 15.369 12.8167 14.0681 12.8167H9.64898C7.32398 12.8167 6.16231 12.8167 5.44065 12.055C4.71898 11.2934 4.66565 10.485 4.66565 8.03337V5.86504C4.66565 5.24837 4.66565 4.83587 4.63065 4.5192C4.59731 4.2167 4.53981 4.06504 4.46398 3.95504C4.39148 3.84754 4.28065 3.7467 4.02731 3.62337C3.75815 3.4917 3.39231 3.3617 2.83565 3.16587L2.61898 3.09004C2.54139 3.06292 2.46991 3.02076 2.40864 2.96598C2.34737 2.9112 2.2975 2.84488 2.26189 2.7708C2.22628 2.69672 2.20564 2.61635 2.20113 2.53428C2.19663 2.45222 2.20836 2.37007 2.23565 2.29254H2.23648Z"
                            fill="url(#paint1_linear_50_361)" />
                          <path
                            d="M11.9582 7.5C11.9582 7.33424 11.8923 7.17527 11.7751 7.05806C11.6579 6.94085 11.4989 6.875 11.3332 6.875C11.1674 6.875 11.0084 6.94085 10.8912 7.05806C10.774 7.17527 10.7082 7.33424 10.7082 7.5V8.54167H9.6665C9.50074 8.54167 9.34177 8.60752 9.22456 8.72473C9.10735 8.84194 9.0415 9.00091 9.0415 9.16667C9.0415 9.33243 9.10735 9.4914 9.22456 9.60861C9.34177 9.72582 9.50074 9.79167 9.6665 9.79167H10.7082V10.8333C10.7082 10.9991 10.774 11.1581 10.8912 11.2753C11.0084 11.3925 11.1674 11.4583 11.3332 11.4583C11.4989 11.4583 11.6579 11.3925 11.7751 11.2753C11.8923 11.1581 11.9582 10.9991 11.9582 10.8333V9.79167H12.9998C13.1656 9.79167 13.3246 9.72582 13.4418 9.60861C13.559 9.4914 13.6248 9.33243 13.6248 9.16667C13.6248 9.00091 13.559 8.84194 13.4418 8.72473C13.3246 8.60752 13.1656 8.54167 12.9998 8.54167H11.9582V7.5Z"
                            fill="url(#paint2_linear_50_361)" />
                          <defs>
                            <linearGradient id="paint0_linear_50_361" x1="5.5" y1="17.2063" x2="10.9729" y2="11.0048"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_50_361" x1="2.2002" y1="11.5311" x2="19.1452" y2="4.58471"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_50_361" x1="9.0415" y1="10.9198" x2="14.3451" y2="9.41743"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#5B6CCC" />
                              <stop offset="1" stop-color="#4834AC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </a>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                          <p class="fs-12 text-gray text-decoration-line-through mb-0">۵،۱۰۰،۰۰۰</p>
                          <p class="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill">۱۵٪</p>
                        </div>
                        <div class="d-flex align-items-end justify-content-end gap-1 mt-1">
                          <p class="fs-17 font-bold mb-0">۳،۶۵۰،۰۰۰</p>
                          <p class="mb-1 fs-12 fw-bold">تومان</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
          </SwiperMain>
        </div>
        </div>
      </div>
    </section>

    <!-- shoar -->
    <Features />

    <!-- wave -->
    <img
      alt="wave"
      src="assets/img/footerWave.png"
      class="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-md-block d-none"
    />
    <img
      alt="wave"
      src="assets/img/footerBg2.png"
      class="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-block d-md-none"
    />
  </main>
</template>

<script setup>
useHead({
  title: "ویترین فروشگاه",
});
</script>

<style>
</style>