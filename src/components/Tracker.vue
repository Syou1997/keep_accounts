<script>
import { mapState,mapActions } from 'pinia';
import indexStore from '../store/indexStore';
export default{
     data() {
          return {
               usernameChome : localStorage.getItem("UserName"),
               
          }
     },
     computed:{
          //兩個參數:1.資料庫 2.要取用的(state/getter)
          ...mapState(indexStore,["total","arrNum"])
          

     },
     methods:{
          ...mapActions(indexStore,["balance"]),



     },
     updated() {
         
         
          
     },
    
}

</script>

<template>
     <div class="container">
          <h2>Expense Tracker</h2>
          <p>{{usernameChome}}</p>
          <div class="balance-aera">
               <p>YOUR BALANCE</p>
               <p class="money">${{ total }}</p>
          </div>
   

     </div>
    
    

</template>

<style lang="scss" scoped>
  .container{
     display: flex;
     flex-direction: column;
     justify-content: center;
     margin: 0 auto;
     

     h2{
          color: white;
          font-size: 60px;
          margin: auto 0;
     }

     p{
          color: white;
          font-size: 50px;
          margin: 0 auto;
     }
     .balance-aera{
          margin: auto auto;
          .money{
               text-align: center;
          }
     }
     
     
  }


</style>

