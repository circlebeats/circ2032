<template>
  <div class="miscInfo">
    <div class="colRight">
      <!--branch merge-->
      <div class="tag1">{{tag1}}</div>
      <div class="tag2">{{tag2}}</div>
      <button class="checkout">View Licences...</button>
    </div>
    <div class="colLeft">
      <h3 class="producerInfo">Produced by:</h3>
      <h3 class="producerInfo">{{ producer }}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomepageMiscInfo",
    props:['tag1','tag2','producer']
  };
</script>

<style scoped>
  .checkout {
    height: 20px;
    background-color: #7f0a0a;
    color: white;
    border-radius: 8px;
    border-width: 1px;
    border-color: black ;
    font-family: 'Nunito';
    font-weight: 400;
    font-size: .8rem;
    margin-left: 60px;
    margin-top: 10px;
  }
  .tag2:hover{
    color: white;
  }
  .tag2{
    color: white;
    background-color: #7f0a0a;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    width: 50%;
    height: 30px;
    border: 1px solid #000;
    border-radius: 20px;
    background-color: rgba(127, 10, 10, 0.5);
    text-align: center;
    color: rgba(225,225,225,0.5);
    transition: all ease-in-out 200ms;
  }
  .tag1:hover{
    color: white;
  }
  .tag1{
    color: white;
    background-color: #7f0a0a;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    width: 50%;
    height: 30px;
    border: 1px solid #000;
    border-radius: 20px;
    background-color: rgba(127, 10, 10, 0.5);
    text-align: center;
    color: rgba(225,225,225,0.5);
    transition: all ease-in-out 200ms;
  }
  .colRight{
    width: 60%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
  }
  .producerInfo {
    height: 25%;
    color: #F5F5F5;
    font-family: 'Nunito Sans';
    font-weight: 400;
    font-size: 1rem;
  }
  .colLeft{
    height: 80%;
    width: 40%;
    display: flex;
    flex-wrap: wrap;
  }
  .miscInfo{
    height: 80%;
    display: flex;
    flex-direction: row-reverse;
  }
</style>
