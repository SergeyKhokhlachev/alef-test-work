<template>
  <div class="card-slider">
    <div class="card-slider__view">
      <transition name="image" mode="out-in">
        <img :key="current" :src="slides[current]" alt="photo" />
      </transition>
    </div>
    <div class="card-slider__toolbar">
      <template v-for="(slide, index) in slides" :key="index">
        <div
          :class="['card-slider__preview', { active: index === current }]"
          @click="changeSlide(index)"
        >
          <img :src="slide" alt="photo" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSlider",
  props: {
    slides: Array,
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    changeSlide(index) {
      this.current = index;
    },
  },
};
</script>

<style scoped lang="scss">
.card-slider {
  position: relative;
  .card-slider__view {
    width: 100%;
    height: 878px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .card-slider__toolbar {
    position: absolute;
    top: 24px;
    left: 24px;
  }
  .card-slider__preview {
    width: 70px;
    height: 91px;
    margin-bottom: 7px;
    opacity: 0.6;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    &:hover,
    &.active {
      opacity: 1;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}

.image-enter-active,
.image-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.image-enter,
.image-leave-to {
  opacity: 0.8;
}
</style>
