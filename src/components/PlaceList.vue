<template>
  <v-container class="placelist">
    <v-progress-circular
      :indeterminate="true"
      v-if="isLoading"
    />
    <div
      v-else
      class="placegrid"
    >
      <place
        v-for="place in places"
        :key="place.id"
        :place="place"
      />
    </div>
  </v-container>
</template>


<script>
  import Place from './Place';

  export default {
    name: 'PlaceList',
    computed: {
      places() {
        return this.$store.state.placeList.places;
      },
      isLoading() {
        return this.$store.getters['placeList/isLoading'];
      },
    },
    beforeMount() {
      if (!this.$store.getters['placeList/hasLoad']) {
        this.$store.dispatch('placeList/fetchAll', {}, {root: true});
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

.placegrid {
  overflow: auto;
  white-space: nowrap;
  span {
    display: inline-block;
  }
}
</style>