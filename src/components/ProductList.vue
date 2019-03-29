<template>
  <v-container>
    <v-progress-circular :indeterminate="true" v-if="isLoading"></v-progress-circular>
    <v-layout v-else>
      <v-flex v-for="product in products" :key="product.id" xs4>
        <Product :product="product"></Product>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Product from './Product';

  export default {
    name: 'ProductList',
    computed: {
      products() {
        return this.$store.state.product.products;
      },
      isLoading() {
        return this.$store.getters['product/isLoading'];
      },
    },
    beforeMount() {
      if (!this.$store.getters['product/hasLoad']) {
        this.$store.dispatch('product/fetchAll', {}, {root: true});
      }
    },
    components: {
      Product,
    },
  };
</script>

<style scoped>

</style>