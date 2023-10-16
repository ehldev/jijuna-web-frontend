<template>
  <article class="relative" v-if="data">
    <!-- Content -->
    <section
      class="flex p-6"
      :class="type == 'primary' ? 'card-primary' : 'card-black'"
    >
      <div class="md:pr-8">
        <span
          class="text-xs"
          :class="
            type == 'black' ? 'text-jijuna-gray-light' : 'text-jijuna-black'
          "
          >OFERTA ESPECIAL</span
        >
        <h3
          class="text-lg md:text-2xl font-bold"
          :class="type == 'black' ? 'text-jijuna-primary' : 'text-jijuna-black'"
        >
          {{ data.title }}
        </h3>

        <p
          class="mt-5"
          :class="type == 'black' ? 'text-white' : 'text-jijuna-gray'"
        >
          {{ data.description }}
        </p>
      </div>

      <div class="flex flex-col justify-end">
        <button type="button" class="w-10 h-10">
          <img
            :src="
              require(`@/assets/images/icons/plus-rounded-${
                type == 'primary' ? 'black' : 'primary'
              }.svg`)
            "
            alt="Agregar promoción Jijuna"
          />
        </button>
      </div>
    </section>

    <div class="h-2" :class="type == 'primary' ? 'bg-jijuna-black' : 'bg-jijuna-primary'"></div>

    <!-- Image -->
    <section
      class="card-image"
      v-bind:style="{
        backgroundImage: `url(${require('@/assets/images/promotions/cards/' +
          data.image)})`,
      }"
    ></section>

    <span class="hidden md:flex label md:align-center h-8 bg-jijuna-gray-medium pt-1 px-4 absolute bottom-0 right-0">{{ data.label }}</span>
  </article>
</template>

<script>
export default {
  name: "PromotionCard",
  props: {
    data: Object,
    type: String,
  },
};
</script>

<style lang="postcss" scoped>
.card-primary {
  @apply bg-jijuna-primary;
}

.card-black {
  @apply bg-jijuna-black;
}

.card-image {
  background-size: cover;
  height: 134px;
}

.label {
  border-top-left-radius: 20px;
}
</style>
