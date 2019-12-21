<template>
    <div class="navBar">
      <div class="left">
        <img src="/logo-black.png" />
      </div>
      <div class="mid">
        <div class="navLinks">
          <nuxt-link to="/">Home page</nuxt-link>
          <nuxt-link to="/">Beats</nuxt-link>
          <nuxt-link to="/">Licensing</nuxt-link>
          <nuxt-link to="/">Contact Us</nuxt-link>
          <nuxt-link to="/">About Us</nuxt-link>
        </div>
      </div>
      <div class="right">
        <div class="navButton">
          <nuxt-link to="/Cart">Cart</nuxt-link>
        </div>
        <div class="navButton">
          <nuxt-link to="/Sign In">Sign In</nuxt-link>
      </div>
        <div class="nav button">
          <nuxt-link to="/upload">Upload</nuxt-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  img {
    height: 80px;
    width: 80px;
  }
  .navButton:hover{
    color: #7f0a0a;
  }
  .navButton{
    width: 90px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 9px 15px;
    color: black;
  }
  .right{
    display: flex;
    width: 25%;
    height: 50%;
  }
  .mid{
    width: 50%;
    height: 50%;
  }
  .left{
    width: 80px;
    height: 80px;
  }
  .navBar{
    width: 100%;
    height: 8vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient( rgb(127, 10, 10), rgba(255, 0, 0, 0));
    background-color: #0e0e0e;
  }

</style>
