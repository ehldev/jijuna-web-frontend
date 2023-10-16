<template>
  <section class="app-gallery mx-auto mt-10 pb-12">
    <div class="app-gallery-container mx-auto px-0">
      <h2 class="page-subtitle text-center mb-6 md:mb-0">Galería</h2>

      <CoolLightBox :items="images" :index="index" @close="index = null">
      </CoolLightBox>

      <!-- Mobile -->
      <section class="md:hidden">
        <swiper
          class="swiper"
          :options="swiperOptions"
          :pagination="{ clickable: true }"
        >
          <swiper-slide class="slide" v-for="(item, i) in images" :key="i">
            <img :src="item" alt="Galería Jijuna" @click="index = i" />
          </swiper-slide>
        </swiper>
      </section>

      <!-- Desktop -->
      <div
        class="hidden md:grid md:grid-cols-5 md:gap-2 md:2xl:max-app-gallery md:pt-4 md:pb-12w-7xl lg:mx-auto"
      >
        <div
          class="cursor-pointer"
          v-for="(image, i) in images"
          :key="index"
          @click="index = i"
          data-aos="fade-in"
          :data-aos-delay="100 * (i + 1)"
        >
          <img :src="image" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
  data() {
    return {
      images: [
        "https://res.cloudinary.com/ehldev/image/upload/v1696486372/fhqbuepwzdxikllmq850.png",
        "https://res.cloudinary.com/ehldev/image/upload/v1696486372/dlmdeygg8truow9itbku.png",
        "https://res.cloudinary.com/ehldev/image/upload/v1696486373/yaeb30te2kxmqjgwnerp.png",
        "https://res.cloudinary.com/ehldev/image/upload/v1696486372/stt9krx7wjvy6g47kszc.png",
        "https://res.cloudinary.com/ehldev/image/upload/v1696486372/fhqbuepwzdxikllmq850.png"
      ],
      index: null,
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 8,
        loop: true,
        // autoplay: {
        //   delay: 4000,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  components: {
    CoolLightBox,
  },
  methods: {
    openLightbox() {},
  },
};
</script>

<style lang="postcss">
.app-gallery-container {
  max-width: 1440px;
}
</style>
