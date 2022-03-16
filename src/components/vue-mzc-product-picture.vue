<template>
  <div class="vue-mzc-product-picture">
    <div class="vue-mzc-product-picture__images">
      <div
        class="vue-mzc-product-picture__items"
        :style="`padding-top: ${height / (width / 100)}%;`"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="
            index === currentIndex ? 'vue-mzc-product-picture__item--active' : ''
          "
          class="vue-mzc-product-picture__item"
        >
          <img
            v-if="item.filename"
            :src="baseUrl + item.filename"
            :width="width"
            :height="height"
            class="vue-mzc-product-picture__image"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
      <div
        v-if="items.length > 1"
        class="vue-mzc-product-picture__areas"
        @mouseleave="currentIndex = 0"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="vue-mzc-product-picture__area"
          @mouseenter="currentIndex = index"
        ></div>
      </div>
    </div>
    <div v-if="items.length > 1" class="vue-mzc-product-picture__dots">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="vue-mzc-product-picture__dot"
        :class="
          index === currentIndex ? 'vue-mzc-product-picture__dot--active' : ''
        "
      ></div>
    </div>
  </div>
</template>

<script>
import "./vue-mzc-product-picture.styl";

export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    baseUrl: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
};
</script>
