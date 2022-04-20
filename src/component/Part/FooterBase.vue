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
  padding: 70px 0;
  .footer__wrap {
    display: flex;
    justify-content: space-between;
  }
  .footer__control {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 320px;
  }
  .footer__form {
    .form-subscribe {
      margin-top: 40px;
    }
  }
}
</style>
