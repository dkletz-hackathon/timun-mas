<template>
  <v-container fluid id="transaction">
    <div id="transaction__success" v-if="isSuccess">
      <h1>Transaksi Berhasil!</h1>
      <img src="https://png.pngtree.com/svg/20170706/4631f6529c.png" alt="">
      <router-link to="/">
        <button class="btn_box">Kembali ke Home</button>
      </router-link>
    </div>
    <h1 id="order__header">Transaction #{{this.orderId}}</h1>
    <v-radio-group v-model="payment">
      <v-radio label="Pembayaran Tunai" value="tunai"></v-radio>
      <p>Lakukan pembayaran jasa secara tunai. Sangat disarankan untuk menggunakan layanan BRI karena keamaan lebih
        terjamin</p>
      <v-radio label="ATM BRI" value="bri"></v-radio>
      <p>Lakukan pembayaran melalui ATM BRI.</p>
      <div v-if="payment === 'bri'">
        <p>Silahkan transfer sejumlah</p>
        <h2>Rp {{ addCurrency(order.total_price) }}</h2>
        <p>Ke rekening berikut</p>
        <h2>888801000157508</h2>
        <v-text-field label="No Refferal" v-model="referral"></v-text-field>
      </div>
    </v-radio-group>
    <v-progress-circular class="center" :indeterminate="true" v-if="isLoading"></v-progress-circular>
    <button class="btn_box" @click="submit" v-else>
      {{ this.payment === 'bri' ? 'Cek Pembayaran' : 'Selesai' }}
    </button>
    <p v-if="isWrong" id="indicator">Kode referral salah! Ulangi lagi.</p>
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
        isSuccess: false,
        isWrong: false
      };
    },
    methods: {
      submit() {
        if (this.payment === 'tunai') {
          // Transaction Success
          this.isSuccess = true;
        } else {
          this.$store.dispatch('transaction/fetchStatus', {
            referral: this.referral, orderId: this.orderId, callback: (status) => {
              if (status === 'paid') {
                this.isSuccess = true;
              } else {
                this.isWrong = true;
              }
            },
          });
        }
      },
      addCurrency (value) {
        let val = (value/1).toFixed(2).replace('.', ',');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      },
    },
    mounted() {
      this.orderId = this.$route.params.id;
      this.$store.dispatch('transaction/fetchOrder', { id: this.orderId }, { root: true });
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

<style lang="scss" scoped>
#transaction {
  padding: 4vh !important;
  padding-top: 8vh !important;

  #order__header {
    font-family: 'Playfair Display';
    font-weight: normal;
  }

  button {
    width: 100%;
  }

  #indicator {
    color: red;
    text-align: center;
    margin-top: 1vh;
  }

  #transaction__success {
    position: absolute;
    z-index: 1001;
    background-color: white;
    min-height: 100vh;
    width: calc(100% - 8vh);
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-top: 10vh;
      font-family: 'Playfair Display';
      font-weight: normal;
      text-align: center;
    }

    img {
      margin-top: 3vh;
      width: calc(100% - 8vh);
    }

    a {
      width: 100%;
      color: black;
      button {
        font-size: 2.5vh;
      }
    }
  }
}
</style>