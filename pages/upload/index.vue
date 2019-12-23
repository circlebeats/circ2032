<template>
  <div class="opBody">
    <div class="opContain">
      <h1 class="cursive">Upload</h1>
        <div class="formHolder">
          <UploadSalmonForm/>
          <transition name="slide-fade">
            <div v-if="uplStage === 'stage one'">
              <form class="formInfo">
                <label for="title">Title</label>
                <input class="formInput" type="text" id="title" @change="onTitleComplete">
                <label for="tag1">Tag</label>
                <input class="formInput"  type="text" id="tag1" @change="onTag1Complete">
                <input class="formInput" type="text" id="tag2" @change="onTag2Complete">
                <label for="bpm">BPM</label>
                <input class="formInput" type="text" id="bpm" @change="onBPMComplete">
<!--                <label for="genre">Genre</label>
                <select id="genre" v-model="selected">
                  <option disabled value="">Please select one</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>-->
                <label for="genreDropdown">Choose Genre</label>
                <select v-model="selectedGenre" @change="onGenreComplete" id="genreDropdown">
                  <option disabled value="">Genre</option>
                  <option v-for="genre in genres" :key="genre.name">
                    {{ genre.name }}
                  </option>
                </select>
                <label for="subGenre">SubGenre (choose 2)</label>
                <select v-model="filterTag1" @change="onFilterTag1Complete" id="filterTag1" multiple>
                  <option v-for="tag in tags" :key="tag">
                    {{ tag }}
                  </option>
                </select>
                <select v-model="filterTag2" @change="onFilterTag2Complete" id="filterTag2" multiple>
                  <option v-for="tag in tags" :key="tag">
                    {{ tag }}
                  </option>
                </select>
                <input type="text" placeholder="confirm producer name" @change="onConfirmComplete">
                <button @click="dbUpload">Confirm Upload</button>
              </form>
            </div>
          </transition>
        </div>


    </div>
  </div>
</template>

<script>
    import UploadSalmonForm from "../../components/upload/UploadSalmonForm";

    export default {
      asyncData(){
        return{
          /*FORM DATA*/
          tags:'',
          producer:'',
          selectedGenre: '',
          filterTag1:[],
          filterTag2:[],
          filterTag1C:'',
          filterTag2C:'',
          title:'',
          userTag1:'',
          userTag2:'',
          bpm:'',
          genre:'',
          /*Pre-Fill Genres*/
          genres:[
            { name: "Hip Hop"},
            { name: "Trap"},
            { name: "R&B"},
            { name: "EDM"},
            { name: "Pop"},
          ]
        }
      },
      computed:{
        uplStage(){
          return this.$store.state.forms.stage
        }
      },
      components: {UploadSalmonForm},
      methods:{
        async dbUpload() {
          await this.$axios.$post('http://35.203.87.148:80/beatsFull',{
            title: this.title,
            userTag1: this.userTag1,
            userTag2: this.userTag2,
            filterTag1: this.filterTag1C,
            filterTag2: this.filterTag2C,
            bpm: this.bpm,
            producer: this.producer,
            genre: this.genre
          }).then(res =>{
            console.log(res)
          })
        },
        onTitleComplete(input){
          this.title = input.target.value
        },
        onTag1Complete(input){
          this.userTag1 = input.target.value
        },
        onTag2Complete(input){
          this.userTag2 = input.target.value
        },
        onBPMComplete(input){
          this.bpm = input.target.value
        },
        onFilterTag1Complete(input){
          this.filterTag1C = input.target.value
        },
        onFilterTag2Complete(input){
          this.filterTag2C = input.target.value
        },
        onGenreComplete(input){
          this.genre = input.target.value
        },
        onConfirmComplete(input){
          this.producer = input.target.value
        }
      },
      watch:{
        selectedGenre: async function (e) {
          console.log(e)
          if (e === 'Trap'){
            const trapFilteredTags = await this.$axios.$get('http://35.203.87.148:80/tags/trap')
            this.tags = trapFilteredTags
          }else if(e === 'Hip Hop'){
            const hiphopFilteredTags = await this.$axios.$get('http://35.203.87.148:80/tags/hiphop')
            this.tags = hiphopFilteredTags
          }else if(e === 'R&B'){
            const rbFilteredTags = await this.$axios.$get('http://35.203.87.148:80/tags/r&b')
            this.tags = rbFilteredTags
          }else if(e === 'EDM'){
            const rbFilteredTags = await this.$axios.$get('http://35.203.87.148:80/tags/edm')
            this.tags = rbFilteredTags
          }else if(e === 'Pop'){
            const rbFilteredTags = await this.$axios.$get('http://35.203.87.148:80/tags/pop')
            this.tags = rbFilteredTags
          }
        }
      }
    }
</script>

<style scoped>
  button{
    text-align: center;
    color: white;
    font-size: 20px;
    border: 1px solid #000;
    border-radius: 20px;
    background-color: rgba(127, 10, 10, 0.5);
    box-shadow: 1px 1px 20px 0 #000;

    width: 20%;
    height: 30px;
  }
  select{
    border: 1px solid #000;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.3);
    font-family: Nunito, sans-serif;
    color: #fff;
    font-weight: 600;
    width: 400px;
  }
  .formInput{
    height: 40px;
    border: 2px solid #000;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    font-family: Nunito, sans-serif;
    color: #fff;
    font-weight: 700;
    padding: 8px 12px;
    margin-bottom: 10px;
    font-size: 14px;
    width: 400px;
  }
  .formInfo{
    display: flex;
    flex-direction: column;
    padding: 40px 20px;
    align-items: center;
    border: 3px solid #000;
    border-radius: 20px;
    box-shadow: 1px 1px 20px 0 #000;
    margin: 5px 5px;
  }
  .formHolder{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .slide-fade-enter-active {
    transition: all .8s cubic-bezier(.67,.74,.01,.98);
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(.67,.74,.01,.98);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(40px);
    opacity: 0;
  }
  h1{
    text-align: center;
  }
</style>
