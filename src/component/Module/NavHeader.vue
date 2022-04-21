<template>
  <nav class="nav-header">
    <div :class="['nav-header__btn', { open: isActive }]" @click="toggleNav">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div :class="['nav-header__drop', { open: isActive }]">
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
      isActive: false,
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
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped lang="scss">
.nav-header {
  margin-left: 30px;
  .nav-header__btn {
    position: relative;
    width: 18px;
    height: 15px;
    margin: -3px 3px 0 0;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    z-index: 150;
    span {
      display: block;
      position: absolute;
      height: 1px;
      width: 100%;
      background-color: $text-prime;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
      &:nth-child(1) {
        top: 0;
        transform-origin: left center;
      }
      &:nth-child(2) {
        top: 7px;
        transform-origin: left center;
      }
      &:nth-child(3) {
        top: 14px;
        transform-origin: left center;
      }
    }
    &.open {
      span {
        &:nth-child(1) {
          transform: rotate(45deg);
          top: 0;
          left: 0;
        }
        &:nth-child(2) {
          width: 0;
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
          top: 13px;
          left: 0;
        }
      }
    }
    &:hover {
      span {
        background-color: $color-prime;
      }
    }
  }
  .nav-header__drop {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-50%);
    transition: all 0.2s ease-in-out;
    will-change: transform;
    z-index: 100;
    &.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .nav-header__list {
      padding: 80px 30px 13px;
      .nav-header__ell {
        margin-bottom: 30px;
        .nav-header__link {
          color: #333333;
          font-size: 12px;
          line-height: 1.3;
          letter-spacing: 0.04em;
          text-transform: uppercase;
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
    }
  }
}
</style>
