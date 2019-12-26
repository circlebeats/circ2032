<template>
  <div class="holder">
    <div class="overlayWrap">
      <div class="a2Wishlist"></div>
      <div class="playerDiv">
        <vue-plyr>
          <audio id="player" controls preload="auto">
            <source :src="url" type="audio/mp3" />
          </audio>
        </vue-plyr>
      </div>
      <div class="infoHolder">
        <div class="namePlays">
          <h3 class="title" >{{ title }}</h3>
          <h3 class="playCount">{{ plays }}</h3>
        </div>
        <!--TODO: Pass data to MiscInfo for prop use-->
        <HomepageMiscInfo
          :producer="producer"
          :tag1="tag1"
          :tag2="tag2"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import HomepageMiscInfo from "./HomepageMiscInfo";
  export default {
    name: "HomepageBeatHolder",
    components: { HomepageMiscInfo },
    props:['title','producer','tag1','tag2','url','plays']
  };
</script>

<style>
  .plyr--audio .plyr__controls{
    background: rgba(0,0,0,0);
    box-shadow: 1px 1px 20px 5px #000;
  }
  .playCount{
    width: 50%;
    justify-items: right;
    text-align: right;
    margin-right: 10px;
    color: white;
  }
  .title {
    color: #F5F5F5;
    font-family: 'Damion', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    width: 50%;
  }
  .namePlays{
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
  }
  .playerDiv{
    height: 10%;
  }
  .a2Wishlist{
    height: 50%;
    width: 70%;
  }
  avbars{
    z-index: 20;
  }
  .infoHolder{
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
  }

  .overlayWrap{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .holder{
    width: 300px;
    height: 400px;
    margin: 10px 10px;
    border-radius: 8px;
    border-width: 5px;

    display: flex;
    position: relative;
    box-shadow:  inset 1px 1px 20px 5px rgba(0, 0, 0, 1) , 0 0 20px 1px rgba(0, 0, 0, 1);
    transition: all .2s ease-in-out;
  }
</style>
