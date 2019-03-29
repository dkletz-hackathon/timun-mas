<template>
  <div id="navbar__base">
    <div
      id="navbar__side"
      v-if="isMenu"
      v-bind:class="{ 'show': isMenu }"
    >
      <p id="close" @click="toggleMenu">X</p>
      <router-link to="/">
        <img
          @click="toggleMenu"
          src="../../assets/img/logo.png"
          alt="logo"
        >
      </router-link>
      <router-link
        class="menu__item"
        v-for="m in menu"
        :key="m.name"
        :to="m.link"
      >
        <h1 @click="toggleMenu">{{ m.name }}</h1>
        <div />
      </router-link>
    </div>
    <div
      id="navbar"
      v-bind:class="{ 'white': isScroll }"
    >
      <div
        class="nav__icon"
        @click="toggleMenu"
      >
        <img src="../../assets/img/icons/menu.png" alt="">
      </div>
      <div class="nav__icon">
        <img src="../../assets/img/icons/search.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isScroll: false,
      isMenu: false,
      menuIcon: '',
      searchIcon: '',
      menu: [
        {
          name: 'Login',
          link: '/login'
        },
        {
          name: 'Tempat Wisata',
          link: '/login'
        },
        {
          name: 'Oleh-Oleh',
          link: '/souvenir'
        },
        {
          name: 'Service Discovery',
          link: '/login'
        }
      ]
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
    },
    toggleMenu() {
      this.isMenu = !this.isMenu;
      console.log(this.isMenu);
    }
  },
}
</script>

<style lang="scss" scoped>
div {
  margin: 0;
  padding: 0;
}

#navbar__base {
  position: fixed;
  z-index: 999;
  width: 100%;
}

#navbar__side {
  position: fixed;
  background-color: white;
  height: 100vh;
  width: 65vw;
  padding: 4vh;
  transition-duration: 0.2s;

  #close {
    font-size: 3.5vh;
    text-align: right;
    margin: 0;
  }

  &.show {
    -webkit-animation: slide 0.5s forwards;
    -webkit-animation-delay: 2s;
    animation: slide 0.5s forwards;
    animation-delay: 2s;
  }

  img {
    width: 70%;
    margin: 5vh 0;
  }

  .menu__item {
    text-decoration: none;

    h1 {
      font-family: 'Playfair Display';
      font-weight: normal;
      font-size: 2.5vh;
      letter-spacing: 0.15vh;
      margin-bottom: 1.5vh;
      color: black;
    }
    div {
      height: 0.3vh;
      width: 9vw;
      background-color: black;
      margin-bottom: 4vh;
    }
  }
}

#navbar {
  height: 8vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  transition-duration: 0.2s;

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
      cursor: pointer;
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

@-webkit-keyframes slide {
  100% { left: 0; }
}

@keyframes slide {
  100% { left: 0; }
}
</style>
