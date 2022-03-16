# vue-mzc-product-picture
Simple Vue2 product picture component

![](demo.gif)

[Online demo](https://codesandbox.io/s/vue-mzc-product-picture-mwhmyj?file=/src/App.vue)

## Installation
```sh
npm install vue-mzc-product-picture --save
```

## Usage
```js
import { VueMzcProductPicture } from "vue-mzc-product-picture";
import "vue-mzc-product-picture/dist/vue-mzc-product-picture.css";

export default {
  components: {
    VueMzcProductPicture,
  },
  data() {
    return {
      images: [
        { id: 1, filename: 'id/1/200' },
        { id: 2, filename: 'id/2/200' },
        { id: 3, filename: 'id/3/200' }
      ]
    };
  },
};
```
```html
<vue-mzc-product-picture
  baseUrl="https://picsum.photos/"
  :width="200"
  :height="200"
  :items="images"
/>
```
