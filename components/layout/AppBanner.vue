<template>
  <section class="app-banner main-bg flex">
    <div
      class="page-container md:w-full app-banner-container mx-auto h-full flex flex-col lg:flex-row pt-10 pb-0 relative"
    >
      <div class="flex flex-col" v-if="!loading">
        <h1 class="title text-white font-medium animate__animated animate__fadeIn">
          Prueba nuestra
          <span class="first-span md:block">salchipapas: Disfrútala</span>
          <span class="md:block">en cada bocado crujiente.</span>
        </h1>
        <a
          href=""
          class="menu-link text-jijuna-primary font-medium underline mt-8 self-start"
          @click.prevent="toMenu()"
          >Ver carta</a
        >
      </div>

      <div class="images-container w-full h-full flex items-end animate__animated animate__zoomIn" v-if="!loading">
        <img
          src="@/assets/images/banner-image-mobile.svg"
          alt="Salchipapas Jijuna"
          class="banner-image md:hidden absolute right-0 -left-8"
        />

        <img
          src="@/assets/images/banner-image-desktop.svg"
          alt="Salchipapas Jijuna"
          class="banner-image hidden md:block lg:absolute right-0"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppBanner",
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 350);
  },
  methods: {
    toMenu() {
      const myEl = document.getElementById("menu");

      this.$smoothScroll({
        scrollTo: myEl,
        updateHistory: false,
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
.app-banner {
  height: 514px;
  @apply md:h-auto;
}

@media (min-width: 1024px) {
  .app-banner {
    height: 461px;
  }
}

.banner-image {
  width: 420px;
  max-width: 100vw;

  @media (min-width: 768px) {
    max-width: 100%;
  }

  @media (min-width: 1024px) {
    width: 848px;
    max-width: initial;
  }
}

.title {
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;

  @media (max-width: 420px) {
    width: 351px;
  }
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

.images-container {
  @media (min-width: 768px) {
    min-height: 300px;
  }
}
</style>
