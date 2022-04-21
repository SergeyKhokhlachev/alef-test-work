<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrap">
        <div class="footer__control">
          <nav-footer :list="navListBuy">
            <template v-slot:title>
              <h3 class="title-md">покупателям</h3>
            </template>
          </nav-footer>
          <nav-footer :list="navListAbout">
            <template v-slot:title>
              <h3 class="title-md">о нас</h3>
            </template>
          </nav-footer>
        </div>
        <div class="footer__form">
          <h3 class="title-md">Узнайте первыми о новинках и акциях</h3>
          <form-subscribe></form-subscribe>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import NavFooter from "@component/Module/NavFooter";
import FormSubscribe from "@component/Form/FormSubscribe";

export default {
  name: "FooterBase",
  components: {
    NavFooter,
    FormSubscribe,
  },
  data() {
    return {
      navListBuy: [
        {
          name: "/",
          title: "Каталог",
        },
        {
          name: "/",
          title: "Акции",
        },
        {
          name: "/",
          title: "Бренды",
        },
      ],
      navListAbout: [
        {
          name: "/",
          title: "О компании",
        },
        {
          name: "/",
          title: "Новости",
        },
        {
          name: "/",
          title: "Команда",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.footer {
  padding: 42px 0 70px;
  @include respond(lg) {
    padding: 70px 0;
  }
  .footer__wrap {
    max-width: 1144px;
    margin: 0 auto;
    padding: 0 5px;
    @include respond(sm) {
      padding: 0;
    }
    @include respond(md) {
      display: flex;
      justify-content: space-between;
    }
  }
  .footer__control {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 260px;
    @include respond(sm) {
      max-width: 320px;
    }
    @include respond(md) {
      max-width: 250px;
    }
    @include respond(lg) {
      max-width: 340px;
    }
    @include respond(xl) {
      max-width: 440px;
    }
  }
  .footer__form {
    width: 100%;
    @include respond(md) {
      max-width: 380px;
    }
    @include respond(lg) {
      max-width: 420px;
    }
    @include respond(xl) {
      max-width: 452px;
    }
    .form-subscribe {
      margin-top: 19px;
      @include respond(lg) {
        margin-top: 37px;
      }
    }
  }
}
</style>
