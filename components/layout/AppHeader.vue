<template>
  <header class="bg-jijuna-black h-20" :class="isActive ? 'fixed w-full' : 'relative'">
    <div class="container mx-auto flex justify-between items-center h-full">
      <figure>
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
        :class="isActive ? 'right-0 top-20 border-t-2 border-jijuna-primary' : '-right-full'"
      >
        <nuxt-link to="/" class="header-link mr-6">Carta</nuxt-link>
        <nuxt-link to="/" class="header-link flex mt-3 md:mt-0">
          <img
            src="@/assets/images/WhatsApp.svg"
            alt="Whatsapp Jijuna"
            class="w-8"
          />
          923 417 407
        </nuxt-link>
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
