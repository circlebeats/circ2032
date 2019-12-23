<template>
  <tabs transitionName="fade">
    <tab :title="'HIP HOP'">
      <input type="checkbox" id="club" value="club"  @change="filterBeats" v-model="checked">
      <label for="club">Club</label>
      <br>
      <input type="checkbox" id="bass-heavy" value="Bass Heavy" @change="filterBeats" v-model="checked">
      <label for="bass-heavy">Bass Heavy</label>
      <br>
      <input type="checkbox" id="southern" value="Southern" v-model="checked">
      <label for="southern">Southern</label>
      <br>
      <input type="checkbox" id="bouncy" value="Bouncy" >
      <label for="bouncy">Bouncy</label>
      <br>
      <input type="checkbox" id="hardcore" value="Hardcore" >
      <label for="hardcore">Hardcore</label>
      <br>
      <input type="checkbox" id="east-coast" value="East Coast" >
      <label for="east-coast">East Coast</label>
      <br>
      <input type="checkbox" id="r&b" value="R&B" >
      <label for="r&b">R&B</label>
      <br>
      <input type="checkbox" id="west-coast" value="West Coast" >
      <label for="west-coast">West Coast</label>
      <br>
      <input type="checkbox" id="Boom Bap" value="Boom Bap" >
      <label for="Boom Bap">Boom Bap</label>
      <br>
      <input type="checkbox" id="Rock Infused" value="Rock Infused" >
      <label for="Rock Infused">Rock Infused</label>
      <br>
      <input type="checkbox" id="Dark" value="Dark" >
      <label for="Dark">Dark</label>
      <br>
      <input type="checkbox" id="Grime" value="Grime" >
      <label for="Grime">Grime</label>
      <br>
      <input type="checkbox" id="Chill" value="Chill" >
      <label for="Chill">Chill</label>
      <br>
      <input type="checkbox" id="Lo-fi" value="Lo-fi" >
      <label for="Lo-fi">Lo-fi</label>
      <br>
    </tab>
    <tab :title="'R&B'">
      <input type="checkbox" id="Contemporary" value="Contemporary" >
      <label for="Contemporary">Contemporary</label>
      <br>
      <input type="checkbox" id="Hip hop" value="Hip hop" >
      <label for="Hip hop">Hip hop</label>
      <br>
      <input type="checkbox" id="Alternative" value="Alternative" >
      <label for="Alternative">Alternative</label>
      <br>
      <input type="checkbox" id="slow" value="slow" >
      <label for="slow">slow</label>
      <br>
      <input type="checkbox" id="Bouncy-r&b" value="Bouncy" >
      <label for="Bouncy-r&b">Bouncy</label>
      <br>
      <input type="checkbox" id="Classic Soul" value="Classic Soul" >
      <label for="Classic Soul">Classic Soul</label>
      <br>
      <input type="checkbox" id="Funk" value="Funk" >
      <label for="Funk">Funk</label>
      <br>
      <input type="checkbox" id="New Soul" value="New Soul" >
      <label for="New Soul">New Soul</label>
      <br>
    </tab>
    <tab :title="'POP'">
      <input type="checkbox" id="country" value="country" >
      <label for="country">country</label>
      <br>
      <input type="checkbox" id="Pop Rap" value="Pop Rap" >
      <label for="Pop Rap">Pop Rap</label>
      <br>
      <input type="checkbox" id="Pop Rock" value="Pop Rock" >
      <label for="Pop Rock">Pop Rock</label>
      <br>
      <input type="checkbox" id="Dance Pop" value="Dance Pop" >
      <label for="Dance Pop">Dance Pop</label>
      <br>
      <input type="checkbox" id="Funk Pop" value="Funk Pop" >
      <label for="Funk Pop">Funk Pop</label>
      <br>
      <input type="checkbox" id="Indie" value="Indie" >
      <label for="Indie">Indie</label>
      <br>
      <input type="checkbox" id="Latin" value="Latin" >
      <label for="Latin">Latin</label>
      <br>
      <input type="checkbox" id="Euro" value="Euro" >
      <label for="Euro">Euro</label>
      <br>
    </tab>
    <tab :title="'TRAP'">
      <input type="checkbox" id="Hardcore-trap" value="Hardcore" >
      <label for="Hardcore-trap">Hardcore</label>
      <br>
      <input type="checkbox" id="Heavy Bass-trap" value="Heavy Bass" >
      <label for="Heavy Bass-trap">Heavy Bass</label>
      <br>
      <input type="checkbox" id="Southern-trap" value="Southern" >
      <label for="Southern-trap">Southern</label>
      <br>
      <input type="checkbox" id="UK Trap" value="UK Trap" >
      <label for="UK Trap">UK Trap</label>
      <br>
      <input type="checkbox" id="r&b Trap" value="r&b Trap" >
      <label for="r&b Trap">r&b Trap</label>
      <br>
      <input type="checkbox" id="Lo-fi Trap" value="Lo-fi Trap" >
      <label for="Lo-fi Trap">Lo-fi Trap</label>
      <br>
    </tab>
    <tab :title="'EDM'">
      <input type="checkbox" id="House" value="House" >
      <label for="House">House</label>
      <br>
      <input type="checkbox" id="Bass Heavy EDM" value="Bass Heavy EDM" >
      <label for="Bass Heavy EDM">Bass Heavy EDM</label>
      <br>
      <input type="checkbox" id="Dubstep" value="Dubstep" >
      <label for="Dubstep">Dubstep</label>
      <br>
      <input type="checkbox" id="Future House" value="Future House" >
      <label for="Future House">Future House</label>
      <br>
      <input type="checkbox" id="Ambient House" value="Ambient House" >
      <label for="Ambient House">Ambient House</label>
      <br>
      <input type="checkbox" id="Trap" value="Trap" >
      <label for="Trap">Trap</label>
      <br>
      <input type="checkbox" id="Future Bass" value="Future Bass" >
      <label for="Future Bass">Future Bass</label>
      <br>
      <input type="checkbox" id="Downtempo" value="Downtempo" >
      <label for="Downtempo">Downtempo</label>
      <br>
      <input type="checkbox" id="Chillout" value="Chillout" >
      <label for="Chillout">Chillout</label>
      <br>
      <input type="checkbox" id="Drum & Bass" value="Drum & Bass" >
      <label for="Drum & Bass">Drum & Bass</label>
      <br>
      <input type="checkbox" id="Electro Acoustic" value="Electro Acoustic" >
      <label for="Electro Acoustic">Electro Acoustic</label>
      <br>
      <input type="checkbox" id="Electronic Rock" value="Electronic Rock" >
      <label for="Electronic Rock">Electronic Rock</label>
      <br>
      <input type="checkbox" id="Alternative Dance" value="Alternative Dance" >
      <label for="Alternative Dance">Alternative Dance</label>
      <br>
      <input type="checkbox" id="Dark Wave" value="Dark Wave" >
      <label for="Dark Wave">Dark Wave</label>
      <br>
      <input type="checkbox" id="Hardcore EDM" value="Hardcore EDM" >
      <label for="Hardcore EDM">Hardcore EDM</label>
      <br>
      <input type="checkbox" id="Deep House" value="Deep House" >
      <label for="Deep House">Deep House</label>
      <br>
      <input type="checkbox" id="Disco" value="Disco" >
      <label for="Disco">Disco</label>
      <br>
      <input type="checkbox" id="Moombathon" value="Moombathon" >
      <label for="Moombathon">Moombathon</label>
      <br>
      <input type="checkbox" id="Electro House" value="Electro House" >
      <label for="Electro House">Electro House</label>
      <br>
      <input type="checkbox" id="French House" value="French House" >
      <label for="French House">French House</label>
      <br>
      <input type="checkbox" id="Latin House" value="Latin House" >
      <label for="Latin House">Latin House</label>
      <br>
      <input type="checkbox" id="Tech House" value="Tech House" >
      <label for="Tech House">Tech House</label>
      <br>
      <input type="checkbox" id="Vocal House" value="Vocal House" >
      <label for="Vocal House">Vocal(Pop) House</label>
      <br>
      <input type="checkbox" id="Mid Tempo" value="Mid Tempo" >
      <label for="Mid Tempo">Mid Tempo</label>
      <br>
      <input type="checkbox" id="techno" value="techno" >
      <label for="techno">techno</label>
      <br>
    </tab>
  </tabs>
