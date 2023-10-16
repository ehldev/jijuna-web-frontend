<template>
  <div class="relative">
    <AppHeader />

    <Nuxt />

    <AppFooter />

    <button type="button" class="fixed right-2 bottom-10" data-aos="fade-left" v-if="!loading">
      <img src="@/assets/images/contacto.svg" alt="Pedir ahora en Jijuna" class="contact hover:scale-105 transition-all">
    </button>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/AppFooter'

export default {
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
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="postcss">
.contact {
  width: 263px;
  height: 96px;
}
</style>
