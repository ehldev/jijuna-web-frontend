<template>
  <footer id="footer" class="main-bg">
    <div class="page-container mx-auto py-6 lg:flex">
      <section class="info-container lg:w-2/5">
        <div
          class="text-white text-xs md:text-sm font-light"
          data-aos="fade-in"
        >
          <img src="@/assets/images/logo-jijuna.svg" alt="Logo Jijuna" />

          <p class="mt-4">
            ¡Tu antojo de comida rápida satisfecho en un click! Bienvenido a
            <span class="font-bold">JIJUNA</span>, el rincón donde las
            <span class="font-bold">Salchipapas, Hamburguesas, Alitas</span> y
            el <span class="font-bold">Broaster</span> se convierten en
            protagonistas de tu paladar.
          </p>

          <p class="mt-3">
            Más allá de una simple oferta gastronómica, brindamos una
            experiencia culinaria rápida y deliciosa. Nuestro menú online está
            repleto de opciones que te harán agua la boca, perfectas para esos
            días de antojo o cuando simplemente no quieres cocinar.
          </p>

          <p class="mt-3">
            Ya sea que busques opciones para un solo comensal o para toda la
            familia, ofrecemos packs y promociones que se ajustan a cada
            ocasión. Y sí, entregamos en toda la ciudad garantizando que tu
            pedido llegue caliente y a tiempo. Consulta nuestra área de
            cobertura.
          </p>

          <p class="mt-3">
            ¿Hambre? Puedes pedir tu comida en Rappi o PedidosYa. ¿Dudas o
            comentarios? Estamos listos para atenderte vía WhatsApp. Nuestro
            compromiso es brindarte una experiencia deliciosa y confiable desde
            el primer click.
          </p>
        </div>

        <div class="mt-4">
          <ul>
            <li class="flex">
              <img
                src="@/assets/images/footer/terms.svg"
                alt="Términos y condiciones Jijuna"
                class="mr-2"
              />
              <nuxt-link
                to="/terminos-y-condiciones"
                target="_blank"
                class="text-white font-bold hover:text-jijuna-primary text-base"
                >Términos y condiciones</nuxt-link
              >
            </li>

            <!-- <li class="flex mt-3">
              <img
                src="@/assets/images/footer/email.svg"
                alt="Mapa de sitio Jijuna"
                class="mr-2"
              />
              <nuxt-link
                to="/"
                target="_blank"
                class="text-white hover:text-jijuna-primary text-base"
                >Mapa de sitio</nuxt-link
              >
            </li> -->

            <!-- <li class="flex mt-3">
              <img
                src="@/assets/images/footer/book.svg"
                alt="Libro de reclamaciones Jijuna"
                class="mr-2"
              />
              <nuxt-link
                to="/"
                target="_blank"
                class="text-white hover:text-jijuna-primary text-base"
                >Libro de reclamaciones</nuxt-link
              >
            </li> -->
          </ul>
        </div>
      </section>

      <div class="md:flex md:justify-start md:flex-1 md:mt-6 md:ml-14">
        <section>
          <h3 class="footer-title">Cobertura - Delivery</h3>

          <ul class="text-white list-disc mt-6 pl-4" data-aos="fade-in">
            <li v-for="item in districts" :key="item" class="mb-1">
              {{ item }}
            </li>
          </ul>

          <div class="mt-4">
            <h4 class="text-white text-lg">Métodos de pago</h4>

            <div class="flex mt-3">
              <img
                src="@/assets/images/footer/yape.svg"
                alt="Yape Jijuna"
                class="mr-3"
              />
              <img src="@/assets/images/footer/plin.svg" alt="Plin Jijuna" />
            </div>
          </div>
        </section>

        <section class="md:ml-14" data-aos="fade-in">
          <h3 class="footer-title">Contáctanos</h3>

          <div class="mt-4">
            <ul class="contact-list">
              <li class="flex">
                <img
                  src="@/assets/images/footer/email.svg"
                  alt="Email Jijuna"
                  class="mr-2"
                />
                <a
                  href="mailto:ventas@jijuna.pe"
                  class="text-white font-bold hover:text-jijuna-primary text-base lg:text-2xl"
                  >ventas@jijuna.pe</a
                >
              </li>

              <li class="flex mt-3">
                <img
                  src="@/assets/images/footer/phone.svg"
                  alt="Número de contacto Jijuna"
                  class="mr-2"
                />
                <a
                  href="tel:+51934325715"
                  class="text-white font-bold hover:text-jijuna-primary text-base lg:text-2xl"
                  >934 325 715</a
                >
              </li>

              <li class="flex mt-3">
                <img
                  src="@/assets/images/footer/WhatsApp.svg"
                  alt="Libro de reclamaciones Jijuna"
                  class="mr-2"
                />
                <a
                  href="https://api.whatsapp.com/send?phone=51934325715"
                  target="_blank"
                  class="text-white font-bold hover:text-jijuna-primary text-base lg:text-2xl"
                  >934 325 715</a
                >
              </li>
            </ul>

            <div class="text-white text-sm mt-4 md:mt-8">
              <span>Horarios:</span>
              <p>Lunes a Jueves de 5pm a 12am</p>
              <p>Viernes y Sábados de 5pm a 2am</p>
            </div>

            <div class="text-jijuna-primary text-sm mt-4">
              <span class="font-bold">DATOS DE LA EMPRESA</span>
              <p>R.U.C. : 20610932208</p>
              <p>Razón Social : ALENDIL S.A.C.</p>
            </div>

            <div class="mt-4 md:mt-8">
              <h4 class="text-white text-lg">Síguenos</h4>

              <div class="flex mt-3">
                <a href="https://web.facebook.com/jijunaperu" target="_blank">
                  <img
                    src="@/assets/images/footer/facebook.svg"
                    alt="Facebook Jijuna"
                  />
                </a>
                <a href="https://www.instagram.com/jijuna.pe/" target="_blank">
                  <img
                    src="@/assets/images/footer/instagram.svg"
                    alt="Plin Jijuna"
                    class="mx-8"
                  />
                </a>
                <a href="https://www.tiktok.com/@jijuna.pe" target="_blank">
                  <img
                    src="@/assets/images/footer/tiktok.svg"
                    alt="Tiktok Jijuna"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <section class="bg-jijuna-black text-center text-white p-4">
      <div class="page-container mx-auto md:flex md:justify-between">
        <p class="text-sm">JIJUNA © Todos los derechos reservados {{ year }}</p>
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
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      districts: [
        "Barranco",
        "Breña",
        "Centro de Lima",
        "Jesús María",
        "Magdalena",
        "Miraflores",
        "La Molina",
        "La Victoria",
        "San Isidro",
        "San Miguel",
        "San Luis",
        "San Borja",
        "Santiago de Surco",
      ],
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="postcss">
.footer-title {
  @apply text-jijuna-primary font-normal mt-4 relative;
  font-size: 22px;

  &::before {
    content: "";
    @apply bg-jijuna-primary;
    width: 25%;
    height: 4px;
    position: absolute;
    bottom: -0.3rem;
  }
}

.contact-list {
  img {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 768px) {
    img {
      width: auto;
      height: auto;
    }
  }
}
</style>
