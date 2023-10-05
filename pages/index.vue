<template>
  <main>
    <AppHeader />

    <AppBanner />

    <CardsInfo />

    <MenuList />

    <AppGallery />

    <AppFooter />
  </main>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader'
import AppBanner from '@/components/layout/AppBanner'
import CardsInfo from '@/components/index/CardsInfo'
import MenuList from '@/components/index/MenuList'
import AppGallery from '@/components/index/AppGallery'
import AppFooter from '@/components/layout/AppFooter'

export default {
  name: 'IndexPage',
  components: {
    AppHeader,
    AppBanner,
    CardsInfo,
    MenuList,
    AppGallery,
    AppFooter
  }
}
</script>
