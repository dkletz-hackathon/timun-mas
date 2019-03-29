<template>
  <v-container fluid id="placedetail">
    <div id="review" v-if="isReview">
      <div id="review__board">
        <h3 @click="toggleReview">X</h3>
        <h2>Tulis review kamu buat</h2>
        <h1>{{ place.name }}</h1>
        <v-textarea
          name="input-7-1"
          label="Komentar kamu"
          placeholder="Tulis komentar kamu disini!"
          value=""
        ></v-textarea>
      </div>
    </div>
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
        <div class="detail_review" @click="toggleReview">
          <p>Berikan review anda</p>
          <img src="../assets/img/icons/review.png" alt="" class="detail_icon">
        </div>
        <div class="separator" />
        <p class="detail_desc">{{ place.description }}</p>
        <product-list
          :id="this.id"
          :category="place.category"
        />
        <important-place v-if="place.category === 'tourism'" />
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
      id: this.$route.params.id,
      isReview: false
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
  },
  methods: {
    toggleReview() {
      this.isReview = !this.isReview;
    }
  }
}
</script>

<style lang="scss" scoped>
#review {
  position: absolute;
  z-index: 1000;
  background-color: rgba(56, 56, 56, 0.43);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  #review__board {
    background-color: white;
    width: 85vw;
    height: 60vh;
    padding: 3.5vh;

    h3 {
      text-align: right;
      font-size: 3vh;
      margin-bottom: 1vh;
    }
    h2 {
      font-size: 2vh;
      margin-bottom: 1vh;
    }
    h1 {
      font-family: 'Playfair Display';
      font-weight: normal;
      text-transform: uppercase;
      font-size: 3.5vh;
      letter-spacing: 0.2vh;
      margin-bottom: 3vh;
    }
  }
}

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
