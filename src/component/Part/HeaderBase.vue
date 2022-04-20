<template>
  <header class="header">
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
          <nav-header></nav-header>
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
};
</script>

<style scoped lang="scss">
.header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  .header__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 0;
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
