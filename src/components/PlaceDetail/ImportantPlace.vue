<template>
  <div>
    <div class="section_header">
      <h1 class="section_title">Titik lokasi penting</h1>
      <!-- <router-link
        class="section_more"
        to="home"
      >
        <h2>Lihat semua</h2>
      </router-link> -->
    </div>
    <div class="section_content view_buttons">
      <button class="btn_box">Wisata Kuliner</button>
      <button class="btn_box">Pantai</button>
      <button class="btn_box">Beli Oleh-Oleh</button>
      <button class="btn_box">Tempat Rekreasi</button>
    </div>
    <div class="section_header">
      <h1 class="section_title">Destinasi populer lainnya</h1>
      <!-- <router-link
        class="section_more"
        to="home"
      >
        <h2>Lihat semua</h2>
      </router-link> -->
    </div>
    <div class="section_content">
      <place-list />
    </div>
  </div>
</template>

<script>
import PlaceList from '@/components/PlaceList.vue'

export default {
  name: 'ImportantPlace',
  components: {
    PlaceList
  },
  props: {
    place: {
      place_id: '',
      geo_x: '',
      geo_y: '',
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
