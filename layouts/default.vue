<template>
  <div class="relative">
    <AppHeader />

    <Nuxt />

    <AppFooter v-if="$route.name != 'promociones'" />

    <a :href="rappiUrl" target="_blank" class="fixed right-2 md:right-4 bottom-10" data-aos="fade-left" v-if="!loading && $route.name != 'promociones'">
      <img src="@/assets/images/contacto.svg" alt="Pedir ahora en Jijuna" class="contact hover:scale-105 transition-all">
    </a>
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
  },
  computed: {
    rappiUrl() {
      return process.env.RAPPI_URL
    }
  }
}
</script>

<style lang="postcss">
.contact {
  width: 263px;
  height: 96px;
}
</style>
