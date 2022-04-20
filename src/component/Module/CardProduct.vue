<template>
  <div class="card-product">
    <div class="card-product__box">
      <card-slider :slides="slideList"></card-slider>
    </div>
    <div class="card-product__box">
      <div class="card-product__content">
        <div class="card-product__head">
          <h1 class="card-product__title">Пижама для девочек</h1>
          <span class="card-product__art">Арт. 02765/46</span>
        </div>
        <div class="card-product__rating">
          <span class="card-product__text">Отзывы</span>
          <div class="rating">
            <div class="rating__list">
              <template v-for="(n, index) in 5" :key="index">
                <span
                  :class="['rating-ell', { 'rating-ell--active': 4 - n >= 0 }]"
                ></span>
              </template>
            </div>
            <div class="rating__cont">
              <span>14 отзывов</span>
              <img svg-inline src="@img/icons/angle-right.svg" alt="icon" />
            </div>
          </div>
        </div>
        <div class="price-bl">
          <div class="price-bl__cont">
            <span class="price-bl__coast">800 ₽</span>
            <span class="price-bl__coast price-bl__coast--old">1 500 ₽</span>
            <img svg-inline src="@img/icons/angle-right.svg" alt="icon" />
          </div>
          <div class="price-bl__inform">
            <div class="price-bl__box">скидка -36%</div>
            <div class="price-bl__box">акция -20%</div>
          </div>
        </div>
        <div class="size-bl">
          <div class="form-control">
            <label>
              <select v-model="order.size" class="form-control__select">
                <option disaЬled value="">Выбрать размер</option>
                <option v-for="(size, index) in sizes" :key="index">
                  {{ size }}
                </option>
              </select>
            </label>
          </div>
          <router-link to="/" class="base-link">Определить размер</router-link>
        </div>
        <div class="product-bl">
          <div class="product-bl__box">
            <div class="product-bl__add">
              <button
                class="product-bl__change"
                type="button"
                :disabled="order.counter <= 1"
                @click="counterLess"
              >
                <img svg-inline src="@img/icons/minus.svg" alt="icon" />
              </button>
              <div class="product-bl__counter">{{ order.counter }}</div>
              <button
                class="product-bl__change"
                type="button"
                @click="counterMore"
              >
                <img svg-inline src="@img/icons/plus.svg" alt="icon" />
              </button>
            </div>
            <button class="product-bl__btn product-bl__btn--lg" type="button">
              Добавить в корзину
            </button>
            <button class="product-bl__btn" type="button">
              <img svg-inline src="@img/icons/favorit.svg" alt="icon" />
            </button>
          </div>
          <router-link to="/" class="base-link">Купить в 1 клик</router-link>
        </div>
      </div>
      <div class="card-product__content">
        <ul class="info-list">
          <li class="info-list__ell">
            <router-link to="/" class="info-list__link">
              <img svg-inline src="@img/icons/product.svg" alt="icon" />
              <span>Описание товара</span>
            </router-link>
          </li>
          <li class="info-list__ell">
            <router-link to="/" class="info-list__link">
              <img svg-inline src="@img/icons/time.svg" alt="icon" />
              <span>Доставка и возврат</span>
            </router-link>
          </li>
          <li class="info-list__ell">
            <router-link to="/" class="info-list__link">
              <img svg-inline src="@img/icons/card.svg" alt="icon" />
              <span>Способы оплаты</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CardSlider from "@component/Module/CardSlider";

export default {
  name: "CardProduct",
  components: {
    CardSlider,
  },
  data() {
    return {
      slideList: [
        require("@img/temp/slide-1.png"),
        require("@img/temp/slide-2.png"),
        require("@img/temp/slide-3.png"),
        require("@img/temp/slide-4.png"),
        require("@img/temp/slide-5.png"),
      ],
      sizes: {
        xs: "XS",
        s: "S",
        m: "M",
        l: "L",
        xl: "XL",
        xxl: "XXL",
      },
      order: {
        name: "Пижама для девочек",
        size: "",
        counter: 1,
      },
    };
  },
  methods: {
    counterMore() {
      this.order.counter++;
    },
    counterLess() {
      this.order.counter--;
    },
  },
};
</script>

