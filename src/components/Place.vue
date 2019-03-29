<template>
  <v-card class="product-box" flat v-on:click="navigateToPlace()">
    <div class="place-image">
      <img
        :src="place.image_url || data.placeholderUrl"
        alt="Product's Cover"
        class="darken"
      >
    </div>
    <div class="place__overlay">
      <h1>{{ place.name }}</h1>
    </div>
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

<style lang="scss" scoped>
.product-box {
  height: 18vh;
  margin-right: 2vh;
}

.place-image {
  width: 100%;
  height: 18vh;
  position: absolute;
  overflow: hidden;

  img {
    height: 100%;
  }
}

.place__overlay {
  position: absolute;
  color: white;
  padding: 1vh;

  h1 {
    margin-top: 11vh;
    font-family: 'Playfair Display';
    font-weight: normal;
    font-size: 2.5vh;
  }
}
</style>