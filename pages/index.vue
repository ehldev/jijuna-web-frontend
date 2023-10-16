<template>
  <main>
    <AppBanner />

    <CardsInfo />

    <MenuList />

    <AppGallery />
  </main>
</template>

<script>
import AppBanner from '@/components/layout/AppBanner'
import CardsInfo from '@/components/index/CardsInfo'
import MenuList from '@/components/index/MenuList'
import AppGallery from '@/components/index/AppGallery'

export default {
  name: 'IndexPage',
  layout: 'default',
  components: {
    AppBanner,
    CardsInfo,
    MenuList,
    AppGallery
  }
}
</script>
