<template>
  <v-card class="product-box" flat v-on:click="navigateToPlace()">
    <img :src="place.image_url || data.placeholderUrl" alt="Product's Cover" class="place-image">
    <h1>{{ place.name }}</h1>
  </v-card>
</template>

<script>
  import router from '../router';

  export default {
    name: 'Place',
    props: {

      place: {},
    },
    data() {
      return {
        placeholderUrl: 'https://jlfarchitects.com/wp-content/uploads/2015/03/img-placeholder.jpg',
      };
    },
    methods: {
      navigateToPlace() {
        this.$store.commit('place/setCurrentPlace', this.$props.place, {root: true});
        router.push({ name: "list-product" });
      }
    }
  };
</script>

<style scoped>
  .place-image {
    max-width: 200px;
    max-height: 200px;
  }
</style>