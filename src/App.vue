<template>
  <div class="page-wrap">
    <header-base></header-base>
    <router-view />
    <footer-base></footer-base>
  </div>
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

<style lang="scss"></style>
