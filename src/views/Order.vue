<template>
  <v-container fluid id="order">
    <h1 id="order__header">Pemesanan</h1>
    <div id="order__form">
      <v-text-field
        label="Jumlah"
        placeholder="1"
        clearable
      />
      <v-date-picker
        v-model="start_date"
        :reactive="true"
      />
      <v-text-field
        label="Durasi (dalam jam)"
        placeholder="1"
        clearable
      />
      <v-text-field
        label="Nomor HP"
        placeholder="Contoh: 0812XXXXXXX"
        clearable
      />
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Order',
  props: {
    id: '',
  },
  data() {
    return {
      start_date: '',
      duration: '',
      total: '',
      phone_num: '',
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
