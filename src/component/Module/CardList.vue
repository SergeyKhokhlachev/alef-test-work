<template>
  <div class="card-list">
    <div class="card-list__head">
      <router-link to="/" class="card-list__all">
        Посмотреть все стили
      </router-link>
    </div>
    <div class="card-list__block">
      <template v-for="(item, index) in cardList" :key="index">
        <div :class="['card-style', { 'card-style--lg': index === 0 }]">
          <img class="card-style__img" :src="item.img" alt="photo" />
          <div class="card-style__layer">
            <div class="card-style__clipboard">
              <img svg-inline src="@img/icons/clipboard.svg" alt="icon" />
            </div>
            <div class="card-style__like">
              <img svg-inline src="@img/icons/like.svg" alt="icon" />
              <span>200</span>
            </div>
            <div class="card-style__content">
              <img svg-inline src="@img/icons/cart_full.svg" alt="icon" />
              <p class="card-style__text">Узнай, что на мне</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardList",
  data() {
    return {
      cardList: [
        {
          img: require("@img/temp/card-1.png"),
        },
        {
          img: require("@img/temp/card-2.png"),
        },
        {
          img: require("@img/temp/card-3.png"),
        },
        {
          img: require("@img/temp/card-4.png"),
        },
        {
          img: require("@img/temp/card-5.png"),
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.card-list {
  margin: 0 -15px;
  @include respond(sm) {
    margin: 0 0 24px;
  }
  .card-list__head {
    margin-bottom: 58px;
    text-align: center;
    @include respond(lg) {
      margin-bottom: 32px;
    }
  }
  .card-list__all {
    color: $text-prime;
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: 0.04em;
    text-decoration-line: underline;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: $color-prime;
    }
    &:focus,
    &:active {
      color: $color-prime-active;
    }
  }
  .card-list__block {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 8px 8px;
    @include respond(lg) {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 16px 16px;
    }
    .card-style {
      &.card-style--lg {
        grid-row-start: 1;
        grid-column-start: 1;
        grid-row-end: 3;
        grid-column-end: 3;
      }
    }
  }
}

.card-style {
  position: relative;
  cursor: pointer;
  .card-style__img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .card-style__layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(51, 51, 51, 0.7);
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-in-out;
    .card-style__clipboard {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
      svg {
        &:active,
        &:focus,
        &:focus-visible {
          outline: none;
        }
        g {
          transition: fill 0.2s ease-in-out;
        }
      }
      &:hover {
        svg {
          g {
            fill: $color-prime;
          }
        }
      }
      &:active,
      &:focus,
      &:focus-visible {
        outline: none;
      }
    }
    .card-style__like {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 20px;
      color: #ffffff;
      font-size: 14px;
      line-height: 1.43;
      letter-spacing: 0.04em;
      svg {
        margin-right: 6px;
      }
    }
    .card-style__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      .card-style__text {
        margin-top: 6px;
        color: #ffffff;
        font-size: 14px;
        line-height: 1.43;
        letter-spacing: 0.04em;
      }
    }
  }
  &:hover {
    .card-style__layer {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
