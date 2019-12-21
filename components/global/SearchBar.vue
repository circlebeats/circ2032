<template>
  <div class="searchWrap">
    <input class="search" type="text" placeholder="Enter Search">
    <button class="searchButton" v-on:click="search">Search</button>
  </div>
</template>

<script>
  export default {
    name: "SearchBar",
    methods:{
      search: function (e) {
          console.log(e)
      }
    }
  };
</script>

<style>
  .searchWrap {
    display: flex;
    flex-direction: row;
    padding: 50px 20px;
    margin: 10px 200px;
  }
  .search {
    flex-grow: 8;
    height: 50px;
    border: none transparent;
    outline: none;
    border-radius: 20px;
  }
  .searchButton {
    flex-grow: 1;
    margin-left: 27px;
    border-radius: 20px;
    background: #7f0a0a;
    border:none;
  }
</style>

