<script setup>
  import Sidebar from '../components/Sidebar.vue'
</script>

<template>
  <div class="container-home">
    <Sidebar />
    <div style="position: relative;">Ola mundo</div>
  </div>
</template>

<style lang="scss">
  .container-home {
    --principal: #3a595c;
    --verde-claro: #7ba9a9;
    --verde-escuro: #192e2f;
    // --verde-escuro: #223e3f;
    --branco: #f1f5f9;
    --preto: #0b0b0b;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira sans', sans-serif;
  }

  body {
    background: var(--branco);
  }

  .container-home {
    display: flex;
  }

  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
  }

  // .app {
  //   display: flex;

  //   main {
  //     flex: 1 1 0;
  //     padding: 2rem;

  //     @media (max-width: 1024px) {
  //       padding-left: 6rem;
  //     }
  //   }
  // }
</style>