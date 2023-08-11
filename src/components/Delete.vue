<script>
import { mapState,mapActions } from 'pinia';
import indexStore from '../store/indexStore';
export default{
    data() {
        return {
 
            
        }
    },
    computed:{
        ...mapState(indexStore,["deleteisShow","Text","Amount"])

    },
    methods:{
        ...mapActions(indexStore,["deleteColse","deleteisShow","deleteText"])

    }
    
}

</script>

<template>
    <div v-if="deleteisShow" class="waku">
        <div class="bcg">
            <div class="button-aera2">
                <button v-on:click="deleteColse" class="batsu-icon" type="button">✕</button>
            </div>
           
            <div class="text-aera">
                <p class="account-title">Sure to Delete?</p>
            </div>


            <div class="button-aera">
                <button v-on:click="deleteText" class="add" type="button"> Delete</button>
            </div>








        </div>

    </div>

    

</template>

<style lang="scss" scoped>
    .waku{
        position: fixed;
        width: 100vw;
        height: 100vw;
        background-color: rgb(88, 143, 219);
        border: 1px solid black;
        opacity: 0.9;
        z-index: 1;
        .bcg{
        position: absolute;
        top: 250px;
        right: 550px;
        width: 30vw;
        height: 15vw;
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
                    font-weight: bold;
                    transition: 0.3s;
                    color:  rgb(76, 113, 235);
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
            left: 100px;
            margin-top: 30px;
            color:rgb(20, 70, 235);
            font-weight: bold;
            font-size: 40px;
      
      
            }
            .button-aera{
                display: flex;
                justify-content: center;
                margin-top: 50px;
                .add{
                    margin: 0 1rem;
                    background-color: rgb(183, 9, 9);
                    color: white;
                    width: 170px;
                    height: 30px;
                    border: none;
                    border-radius: 8px;
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

