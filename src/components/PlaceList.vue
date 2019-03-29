<template>
  <v-container class="placelist">
    <v-progress-circular :indeterminate="true" v-if="isLoading"></v-progress-circular>
    <v-layout v-else>
      <v-flex
        v-for="place in places"
        :key="place.id"
      >
        <Place :place="place"></Place>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  import Place from './Place';

  export default {
    name: 'PlaceList',
    computed: {
      places() {
        return this.$store.state.place.places;
      },
      isLoading() {
        return this.$store.getters['place/isLoading'];
      },
    },
    beforeMount() {
      if (!this.$store.getters['place/hasLoad']) {
        this.$store.dispatch('place/fetchAll', {}, {root: true});
      }
    },
    components: {
      Place,
    },
  };
</script>

<style lang="scss" scoped>
.placelist {
  margin-top: 2vh !important;
}
</style>