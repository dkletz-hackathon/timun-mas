<template>
  <v-container fluid id="order">
    <h1 id="order__header">Pemesanan</h1>
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
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Order',
  props: {
    id: '',
  },
  computed: {
    startDate: {
      get () {
        return this.$store.state.orderProcess.order.start_date;
      },
      set (value) {
        console.log(value);
        this.$store.commit('orderProcess/setStartDate', value);
      }
    },
    total: {
      get () {
        return this.$store.state.orderProcess.order.total;
      },
      set (value) {
        this.$store.commit('orderProcess/setTotal', value);
      }
    },
    duration: {
      get () {
        return this.$store.state.orderProcess.order.duration;
      },
      set (value) {
        this.$store.commit('orderProcess/setDuration', value);
      }
    },
    phoneNumber: {
      get () {
        return this.$store.state.orderProcess.order.phone_num;
      },
      set (value) {
        this.$store.commit('orderProcess/setPhoneNumber', value);
      }
    }
  },
  created() {
    console.log(this.id);
  }
}
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
  }
}
</style>
