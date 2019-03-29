<template>
  <v-card class="product-box" flat>
    <img :src="product.image_url || data.placeholderUrl" alt="Product's Cover" class="full-width product-image">
    <h1>{{ product.name }}</h1>
    <div class="horizontal">
      <p class="accent">
        Rp
      </p>
      <div class="expand-box"></div>
      <p class="subtitle">
        Harga mulai {{ product.price || 200000 }}/jam
      </p>
    </div>
  </v-card>
</template>

<script>
  export default {
    name: 'Product',
    props: {
      product: {},
    },
    data() {
      return {
        placeholderUrl: 'https://jlfarchitects.com/wp-content/uploads/2015/03/img-placeholder.jpg',
      };
    },
  };
</script>

<style scoped>
  .product-image, .product-box {
    max-width: 200px;
    max-height: 200px;
  }
</style>