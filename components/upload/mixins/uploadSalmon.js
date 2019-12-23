export const uploadSalmon = {
  asyncData(){
    return{
      MP3SelectedFile: null,
      WAVSelectedFile: null,
      StemsSelectedFile: null,
      ImageSelectedFile: null,
      UploadSent: false,
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

      this.$store.commit('forms/toggleStage', 'stage one')

      await this.$axios.$post('http://35.203.87.148:80/beats/mp3', mp3Fd)
        .then(res=>{
          console.log(res)
        })
      await this.$axios.$post('http://35.203.87.148:80/beats/wav', wavFd)
        .then(res=>{
          console.log(res)
        })
      await this.$axios.$post('http://35.203.87.148:80/beats/stems', stemFd)
        .then(res=>{
          console.log(res)
        })
      await this.$axios.$post('http://35.203.87.148:80/beats/images', imageFd)
        .then(res=>{
          console.log(res)
        })
    }
  }
}