</template>

<script>
  export default {
    name: "HomepageGenreFilter",
    asyncData(){
      return {
        checkedTags:[],
        checked:''
      }
    },
    computed: {
      allBeatsFilter () {
        return this.$store.getters.getBeeatByTag('club')
      }
    },
    methods:{
      filterBeats: function (e) {
        // console.log(e.target.id)
        // console.log(e.target.checked)
        // if(e.target.checked === true){
        //   this.checkedTags.unshift(e.target.id)
        //   // this.$store.commit('SET_LIST_SEARCH',{
        //   //   tag: e.target.id
        //   // })
        // } else if(e.target.checked === false){
        //   this.checkedTags.shift()
        // } else {
        //   console.log('no events')
        // }
        console.log(this.checked)
        // this.$store.commit('SET_LIST_SEARCH',{
        //   tags: checkedTags
        // })
      }
    }
  };
</script>

<style scoped>
  label{
    color: white;
  }


  .vue-tabs {
  }

  .vue-tabs__nav {
    display: flex;
    align-items: baseline;
  }

  .vue-tabs__nav-item {
  }

  .vue-tabs__nav-item.--active {
  }

  .vue-tabs__panel {
  }

  .vue-tabs__panel[hidden="hidden"] {
    display: none;
  }

  .vue-tabs__panel-container {
  }
</style>
