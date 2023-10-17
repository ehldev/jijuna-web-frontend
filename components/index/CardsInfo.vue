<template>
  <section class="mt-10">
    <div class="page-container mx-auto md:grid md:grid-cols-2 gap-8">
      <!-- Card 1 -->
      <article class="card w-full flex md:flex-col mx-auto md:mx-0 md:ml-auto">
        <div
          class="card-header w-1/2 md:w-full bg-jijuna-primary flex flex-col justify-center"
        >
          <span
            class="card-subtitle uppercase mb-2 md:mb-5"
            data-aos="fade-in"
            >OFERTA DEL DÍA</span
          >

          <div class="flex flex-col md:flex-row justify-center items-center">
            <div
              class="text-right border-b md:border-b-0 md:border-r border-jijuna-black md:pr-4 lg:pr-6 pb-2"
              data-aos="fade-in"

            >
              <h3
                class="card-title card-title-first font-normal animate__animated animate__fadeIn"
              >
                Salchipapa
              </h3>
              <h3 class="card-title font-bold">La Clásica</h3>
            </div>

            <div
              class="flex md:pl-3 lg:pl-6 pt-2 md:pt-0"
              data-aos="fade-in"
              data-aos-delay="200"
            >
              <h3 class="discount-value font-bold">25</h3>
              <h3 class="card-title discount flex flex-col justify-center font-bold pl-1 pb-1">
                % <span class="discount font-normal">Dscto.</span>
              </h3>
            </div>
          </div>

          <span
            class="card-subtitle mt-2 md:mt-6"
            data-aos="fade-in"

            >Primeras 100 unidades</span
          >
        </div>

        <div
          class="card-image w-1/2 md:w-full"
          data-aos="fade-in"
        >
          <img
            src="@/assets/images/card-info-mobile-1.png"
            alt="Oferta del día Jijuna"
            class="md:hidden w-full card-image-1"
          />
          <img
            src="@/assets/images/salchipapa-card.png"
            alt="Oferta del día Jijuna"
            class="w-full hidden md:block"
          />
        </div>
      </article>

      <!-- Card 2 -->
      <article
        class="card w-full flex md:flex-col mx-auto mt-10 md:mt-0 md:mx-0 md:mr-auto"
      >
        <div
          class="card-header w-1/2 md:w-full bg-jijuna-black flex flex-col justify-center"
        >
          <span
            class="card-subtitle text-jijuna-primary uppercase mb-2 md:mb-5"
            data-aos="fade-in"
            data-aos-delay="200"
            >Horario</span
          >

          <div
            class="hourly text-center text-white px-3 md:px-0"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <p>
              De lunes a jueves <br />
              <span class="font-bold">5pm a 12am</span>
            </p>

            <p class="mt-4">
              De viernes a sábado <br />
              <span class="font-bold">5pm a 2am</span>
            </p>
          </div>

          <a
            href=""
            class="card-subtitle inline-block text-jijuna-primary underline mt-2 md:mt-4"
            @click.prevent="toFooter()"
            data-aos="fade-in"
            data-aos-delay="400"
            >Ir a zona de reparto</a
          >
        </div>

        <div
          class="card-image w-1/2 md:w-full"
          data-aos="fade-in"
        >
          <img
            src="@/assets/images/card-info-mobile-2.png"
            alt="Oferta del día Jijuna"
            class="md:hidden w-full card-image-1"
          />
          <img
            src="@/assets/images/delivery.png"
            alt=""
            class="w-full hidden md:block"
          />
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    toFooter() {
      const myEl = document.getElementById("footer");

      this.$smoothScroll({
        scrollTo: myEl,
        updateHistory: false,
      });
    },
  },
};
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

  @media (min-width: 992px) {
    font-size: 42px;
    line-height: 42px;
  }
}

.card-title-first {
  font-size: 21px;

  @media (min-width: 1024px) {
    font-size: 35px;
  }
}

.discount {
  font-size: 21px;
  line-height: 25px;

  @media (min-width: 1024px) {
    font-size: 42px;
    line-height: 50px;
  }
}

.discount-value {
  font-size: 34px;
  line-height: 40px;

  @media (min-width: 768px) {
    font-size: 45px;
    line-height: 55px;
  }

  @media (min-width: 1024px) {
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

.card-image-1 {
  height: 200px;
}
</style>
