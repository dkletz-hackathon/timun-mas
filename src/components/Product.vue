<template>
  <v-card class="product-box" flat>
    <img :src="placeholder_url" alt="Product's Cover" class="full-width product-image">
    <h1>{{ product.name }}</h1>
    <div class="horizontal">
      <!-- <p class="accent">
        Rp
      </p> -->
      <!-- <div class="expand-box"></div> -->
      <p class="subtitle">
        Rp {{ product.price || 200000 }}/pcs
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
      placeholder_url: "https://jlfarchitects.com/wp-content/uploads/2015/03/img-placeholder.jpg"
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';

.product-image, .product-box {
  background-color: transparent !important;
  max-width: 40vw;
  // max-height: 40vw;
}

.product-box {
  h1 {
    font-family: 'Playfair Display';
    font-size: 4vw;
    font-weight: normal;
  }
  .subtitle {
    color: $red;
    font-weight: bold;
  }
}
</style>