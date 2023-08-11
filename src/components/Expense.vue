<script>

//Pinia 方法
import {mapState,mapActions} from 'pinia';
//自己的資料庫
import indexStore from '../store/indexStore';

export default{
     components:{
          incomeSum:0,
          expenseSum:0,
         

     },
     data() {
          return {
      
               
          }
     },
     computed:{
          //兩個參數:1.資料庫 2.要取用的(state/getter)
          ...mapState(indexStore,["isShow","arr","arrNum","incomeSum","expenseSum","deleteisShow"])
          

     },
     methods:{
          ...mapActions(indexStore,["openAndcolse","deleteShow"]),
         


     },
     mounted() {

   
     },
     updated(){
      
          
     },
    
}

</script>

<template>
     <div class="container">
          <div class="Income-And-Expernse">
               <div class="Income-aera">
               <p>INCOME</p>
               <p>${{incomeSum}}</p>
               
          </div>
          <div class="Expense-aera">
               <p>EXPENSE</p>
               <p>${{expenseSum}}</p>
          </div>
          </div>

          <div class="button-aera">
               <button v-on:click="openAndcolse" type="button">Add transaction</button>
          </div>
          <div class="Detail-aera">
               <div v-for="item,index in arr" :key="index" class="text-waku">
                    <span class="title">{{item.name}}</span>
                    <div class="money-and-btn">
                         <span v-if ="item.num >= 0" class="money-tasi">{{item.num}}$</span>
                         <span v-else ="item.num < 0" class="money-hiki">{{item.num}}$</span>
                         <button v-on:click="deleteShow(item.name)" class="btn" type="button"> Delete</button>
                    </div>
                    
               </div>
               
                    

               

          </div>


     </div>

    

</template>

<style lang="scss" scoped>
  .container{
     margin: auto auto;
     p{margin: 0;
     text-align: center;}
  
     .Income-And-Expernse{
          display: flex;
          .Income-aera{
               display: flex;
               color: rgb(38, 158, 1);
               font-size: 40px;
               display: flex;
               flex-direction: column;
               margin-right: 300px;
          }
          .Expense-aera{
               display: flex;
               color: red;
               font-size: 40px;
               display: flex;
               flex-direction: column;

               
          }


     }
     .button-aera{
          button{
               background-color:  rgb(76, 113, 235);
               color: white;
               width: 250px;
               height: 40px;
               cursor: pointer;
               transition: 0.2s;
               border-radius: 6px;
               border: none;
               display: block;
               margin: 60px auto;
              
               
               &:hover{
                    scale: 1.05;
                }
               &:active{
                    scale: 0.95;
                }
          }

     }
     .Detail-aera{
          // border: 2px solid rgb(255, 106, 0);
          height: 380px;

     
          .text-waku{
               display: flex;
               justify-content: space-between;
               align-items: center;
               width: 670px;
               height: 50px;
               border: 2px solid rgb(76, 113, 235);
               border-radius: 8px;
               margin-bottom: 20px;
               .title{
               color: rgb(76, 113, 235);
               font-weight: bold;
               font-size: 25px;
               padding-left: 30px;
               }

               .money-and-btn{

                    .title{
                         font-size: 10px;
                         
                    }
                    .money-hiki{
                         color: rgb(203, 5, 5);
                         font-weight: bold;
                         font-size: 20px;
                    }
                    .money-tasi{
                         color: rgb(38, 158, 1);
                         font-weight: bold;
                         font-size: 20px;
                    }
                    .btn{
                         background-color: rgb(76, 113, 235);
                         color: white;
                         border-radius: 6px;
                         width: 65px;
                         height: 30px;
                         margin: 0 10px;
                         border: none;
                         cursor: pointer;
                         transition: 0.2s;
                         &:hover{
                              scale: 1.05;
                          }
                         &:active{
                              scale: 0.95;
                         }

                    }
                    .btn-click{
                         background-color: rgb(76, 113, 235);

                    }
               }
               
     
               
          }

     }


  }


</style>

