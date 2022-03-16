<template>
  <div class="container">
    <div class="products">
      <div v-for="product in products" :key="product.id" class="products__item">
        <div class="products-item">
          <div class="products-item__picture">
            <VueMzcProductPicture
              baseUrl="https://picsum.photos/"
              :width="200"
              :height="200"
              :items="product.images"
            />
          </div>
          <div class="products-item__info">
            <div class="products-item__title">{{ product.title }}</div>
            <div class="products-item__price">${{ product.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMzcProductPicture from "./components/vue-mzc-product-picture.vue";
import './App.styl'

export default {
  components: {
    VueMzcProductPicture,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Lorem ipsum dolor',
          price: 200,
          images: [
            {
              id: 1,
              filename: 'id/1/200',
            },
            {
              id: 2,
              filename: 'id/2/200',
            },
            {
              id: 3,
              filename: 'id/3/200',
            },
          ]
        },
        {
          id: 2,
          title: 'Amet consectetur adipisicing',
          price: 350,
          images: [
            {
              id: 4,
              filename: 'id/4/200',
            },
            {
              id: 5,
              filename: 'id/5/200',
            },
            {
              id: 6,
              filename: 'id/6/200',
            },
            {
              id: 7,
              filename: 'id/7/200',
            },
            {
              id: 8,
              filename: 'id/8/200',
            },
            {
              id: 9,
              filename: 'id/9/200',
            },
          ]
        },
        {
          id: 3,
          title: 'Voluptates ducimus',
          price: 290,
          images: [
            {
              id: 10,
              filename: 'id/10/200',
            },
          ]
        },
      ],
    };
  },
};
</script>