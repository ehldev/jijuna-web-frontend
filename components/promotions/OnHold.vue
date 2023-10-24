<template>
  <main>
    <section
      class="on-hold main-bg text-center flex flex-col justify-between md:justify-center items-center py-10 relative"
    >
      <!-- Mobile -->
      <img
        src="@/assets/images/promotions/on-hold/mobile-1.png"
        alt="Jijuna"
        class="md:hidden img-mobile-1 absolute left-0"
      />
      <img
        src="@/assets/images/promotions/on-hold/mobile-2.png"
        alt="Jijuna"
        class="md:hidden img-mobile-2 absolute right-0"
      />

      <!-- Desktop -->
      <img
        src="@/assets/images/promotions/on-hold/desktop-1.png"
        alt="Jijuna"
        class="hidden md:block img-desktop-1 absolute left-0"
      />
      <img
        src="@/assets/images/promotions/on-hold/desktop-2.png"
        alt="Jijuna"
        class="hidden md:block img-desktop-2 absolute right-0"
      />
      <img
        src="@/assets/images/promotions/on-hold/desktop-3.png"
        alt="Jijuna"
        class="hidden md:block img-desktop-3 absolute left-0"
      />
      <img
        src="@/assets/images/promotions/on-hold/desktop-4.png"
        alt="Jijuna"
        class="hidden md:block img-desktop-4 absolute right-0"
      />

      <div class="flex flex-col justify-center items-center">
        <h1 class="on-hold-title text-white">
          ¡Estamos <br class="md:hidden" />
          cocinando nuestras promociones!
        </h1>

        <a
          href=""
          class="menu-link inline-block text-jijuna-primary font-bold underline mt-4"
          @click.prevent="toMenu()"
          >Ver carta</a
        >

        <a :href="rappiUrl" target="_blank" class="inline-block mt-8">
          <img
            src="@/assets/images/promotions/button.png"
            alt="Pedir ahora"
            class="button"
          />
        </a>
      </div>

      <section class="text-center mb-10 md:mb-0 md:mt-10 lg:mt-14">
        <p class="text-white text-xl lg:text-2xl font-bold">
          Te invitamos a seguirnos <br class="md:hidden" />
          en nuestras redes
        </p>

        <div class="social-icons flex justify-center mt-6">
          <img
            src="@/assets/images/footer/facebook-rounded.svg"
            alt="Facebook Jijuna"
          />
          <img
            src="@/assets/images/footer/instagram.svg"
            alt="Instagram Jijuna"
            class="mx-10"
          />
          <img src="@/assets/images/footer/tiktok.svg" alt="Tiktok Jijuna" />
          <!-- <img src="@/assets/images/footer/youtube.svg" alt="Youtube Jijuna"> -->
        </div>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    toMenu() {
      this.$router.push("/");

      setTimeout(() => {
        const myEl = document.getElementById("menu");

        this.$smoothScroll({
          scrollTo: myEl,
          updateHistory: false,
        });
      }, 350);
    },
  },
  computed: {
    rappiUrl() {
      return process.env.RAPPI_URL
    }
  }
};
</script>

<style lang="postcss" scoped>
.on-hold {
  height: calc(100vh - 80px);
  max-height: 800px;
}

.on-hold-title {
  font-size: 32px;
  width: 350px;

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 992px) {
    font-size: 42px;
    line-height: 50px;
    width: 560px;
  }
}

.menu-link {
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
}

.button {
  width: 311px;

  @media (min-width: 992px) {
    width: 160px;
  }

  @media (min-width: 992px) {
    font-size: 28px;
  }
}

.social-icons {
  img {
    width: 40px;
    height: 40px;

    @media (min-width: 992px) {
      width: 60px;
      height: 60px;
    }
  }
}

.img-mobile-1 {
  top: 50%;
}

.img-mobile-2 {
  top: 47%;
}

.img-desktop-1,
.img-desktop-2 {
  width: 15vw;
  top: 5%;

  @media (min-width: 768px) {
    width: 25vw;
  }

  @media (min-width: 992px) {
    width: 13vw;
  }

  @media (min-width: 1440px) {
    width: 17vw;
  }

  @media (min-width: 1530px) {
    width: 14vw;
  }
}

.img-desktop-2 {
  @media (min-width: 992px) {
    width: 18vw;
  }

  @media (min-width: 1440px) {
    width: 22vw;
  }

  @media (min-width: 1530px) {
    width: 16vw;
  }
}

.img-desktop-3,
.img-desktop-4 {
  width: 16vw;
  bottom: 5%;

  @media (min-width: 768px) {
    width: 25vw;
  }

  @media (min-width: 992px) {
    width: 13vw;
  }

  @media (min-width: 1440px) {
    width: 18vw;
  }

  @media (min-width: 1530px) {
    width: 14vw;
  }
}
</style>
