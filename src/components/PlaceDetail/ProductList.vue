<template>
  <div v-if="products.length > 0">
    <v-progress-circular :indeterminate="true" v-if="isLoading"></v-progress-circular>
    <div v-else>
      <div class="section_header">
        <h1 class="section_title">{{ this.title }}</h1>
      </div>
      <div id="product__grid">
        <product
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from './Product';

export default {
  name: 'ProductList',
  data() {
    return {
      title: ''
    }
  },
  props: {
    id: '',
    category: ''
  },
  mounted() {
    switch(this.category) {
      case 'souvenir':
        this.title = 'Katalog produk';
        break;
      case 'tourism':
        this.title = 'Rekreasi populer di sekitar sini';
        break;
      case 'culinary':
        this.title = 'Daftar menu';
        break;
      default:
        break;
    }
    console.log(this.title);
  },
  computed: {
    products() {
      console.log(this.$store.state.placeDetail.products);
      return this.$store.state.placeDetail.products;
    },
    isLoading() {
      return this.$store.getters['placeDetail/isLoading'];
    },
  },
  components: {
    Product,
  },
};
</script>

<style lang="scss" scoped>
#product__grid {
  margin-top: 2vh;
  overflow: auto;
  white-space: nowrap;

  span {
    display: inline-block;
  }
}
</style>