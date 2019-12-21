<template>
  <div class="opBody">
    <div class="opContain">
      <h1>Contact Us</h1>
        <form @submit.prevent="onSubmit">

<!--            TITLE INPUT-->
            <h1 class="cursive">Title</h1>
            <input
              @change="onTitleComplete"
              type="text"
              id="title"
              placeholder="Insert Subject/Title"
            >

<!--          EMAIL INPUT-->
            <h1 class="cursive">Email</h1>
            <input
              @change="onEmailComplete"
              type="text"
              id="email"
              placeholder="Insert your email here"
            >

<!--          MESSAGE INPUT-->
              <h1 class="cursive">Message</h1>
              <textarea
                @change="onMessageComplete"
                placeholder="message"
              >
            </textarea>
          <button type="submit">Submit</button>
        </form>
    </div>

  </div>
</template>


<script>
    export default {
      asyncData(){
        return{
          title: '',
          email: '',
          message: '',
        }
      },
      methods:{
        onTitleComplete(input){
          this.title = input.target.value
        },
        onEmailComplete(input){
          this.email = input.target.value
        },
        onMessageComplete(input){
          this.message = input.target.value
        },
        onSubmit: function(){
          this.$axios.$post('http://127.0.0.1:3001/contact',{
            title: this.title,
            email: this.email,
            message: this.message
          }).then((res)=>{
                if(res){
                  alert('Sent Successfully')
                }else{
                  alert('Fix some info and try again')
                }
            })
        }
      }
    }
</script>

<style scoped>
  button{
    padding: 10px 21px 10px 20px;
    border: 2px solid #000;
    border-radius: 20px;
    background-color: rgba(127, 10, 10, 0.5);
    margin-top: 10px;
    margin-left: 50%;
  }
  textarea{
    width: 80%;
    height: 200px;
    border: 2px solid #000;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: left;
  }
  input{
    width: 80%;
    border: 2px solid #000;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 18px;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1{
    text-align: center;
  }


</style>
