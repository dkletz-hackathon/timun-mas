<template>
  <v-container fluid id="placedetail">
    <v-layout row wrap>
      <v-flex
        lg12 md12 sm12 xs12
        id="placedetail__header"
        class="detail_header"
      >
        <img :src="place.image_url" alt="" class="darken">
      </v-flex>
      <v-flex
        lg12 md12 sm12 xs12
        class="view_content"
      >
        <h1 class="detail_title">{{ place.name }}</h1>
        <div class="detail_info">
          <img src="../assets/img/icons/location.png" alt="" class="detail_icon">
          <p>{{ place.address }}</p>
        </div>
        <div class="detail_info">
          <img src="../assets/img/icons/phone.png" alt="" class="detail_icon">
          <p>{{ place.phone_num }}</p>
        </div>
        <div class="detail_review">
          <p>Berikan review anda</p>
          <img src="../assets/img/icons/review.png" alt="" class="detail_icon">
        </div>
        <div class="separator" />
        <p class="detail_desc">{{ place.description }}</p>
        <important-place v-if="place.category === 'tourism'" />
        <product-list
          :id="this.id"
          v-if="place.category === 'souvenir'"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ImportantPlace from '@/components/PlaceDetail/ImportantPlace.vue'
import ProductList from '@/components/PlaceDetail/ProductList.vue'

export default {
  name: 'PlaceDetail',
  components: {
    ImportantPlace,
    ProductList
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    place() {
      return this.$store.state.placeDetail.currentPlace;
    }
  },
  mounted() {
    this.$store.dispatch('placeDetail/fetchPlace', { id: this.$route.params.id }, { root: true });
    this.$store.dispatch('placeDetail/fetchAll', { id: this.$route.params.id }, { root: true })
  }
}
</script>

<style lang="scss" scoped>
#placedetail__header {
  height: 30vh;
  background: #ffffff url('http://3.bp.blogspot.com/-EWR9lu2aVlw/UgO06Xr3fjI/AAAAAAAAEG0/zgyOCbBmxEw/s1600/teluk+hijau+1.jpg') no-repeat right top;
}

.separator {
  background-color: black;
  width: 10vw;
  height: 0.4vh;
  margin-top: 3vh;
}

.home__buttons {
    button {
      width: calc(50% - 2vw);
      margin: 1vw;
    }
  }
</style>