<style scoped lang="scss">
.card-product {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 16px 16px;
  margin-bottom: 32px;
  .card-product__content {
    padding: 24px 28px;
    &:last-child {
      border-top: 1px solid #c4c4c4;
    }
    .card-product__head {
      margin-bottom: 18px;
      .card-product__title {
        margin-bottom: 8px;
        font-weight: 600;
        font-size: 18px;
        line-height: 1.3;
      }
      .card-product__art {
        font-size: 12px;
        line-height: 1.3;
        letter-spacing: 0.04em;
        color: $text-sub;
      }
    }
    .card-product__rating {
      display: flex;
      align-items: center;
      margin-bottom: 46px;
    }
    .card-product__text {
      margin-right: 12px;
      font-size: 14px;
      line-height: 1.43;
      letter-spacing: 0.04em;
    }
  }
}

.rating {
  display: flex;
  align-items: center;
  .rating__list {
    display: flex;
    align-items: center;
    margin-right: 5px;
    .rating-ell {
      font-size: 16px;
      line-height: 1;
      &:before {
        content: "\2606";
        display: block;
        height: 18px;
      }
      &.rating-ell--active {
        &:before {
          content: "\2605";
        }
      }
    }
  }
  .rating__cont {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: 0.04em;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    svg {
      margin-left: 8px;
      &:active,
      &:focus,
      &:focus-visible {
        outline: none;
      }
      path {
        transition: fill 0.2s ease-in-out;
      }
    }
    &:hover {
      color: $color-prime;
      svg {
        path {
          fill: $color-prime;
        }
      }
    }
  }
}

.price-bl {
  margin-bottom: 32px;
  .price-bl__cont {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    .price-bl__coast {
      margin-right: 12px;
      font-weight: 700;
      font-size: 24px;
      line-height: 1;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      &.price-bl__coast--old {
        margin-right: 20px;
        color: $text-sub;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.43;
        letter-spacing: 0.04em;
        text-decoration-line: line-through;
      }
    }
  }
  .price-bl__inform {
    display: flex;
    align-items: center;
    .price-bl__box {
      margin-right: 8px;
      padding: 5px 10px;
      font-size: 12px;
      line-height: 1;
      border: 1px solid #333333;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.info-list {
  .info-list__ell {
    margin-bottom: 12px;
  }
  .info-list__link {
    position: relative;
    padding-left: 24px;
    color: #333333;
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: 0.04em;
    text-decoration-line: underline;
    transition: color 0.2s ease-in-out;
    svg {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &:hover {
      color: $color-prime;
    }
    &:focus,
    &:active {
      color: $color-prime-active;
    }
  }
}

.size-bl {
  margin-bottom: 40px;
  .form-control {
    margin-bottom: 12px;
    .form-control__select {
      width: 100%;
      max-width: 313px;
      height: 44px;
      padding: 12px 16px;
      letter-spacing: 0.04em;
      border: 1px solid #333333;
      cursor: pointer;
    }
  }
}

.product-bl {
  margin-bottom: 5px;
  .product-bl__box {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  .product-bl__add {
    display: flex;
    align-items: center;
    margin-right: 12px;
    .product-bl__change {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 44px;
      background-color: #f2f2f2;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      svg {
        &:active,
        &:focus,
        &:focus-visible {
          outline: none;
        }
        path {
          transition: fill 0.2s ease-in-out;
        }
      }
      &:hover {
        background-color: #ececec;
        svg {
          path {
            fill: $color-prime;
          }
        }
      }
      &[disabled] {
        opacity: 0.4;
        cursor: default;
        svg {
          path {
            fill: $text-prime;
          }
        }
      }
    }
    .product-bl__counter {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 44px;
      background-color: #f2f2f2;
    }
  }
  .product-bl__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px;
    margin-right: 4px;
    padding: 12px;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0.04em;
    background-color: #333333;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &.product-bl__btn--lg {
      padding: 12px 28px;
    }
    svg {
      g {
        fill: #ffffff;
      }
    }
    &:hover {
      background-color: $color-prime;
    }
    &:focus,
    &:active {
      background-color: $color-prime-active;
    }
  }
}
</style>
