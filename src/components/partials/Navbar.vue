<template>
  <div
    id="navbar"
    v-bind:class="{ 'white': isScroll }"
  >
    <div class="nav__icon">
      <img src="../../assets/img/icons/menu.png" alt="">
    </div>
    <div class="nav__icon">
      <img src="../../assets/img/icons/search.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isScroll: false,
      menuIcon: '',
      searchIcon: '',
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if(window.scrollY > 0) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
div {
  margin: 0;
  padding: 0;
}

#navbar {
  position: fixed;
  z-index: 999;
  height: 8vh;
  width: 100%;
  display: flex;
  flex-direction: row;

  &.white {
    background-color: white;
  }

  .nav__icon {
    width: 8vh;
    height: 8vh;
    display: flex;
    flex-basis: 50%;
    align-items: center;

    img {
      height: 2.2vh;
    }

    &:first-child {
      img {
        margin-left: 3vh;
      }
    }
    &:last-child {
      justify-content: flex-end;
      img {
        margin-right: 3vh;
      }
    }
  }
}
</style>
