<template>
  <main :class="{ 'pb-12': showInfo }">
    <PromotionBanner
      title="Promociones Jijuna"
      subtitle="Para ti o para toda la familia..."
      v-if="showInfo"
    />

    <div v-if="!showInfo">
      <OnHold />

      <section class="bg-jijuna-black text-center text-white p-4">
        <div class="page-container mx-auto md:flex md:justify-between">
          <p class="text-sm">
            JIJUNA © Todos los derechos reservados {{ year }}
          </p>
          <p class="mt-1">
            Forjado por
            <a
              href="https://wize.pe"
              target="_blank"
              class="text-base text-jijuna-primary font-bold hover:underline"
              >Wize</a
            >
          </p>
        </div>
      </section>
    </div>

    <!-- Mobile -->
    <section class="page-container mx-auto md:hidden mt-6" v-if="showInfo">
      <div class="mb-4" v-for="(item, index) in promotions" :key="item.id">
        <PromotionCard
          :data="item"
          :type="index % 2 == 0 ? 'primary' : 'black'"
        />
      </div>
    </section>

    <!-- Desktop -->
    <section
      class="page-container mx-auto hidden md:block mt-12"
      v-if="showInfo"
    >
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
import OnHold from "@/components/promotions/OnHold";

export default {
  name: "IndexPage",
  layout: "default",
  data() {
    return {
      promotions,
      showInfo: false,
      year: new Date().getFullYear()
    };
  },
  components: {
    PromotionBanner,
    PromotionCard,
    OnHold,
  },
};
</script>
