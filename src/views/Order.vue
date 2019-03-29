<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container fluid id="order">
    <h1 id="order__header">Pemesanan</h1>
    <div id="order__summary">
      <!-- <img :src="this.product.image_url" alt=""> -->
    </div>
    <div id="order__form">
      <v-text-field
          label="Jumlah"
          placeholder="1"
          clearable
          v-model="total"></v-text-field>
      <v-date-picker
          v-model="startDate"
          :reactive="true"
      />
      <v-dialog
          ref="dialog"
          v-model="modal2"
          :return-value.sync="time"
          persistent
          lazy
          full-width
          width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
              v-model="time"
              label="Picker in dialog"
              prepend-icon="access_time"
              readonly
              v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
            v-if="modal2"
            v-model="time"
            full-width
        >
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
          <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
        </v-time-picker>
      </v-dialog>
      <v-text-field
          label="Durasi (dalam jam)"
          placeholder="1"
          v-model="duration"
          clearable></v-text-field>
      <v-text-field
          label="Nomor HP"
          placeholder="Contoh: 0812XXXXXXX"
          v-model="phoneNumber"
          clearable></v-text-field>
      <v-progress-circular class="center" :indeterminate="true" v-if="isLoading"></v-progress-circular>
      <button class="btn_box" @click="order" v-else>
        Selesaikan Pembayaran
      </button>
    </div>
  </v-container>
</template>

<script>
  import router from '../router';

  export default {
    name: 'Order',
    props: {
      id: '',
    },
    data() {
      return {
        modal2: false,
        time: '',
      };
    },
    mounted() {
      console.log(this.id);
      this.$store.commit('orderProcess/setProductId', this.id, {root: true});
      this.$store.dispatch('orderProcess/fetchProduct', {id: this.id}, {root: true});
    },
    methods: {
      order() {
        this.$store.dispatch('orderProcess/submit',
            {
              time: this.time, callback: (id) => router.push({path: `/transaction/${id}`}),
            },
            {
              root: true,
            },
        )
        ;
      },
    },
    computed: {
      product: {
        get() {
          return this.$store.state.product;
        },
      },
      startDate: {
        get() {
          return this.$store.state.orderProcess.order.start_date;
        },
        set(value) {
          console.log(value);
          this.$store.commit('orderProcess/setStartDate', value, {root: true});
        },
      },
      total: {
        get() {
          return this.$store.state.orderProcess.order.total;
        },
        set(value) {
          this.$store.commit('orderProcess/setTotal', value, {root: true});
        },
      },
      duration: {
        get() {
          return this.$store.state.orderProcess.order.duration;
        },
        set(value) {
          this.$store.commit('orderProcess/setDuration', value, {root: true});
        },
      },
      phoneNumber: {
        get() {
          return this.$store.state.orderProcess.order.phone_num;
        },
        set(value) {
          this.$store.commit('orderProcess/setPhoneNumber', value, {root: true});
        },
      },
      isLoading() {
        return this.$store.getters['orderProcess/isLoading'];
      },
    },
    created() {
      console.log(this.id);
    },
  };
</script>

<style lang="scss" scoped>
  #order {
    min-height: 100vh;
    padding-top: 8vh !important;

    #order__header {
      font-family: 'Playfair Display';
      font-weight: normal;
      letter-spacing: 0.1rem;
      text-align: center;
      font-size: 3vh;
    }

    #order__form {
      padding: 5vh;

      button {
        width: 100%;
      }

      .v-picker {
        .v-picker__title {
          background-color: black !important;
        }
      }
    }
  }
</style>
