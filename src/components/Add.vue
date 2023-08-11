<script>
import { mapState,mapActions } from 'pinia';
import indexStore from '../store/indexStore';
export default{
    data() {
        return {
            inputText : null, 
            inputAmount : null,
            
        }
    },
    computed:{
        ...mapState(indexStore,["isShow","Text","Amount"])

    },
    methods:{
        ...mapActions(indexStore,["openAndcolse","onClick"])

    }
    
}

</script>

<template>
    <div v-if="isShow" class="waku">
        <div class="bcg">
            <div class="button-aera2">
                <button v-on:click="openAndcolse" class="batsu-icon" type="button">✕</button>
            </div>
           
            <div class="text-aera">
                <p class="account-title">Text</p>
                <input v-model="inputText" type="text" placeholder="Empty">
            </div>

            <div class="account-aera">
                <p class="account-title">Amount</p>
                <input v-model="inputAmount" type="number" placeholder="Empty">
            </div>

            <div class="button-aera">
                <button v-on:click="onClick(inputText,inputAmount)" class="add" type="button"> Add transaction</button>
            </div>








        </div>

    </div>

    

</template>

<style lang="scss" scoped>
    .waku{
        position: fixed;
        width: 100vw;
        height: 100vw;
        background-color: rgb(128, 172, 234);
        border: 1px solid black;
        opacity: 0.9;
        z-index: 1;
        .bcg{
        position: absolute;
        top: 250px;
        right: 520px;
        width: 30vw;
        height: 20vw;
        background-color: white;
        border: 1px solid black;
        border-radius: 20px;
        z-index: 3;
        display: block;
        margin: auto 0;
            .button-aera2{
                display: flex;
                justify-content: right;
                margin-top: 10px;
                margin-right: 10px;
                .batsu-icon{
                    border: none;
                    background-color: white;
                    font-size: 20px;
                    transition: 0.3s;
                    &:hover{
                        scale: 1.05;

                    }
                    &:active{
                        scale: 0.95;
                    }
                }
            }
            p{
            margin: 0;
            //opacity: 0.6;
            position: relative;
            left: 70px;
            margin-top: 30px;
            color:rgb(76, 113, 235);
            font-size: 20px;
      
      
            }
            input{
                display: block;
                margin: 0 auto;
                width: 320px;
                height: 30px;
                border-radius: 4px;
                border: 1px solid rgb(76, 113, 235);
                padding-right: 35px;
                background-color: white;
                color: black;
                &::-webkit-inner-spin-button,&::-webkit-outer-spin-button{appearance: none;};
            }
            ::placeholder{
                color: black;
                opacity: 0.3;
            }
            .button-aera{
                display: flex;
                justify-content: center;
                margin-top: 50px;
                .add{
                    margin: 0 1rem;
                    background-color: rgb(76, 113, 235);
                    color: white;
                    width: 170px;
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

                }

            }
        }

        
    }

</style>

