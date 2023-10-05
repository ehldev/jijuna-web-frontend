<template>
  <section class="mt-10">
    <div class="max-w-6xl mx-auto md:grid md:grid-cols-2 gap-8">
      <!-- Card 1 -->
      <article class="card w-full flex md:flex-col mx-auto md:mx-0 md:ml-auto">
        <div
          class="card-header w-1/2 md:w-full bg-jijuna-primary flex flex-col justify-center"
        >
          <span class="card-subtitle uppercase mb-2 md:mb-5"
            >OFERTA DEL DÍA</span
          >

          <div class="flex flex-col md:flex-row justify-center items-center">
            <div
              class="text-right border-b md:border-b-0 md:border-r border-jijuna-black md:pr-6 pb-2"
            >
              <h3 class="card-title card-title-first font-normal">
                Salchipapa
              </h3>
              <h3 class="card-title font-bold">La Clásica</h3>
            </div>

            <div class="flex pl-6 pt-2 md:pt-0">
              <h3 class="discount-value font-bold">25</h3>
              <h3 class="card-title discount flex flex-col font-bold pl-1">
                % <span class="discount font-normal">Dscto.</span>
              </h3>
            </div>
          </div>

          <span class="card-subtitle mt-2 md:mt-6">Primeras 100 unidades</span>
        </div>

        <div class="card-image w-1/2 md:w-full">
          <img src="@/assets/images/delivery.png" alt="" class="w-full" />
        </div>
      </article>

      <!-- Card 2 -->
      <article
        class="card w-full flex md:flex-col mx-auto mt-10 md:mt-0 md:mx-0 md:mr-auto"
      >
        <div
          class="card-header w-1/2 md:w-full bg-jijuna-black flex flex-col justify-center"
        >
          <span class="card-subtitle text-jijuna-primary uppercase mb-2 md:mb-5"
            >Horario</span
          >

          <div class="hourly text-center text-white px-3 md:px-0">
            <p>
              De lunes a jueves <br />
              <span class="font-bold">5pm a 12am</span>
            </p>

            <p class="mt-4">
              De viernes a sábado <br />
              <span class="font-bold">5pm a 2am</span>
            </p>
          </div>

          <nuxt-link
            to="/"
            class="card-subtitle inline-block text-jijuna-primary underline mt-2 md:mt-4"
            >Ir a zona de reparto</nuxt-link
          >
        </div>

        <div class="card-image w-1/2 md:w-full">
          <img src="@/assets/images/delivery.png" alt="" class="w-full" />
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.card-header {
  height: 200px;

  @media (min-width: 768px) {
    height: 265px;
  }
}

.card-subtitle {
  @apply block text-center font-bold;
  font-size: 8px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
}

.card-title {
  font-size: 25px;
  line-height: 30px;

  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 42px;
  }
}

.card-title-first {
  font-size: 21px;

  @media (min-width: 768px) {
    font-size: 35px;
  }
}

.discount {
  font-size: 21px;
  line-height: 25px;

  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 50px;
  }
}

.discount-value {
  font-size: 34px;
  line-height: 40px;

  @media (min-width: 768px) {
    font-size: 65px;
    line-height: 80px;
  }
}

.discount span {
  font-size: 10px;
  line-height: 12px;

  @media (min-width: 768px) {
    font-size: 21px;
  }
}

.hourly p {
  font-size: 14px;
  line-height: 23px;

  @media (min-width: 768px) {
    font-size: 22px;
  }
}
</style>
