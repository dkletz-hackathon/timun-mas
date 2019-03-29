<template>
  <v-container id="home">
    <v-layout row wrap>
      <v-flex
        lg12 md12 sm12 xs12
        id="home__header"
        class="view_header"
      >
        <h2>SELAMAT DATANG DI</h2>
        <h1>BANYUWANGI</h1>
        <div />
      </v-flex>
      <v-flex
        lg12 md12 sm12 xs12
        id="home__content"
        class="view_content"
      >
        <div id="kemana">
          <div class="section_header">
            <h1 class="section_title">Mau kemana hari ini?</h1>
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
        <div id="destinasi">
          <div class="section_header">
            <h1 class="section_title">Destinasi populer</h1>
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
          <div class="section_content home__buttons">
            <button class="btn_box">Wisata Kuliner</button>
            <button class="btn_box">Pantai</button>
            <button class="btn_box">Beli Oleh-Oleh</button>
            <button class="btn_box">Tempat Rekreasi</button>
          </div>
          <div class="section_content home__buttons">
            <button class="btn_box">Wisata Kuliner</button>
            <button class="btn_box">Pantai</button>
            <button class="btn_box">Beli Oleh-Oleh</button>
            <button class="btn_box">Tempat Rekreasi</button>
          </div>
          <div class="section_content home__buttons">
            <button class="btn_box">Wisata Kuliner</button>
            <button class="btn_box">Pantai</button>
            <button class="btn_box">Beli Oleh-Oleh</button>
            <button class="btn_box">Tempat Rekreasi</button>
          </div>
        </div>
        <div id="kuliner">

        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
#home {
  min-height: 100vh;
}

#home__header {
  height: 35vh;
  background: #ffffff url('http://3.bp.blogspot.com/-EWR9lu2aVlw/UgO06Xr3fjI/AAAAAAAAEG0/zgyOCbBmxEw/s1600/teluk+hijau+1.jpg') no-repeat right top;

  div {
    background-color: white;
    width: 20vw;
    height: 0.5vh;
    margin-top: 3vh;
  }
  h2 {
    margin-top: 22vh;
    font-size: 2vh;
  }
  h1 {
    font-size: 4vh;
  }
}

#home__content {
  >div {
    margin-top: 1vh;
    margin-bottom: 4vh;
  }

  .home__buttons {
    button {
      width: calc(50% - 2vw);
      margin: 1vw;
    }
  }
}
</style>

