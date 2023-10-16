<template>
  <main class="pb-12">
    <PromotionBanner title="Promociones Jijuna" subtitle="Para ti o para toda la familia..." />

    <!-- Mobile -->
    <section class="container mx-auto md:hidden mt-6">
      <div class="mb-4" v-for="(item, index) in promotions" :key="item.id">
        <PromotionCard
          :data="item"
          :type="index % 2 == 0 ? 'primary' : 'black'"
        />
      </div>
    </section>

    <!-- Desktop -->
    <section class="xl:max-w-6xl mx-auto hidden md:block mt-12">
      <!-- Row 1 -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <PromotionCard :data="promotions[0]" type="primary" />
        </div>

        <div>
          <PromotionCard :data="promotions[1]" type="primary" />
        </div>
      </div>

      <!-- Row 2 -->
      <div class="grid grid-cols-3 gap-4 mt-10">
        <div>
          <PromotionCard :data="promotions[2]" type="black" />
        </div>

        <div data-aos="fade-in" data-aos-delay="200">
          <PromotionCard :data="promotions[3]" type="black" />
        </div>

        <div data-aos="fade-in" data-aos-delay="400">
          <PromotionCard :data="promotions[4]" type="black" />
        </div>
      </div>

      <!-- Row 3 -->
      <div class="grid grid-cols-2 gap-4 mt-10">
        <div>
          <PromotionCard
            :data="promotions[0]"
            type="primary"
            data-aos="fade-in"
          />
        </div>

        <div>
          <PromotionCard
            :data="promotions[1]"
            type="primary"
            data-aos="fade-in"
            data-aos-delay="300"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import promotions from "@/data/promotions";

import PromotionBanner from "@/components/promotions/PromotionBanner";
import PromotionCard from "@/components/promotions/PromotionCard";

export default {
  name: "IndexPage",
  layout: "default",
  data() {
    return {
      promotions,
    };
  },
  components: {
    PromotionBanner,
    PromotionCard,
  },
};
</script>
