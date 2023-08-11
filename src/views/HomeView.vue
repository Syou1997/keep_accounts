<script>
import { RouterLink } from 'vue-router'
export default{
  data() {
        return {
          act : null,
          pwd : null,
          actChome : localStorage.getItem("Acount"),
          pwdChome : localStorage.getItem("Password"),


        }
      },
  methods:{
    login(){
      if(this.act === this.actChome && this.pwd === this.pwdChome){
        alert("登入成功");
        this.$router.push({name: 'MyPage',});
        console.log(localStorage.getItem('Acount'));

      }
      else{
        alert("帳號密碼有誤");
        this.$router.push({name: 'home',});
      }
    }

  },

  
}
</script>

<template>
  <div class="container">
    <div class="login-aera">
      <h1>Expense Tracker</h1>
      <div class="account-aera">
        <p class="account-title">Account</p>
      <input v-model="act" type="email" placeholder="Email">
      </div>

      <div class="password-aera">
        <p class="password-title">Password</p>
      <input v-model="pwd" type="password" placeholder="Placeholder/Input text">
      <i class="fa-solid fa-eye icon"></i>
        
      </div>

      <div class="button-aera">
        <button type="button"><RouterLink class="link" to="/SignUP">Sign UP</RouterLink></button>

        <button v-on:click="login" type="button"><RouterLink class="link" to="/MyPage">Log in</RouterLink></button>
      </div>
      


    </div>

  </div>

</template>

<style lang="scss" scoped>
.container{
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
      color: rgb(76, 113, 235);
    }
    p{
      margin: 0;
      opacity: 0.6;
      position: relative;
      left: 224px;
      margin-top: 20px;
      
      
    }
    input{
      display: block;
      margin: 0 auto;
      width: 320px;
      height: 30px;
      border-radius: 2px;
      border: 1px solid rgb(187, 182, 182);
      padding-right: 35px;
    }
    .icon{
      position: absolute;
      top: 191px;
      left: 510px;
      opacity: 0.3;
    }
    .button-aera{
      display: flex;
      justify-content: center;
      margin-top: 50px;
      button{
        margin: 0 1rem;
        background-color: rgb(76, 113, 235);
        color: white;
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
          color: white;
        }

      }



    }

    
    
    
    

 


  

      

    
  
    

  }
}






</style>
