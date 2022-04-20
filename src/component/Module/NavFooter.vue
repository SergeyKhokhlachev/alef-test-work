<template>
  <nav class="nav-footer">
    <slot name="title"></slot>
    <ul class="nav-footer__list">
      <template v-for="(item, index) in list" :key="index">
        <li class="nav-footer__ell">
          <router-link :to="item.name" class="nav-footer__link">
            {{ item.title }}
          </router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavFooter",
  props: {
    list: Array,
  },
};
</script>

<style scoped lang="scss">
.nav-footer {
  margin-bottom: 50px;
  .nav-footer__ell {
    margin-bottom: 8px;
  }
  .nav-footer__link {
    color: $text-prime;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: 0.04em;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: $color-prime;
    }
    &:focus,
    &:active {
      color: $color-prime-active;
    }
  }
}
</style>
