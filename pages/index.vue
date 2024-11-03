<template>
  <main class="position-relative">

    <!-- contact Modal -->
  <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-27">
        <button type="button" class="btn-close btn-sm position-absolute top-0 start-0 m-4 z-10" data-bs-dismiss="modal"
          aria-label="Close"></button>
        <div class="modal-body d-flex align-items-center gap-3">
          <img alt="contactImg" src="assets/img/contactmodal.png" class="img-fluid transform1 position-absolute d-none d-md-block">
          <div class="col-md-8 pe-4 me-md-auto ml-auto-ltr position-relative z-10">
            <a class="d-flex align-items-center gap-3 mb-4 pb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g opacity="0.4">
                  <path
                    d="M28.8365 10.98C27.8844 10.8041 27.01 11.4117 26.8288 12.3411C26.6475 13.2704 27.257 14.1778 28.1832 14.3597C30.9717 14.9033 33.1249 17.0618 33.6706 19.8599C33.826 20.6654 34.5351 21.253 35.3517 21.253C35.4613 21.253 35.5708 21.243 35.6824 21.223C36.6085 21.0371 37.218 20.1317 37.0368 19.2004C36.2221 15.0212 33.0054 11.7934 28.8365 10.98Z"
                    fill="#27817A" />
                  <path
                    d="M28.7117 4.01586C28.2655 3.9519 27.8174 4.08381 27.4608 4.36762C27.0944 4.65542 26.8653 5.07113 26.8155 5.53682C26.7099 6.47817 27.3891 7.32958 28.3293 7.43551C34.8126 8.15901 39.8519 13.2095 40.5809 19.7131C40.6785 20.5845 41.4094 21.242 42.2819 21.242C42.3476 21.242 42.4113 21.238 42.4771 21.23C42.9332 21.1801 43.3395 20.9542 43.6263 20.5945C43.9112 20.2347 44.0406 19.787 43.9888 19.3293C43.0806 11.2149 36.8004 4.91724 28.7117 4.01586Z"
                    fill="#27817A" />
                </g>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M22.0635 25.9448C30.0416 33.9207 31.8515 24.6934 36.9313 29.7696C41.8286 34.6655 44.6432 35.6464 38.4385 41.8494C37.6613 42.474 32.7232 49.9885 15.3692 32.6393C-1.98696 15.288 5.52317 10.3449 6.14794 9.5679C12.3677 3.34769 13.3317 6.17877 18.229 11.0747C23.3087 16.153 14.0853 17.9688 22.0635 25.9448Z"
                  fill="#27817A" />
              </svg>
              <div>
                <p class="font-bold fs-18 mb-0 text-dark">۰۲۱-۹۱۰۱۶۶۶۸</p>
                <p class="fs-14 text-gray mb-0">تماس در روز های کاری از ۹ صبح تا ۹ شب</p>
              </div>
            </a>
            <a class="d-flex align-items-center gap-3 mb-4 pb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="36" viewBox="0 0 40 36" fill="none">
                <path opacity="0.4"
                  d="M40 25.8805C40 31.4605 35.52 35.9805 29.94 36.0005H29.92H10.1C4.54 36.0005 0 31.5005 0 25.9205V25.9005C0 25.9005 0.012 17.0485 0.028 12.5965C0.03 11.7605 0.99 11.2925 1.644 11.8125C6.396 15.5825 14.894 22.4565 15 22.5465C16.42 23.6845 18.22 24.3265 20.06 24.3265C21.9 24.3265 23.7 23.6845 25.12 22.5245C25.226 22.4545 33.534 15.7865 38.358 11.9545C39.014 11.4325 39.978 11.9005 39.98 12.7345C40 17.1525 40 25.8805 40 25.8805Z"
                  fill="#27817A" />
                <path
                  d="M38.9518 5.34727C37.2198 2.08327 33.8118 -0.000732422 30.0598 -0.000732422H10.0998C6.34777 -0.000732422 2.93977 2.08327 1.20777 5.34727C0.819767 6.07727 1.00377 6.98727 1.64977 7.50327L16.4998 19.3813C17.5398 20.2213 18.7998 20.6393 20.0598 20.6393C20.0678 20.6393 20.0738 20.6393 20.0798 20.6393C20.0858 20.6393 20.0938 20.6393 20.0998 20.6393C21.3598 20.6393 22.6198 20.2213 23.6598 19.3813L38.5098 7.50327C39.1558 6.98727 39.3398 6.07727 38.9518 5.34727Z"
                  fill="#27817A" />
              </svg>
              <div>
                <p class="font-bold fs-18 mb-0 text-dark">info@moeidgroup.com</p>
                <p class="fs-14 text-gray mb-0">ارتباط از طریق ایمیل</p>
              </div>
            </a>
            <a class="d-flex align-items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40" fill="none">
                <path
                  d="M7.06324 1.87354C11.433 -0.665451 16.8041 -0.621074 21.1328 1.98979C25.4189 4.65383 28.0239 9.40835 27.9998 14.5229C27.8999 19.6039 25.1066 24.38 21.6149 28.0722C19.5997 30.2128 17.3452 32.1057 14.8977 33.7121C14.6456 33.8578 14.3695 33.9554 14.083 34C13.8072 33.9883 13.5386 33.9068 13.3015 33.7629C9.56485 31.3491 6.28667 28.2681 3.62466 24.6679C1.39717 21.6627 0.131669 18.032 0 14.2688L0.00997244 13.7214C0.191844 8.80929 2.84959 4.32186 7.06324 1.87354ZM15.8145 10.0695C14.0381 9.31447 11.9901 9.7247 10.6266 11.1087C9.26318 12.4927 8.85328 14.5774 9.58833 16.3896C10.3234 18.2017 12.0584 19.3837 13.9832 19.3837C15.2442 19.3928 16.4564 18.8877 17.3496 17.981C18.2429 17.0742 18.743 15.8413 18.7385 14.5568C18.7452 12.5961 17.5909 10.8246 15.8145 10.0695Z"
                  fill="#27817A" />
                <path opacity="0.4"
                  d="M14 40C19.5228 40 24 39.1046 24 38C24 36.8954 19.5228 36 14 36C8.47715 36 4 36.8954 4 38C4 39.1046 8.47715 40 14 40Z"
                  fill="#27817A" />
              </svg>
              <div>
                <p class="font-bold fs-18 mb-0 text-dark">تهران،‌خیابان شریعتی،‌ نبش کودکان غزه،‌پلاک ۵۱</p>
                <p class="fs-14 text-gray mb-0">حصور با هماهنگی قبلی</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- banner -->
    <Banner />
    
    <!-- category -->
    <section class="mt-lg-5 pt-lg-3 overflow-x-hidden">
      <div class="container px-0 px-md-3">
        <div class="position-relative category">
          <SwiperMain class="py-lg-5 py-4 px-lg-3 px-2"
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
                <SwiperSlide v-for="category in categories" :key="category">
                  <a>
                  <div
                    class="bg-white h-158 px-4 rounded-20 shadow2 d-flex align-items-center justify-content-center"
                  >
                    <img
                      alt="cat"
                      src="../assets/img/cat1.png"
                      class="img-fluid"
                    />
                  </div>
                  <p class="mb-0 fw-bold text-center catTitle mt-3">
                    {{category}}
                  </p>
                  <div class="position-relative mt-1">
                    <img
                      alt="catBg"
                      src="../assets/img/catNumBg.png"
                      class="position-absolute end-0 start-0 bottom-0 top-0 img-fluid w-212 h-65 mx-auto -z-1"
                    />
                    <p
                      class="mb-0 d-flex align-items-center justify-content-center gap-1 text-white pt-4 catNum"
                    >
                      <span class="fw-bold">۱۲۳۴</span>
                      <span class="fw-300">محصول</span>
                    </p>
                  </div>
                </a>
                </SwiperSlide>
              </SwiperMain>
        </div>
      </div>
    </section>

    <!-- services -->
    <section class="mt-5 pt-3" id="services">
      <div class="container">
        <div
          class="rounded-25 overflow-hidden bg-white h-486 p-3 px-1 px-lg-3 shadow2 row position-relative"
        >
          <!-- shape -->
          <img
            alt="shape"
            src="../assets/img/shapeService.png"
            class="img-fluid px-0 w-285 top-0 end-0 position-absolute -z-0 servicesShape"
          />
          <img
            alt="shape"
            src="../assets/img/shapeService2.png"
            class="img-fluid px-0 w-316 top-0 end-0 position-absolute -z-0 servicesShape"
          />
          <img
            alt="shape"
            src="../assets/img/shape3.png"
            class="img-fluid px-0 w-417 h-413 top-0 end-0 position-absolute -z-0 servicesShape"
          />
          <!--  -->
          <div class="col-lg-3 position-relative -z-0">
            <div class="d-flex align-items-center gap-4 mt-lg-4 mt-2">
              <img
                alt="icon"
                src="../assets/img/solar_info-square-bold-duotone.png"
                class="img-fluid"
              />
              <div>
                <p
                  class="d-flex align-items-center gap-1 mb-0 fs-22 text-white"
                >
                  <span class="font-bold">خدمات</span>
                  <span class="fw-300">ما</span>
                </p>
                <p class="mb-0 text-white-50">آنچه انجام میدهیم</p>
              </div>
            </div>
            <!--  -->
            <div class="d-lg-none mt-5 pt-4 serviceMobileSize">
              <div class="mb-3">
                <div
                  class="border overflow-hidden d-flex align-items-center rounded-25 h-97 py-3 pe-4 bg-white position-relative"
                >
                  <!-- shape -->
                  <img
                    alt="shape2"
                    src="../assets/img/service1.png"
                    class="img-fluid position-absolute w-133 top-0 start-0 z-0"
                  />
                  <!--  -->
                  <div class="d-flex gap-2 position-relative z-10 col-7">
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
                    <p class="fw-bold mb-0 fs-14">
                      طراحی و ساخت انواع تابلوهای برق (MV-LV-HV) و بانک خازن
                    </p>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div
                  class="border overflow-hidden d-flex align-items-center rounded-25 h-97 py-3 ps-4 bg-white position-relative"
                >
                  <!-- shape -->
                  <img
                    alt="shape"
                    src="../assets/img/service2.png"
                    class="img-fluid position-absolute w-133 top-0 end-0 z-0"
                  />
                  <!--  -->
                  <div
                    class="d-flex gap-2 position-relative z-10 col-7 me-auto"
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
                        fill="url(#paint0_linear_108_1695)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_108_1695"
                          x1="-3.12924e-07"
                          y1="8.44259"
                          x2="18.2683"
                          y2="-3.63266"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#5B6CCC" />
                          <stop offset="1" stop-color="#4834AC" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p class="fw-bold mb-0 fs-14">
                      توزیع کلیه ملزومات برق صنعتی، روشنایی و انواع کابل و سینی
                      کابل
                    </p>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div
                  class="border overflow-hidden d-flex align-items-center rounded-25 h-97 py-3 pe-4 bg-white position-relative"
                >
                  <!-- shape -->
                  <img
                    alt="shape2"
                    src="../assets/img/service3.png"
                    class="img-fluid position-absolute w-133 top-0 start-0 z-0"
                  />
                  <!--  -->
                  <div class="d-flex gap-2 position-relative z-10 col-7">
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
                    <p class="fw-bold mb-0 fs-14">
                      عاملیت فروش اینورتر AAGER با بهترین کیفیت
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="d-lg-flex seeAll d-none align-items-center text-dark shadow2 rounded-14 bg-white p-3 position-absolute bottom-0 w-100 end-0 start-0 mb-1 justify-content-center gap-3"
            >
              <p class="mb-0 fs-14 fw-300">مشاهده همه</p>
              <svg
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
          <div class="col-lg-9 d-none d-lg-block">
            <div class="position-relative h-100">
              <div class="services h-100">
                <SwiperMain class="p-2 h-100"
                  :slides-per-view="2"
                  :space-between="20"
                  :pagination="false"
                  :navigation="false"
                  :breakpoints="{
                    '992': {slidesPerView:2},
                    '1300': {slidesPerView:3},
                  }"
                >
                  <SwiperSlide class="h-100">
                    <div
                        class="border overflow-hidden d-flex align-items-end rounded-25 h-100 bg-white position-relative"
                      >
                        <!-- shape -->
                        <img
                          alt="shape"
                          src="../assets/img/service1.png"
                          class="img-fluid position-absolute w-232 top-0 start-0 z-0"
                        />
                        <!--  -->
                        <div class="d-flex gap-2 position-relative z-10 p-4 mb-5">
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
                          <p class="fw-bold mb-0 fs-20">
                            طراحی و ساخت انواع تابلوهای برق (MV-LV-HV) و بانک خازن
                          </p>
                        </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide class="h-100">
                    <div
                        class="border overflow-hidden d-flex align-items-end rounded-25 h-100 bg-white position-relative"
                      >
                        <!-- shape -->
                        <img
                          alt="shape"
                          src="../assets/img/service1.png"
                          class="img-fluid position-absolute w-232 top-0 start-0 z-0"
                        />
                        <!--  -->
                        <div class="d-flex gap-2 position-relative z-10 p-4 mb-5">
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
                          <p class="fw-bold mb-0 fs-20">
                            طراحی و ساخت انواع تابلوهای برق (MV-LV-HV) و بانک خازن
                          </p>
                        </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide class="h-100">
                    <div
                        class="border overflow-hidden d-flex align-items-end rounded-25 h-100 bg-white position-relative"
                      >
                        <!-- shape -->
                        <img
                          alt="shape"
                          src="../assets/img/service2.png"
                          class="img-fluid position-absolute w-260 top-0 end-0 z-0"
                        />
                        <!--  -->
                        <div class="d-flex gap-2 position-relative z-10 p-4 mb-5">
                          <svg
                            class="flex-shrink-0 mt-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="10"
                            viewBox="0 0 21 10"
                            fill="none"
                          >
                            <rect
                             fill="#5356c0"
                              y="0.5"
                              width="21"
                              height="9"
                              rx="4.5"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_108_1695"
                                x1="-3.12924e-07"
                                y1="8.44259"
                                x2="18.2683"
                                y2="-3.63266"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#5B6CCC" />
                                <stop offset="1" stop-color="#4834AC" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <p class="fw-bold mb-0 fs-20">
                            توزیع کلیه ملزومات برق صنعتی، روشنایی و انواع کابل و
                            سینی کابل
                          </p>
                        </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide class="h-100">
                    <div
                        class="border overflow-hidden d-flex align-items-end rounded-25 h-100 bg-white position-relative"
                      >
                        <!-- shape -->
                        <img
                          alt="shape"
                          src="../assets/img/service3.png"
                          class="img-fluid position-absolute w-232 top-0 start-0 z-0"
                        />
                        <!--  -->
                        <div class="d-flex gap-2 position-relative z-10 p-4 mb-5">
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
                          <p class="fw-bold mb-0 fs-21">
                            عاملیت فروش اینورتر AAGER با بهترین کیفیت
                          </p>
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

    <!-- about -->
    <section class="mt-245" id="about">
      <div class="container">
        <div class="bg-white shadow2 rounded-30 position-relative px-lg-5 px-4">
          <!-- shape -->
          <img
            alt="shape"
            src="../assets/img/aboutShape.png"
            class="img-fluid z-0 position-absolute start-0 top-0"
          />
          <!--  -->
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div>
                <div
                  class="bg-gray rounded-30 rotate-6 -top-77 position-relative me-lg-4"
                >
                  <div class="bg-second2 rounded-30 p-4 shadow3 -rotate-6">
                    <img
                      alt="about"
                      src="../assets/img/about.png"
                      class="img-fluid rounded-27 w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="me-lg-4">
                <div class="d-flex align-items-center gap-3 mt-4">
                  <img
                    alt="icon"
                    src="../assets/img/solar_info-square-bold-duotone2.png"
                    class="img-fluid"
                  />
                  <div>
                    <p class="d-flex align-items-center gap-1 mb-0 fs-22">
                      <span class="font-bold">درباره</span>
                      <span class="fw-300">سگال نیرو</span>
                    </p>
                    <p class="mb-0 text-gray">در مورد ما بیشتر بدانید</p>
                  </div>
                </div>
                <p class="fw-300 mt-5 lh-lg text-secondary aboutDescription">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- contact -->
    <section id="contact" class="mt-245">
      <div class="container d-flex flex-column flex-xl-row align-items-center">
        <div class="bg-white shadow2 rounded-30 position-relative p-4">
          <!-- shape -->
          <img
            alt="shape"
            src="../assets/img/contactShape.png"
            class="img-fluid z-0 position-absolute end-0 top-0 -z-1"
          />
          <!--  -->
          <div class="row align-items-center mx-0">
            <div class="col-xl-8 order-1 order-xl-0">
              <div class="position-relative">
                <div
                  class="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 rounded-t-33 mx-lg-3 contactHeading -top-103 -z-1 bg-gradient-main p-3 position-absolute right-0 left-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                  >
                    <path
                      opacity="0.5"
                      d="M26.7508 24.9472L25.9829 25.7572C25.9829 25.7572 24.1554 27.6792 19.1688 22.4294C14.1823 17.1796 16.0098 15.2575 16.0098 15.2575L16.4941 14.7462C17.6855 13.4907 17.7986 11.4759 16.7574 10.0044L14.6311 6.99555C13.3419 5.17305 10.8528 4.93342 9.37625 6.48761L6.72856 9.27367C5.99788 10.0449 5.5085 11.0422 5.56756 12.1509C5.71944 14.9859 6.93106 21.0828 13.6878 28.199C20.8546 35.7421 27.5793 36.0425 30.3283 35.7708C31.199 35.6864 31.955 35.2156 32.5642 34.5744L34.9604 32.0499C36.5804 30.3455 36.1248 27.4261 34.0526 26.2347L30.8294 24.3785C29.4693 23.5972 27.8139 23.8267 26.7508 24.9455V24.9472Z"
                      fill="white"
                    />
                    <path
                      d="M22.8761 3.56995C22.9304 3.23869 23.1138 2.94249 23.3862 2.74634C23.6586 2.55019 23.9977 2.47012 24.329 2.5237C24.3712 2.53214 24.5096 2.55745 24.5822 2.57432C24.7256 2.6047 24.9264 2.65532 25.1762 2.7262C25.6774 2.87301 26.3777 3.11433 27.218 3.49908C28.8988 4.27026 31.1347 5.61857 33.4567 7.93889C35.7787 10.2609 37.127 12.4985 37.8982 14.1793C38.283 15.0196 38.5226 15.7183 38.6694 16.2211C38.7434 16.4738 38.807 16.7294 38.8601 16.9873L38.8685 17.0396C38.9241 17.3738 38.8461 17.7164 38.6513 17.9936C38.4565 18.2707 38.1606 18.4602 37.8274 18.5212C37.4969 18.5749 37.1587 18.4954 36.8867 18.3003C36.6147 18.1051 36.4311 17.8102 36.3761 17.48C36.3416 17.2935 36.2959 17.1092 36.2394 16.9282C36.067 16.3487 35.8527 15.7824 35.5982 15.234C34.94 13.7996 33.7554 11.8185 31.6663 9.72933C29.5789 7.6402 27.596 6.45726 26.1617 5.79914C25.6137 5.5447 25.0481 5.33038 24.4691 5.15789C24.2915 5.10779 24.1126 5.06278 23.9325 5.02289C23.6007 4.96809 23.3038 4.78501 23.1058 4.51317C22.9078 4.24133 22.8247 3.90254 22.8744 3.56995H22.8761Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.2575 9.39178C23.303 9.23187 23.3796 9.08249 23.4829 8.95218C23.5861 8.82187 23.714 8.71317 23.8593 8.63231C24.0046 8.55145 24.1643 8.5 24.3295 8.48091C24.4947 8.46181 24.662 8.47545 24.8219 8.52103L24.8269 8.52272L24.832 8.52441L24.8455 8.52778L24.8792 8.53791L24.9737 8.57166C25.4222 8.74443 25.8552 8.95501 26.268 9.2011C27.0932 9.69047 28.2205 10.5005 29.5452 11.8268C30.8699 13.1515 31.6815 14.2788 32.1709 15.104C32.4156 15.5174 32.5776 15.8532 32.6822 16.0996C32.7383 16.2285 32.789 16.3596 32.8341 16.4928L32.8425 16.5265L32.8476 16.54V16.5451L32.8493 16.5468C32.8493 16.5468 32.8493 16.5502 31.6343 16.8978L32.8493 16.5502C32.935 16.8695 32.8923 17.2096 32.7305 17.4979C32.5686 17.7862 32.3003 17.9997 31.9831 18.0927C31.6658 18.1857 31.3248 18.151 31.0328 17.9958C30.7409 17.8406 30.5213 17.5773 30.421 17.2623L30.4159 17.2454C30.2973 16.9515 30.1562 16.6672 29.994 16.3949C29.616 15.7587 28.936 14.7968 27.7547 13.6156C26.5735 12.4343 25.6133 11.756 24.9771 11.3797C24.7048 11.2174 24.4205 11.0764 24.1266 10.9578L24.1097 10.951C23.791 10.8552 23.5228 10.6376 23.3633 10.3455C23.2038 10.0533 23.1658 9.71175 23.2575 9.39178Z"
                      fill="white"
                    />
                  </svg>
                  <div>
                    <p class="fs-18 fw-bold text-white mb-1">
                      با ما در ارتباط باشید
                    </p>
                    <p class="fs-13 text-white-50 fw-300 mb-0">
                      هر لحظه با ما در تماس باشید
                    </p>
                  </div>
                </div>
                <div
                  class="d-flex flex-column flex-lg-row align-items-center gap-4"
                >
                  <div class="flex-shrink-0 w-sm-100 mt-4 mt-xl-0">
                    <div
                      class="d-flex gap-2 bg-gray2 align-items-center justify-content-center rounded-23 p-3 mb-4"
                    >
                      <p class="mb-0">info@mail.com</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        fill="none"
                      >
                        <path
                          opacity="0.4"
                          d="M29.3354 21.2761C29.3354 24.9961 26.3487 28.0095 22.6287 28.0228H22.6154H9.40203C5.69537 28.0228 2.6687 25.0228 2.6687 21.3028V21.2895C2.6687 21.2895 2.6767 15.3881 2.68737 12.4201C2.6887 11.8628 3.3287 11.5508 3.7647 11.8975C6.9327 14.4108 12.598 18.9935 12.6687 19.0535C13.6154 19.8121 14.8154 20.2401 16.042 20.2401C17.2687 20.2401 18.4687 19.8121 19.4154 19.0388C19.486 18.9921 25.0247 14.5468 28.2407 11.9921C28.678 11.6441 29.3207 11.9561 29.322 12.5121C29.3354 15.4575 29.3354 21.2761 29.3354 21.2761Z"
                          fill="url(#paint0_linear_111_1929)"
                        />
                        <path
                          d="M28.6371 7.58731C27.4825 5.41131 25.2104 4.02197 22.7091 4.02197H9.40245C6.90112 4.02197 4.62912 5.41131 3.47445 7.58731C3.21578 8.07397 3.33845 8.68064 3.76912 9.02464L13.6691 16.9433C14.3624 17.5033 15.2024 17.782 16.0424 17.782C16.0478 17.782 16.0518 17.782 16.0558 17.782C16.0598 17.782 16.0651 17.782 16.0691 17.782C16.9091 17.782 17.7491 17.5033 18.4424 16.9433L28.3425 9.02464C28.7731 8.68064 28.8958 8.07397 28.6371 7.58731Z"
                          fill="url(#paint1_linear_111_1929)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111_1929"
                            x1="2.6687"
                            y1="26.1111"
                            x2="30.091"
                            y2="13.3795"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#5B6CCC" />
                            <stop offset="1" stop-color="#4834AC" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111_1929"
                            x1="3.33984"
                            y1="16.1653"
                            x2="28.29"
                            y2="3.10197"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#5B6CCC" />
                            <stop offset="1" stop-color="#4834AC" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      class="d-flex gap-2 bg-gray2 align-items-center justify-content-center rounded-23 p-3"
                    >
                      <p class="mb-0">0912 - 345 - 6789</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        fill="none"
                      >
                        <g opacity="0.4">
                          <path
                            d="M19.2238 7.34247C18.5891 7.22521 18.0061 7.63027 17.8853 8.24984C17.7645 8.86942 18.1708 9.47433 18.7882 9.59559C20.6473 9.958 22.0827 11.397 22.4465 13.2624C22.5501 13.7994 23.0228 14.1911 23.5672 14.1911C23.6403 14.1911 23.7133 14.1844 23.7877 14.1711C24.4051 14.0472 24.8115 13.4436 24.6906 12.8227C24.1475 10.0366 22.003 7.88476 19.2238 7.34247Z"
                            fill="url(#paint0_linear_111_1937)"
                          />
                          <path
                            d="M19.1412 2.69978C18.8438 2.65714 18.545 2.74508 18.3073 2.93429C18.063 3.12616 17.9103 3.4033 17.8771 3.71375C17.8067 4.34132 18.2595 4.90893 18.8863 4.97955C23.2085 5.46189 26.568 8.82891 27.054 13.1646C27.1191 13.7455 27.6064 14.1839 28.188 14.1839C28.2318 14.1839 28.2743 14.1812 28.3181 14.1759C28.6222 14.1426 28.8931 13.992 29.0843 13.7522C29.2742 13.5124 29.3605 13.2139 29.326 12.9088C28.7205 7.49915 24.5337 3.3007 19.1412 2.69978Z"
                            fill="url(#paint1_linear_111_1937)"
                          />
                        </g>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.7083 17.319C20.0271 22.6363 21.2337 16.4848 24.6202 19.8689C27.885 23.1328 29.7615 23.7867 25.625 27.9221C25.1069 28.3385 21.8148 33.3481 10.2455 21.782C-1.32529 10.2145 3.68146 6.91905 4.09798 6.40106C8.2445 2.25426 8.88717 4.14164 12.152 7.40557C15.5385 10.7911 9.38956 12.0017 14.7083 17.319Z"
                          fill="url(#paint2_linear_111_1937)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111_1937"
                            x1="17.864"
                            y1="13.3841"
                            x2="25.7916"
                            y2="11.1452"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#5B6CCC" />
                            <stop offset="1" stop-color="#4834AC" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111_1937"
                            x1="17.8699"
                            y1="12.8334"
                            x2="31.1401"
                            y2="9.08433"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#5B6CCC" />
                            <stop offset="1" stop-color="#4834AC" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_111_1937"
                            x1="2.66602"
                            y1="26.3794"
                            x2="31.9802"
                            y2="18.0752"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#5B6CCC" />
                            <stop offset="1" stop-color="#4834AC" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <p class="text-gray lh-42 contactDescription">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 order-0 order-xl-1 position-relative">
              <div class="position-absolute w-md-100 -top-165 start-0 ms-xl-4">
                <div class="bg-gray rounded-30 w-326 w-md-100 h-326 rotate-6">
                  <div
                    class="bg-second2 d-flex align-items-end rounded-30 w-326 w-md-100 h-326 p-3 shadow3 -rotate-6 position-relative"
                  >
                    <img
                      alt="shape"
                      src="../assets/img/whiteshape.png"
                      class="img-fluid d-block w-100 h-md-143 rounded-md-42"
                    />
                    <img
                      alt="about"
                      src="../assets/img/contact.png"
                      class="img-fluid mx-auto d-block end-0 start-0 rounded-27 position-absolute"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex flex-column flex-xl-row align-items-center gap-4 w-md-100"
        >
          <div
            class="rounded-l-26 h-158 w-22 bg-gradient-main flex-shrink-0 contactShape"
          ></div>
          <img
            alt="svg"
            src="../assets/img/contactDot.png"
            class="img-fluid d-block h-158 translate-x-md-90"
          />
        </div>
      </div>
    </section>

    <!-- customer -->
    <section id="customer" class="mt-245 mb-5 h-400 overflow-hidden">
      <div class="container position-relative h-100">
        <img
          alt="shape"
          src="../assets/img/customerShape.png"
          class="position-absolute end-0 bottom-0 img-fluid z-10"
        />
        <img
          alt="bg"
          src="../assets/img/customerbg.png"
          class="position-absolute end-0 start-0 img-fluid w-100 h-100 d-none d-md-block -z-1"
        />
        <img
          alt="bg"
          src="../assets/img/custumerBg2.png"
          class="position-absolute end-0 start-0 img-fluid w-100 h-100 d-block d-md-none -z-1"
        />
        <div class="d-flex align-items-center h-100 position-relative z-10">
          <h3
            class="font-bold text-white rotate-90-translate-y-39 flex-shrink-0"
          >
            مشتریان ما
          </h3>
          <!-- swiper -->
          <div class="w-100 position-relative -right-40">
            <div class="customer">
              <SwiperMain
                  :slides-per-view="1"
                  :space-between="20"
                  :pagination="false"
                  :loop="true"
                  :navigation="false"
                  :breakpoints="{
                    '768': {slidesPerView:2},
                    '1200': {slidesPerView:3},
                  }"
                >
                  <SwiperSlide v-for="n in 5" :key="n">
                    <div class="rounded-33 bg-white position-relative p-4">
                    <img
                      alt="label"
                      src="../assets/img/customerLabel.png"
                      class="img-fluid position-absolute top-0 end-0 me-4"
                    />
                    <p class="font-bold fs-17 mt-5 pt-3">
                      شرکت واردات و صاردات خاویار عطا
                    </p>
                    <div class="d-flex align-items-center gap-2 flex-wrap my-3">
                      <span
                        class="py-1 px-3 rounded-pill text-main fs-12 bg-second"
                        >سیم کشی</span
                      >
                    </div>
                    <p class="text-secondary lh-lg">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                  </div>
                  </SwiperSlide>
                </SwiperMain>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- shoar -->
    <Features />

    <!-- contact icons -->
    <section class="d-none d-lg-block">
      <div
        class="position-fixed d-flex flex-column gap-2 bottom-34 z-20 left-34"
      >
        <a
          class="position-relative phoneIcon"
          data-bs-toggle="modal"
          data-bs-target="#contactModal"
        >
          <span
            class="fw-bold position-absolute contactLabel w-130 h-52 bg-white text-center d-none align-items-center justify-content-center text-dark start-0 -top-69 shadow2 rounded-12 contact-hover"
            >تماس با ما</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
          >
            <rect
              x="3"
              y="3"
              width="49"
              height="49"
              rx="12"
              fill="url(#paint0_linear_210_69)"
              stroke="#CDBFFF"
              stroke-width="6"
            />
            <g opacity="0.4">
              <path
                d="M30.4397 20.2594C29.8969 20.1591 29.3984 20.5055 29.2951 21.0353C29.1918 21.5651 29.5392 22.0824 30.0673 22.1861C31.657 22.496 32.8844 23.7266 33.1956 25.3217C33.2841 25.7809 33.6884 26.1159 34.1539 26.1159C34.2164 26.1159 34.2788 26.1102 34.3424 26.0988C34.8704 25.9928 35.2179 25.4767 35.1146 24.9457C34.6501 22.5633 32.8163 20.7231 30.4397 20.2594Z"
                fill="white"
              />
              <path
                d="M30.3687 16.2893C30.1144 16.2529 29.8589 16.3281 29.6556 16.4898C29.4467 16.6539 29.3161 16.8909 29.2877 17.1564C29.2275 17.693 29.6147 18.1784 30.1507 18.2388C33.8468 18.6513 36.7196 21.5305 37.1352 25.2381C37.1908 25.7349 37.6076 26.1098 38.1049 26.1098C38.1424 26.1098 38.1787 26.1075 38.2162 26.1029C38.4762 26.0744 38.7079 25.9457 38.8714 25.7406C39.0338 25.5355 39.1076 25.2803 39.078 25.0194C38.5603 20.3934 34.98 16.8032 30.3687 16.2893Z"
                fill="white"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.5782 28.7908C31.1264 33.3378 32.1582 28.0774 35.0542 30.9713C37.846 33.7624 39.4506 34.3216 35.9134 37.8578C35.4703 38.2139 32.6552 42.4978 22.7619 32.6073C12.8673 22.7155 17.1487 19.8974 17.5049 19.4545C21.0507 15.9084 21.6003 17.5224 24.3922 20.3135C27.2881 23.2086 22.0299 24.2438 26.5782 28.7908Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_210_69"
                x1="-8.19564e-07"
                y1="48.538"
                x2="63.6427"
                y2="30.5092"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5B6CCC" />
                <stop offset="1" stop-color="#4834AC" />
              </linearGradient>
            </defs>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
          >
            <rect
              x="3"
              y="3"
              width="49"
              height="49"
              rx="12"
              fill="#60D669"
              stroke="#94E89A"
              stroke-width="6"
            />
            <g clip-path="url(#clip0_210_79)">
              <path
                d="M15.5634 28.13C15.5628 30.3631 16.1462 32.5435 17.2557 34.4654L15.4573 41.0319L22.1772 39.2699C24.0359 40.2817 26.1183 40.8119 28.2346 40.812H28.2401C35.2261 40.812 40.9129 35.1273 40.9159 28.14C40.9173 24.7542 39.5999 21.5704 37.2064 19.1751C34.8134 16.7799 31.6307 15.4602 28.2396 15.4586C21.2528 15.4586 15.5664 21.1431 15.5635 28.13"
                fill="url(#paint0_linear_210_79)"
              />
              <path
                d="M15.1102 28.1259C15.1095 30.4393 15.7139 32.6977 16.8629 34.6884L15 41.4903L21.9609 39.6651C23.8788 40.7108 26.0383 41.2622 28.2356 41.263H28.2413C35.4779 41.263 41.369 35.3738 41.3721 28.1364C41.3733 24.6289 40.0086 21.3306 37.5296 18.8495C35.0503 16.3687 31.7538 15.0014 28.2413 15C21.0034 15 15.1131 20.8884 15.1102 28.1259ZM19.2556 34.3456L18.9957 33.933C17.9031 32.1957 17.3264 30.1882 17.3272 28.1267C17.3296 22.1111 22.2253 17.2169 28.2454 17.2169C31.1607 17.2181 33.9005 18.3546 35.9613 20.4166C38.0219 22.4788 39.1558 25.22 39.1551 28.1356C39.1524 34.1512 34.2566 39.046 28.2413 39.046H28.2369C26.2783 39.045 24.3574 38.519 22.6821 37.525L22.2834 37.2885L18.1527 38.3715L19.2556 34.3455V34.3456Z"
                fill="url(#paint1_linear_210_79)"
              />
              <path
                d="M24.9596 22.6384C24.7138 22.0921 24.4551 22.0811 24.2214 22.0715C24.03 22.0632 23.8112 22.0639 23.5926 22.0639C23.3738 22.0639 23.0183 22.1462 22.7178 22.4743C22.417 22.8027 21.5693 23.5963 21.5693 25.2105C21.5693 26.8247 22.7451 28.3847 22.909 28.6038C23.0731 28.8225 25.1787 32.241 28.5135 33.5561C31.2851 34.649 31.8491 34.4316 32.4506 34.3768C33.0522 34.3222 34.3918 33.5834 34.6651 32.8173C34.9386 32.0513 34.9386 31.3946 34.8566 31.2574C34.7746 31.1207 34.5558 31.0386 34.2277 30.8746C33.8995 30.7105 32.2865 29.9168 31.9858 29.8073C31.685 29.6979 31.4663 29.6433 31.2475 29.9718C31.0287 30.2998 30.4004 31.0386 30.2089 31.2574C30.0176 31.4767 29.8261 31.504 29.4981 31.3399C29.1698 31.1753 28.1131 30.8293 26.8595 29.7117C25.8842 28.842 25.2257 27.7681 25.0343 27.4395C24.8429 27.1115 25.0138 26.9337 25.1783 26.7702C25.3257 26.6232 25.5065 26.3871 25.6707 26.1956C25.8343 26.004 25.8889 25.8673 25.9983 25.6485C26.1078 25.4295 26.053 25.2379 25.9711 25.0738C25.8889 24.9097 25.2513 23.2871 24.9596 22.6384Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_210_79"
                x1="1288.39"
                y1="2572.78"
                x2="1288.39"
                y2="15.4586"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1FAF38" />
                <stop offset="1" stop-color="#60D669" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_210_79"
                x1="1333.6"
                y1="2664.03"
                x2="1333.6"
                y2="15"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F9F9F9" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <clipPath id="clip0_210_79">
                <rect
                  width="26.3721"
                  height="26.5781"
                  fill="white"
                  transform="translate(15 15)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </section>

    <!-- wave -->
    <img
      alt="wave"
      src="../assets/img/footerWave.png"
      class="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-md-block d-none"
    />
    <img
      alt="wave"
      src="../assets/img/footerBg2.png"
      class="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-block d-md-none"
    />

  </main>
</template>

<script setup>
const { data:categories } = await useAsyncData('item', () => $fetch('https://dummyjson.com/products/category-list'));

</script>

<style>


</style>