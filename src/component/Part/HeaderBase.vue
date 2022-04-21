<template>
  <header class="header">
    <div class="header__fix"></div>
    <div :class="['header__scroll', { active: isShown }]">
      <div class="container">
        <div class="header__wrap">
          <div class="header__logo">LOGO</div>
          <div class="header__control">
            <ul class="icon-list">
              <li class="icon-list__li">
                <span class="icon-list__ell">
                  <img svg-inline src="@img/icons/user.svg" alt="icon" />
                </span>
              </li>
              <li class="icon-list__li">
                <span class="icon-list__ell">
                  <img svg-inline src="@img/icons/favorit.svg" alt="icon" />
                </span>
              </li>
              <li class="icon-list__li">
                <span class="icon-list__ell">
                  <img svg-inline src="@img/icons/cart.svg" alt="icon" />
                </span>
              </li>
            </ul>
            <nav-header :headerShown="isShown"></nav-header>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavHeader from "@component/Module/NavHeader";

export default {
  name: "HeaderBase",
  components: {
    NavHeader,
  },
  data() {
    return {
      isShown: true,
      scrollPos: 0,
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleScroll(event) {
      let scrollCur = document.body.getBoundingClientRect().top;
      if (scrollCur > this.scrollPos) {
        if (scrollCur > this.scrollPos + 200 || scrollCur < 200) {
          this.isShown = true;
          this.scrollPos = scrollCur;
        }
      } else {
        if (scrollCur < this.scrollPos - 200) {
          this.isShown = false;
          this.scrollPos = scrollCur;
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped lang="scss">
.header {
  .header__fix {
    height: 68px;
    @include respond(md) {
      height: 40px;
    }
  }
  .header__scroll {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 50;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    transition: transform 0.2s ease-in-out;
    will-change: transform;
    &.active {
      transform: translateY(0);
    }
  }
  .header__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 5px 26px;
    @include respond(md) {
      padding: 8px 0;
    }
  }
  .header__logo {
    color: #000000;
    font-weight: 700;
    font-size: 22px;
    line-height: 1;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .header__control {
    display: flex;
    align-items: center;
    margin-top: 2px;
  }
}

.icon-list {
  display: flex;
  align-items: center;
  .icon-list__li {
    display: block;
    margin-left: 32px;
  }
  .icon-list__ell {
    cursor: pointer;
    svg {
      &:active,
      &:focus,
      &:focus-visible {
        outline: none;
      }
    }
    &:hover {
      svg {
        g {
          fill: $color-prime;
          transition: fill 0.2s ease-in-out;
        }
      }
    }
    &:active,
    &:focus,
    &:focus-visible {
      outline: none;
    }
  }
}
</style>
