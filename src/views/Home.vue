<template>
  <v-container id="home">
    <v-layout row wrap>
      <v-flex lg12 md12 sm12 xs12 id="home__header">
        <h2>SELAMAT DATANG DI</h2>
        <h1>BANYUWANGI</h1>
      </v-flex>
      <v-flex lg12 md12 sm12 xs12 id="home__content">
        <div id="kemana">
          <div class="section_header">
            <h1 class="section_title">Mau kemana hari ini?</h1>
            <h2 class="section_more">Lihat semua</h2>
          </div>
        </div>
        <div id="destinasi">

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

#home__header, #home__content {
  padding: 3vh;
}

#home__header {
  height: 35vh;
  background: #993488 no-repeat fixed;
  // url('https://www.nativeindonesia.com/wp-content/uploads/2015/03/pantai-teluk-hijau-banyuwangi.jpg')

  h2, h1 {
    font-family: 'Playfair Display';
    letter-spacing: 0.2rem;
    margin: 0;
  }
  h2 {
    font-size: 2vh;
  }
  h1 {
    font-size: 4vh;
  }
}

#home__content {

}
</style>

