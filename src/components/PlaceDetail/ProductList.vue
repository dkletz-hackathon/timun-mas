<template>
  <div>
    <v-progress-circular :indeterminate="true" v-if="isLoading"></v-progress-circular>
    <div v-else>
      <div class="section_header">
        <h1 class="section_title">Katalog produk</h1>
      </div>
      <v-layout row wrap id="product__grid">
        <v-flex v-for="product in products" :key="product.id" xs4>
          <product :product="product" />
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import Product from './Product';

export default {
  name: 'ProductList',
  props: {
    id: '',
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
  beforeMount() {
    if (!this.$store.getters['placeDetail/hasLoad']) {
      this.$store.dispatch('placeDetail/fetchAll', { id: this.id }, {root: true});
    }
  },
  components: {
    Product,
  },
};
</script>

<style lang="scss" scoped>
#product__grid {
  margin-top: 2vh;
}
</style>