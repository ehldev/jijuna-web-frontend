<template>
  <section class="app-banner main-bg flex">
    <div
      class="container app-banner-container mx-auto h-full flex flex-col md:flex-row pt-6 pb-0"
    >
      <div class="flex flex-col justify-center">
        <h1 class="title text-white font-medium">
          Prueba nuestra salchipapas: Disfrutala en cada bocado crujiente.
        </h1>
        <nuxt-link
          to="/"
          class="menu-link text-jijuna-primary font-medium underline mt-8 md:mt-2 self-start"
          >Ver carta</nuxt-link
        >
      </div>

      <div class="h-full flex items-end">
        <img src="@/assets/images/salchipapa-banner.png" alt="Salchipapas Jijuna" />

        <nuxt-link to="/" class="banner-button inline-block md:right-16 md:bottom-4 hover:scale-105 transition-all">
          <img src="@/assets/images/banner-button.png" alt="Salchipapas Jijuna" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppBanner",
};
</script>

<style lang="postcss" scoped>
.app-banner {
  height: 514px;
}

@media (min-width: 768px) {
  .app-banner {
    height: 461px;
  }
}

.title {
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
}

@media (min-width: 768px) {
  .title {
    width: 640px;
    font-size: 42px;
    line-height: 50px;
  }
}

.menu-link {
  font-size: 18px;
}

@media (min-width: 768px) {
  .menu-link {
    font-size: 28px;
  }
}

.banner-button {
  width: 262px;
}
</style>
