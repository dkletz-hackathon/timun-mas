<template>
    <div id="app">

        <!-- <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div> -->
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import 'assets/styles/index';

    body, html {
        padding: 0;
        margin: 0;
    }

    #app {
        // font-family: 'Playfair Display', 'Open Sans', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .container {
        margin: 0;
        padding: 0;
    }

    .accent {
        color: #993488;
    }

    .horizontal {
        display: flex;
        flex-direction: row;
    }

    .expand-box {
        flex-grow: 1;
    }

    .full-width {
        width: 100%;
    }
</style>
