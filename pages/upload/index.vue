<template>
  <div class="opBody">
    <div class="opContain">
      <h1 class="cursive">Upload</h1>

      <form @submit.prevent="onSubmit"
        id="uploadForm"
      >
        <label class="uplBtn">
          <input type="file" @change="onImageSelected">
          Image Upload
        </label>

        <div class="uploadHolder">
          <h2 class="reg">
            MP3 Upload
          </h2>
          <h4 class="reg">(Max file size 5)</h4>
          <label class="uplBtn">
            <input type="file"@change="onMP3Selected"/>
            Upload
          </label>
        </div>
        <div class="uploadHolder">
          <h2 class="reg">
            Wav Upload
          </h2>
          <h4 class="reg">(Max file size 5)</h4>
          <label class="uplBtn">
            <input type="file"@change="onWAVSelected"/>
            Upload
          </label>
        </div>
        <div class="uploadHolder">
          <h2 class="reg">
            Stems Upload
          </h2>
          <h4 class="reg">(Max file size 5)</h4>
          <label class="uplBtn">
            <input type="file"@change="onStemsSelected"/>
            Upload
          </label>
        </div>
        <button class="uplBtn" type="submit">Submit</button>
      </form>

    </div>
  </div>
</template>

<script>
    export default {
      asyncData(){
        return{
          MP3SelectedFile: null,
          WAVSelectedFile: null,
          StemsSelectedFile: null,
          ImageSelectedFile: null,
        }
      },
      methods:{
        onImageSelected(event) {
          this.ImageSelectedFile = event.target.files[0]
        },
        onMP3Selected(event) {
          this.MP3SelectedFile = event.target.files[0]
        },
        onWAVSelected(event) {
          this.WAVSelectedFile = event.target.files[0]
        },
        onStemsSelected(event) {
          this.StemsSelectedFile = event.target.files[0]
        },
        async onSubmit() {
          let mp3Fd = new FormData ()
          let wavFd = new FormData ()
          let stemFd = new FormData ()
          let imageFd = new FormData ()

          mp3Fd.append('mp3File', this.MP3SelectedFile)
          wavFd.append('wavFile', this.WAVSelectedFile)
          stemFd.append('stemsFile', this.StemsSelectedFile)
          imageFd.append('imageFile', this.ImageSelectedFile)

          await this.$axios.$post('http://149.249.2.63/beats/mp3', mp3Fd)
            .then(res=>{
              console.log(res)
            })
          await this.$axios.$post('http://149.248.2.63/beats/wav', wavFd)
            .then(res=>{
              console.log(res)
            })
          await this.$axios.$post('http://149.248.2.63/beats/stems', stemFd)
            .then(res=>{
              console.log(res)
            })
          await this.$axios.$post('http://149.248.2.63/beats/images', imageFd)
            .then(res=>{
              console.log(res)
            })
        }
      },

    }
</script>

<style scoped>
  h4{
    margin-left: 15px;
  }
  h2{
    margin-left: 10px;
  }
  input[type="file"] {
    display: none;
  }
  .uploadHolder{
    display: flex;
    width: 400px;
    height: 100px;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: column;
    border: 2px solid #000;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 1px 1px 20px 3px #000;
  }
  .uplBtn{
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
  form{
    display: flex;
    flex-direction: column;
    padding: 40px 20px;
    align-items: center;
    border: 3px solid #000;
    border-radius: 20px;
    box-shadow: 1px 1px 20px 0 #000;
  }
  h1{
    text-align: center;
  }
</style>
