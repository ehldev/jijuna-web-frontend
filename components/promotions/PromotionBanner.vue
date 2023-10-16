<template>
  <section class="promotion-banner main-bg">
    <div
      class="container md:ml-auto 2xl:mx-auto promotion-banner grid grid-cols-2 pr-0 2xl:pr-8"
    >
      <div class="h-full flex flex-col justify-center pr-2 md:pr-0" data-aos="fade-in">
        <h1 class="title text-white font-bold" v-if="title">{{ title }}</h1>
        <p class="subtitle md:text-2xl text-jijuna-primary mt-2 lg:mt-0" v-if="subtitle">
          {{ subtitle }}
        </p>
      </div>

      <div class="image-container relative ml-auto md:ml-0" data-aos="fade-in">
        <img
          src="@/assets/images/promotions/banner-mobile.png"
          alt="Promociones Jijuna"
          class="md:hidden absolute top-0 banner-image"
        />

        <img
          src="@/assets/images/promotions/banner-desktop.png"
          alt="Promociones Jijuna"
          class="hidden md:block md:absolute banner-image md:top-0 md:left-0"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PromotionBanner",
  layout: "default",
  props: ['title', 'subtitle']
};
</script>

<style lang="postcss" scoped>
.promotion-banner {
  height: 204px;

  @media (min-width: 768px) {
    height: 190px;
  }
}

.title {
  @apply text-2xl;
  line-height: 28px;

  @media (min-width: 400px) {
    font-size: 28px;
    line-height: 32px;
  }

  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 50px;
  }
}

.subtitle {
  @apply text-base;
  line-height: 19px;

  @media (min-width: 400px) {
    font-size: 18px;
    line-height: 21px;
  }
}

.image-container {
  width: 182px;
  max-width: 100%;

  @media (min-width: 768px) {
    @apply w-auto;
  }
}

.banner-image {
  @apply w-full;
  height: 203px;
  max-width: 100%;

  @media (min-width: 768px) {
    width: 767px;
    height: 190px;
  }
}
</style>
