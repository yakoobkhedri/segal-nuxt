<template>
  <section id="banner" class="py-5">
      <div class="container">
        <div class="banner position-relative">
              <svg class="w-md-169 h-md-25 bottom-0 position-absolute mx-auto end-0 start-0 z-2" width="275" height="44" viewBox="0 0 275 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M58.4995 -0.000244141C63.4995 -0.000244138 156.077 0.0387214 215.077 0.0385627C217.92 0.038555 221.739 1.00184 224.077 2.03856C228.5 4 229 5 231 6.5C233 8 255 33.4997 261 38.4998C267 43.4999 274.5 43.9998 274.5 43.9998H0C0 43.9998 11.9995 42.4998 16.9999 35.4998C20.3219 31.5443 39.4999 10.4998 44 5.99976C48.2958 2.32959 53.4995 -0.000244143 58.4995 -0.000244141Z" fill="white"></path>
              </svg>
              <div class="position-relative">
              <SwiperMain
                :slides-per-view="1"
                :space-between="20"
                :pagination="{ clickable: true }"
                :navigation="false"
                :breakpoints="{
                    '0': {slidesPerView:1}
                  }"
              >
                <SwiperSlide v-for="n in 4" :key="n">
                  <a class="d-block h-100"
                ><img
                  alt="slide"
                  src="../assets/img/slide1.png"
                  class="img-fluid w-100 h-100 rounded-4"
              /></a>
                </SwiperSlide>
              </SwiperMain>
              </div>
          </div>
      </div>
    </section>
</template>

<script>
</script>

<style>

</style>