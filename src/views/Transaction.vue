<template>
  <v-container fluid id="transaction">
    <h1 id="order__header">Transaction #{{this.orderId}}</h1>
    <v-radio-group v-model="payment">
      <v-radio label="Pembayaran Tunai" value="tunai"></v-radio>
      <p>Lakukan pembayaran jasa secara tunai. Sangat disarankan untuk menggunakan layanan BRI karena keamaan lebih
        terjamin</p>
      <v-radio label="ATM BRI" value="bri"></v-radio>
      <p>Lakukan pembayaran melalui ATM BRI. Silahkan transfer sejumlah</p>
      <h2>{{ order.total_price }}</h2>
      <p>Ke rekening berikut</p>
      <h2>888801000157508</h2>
      <v-text-field label="No Refferal" v-model="referral"></v-text-field>
    </v-radio-group>
    <v-progress-circular class="center" :indeterminate="true" v-if="isLoading"></v-progress-circular>
    <button class="btn_box" @click="submit" v-else>
      {{ this.payment === 'bri' ? 'Cek Pembayaran' : 'Selesai' }}
    </button>
  </v-container>
</template>

<script>

  export default {
    name: 'Transaction',
    data() {
      return {
        orderId: -1,
        payment: '',
        referral: '',
      };
    },
    methods: {
      submit() {
        if (this.payment === 'tunai') {
          // Transaction Success
        } else {
          this.$store.dispatch('transaction/fetchStatus', {
            referral: this.referral, orderId: this.orderId, callback: (status) => {
              if (status === 'paid') {

              } else {

              }
            },
          });
        }
      },
    },
    mounted() {
      this.orderId = this.$route.params.id;
    },
    computed: {
      order() {
        return this.$store.state.transaction.order;
      },
      isLoading() {
        return this.$store.state.transaction.status === 'pending';
      },
    },
  };
</script>

<style scoped>

</style>