<template>
  <header-base></header-base>
  <div class="page-content">
    <router-view />
  </div>
  <footer-base></footer-base>
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
  padding: 24px 0 46px;
}
</style>
