<template>
  <header
    class="bg-jijuna-black h-20 relative z-50"
    :class="isActive ? 'fixed w-full' : 'relative'"
  >
    <div class="container mx-auto flex justify-between items-center h-full">
      <figure @click="$router.push('/')" class="cursor-pointer">
        <img src="@/assets/images/logo-jijuna.svg" alt="Logo Jijuna" />
      </figure>

      <button
        class="hamburger hamburger--collapse md:hidden"
        :class="{ 'is-active': isActive }"
        type="button"
        @click="isActive = !isActive"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>

      <!-- hidden md:flex -->
      <nav
        class="w-full h-full flex flex-col md:flex-row justify-center items-center fixed z-50 bg-jijuna-black md:w-auto md:h-auto md:relative transition-all md:right-0"
        :class="
          isActive
            ? 'right-0 top-20 border-t-2 z-50 border-jijuna-primary'
            : '-right-full'
        "
      >
        <a href="/" class="header-link mr-6" @click.prevent="toMenu()">Carta</a>
        <a href="https://api.whatsapp.com/send?phone=51934325715" target="_blank" class="header-link flex mt-3 md:mt-0">
          <img
            src="@/assets/images/WhatsApp.svg"
            alt="Whatsapp Jijuna"
            class="w-8"
          />
          934 325 715
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toMenu() {
      this.isActive = false;

      if (this.$route.name != "index") {
        this.$router.push("/");
      } else {
      }

      setTimeout(() => {
        const myEl = document.getElementById("menu");

        this.$smoothScroll({
          scrollTo: myEl,
          updateHistory: false,
        });
      }, 400);
    },
  },
};
</script>

<style lang="postcss">
.header-link {
  @apply text-white hover:text-jijuna-primary text-3xl md:text-lg font-medium;
}

.hamburger .hamburger-inner,
.hamburger .hamburger-inner::before,
.hamburger .hamburger-inner::after {
  background-color: white;
  color: white;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: white;
}
</style>
