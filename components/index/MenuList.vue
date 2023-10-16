<template>
  <section id="menu" class="menu-list bg-jijuna-black mt-10 pt-8 pb-16">
    <div class="container mx-auto">
      <h2 class="text-center text-white mb-10" data-aos="fade-in">Carta</h2>

      <!-- md:max-w-6xl -->
      <section class="md:max-w-2xl mx-auto md:grid md:grid-cols-3 md:gap-4">
        <div class="flex justify-center" v-for="item in menu" :key="item.name" data-aos="zoom-in">
          <button
            type="button"
            class="md:inline-block option-button text-white md:text-center flex justify-between items-center transition-all w-full md:w-56 px-4 mt-6 md:mt-0 h-10 uppercase font-normal"
            :class="
              item.selected
                ? 'bg-jijuna-primary'
                : 'bg-jijuna-primary-30 hover:bg-jijuna-primary'
            "
            @click="selectParent(item)"
          >
            {{ item.name }}

            <img
              :src="
                require(`@/assets/images/icons/arrow-${
                  item.selected ? 'top' : 'bottom'
                }.svg`)
              "
              alt=""
              class="md:hidden"
            />
          </button>

          <!-- Mobile -->
          <section class="md:hidden" v-if="item.selected">
            <div
              class="text-white mt-10 pb-4 border-b border-b-jijuna-primary"
              v-for="o in item.items"
              :key="o.name"
            >
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-medium">{{ o.name }}</h3>

                <div class="flex items-center">
                  <span v-decimal:pen="o.price"></span>
                  <button type="button" class="ml-3">
                    <img
                      src="@/assets/images/icons/plus.svg"
                      alt="Agregar producto"
                      class="w-6 h-6"
                    />
                  </button>
                </div>
              </div>

              <p class="font-light mt-3">
                {{ o.description }}
              </p>
            </div>
          </section>
        </div>
      </section>

      <div
        class="hidden md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-8 max-w-6xl mt-12 mx-auto"
        v-if="selected"
      >
        <div
          class="text-white pb-4 border-b border-b-jijuna-primary"
          v-for="o in selected.items"
          :key="o.name"
          data-aos="fade-in"
        >
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-medium">{{ o.name }}</h3>

            <div class="flex items-center">
              <span v-decimal:pen="o.price"></span>
              <button type="button" class="ml-3">
                <img
                  src="@/assets/images/icons/plus.svg"
                  alt="Agregar producto"
                  class="w-6 h-6"
                />
              </button>
            </div>
          </div>

          <p class="font-light mt-3">
            {{ o.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import menu from "@/data/menu.json";

export default {
  name: "MenuList",
  data() {
    return {
      menu,
      selected: null,
    };
  },
  mounted() {
    this.selected = this.menu.find((item) => item.selected);
  },
  methods: {
    selectParent(item) {
      this.selected = item;

      let otherItems = this.menu.filter((o) => o.name != item.name);
      otherItems.forEach((o) => (o.selected = false));

      item.selected = !item.selected;
    },
  },
};
</script>

<style lang="postcss">
.menu-list h2 {
  font-size: 42px;

  @media (min-width: 768px) {
    font-size: 64px;
  }
}

.option-button {
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 992px) {
    font-size: 14px;
  }
}
</style>
