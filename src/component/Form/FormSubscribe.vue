<template>
  <form class="form-subscribe">
    <div class="form-control">
      <label>
        <input
          type="email"
          :class="['form-control__input', { 'has-error': !isEmailValid() }]"
          placeholder="Адрес электронной почты"
          v-model="email"
        />
      </label>
      <div :class="['form-control__icon', { active: email }]" @click="clear">
        <img svg-inline src="@img/icons/clear.svg" alt="clear" />
      </div>
    </div>
    <button
      class="form-subscribe__btn"
      type="button"
      :disabled="isBtnDisabled()"
    >
      Подписаться
    </button>
  </form>
</template>

<script>
export default {
  name: "FormSubscribe",
  data() {
    return {
      email: "",
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    clear() {
      this.email = "";
    },
    isEmailValid: function () {
      return this.email === "" ? true : this.reg.test(this.email);
    },
    isBtnDisabled() {
      return !this.reg.test(this.email);
    },
  },
};
</script>

<style scoped lang="scss">
.form-subscribe {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .form-subscribe__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 150px;
    min-height: 36px;
    margin-top: 25px;
    padding: 6px 14px;
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: 0.04em;
    background: none;
    border: 1px solid #333333;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    @include respond(lg) {
      margin-top: 35px;
    }
    &:hover {
      color: #ffffff;
      background-color: #333333;
    }
    &:focus,
    &:active {
      color: #ffffff;
      background-color: #000000;
    }
    &[disabled] {
      color: #c4c4c4;
      background-color: inherit;
      border: 1px solid #c4c4c4;
      cursor: default;
    }
  }
}
.form-control {
  position: relative;
  width: 100%;
  .form-control__input {
    width: 100%;
    padding: 12px 25px 12px 16px;
    font-size: 14px;
    border: none;
    border-bottom: 1px solid #c4c4c4;
    transition: all 0.2s ease-in-out;
    &::placeholder {
      color: $text-sub;
      letter-spacing: 0.04em;
    }
    &:focus {
      outline: none;
      border-bottom: 1px solid $text-sub;
    }
    &.has-error {
      border-bottom: 1px solid $color-prime-active;
    }
  }
  .form-control__icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
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
    &.active {
      cursor: pointer;
      svg g {
        fill: $text-prime;
      }
      &:hover {
        svg g {
          fill: $color-prime;
        }
      }
      &:focus,
      &:active {
        svg g {
          fill: $color-prime-active;
        }
      }
    }
  }
}
</style>
