<template>
  <nav class="nav-header">
    <div class="nav-header__btn">
      <img svg-inline src="@img/icons/burger.svg" alt="icon" />
    </div>
    <div class="nav-header__drop">
      <ul class="nav-header__list">
        <template v-for="(item, index) in navList" :key="index">
          <li class="nav-header__ell">
            <router-link :to="item.name" class="nav-header__link">
              {{ item.title }}
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavHeader",
  data() {
    return {
      navList: [
        {
          name: "/",
          title: "постельное белье",
        },
        {
          name: "/",
          title: "одежда для дома",
        },
        {
          name: "/",
          title: "Одежда для улицы",
        },
        {
          name: "/",
          title: "ВЫход",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.nav-header {
  display: none;
}
</style>
