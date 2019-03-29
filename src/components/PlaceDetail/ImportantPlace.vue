<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'ImportantPlace',
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
.home__buttons {
  button {
    width: calc(50% - 2vw);
    margin: 1vw;
  }
}
</style>
