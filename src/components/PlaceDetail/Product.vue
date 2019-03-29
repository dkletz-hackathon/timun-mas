<template>
  <span>
    <v-card
      class="product-box"
      flat
      @click="order"
    >
      <img :src="product.image_url || this.placeholder_url" alt="Product's Cover" class="full-width product-image">
      <h1>{{ product.name }}</h1>
      <div class="horizontal">
        <!-- <p class="accent">
          Rp
        </p> -->
        <!-- <div class="expand-box"></div> -->
        <p class="subtitle">
          Rp {{ product.price }} / pcs
        </p>
      </div>
    </v-card>
  </span>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {},
  },
  mounted() {
    console.log('hehe');
    console.log(this.product);
  },
  data() {
    return {
      placeholder_url: "https://jlfarchitects.com/wp-content/uploads/2015/03/img-placeholder.jpg"
    }
  },
  methods: {
    order() {
      if(this.product.category === 'service') {
        this.$router.push({
          name: 'Order',
          params: {
            id: this.product.id
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/colors';

.product-image, .product-box {
  background-color: transparent !important;
  max-width: 40vw;
  // max-height: 40vw;
}

.product-box {
  width: 40vw;
  margin-right: 1vh;

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