<template>
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
      <div v-if=""></div>
      <h2>{{MP3SelectedFile}}</h2>
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
    <button class="uplBtn" type="submit">Next Step</button>
  </form>
</template>

<script>
    import {uploadSalmon} from "./mixins/uploadSalmon";

    export default {
      name: "UploadSalmonForm",
      mixins:[uploadSalmon],

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
    flex: 1;
    margin: 5px 5px;
  }

</style>
