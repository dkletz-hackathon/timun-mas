<template>
  <v-container fluid id="souvenir">
    <v-layout row wrap>
      <v-flex
        lg12 md12 sm12 xs12
        id="souvenir__header"
        class="view_header"
      >
        <h1>OLEH-OLEH</h1>
        <h2>Khas Banyuwangi</h2>
      </v-flex>
      <v-flex
        lg12 md12 sm12 xs12
        id="souvenir__content"
        class="view_content"
      >
        <div class="view_select">
          <h1>Pilih Kategori</h1>
          <v-select
            :items="items"
            label=""
          ></v-select>
        </div>
        <div class="view_grid">
          <place
            class="product"
            v-for="p in places"
            :key="p.name"
            :place="p"
          />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Product from '@/components/PlaceDetail/Product.vue'
import Place from '@/components/Place.vue'

export default {
  name: 'Souvenir',
  components: {
    Product,
    Place
  },
  data() {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      // places: [
      //   {
      //     name: 'Pepz Kitchen - Kerupuk Rumput Laut',
      //     price: 50000
      //   },
      //   {
      //     name: 'Kopi Khas Banyuwangi',
      //     price: 20000
      //   },
      //   {
      //     name: 'Kopi Banyuwangi',
      //     price: 20000
      //   },
      //   {
      //     name: 'Kopi Baru Banyuwangi',
      //     price: 20000
      //   }
      // ]
    }
  },
  computed: {
    places() {
      let data = this.$store.state.placeList.places;
      return data.filter((value) => {
        return value.category === 'souvenir';
      });
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
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';

#souvenir {
  min-height: 100vh;
  background-color: $light-grey;
}

#souvenir__header {
  height: 30vh;
  background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('http://3.bp.blogspot.com/-EWR9lu2aVlw/UgO06Xr3fjI/AAAAAAAAEG0/zgyOCbBmxEw/s1600/teluk+hijau+1.jpg') no-repeat right top;

  h1 {
    margin-top: 16vh;
  }
  h2 {
    font-family: 'Open Sans';
    letter-spacing: 0;
    font-size: 2vh;
  }
}

#souvenir__content {
  .product {
    flex-basis: 50%;
    max-width: 50%;
  }
}
</style>
