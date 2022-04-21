<template>
  <header-base></header-base>
  <div class="page-content">
    <router-view />
  </div>
  <footer-base></footer-base>
  <notifications />
</template>

<script>
import HeaderBase from "@component/Part/HeaderBase";
import FooterBase from "@component/Part/FooterBase";

export default {
  components: {
    HeaderBase,
    FooterBase,
  },
};
</script>

<style lang="scss">
.page-content {
  @include respond(sm) {
    padding: 26px 0 46px;
  }
}
</style>
