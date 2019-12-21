<template xmlns="http://www.w3.org/1999/html">
    <footer>
      <div id="1" class="cols">
        <img src="/logo-black.png" alt="">
        <h3 class="cursive">Circle Beats</h3>
      </div>
      <div  id="2" class="cols">
        <h3 class="reg">Circle Beats Incorporated ©2019</h3>
      </div>
      <div id="3" class="cols">
        <img class="socials" src="/instagram.png" alt="">
        <img class="socials" src="/soundcloud.png" alt="">
      </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  .socials{
    height: 50px;
    margin-left: 10px;
  }
  img{
    height: 75px;
  }
  #3{
    order: 3;
  }
  #2{
    order: 2;
  }
  #1{
    order: 1;
  }
  .cols{
    flex: 1;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  footer{
    display: flex;
    width: 100%;
    background-image: linear-gradient(to top, rgb(127, 10, 10), rgb(14, 14, 14));
    top: auto;
  }
</style>
