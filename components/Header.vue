<template>
  <header class="position-relative z-10">
    <div class="container">
      <div class="d-flex justify-content-between gap-3">
        <div class="flex-grow-1 w-100 position-relative">
          <div
            class="py-33 px-28 rounded-b-26 d-flex align-items-center justify-content-between bg-header1"
          >
            <!-- hamburger icon -->
            <svg
              @click="openMenu"
              class="d-xl-none cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 18.005C22 18.555 21.554 19 21.005 19H12.995C12.7311 19 12.478 18.8952 12.2914 18.7086C12.1048 18.522 12 18.2689 12 18.005C12 17.7411 12.1048 17.488 12.2914 17.3014C12.478 17.1148 12.7311 17.01 12.995 17.01H21.005C21.555 17.01 22 17.455 22 18.005ZM22 12C22 12.55 21.554 12.995 21.005 12.995H2.995C2.73111 12.995 2.47803 12.8902 2.29143 12.7036C2.10483 12.517 2 12.2639 2 12C2 11.7361 2.10483 11.483 2.29143 11.2964C2.47803 11.1098 2.73111 11.005 2.995 11.005H21.005C21.555 11.005 22 11.451 22 12ZM21.005 6.99C21.2689 6.99 21.522 6.88517 21.7086 6.69857C21.8952 6.51197 22 6.25889 22 5.995C22 5.73111 21.8952 5.47803 21.7086 5.29143C21.522 5.10483 21.2689 5 21.005 5H8.995C8.86433 5 8.73495 5.02574 8.61423 5.07574C8.49351 5.12574 8.38382 5.19903 8.29143 5.29143C8.19903 5.38382 8.12574 5.49351 8.07574 5.61423C8.02574 5.73495 8 5.86433 8 5.995C8 6.12567 8.02574 6.25505 8.07574 6.37577C8.12574 6.49649 8.19903 6.60618 8.29143 6.69857C8.38382 6.79097 8.49351 6.86426 8.61423 6.91426C8.73495 6.96426 8.86433 6.99 8.995 6.99H21.005Z"
                fill="#1E2D48"
              />
            </svg>
            <!-- logo -->
            <NuxtLink to="/"
              ><img alt="logo" src="../assets/img/logo.png" class="img-fluid"
            /></NuxtLink>
            <!-- search products && login -->
            <div class="d-flex align-items-center gap-3">
              <form
                class="d-xl-flex d-none align-items-center gap-2 py-13 px-19 rounded-pill bg-white w-452 flex-shrink-0"
              >
                <svg
                  class="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.58329 2.2915C8.62574 2.2915 7.67756 2.48011 6.79289 2.84655C5.90823 3.21299 5.1044 3.75009 4.42731 4.42718C3.75021 5.10428 3.21311 5.90811 2.84667 6.79277C2.48023 7.67744 2.29163 8.62562 2.29163 9.58317C2.29163 10.5407 2.48023 11.4889 2.84667 12.3736C3.21311 13.2582 3.75021 14.0621 4.42731 14.7392C5.1044 15.4163 5.90823 15.9534 6.79289 16.3198C7.67756 16.6862 8.62574 16.8748 9.58329 16.8748C11.5172 16.8748 13.3718 16.1066 14.7393 14.7392C16.1067 13.3717 16.875 11.517 16.875 9.58317C16.875 7.6493 16.1067 5.79464 14.7393 4.42718C13.3718 3.05973 11.5172 2.2915 9.58329 2.2915ZM1.04163 9.58317C1.04163 4.8665 4.86663 1.0415 9.58329 1.0415C14.3 1.0415 18.125 4.8665 18.125 9.58317C18.125 14.2998 14.3 18.1248 9.58329 18.1248C4.86663 18.1248 1.04163 14.2998 1.04163 9.58317ZM16.225 16.2248C16.3421 16.1078 16.501 16.0421 16.6666 16.0421C16.8323 16.0421 16.9911 16.1078 17.1083 16.2248L18.775 17.8915C18.8364 17.9487 18.8856 18.0177 18.9198 18.0944C18.9539 18.1711 18.9723 18.2538 18.9738 18.3377C18.9753 18.4217 18.9598 18.505 18.9284 18.5828C18.897 18.6607 18.8502 18.7314 18.7908 18.7907C18.7315 18.8501 18.6608 18.8968 18.583 18.9283C18.5051 18.9597 18.4218 18.9751 18.3379 18.9737C18.2539 18.9722 18.1712 18.9538 18.0945 18.9197C18.0178 18.8855 17.9488 18.8362 17.8916 18.7748L16.225 17.1082C16.1079 16.991 16.0422 16.8321 16.0422 16.6665C16.0422 16.5009 16.1079 16.342 16.225 16.2248Z"
                    fill="black"
                  />
                </svg>
                <input
                  class="outline-none border-0 fs-14 w-100"
                  placeholder="جستجو در بین محصولات ..."
                />
              </form>
              <!-- login desktop -->
              <NuxtLink to="/login"
                class="d-xl-flex d-none align-items-center bg-white py-13 px-19 rounded-pill gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.79604 12.5396C6.34564 12.5396 3.39844 13.0836 3.39844 15.2596C3.39844 17.4364 6.32724 17.9996 9.79604 17.9996C13.2464 17.9996 16.1936 17.4564 16.1936 15.2796C16.1936 13.1028 13.2656 12.5396 9.79604 12.5396Z"
                    fill="#27817A"
                  />
                  <path
                    opacity="0.4"
                    d="M9.79598 10.4667C12.1464 10.4667 14.0296 8.58271 14.0296 6.23311C14.0296 3.88351 12.1464 1.99951 9.79598 1.99951C7.44638 1.99951 5.56238 3.88351 5.56238 6.23311C5.56238 8.58271 7.44638 10.4667 9.79598 10.4667Z"
                    fill="#27817A"
                  />
                </svg>
                <p class="mb-0 fs-14 fw-medium text-dark">
                  ورود به حساب کاربری
                </p>
              </NuxtLink>
              <!-- login mobile -->
              <NuxtLink to="/login"
                class="d-xl-none d-block w-30 h-30 rounded-9 bg-white d-flex align-items-center justify-content-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.4 14.5391C15.8709 14.5391 18.8 15.1032 18.8 17.2792C18.8 19.456 15.8517 20 12.4 20C8.9299 20 6 19.436 6 17.26C6 15.0832 8.94831 14.5391 12.4 14.5391ZM12.4 4C14.7513 4 16.6352 5.88322 16.6352 8.23284C16.6352 10.5825 14.7513 12.4665 12.4 12.4665C10.0495 12.4665 8.16481 10.5825 8.16481 8.23284C8.16481 5.88322 10.0495 4 12.4 4Z"
                    fill="#1E2D48"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
          <div
            @mouseleave="opendropdown = false"
            class="rounded-b-26 d-flex align-items-center justify-content-between z-30 d-xl-block bg-gradient-main position-absolute position-sm-static w-92 py-3 py-xl-0 px-3 px-xl-0 mx-md-5 mx-4"
          >
            <!-- svg -->
            <img
              alt="shape"
              src="../assets/img/bg-header2.png"
              class="position-absolute end-0 start-0 object-cover mx-auto z-0 px-5 top-0 bottom-0 h-100 w-100 d-none d-xl-block"
            />
            <!-- menu -->
            <ul
              class="d-xl-flex menu d-none align-items-center h-65 justify-content-center gap-5 list-unstyled p-0 mb-0 fs-13 z-10 position-relative"
            >
              <li class="h-100 d-flex align-items-center">
                <NuxtLink to="/" class="text-white h-100 d-flex align-items-center"
                  >صفحه اصلی</NuxtLink
                >
              </li>
              <li
                @mouseenter="opendropdown = true"
                class="h-100 d-flex align-items-center"
              >
                <a class="text-white d-flex h-100 align-items-center gap-2">
                  <p class="mb-0">محصولات</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                  >
                    <path
                      d="M8.22119 1.51422L4.44977 5.28564L0.678343 1.51422"
                      stroke="white"
                      stroke-width="1.25714"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li class="h-100 d-flex align-items-center">
                <a class="text-white h-100 d-flex align-items-center"
                  >خدمات ما</a
                >
              </li>
              <li class="h-100 d-flex align-items-center">
                <NuxtLink to="/about" class="text-white h-100 d-flex align-items-center"
                  >درباره ما</NuxtLink
                >
              </li>
              <li class="h-100 d-flex align-items-center">
                <a class="text-white h-100 d-flex align-items-center"
                  >تماس با ما</a
                >
              </li>
              <li class="h-100 d-flex align-items-center">
                <NuxtLink to="/blog" class="text-white h-100 d-flex align-items-center">بلاگ</NuxtLink>
              </li>
              <li @click="opendropdown = false" class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle px-0 text-white d-flex align-items-center gap-1 fs-12 font-bold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    alt="flag"
                    src="../assets/img/emojione_flag-for-iran.png"
                    class="img-fluid w-22 h-22 rounded-circle"
                  />
                  <p class="mb-0">فارسی</p>
                </a>
                <ul class="dropdown-menu rounded-14 border-0 py-0 shadow9 z-20">
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center gap-3 py-3 rounded-14"
                      href="#"
                    >
                      <img
                        alt="flag"
                        src="../assets/img/circle-flags_uk.png"
                        class="img-fluid w-34 h-34 rounded-circle"
                      />
                      <div>
                        <p class="mb-0 fs-12 text-second2">English</p>
                        <p class="mb-0 fs-10 text-gray">انگلیسی</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center gap-3 py-3 rounded-14"
                      href="#"
                    >
                      <img
                        alt="flag"
                        src="../assets/img/emojione_flag-for-iran.png"
                        class="img-fluid w-34 h-34 rounded-circle"
                      />
                      <div>
                        <p class="mb-0 fs-12 text-second2">فارسی</p>
                        <p class="mb-0 fs-10 text-gray">Persian</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <!--  -->
            <div
              :class="{ active: opendropdown }"
              class="dropdowns d-none d-xl-block py-xl-0 px-4 position-relative z-10"
            >
              <!-- dropdown 1 -->
              <ul
                class="dropdown1 list-unstyled position-relative fs-12 fw-bold z-10 d-none d-xl-flex align-items-center justify-content-between mb-0 px-4 bg-white rounded-18 p-4 end-0 start-0"
              >
                <li
                  @mouseenter="toggleTabs(1)"
                  :class="{
                    'text-dark': openTab !== 1,
                    'active': openTab === 1,
                  }"
                >
                  <a class="d-flex text-gray align-items-center gap-2">
                    <p class="mb-0">اتوماسیون صنعتی</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      class="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </a>
                </li>
                <li
                  @mouseenter="toggleTabs(2)"
                  :class="{
                    'text-dark': openTab !== 2,
                    'active': openTab === 2,
                  }"
                >
                  <a class="text-gray d-flex align-items-center gap-2">
                    <p class="mb-0">برق صنعتی</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      class="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </a>
                </li>
                <li
                  @mouseenter="toggleTabs(3)"
                  :class="{
                    'text-dark': openTab !== 3,
                    'active': openTab === 3,
                  }"
                >
                  <a class="text-gray d-flex align-items-center gap-2">
                    <p class="mb-0">سنسور</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      class="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </a>
                </li>
                <li
                  @mouseenter="toggleTabs(4)"
                  :class="{
                    'text-dark': openTab !== 4,
                    'active': openTab === 4,
                  }"
                >
                  <a class="text-gray d-flex align-items-center gap-2">
                    <p class="mb-0">کنترل و نمایشگر</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      class="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </a>
                </li>
                <li
                  @mouseenter="toggleTabs(5)"
                  :class="{
                    'text-dark': openTab !== 5,
                    'active': openTab === 5,
                  }"
                >
                  <a class="text-gray d-flex align-items-center gap-2">
                    <p class="mb-0">تابلوبرق و تجهیزات</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      class="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </a>
                </li>
                <li
                  @mouseenter="toggleTabs(6)"
                  :class="{
                    'text-dark': openTab !== 6,
                    'active': openTab === 6,
                  }"
                >
                  <a class="text-gray d-flex align-items-center gap-2">
                    <p class="mb-0">سیم و کابل</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      class="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </a>
                </li>
                <li
                  @mouseenter="toggleTabs(7)"
                  :class="{
                    'text-dark': openTab !== 7,
                    'active': openTab === 7,
                  }"
                >
                  <a class="text-gray d-flex align-items-center gap-2">
                    <p class="mb-0">نور و روشنایی</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      class="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </a>
                </li>
                <li
                  @mouseenter="toggleTabs(8)"
                  :class="{
                    'text-dark': openTab !== 8,
                    'active': openTab === 8,
                  }"
                >
                  <a class="text-gray d-flex align-items-center gap-2">
                    <p class="mb-0">برق خانگی</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      class="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </a>
                </li>
                <li
                  @mouseenter="toggleTabs(9)"
                  :class="{
                    'text-dark': openTab !== 9,
                    'active': openTab === 9,
                  }"
                >
                  <a class="text-gray d-flex align-items-center gap-2">
                    <p class="mb-0">ابزار و اندازه گیری</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      class="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <!-- dropdown 2 -->
              <ul
                class="dropdown2 list-unstyled d-none d-xl-block mt-4 position-relative fs-14 fw-bold z-10 mb-0 px-5 bg-white rounded-18 p-4 end-0 start-0"
              >
                <li
                  :class="{ 'd-none': openTab !== 1, 'd-flex': openTab === 1 }"
                  class="flex-wrap align-items-center gap-5 position-relative"
                >
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                </li>
                <li
                  :class="{ 'd-none': openTab !== 2, 'd-flex': openTab === 2 }"
                  class="flex-wrap align-items-center gap-5 position-relative"
                >
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">برق صنعتی</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                </li>
                <li
                  :class="{ 'd-none': openTab !== 3, 'd-flex': openTab === 3 }"
                  class="flex-wrap align-items-center gap-5 position-relative"
                >
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                </li>
                <li
                  :class="{ 'd-none': openTab !== 4, 'd-flex': openTab === 4 }"
                  class="flex-wrap align-items-center gap-5 position-relative"
                >
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                </li>
                <li
                  :class="{ 'd-none': openTab !== 5, 'd-flex': openTab === 5 }"
                  class="flex-wrap align-items-center gap-5 position-relative"
                >
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                </li>
                <li
                  :class="{ 'd-none': openTab !== 6, 'd-flex': openTab === 6 }"
                  class="flex-wrap align-items-center gap-5 position-relative"
                >
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                </li>
                <li
                  :class="{ 'd-none': openTab !== 7, 'd-flex': openTab === 7 }"
                  class="flex-wrap align-items-center gap-5 position-relative"
                >
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                </li>
                <li
                  :class="{ 'd-none': openTab !== 8, 'd-flex': openTab === 8 }"
                  class="flex-wrap align-items-center gap-5 position-relative"
                >
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                </li>
                <li
                  :class="{ 'd-none': openTab !== 9, 'd-flex': openTab === 9 }"
                  class="flex-wrap align-items-center gap-5 position-relative"
                >
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="112"
                    viewBox="0 0 1 112"
                    fill="none"
                  >
                    <line
                      opacity="0.1"
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499995"
                      y2="112"
                      stroke="black"
                    />
                  </svg>
                  <a class="text-center text-dark">
                    <img
                      alt="product"
                      src="../assets/img/image 8.png"
                      class="img-fluid d-block mx-auto"
                    />
                    <p class="mb-0 mt-3">منبع تغذیه</p>
                  </a>
                </li>
              </ul>
            </div>
            <!-- cart icon && phone number (mobile size) -->
            <a class="d-xl-none">
              <p class="text-white fs-15 mb-0 font-bold">
                <span class="fw-bold">0912</span>۱۲۳۴۵۶۷۸۹
              </p>
              <p class="mb-0 fs-13 text-white-50">پشتیبانی سریع</p>
            </a>
            <div class="d-flex d-xl-none gap-4">
              <div class="nav-item dropdown langMobile">
                <a
                  class="nav-link dropdown-toggle px-0 text-white d-flex align-items-center gap-1 fs-12 font-bold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    alt="flag"
                    src="../assets/img/emojione_flag-for-iran.png"
                    class="img-fluid w-22 h-22 rounded-circle"
                  />
                </a>
                <ul class="dropdown-menu rounded-14 border-0 py-0 shadow9">
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center gap-3 py-2 rounded-14"
                      href="#"
                    >
                      <img
                        alt="flag"
                        src="../assets/img/circle-flags_uk.png"
                        class="img-fluid w-34 h-34 rounded-circle"
                      />
                      <div>
                        <p class="mb-0 fs-12 text-second2">English</p>
                        <p class="mb-0 fs-10 text-gray">انگلیسی</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center gap-3 py-2 rounded-14"
                      href="#"
                    >
                      <img
                        alt="flag"
                        src="../assets/img/emojione_flag-for-iran.png"
                        class="img-fluid w-34 h-34 rounded-circle"
                      />
                      <div>
                        <p class="mb-0 fs-12 text-second2">فارسی</p>
                        <p class="mb-0 fs-10 text-gray">Persian</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <NuxtLink to="/carts">
                <svg
                  class="d-block mx-auto mb-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    d="M5.20959 15.8936C6.00577 15.8936 6.65806 16.5458 6.65806 17.3516C6.65806 18.1478 6.00577 18.8001 5.20959 18.8001C4.40382 18.8001 3.75153 18.1478 3.75153 17.3516C3.75153 16.5458 4.40382 15.8936 5.20959 15.8936ZM16.0012 15.8936C16.7974 15.8936 17.4497 16.5458 17.4497 17.3516C17.4497 18.1478 16.7974 18.8001 16.0012 18.8001C15.1954 18.8001 14.5431 18.1478 14.5431 17.3516C14.5431 16.5458 15.1954 15.8936 16.0012 15.8936Z"
                    fill="white"
                  />
                  <path
                    d="M0.844854 0.00799104L3.13267 0.353322C3.45882 0.411836 3.69863 0.679468 3.72741 1.00561L3.90967 3.15434C3.93844 3.46226 4.18785 3.69248 4.49481 3.69248H17.4495C18.0347 3.69248 18.4184 3.89392 18.8021 4.33518C19.1858 4.77644 19.2529 5.40954 19.1666 5.98414L18.2553 12.2768C18.0826 13.4865 17.0466 14.3776 15.8284 14.3776H5.36293C4.08713 14.3776 3.03195 13.3992 2.92643 12.1339L2.04392 1.67709L0.595448 1.42769C0.211747 1.36054 -0.0568432 0.986429 0.0103044 0.602728C0.0774521 0.209434 0.451561 -0.0495641 0.844854 0.00799104ZM14.2936 7.24076H11.6364C11.2336 7.24076 10.917 7.55731 10.917 7.9602C10.917 8.35349 11.2336 8.67964 11.6364 8.67964H14.2936C14.6965 8.67964 15.013 8.35349 15.013 7.9602C15.013 7.55731 14.6965 7.24076 14.2936 7.24076Z"
                    fill="white"
                  />
                </svg>
                <!-- cart number -->
                <span
                  class="d-block bg-white text-dark w-26 h-11 rounded-5 fs-10 text-center shadow1"
                  >12</span
                >
              </NuxtLink>
            </div>
          </div>
          <!-- mobile menu -->
          <div id="mobileMenu"
            :class="{'active': mobileMenu}"
            class="position-absolute end-0 start-0 d-xl-none rounded-18"
          >
            <ul class="list-unstyled mb-0 pe-0">
              <li class="px-3">
                <NuxtLink to="/" class="d-block font-bold text-dark py-4">صفحه اصلی</NuxtLink>
              </li>
              <li class="px-3">
                <div @click="accordionContent= !accordionContent"
                  class="d-flex align-items-center justify-content-between cursor-pointer py-4 accordionBtn"
                >
                  <p class="mb-0 font-bold">محصولات</p>
                  <svg :class="{'active': accordionContent}"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                </div>
                <ul :class="{'active': accordionContent}"
                  class="accordionContent list-unstyled mb-0 pe-0 position-relative"
                >
                  <li>
                    <div
                      class="d-flex align-items-center justify-content-between cursor-pointer py-3 border-dash-r-2 accordionBtn"
                    >
                      <div class="d-flex align-items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="16"
                          viewBox="0 0 15 16"
                          fill="none"
                        >
                          <circle
                            cx="7.5"
                            cy="8"
                            r="5.5"
                            fill="transparent"
                            stroke="#27817A"
                            stroke-width="4"
                          />
                        </svg>
                        <p class="mb-0 fs-14">لورم ایپسوم متن ساختگی</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="d-flex align-items-center justify-content-between cursor-pointer py-3 border-dash-r-2 accordionBtn"
                    >
                      <div class="d-flex align-items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="16"
                          viewBox="0 0 15 16"
                          fill="none"
                        >
                          <circle
                            cx="7.5"
                            cy="8"
                            r="5.5"
                            fill="transparent"
                            stroke="#27817A"
                            stroke-width="4"
                          />
                        </svg>
                        <p class="mb-0 fs-14">لورم ایپسوم متن ساختگی</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="d-flex align-items-center justify-content-between cursor-pointer py-3 border-dash-r-2 accordionBtn"
                    >
                      <div class="d-flex align-items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="16"
                          viewBox="0 0 15 16"
                          fill="none"
                        >
                          <circle
                            cx="7.5"
                            cy="8"
                            r="5.5"
                            fill="transparent"
                            stroke="#27817A"
                            stroke-width="4"
                          />
                        </svg>
                        <p class="mb-0 fs-14">لورم ایپسوم متن ساختگی</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="px-3">
                <a class="d-block font-bold text-dark py-4">پرسش و پاسخ</a>
              </li>
              <li class="px-3">
                <a class="d-block font-bold text-dark py-4">تماس با ما</a>
              </li>
              <li class="px-3">
                <NuxtLink to="/about" class="d-block font-bold text-dark py-4">درباره ما</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <!--  -->
        <div class="flex-shrink-0 d-none d-xl-block">
          <div class="mt-3">
            <NuxtLink to="/carts"
              class="rounded-22 me-auto bg-second w-64 h-68 d-flex align-items-center justify-content-center position-relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M5.61041 16.4941C6.40659 16.4941 7.05888 17.1464 7.05888 17.9522C7.05888 18.7484 6.40659 19.4007 5.61041 19.4007C4.80464 19.4007 4.15234 18.7484 4.15234 17.9522C4.15234 17.1464 4.80464 16.4941 5.61041 16.4941ZM16.402 16.4941C17.1982 16.4941 17.8505 17.1464 17.8505 17.9522C17.8505 18.7484 17.1982 19.4007 16.402 19.4007C15.5962 19.4007 14.9439 18.7484 14.9439 17.9522C14.9439 17.1464 15.5962 16.4941 16.402 16.4941Z"
                  fill="#27817A"
                />
                <path
                  d="M1.24524 0.608089L3.53306 0.95342C3.85921 1.01193 4.09902 1.27957 4.1278 1.60571L4.31006 3.75444C4.33883 4.06236 4.58824 4.29258 4.8952 4.29258H17.8499C18.435 4.29258 18.8188 4.49402 19.2025 4.93528C19.5862 5.37653 19.6533 6.00964 19.567 6.58423L18.6557 12.8769C18.483 14.0865 17.447 14.9777 16.2288 14.9777H5.76332C4.48752 14.9777 3.43234 13.9993 3.32682 12.734L2.44431 2.27719L0.995839 2.02778C0.612138 1.96064 0.343547 1.58653 0.410695 1.20283C0.477843 0.809532 0.851951 0.550534 1.24524 0.608089ZM14.694 7.84086H12.0368C11.6339 7.84086 11.3174 8.15741 11.3174 8.56029C11.3174 8.95359 11.6339 9.27973 12.0368 9.27973H14.694C15.0969 9.27973 15.4134 8.95359 15.4134 8.56029C15.4134 8.15741 15.0969 7.84086 14.694 7.84086Z"
                  fill="#27817A"
                />
              </svg>
              <!-- cart number -->
              <span
                class="d-block bg-white position-absolute text-dark w-36 h-15 rounded-5 fs-12 text-center bottom-8 shadow1"
                >12</span
              >
            </NuxtLink>
            <p class="mb-0 fs-13 text-gray mt-3 text-start ms-1">سبد خرید</p>
          </div>
          <div class="mt-4">
            <a class="text-start">
              <p class="text-dark fs-14 fw-bold mb-0">0912</p>
              <p class="fs-14 fw-bold mb-0 text-main">۱۲۳۴۵۶۷۸۹</p>
            </a>
            <p class="fs-13 text-gray mb-0">پشتیبانی سریع</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const accordionContent = ref(false);
const opendropdown = ref(false);
const mobileMenu = ref(false);
const openTab = ref(1);

function openMenu() {
  mobileMenu.value = !mobileMenu.value;
}
function toggleTabs(tabNumber) {
  openTab.value = tabNumber;
}
</script>