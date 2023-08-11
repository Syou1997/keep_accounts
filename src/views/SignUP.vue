<script>
import { RouterLink } from 'vue-router'
export default{
  data() {
    return {
        username:null,
        act:null,
        pwd:null,
        pwdrepeat:null,
    }
  },
  methods:{
      sign(){
        if(this.pwd===this.pwdrepeat){
        localStorage.setItem("UserName",this.username)
        localStorage.setItem("Acount",this.act)
        localStorage.setItem("Password",this.pwd)
        alert("帳號申請成功");
        this.$router.push({name: 'home'});
        
        }
        else{
          alert("您輸入的密碼有誤");
        }

      }

    }
  
}
</script>

<template>
  <div class="container">
    <div class="login-aera">
      <h1> Sign up</h1>
      <div class="account-aera">
        <p class="account-title">User Name</p>
      <input v-model="username" type="email" placeholder="White Hung">
      </div>

      <div class="account-aera">
        <p class="account-title">Account</p>
      <input v-model="act" type="email" placeholder="Allen@gmail.com">
      </div>

      <div class="password-aera">
        <p class="password-title">Password</p>
      <input v-model="pwd" type="password" placeholder="Placeholder/Input text">
      <i class="fa-solid fa-eye icon"></i>
      </div>

      <div class="password-aera">
        <p class="password-title">Repeat Password</p>
      <input v-model="pwdrepeat" type="password" placeholder="Placeholder/Input text">
      <i class="fa-solid fa-eye icon2"></i>
      </div>



      <div class="button-aera">
        <button type="button"><RouterLink class="link" to="/">Cancel</RouterLink></button>
        <button v-on:click="sign" type="button"> Sign up</button>
      </div>
      


    </div>

  </div>

</template>

<style lang="scss" scoped>
.container{
    background-color: rgb(62, 88, 181);
  width: 100vw;
  height: 100vh;
  // border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-aera{
    width: 50vw;
    position: relative;
    // height: 600px;
    // border: 2px solid black;
    h1{text-align: center;
      margin-bottom: 40px;
      color: white;
    }
    p{
      margin: 0;
    //   opacity: 0.6;
      position: relative;
      left: 224px;
      margin-top: 20px;
      color: white;
      
      
    }
    input{
      display: block;
      margin: 0 auto;
      width: 320px;
      height: 30px;
      border-radius: 2px;
      border: 1px solid rgb(187, 182, 182);
      padding-right: 35px;
      background-color: rgb(62, 88, 181);
      color: white;
    }
    ::placeholder{
        color: white;
        opacity: 0.3;
    }
    
    .icon{
      position: absolute;
      top: 193px;
      left: 515px;
      opacity: 0.3;
      color: white;
    }
    .icon2{
      position: absolute;
      top: 262px;
      left: 515px;
      opacity: 0.3;
      color: white;
    }
    .button-aera{
      display: flex;
      justify-content: center;
      margin-top: 50px;
      button{
        margin: 0 1rem;
        background-color: white;
        color: rgb(76, 113, 235);
        width: 90px;
        height: 30px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.2s;
        &:hover{
            scale: 1.05;
        }
        &:active{
            scale: 0.95;
        }
        .link{
          text-decoration: none;
          color: rgb(76, 113, 235);
        }

      }



    }
    
    

  }
}






</style>
