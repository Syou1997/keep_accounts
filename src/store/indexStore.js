//狀態資料庫
import { defineStore } from "pinia";
//兩個參數 1.資料庫名稱 2.資料庫內容

export default defineStore("indexStore",{
    //data
    state: () => ({
        isShow : false,
        Text : null,
        Amount : null,
        arr:[],
        arrNum:[],
        incomeSum:0,
        expenseSum:0,
        deleteisShow:false,
        total:0,
        selectedName:''
 
       
 

    }),
    //computed
    getters:{
        // text:(state) => {

        // }
    },
    //methods
    actions: {
        openAndcolse(){
            this.isShow = !this.isShow
        },
        deleteShow(name){
            this.selectedName = name;
            // console.log(this.selectedName);
            this.deleteisShow = !this.deleteisShow
        },
        deleteColse(){
            this.selectedName = ''
            this.deleteisShow = !this.deleteisShow
        },
        onClick(text,amount){
            this.addtext(text);
            this.addAmount(amount);
            this.arr.push({name:this.Text,num:this.Amount});
            this.arrNum.push(this.Amount);
            this.isShow = !this.isShow;
            // console.log(this.arrNum);
            this.balance();
            
        },
        addtext(text){
            this.Text = text;
            // console.log(text);       
        },
        addAmount(amount){
            this.Amount = amount;
            // console.log(amount);       
        },

        balance(){
            // console.log("this.arrNum.length:"+this.arrNum.length);
            this.total = 0;
            this.incomeSum = 0;
            this.expenseSum = 0;
            // for(let i = 0 ; i < this.arrNum.length ; i++){
            //     this.total = +this.arrNum[i] + +this.total;
            //     if(this.arrNum[i] > 0){
            //         this.incomeSum  = +this.arrNum[i] + +this.incomeSum;
            //     }
            //     else{
            //         this.expenseSum  = +this.arrNum[i] + +this.expenseSum;

            //     }
                
                
            // }    
            
            this.arr.forEach(item => {
                this.total += +item.num;
                if(item.num > 0){
                    this.incomeSum  += +item.num;
                }
                else{
                    this.expenseSum  += +item.num;
                }
            })
            this.expenseSum = 0-this.expenseSum
        },
        deleteText(){

           this.arr =  this.arr.filter (item => {
               return item.name !== this.selectedName;
            })   
            // console.log(arr2);
            // this.arr.splice(0,1);
            // this.arrNum.splice(0,1);

            this.selectedName=''
            this.balance();
            this.deleteisShow = !this.deleteisShow;       
        }
       

    },


    
});






