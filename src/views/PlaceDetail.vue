<template>
  <v-container fluid id="placedetail">
    <v-layout row wrap>
      <v-flex
        lg12 md12 sm12 xs12
        id="placedetail__header"
        class="view_header"
      />
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
        <div class="section_header">
          <h1 class="section_title">Titik lokasi penting</h1>
          <router-link
            class="section_more"
            to="home"
          >
            <h2>Lihat semua</h2>
          </router-link>
        </div>
        <div class="section_content home__buttons">
          <button class="btn_box">Wisata Kuliner</button>
          <button class="btn_box">Pantai</button>
          <button class="btn_box">Beli Oleh-Oleh</button>
          <button class="btn_box">Tempat Rekreasi</button>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'PlaceDetail',
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
