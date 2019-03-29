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
      places() {
        return this.$store.state.placeDetail.places;
      },
      isLoading() {
        return this.$store.getters['placeDetail/isLoading'];
      },
    },
    beforeMount() {
      if (!this.$store.getters['placeDetail/hasLoad']) {
        this.$store.dispatch('placeDetail/fetchAll', {}, {root: true});
      }
    },
    components: {
      Product,
    },
  };
</script>

<style scoped>

</style>