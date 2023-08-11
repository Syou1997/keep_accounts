<script>
import Tracker from '../components/Tracker.vue'
import Expense from '../components/Expense.vue'
import Add from '../components/Add.vue'
import Delete from './../components/Delete.vue'


export default{
    components:{
        Tracker,
        Expense,
        Add,
        Delete,

    }
    
}

</script>

<template>
    <Add />
    <Delete />
    <div class="sotowaku">
        <div class="container1">
        <Tracker></Tracker>
        </div>

        <div class="container2">
        <Expense></Expense>
        </div>

    </div>


    

</template>

<style lang="scss" scoped>
    .sotowaku{
        display: flex;

        .container1{
        width: 35vw;
        height: 100vh;
        background-color: rgb(76, 113, 235);
        display: flex;
        }
        .container2{
            width: 65vw;
            height: 100vh;
            // border: 3px solid red;
            display: flex;
        }

    }




</style>

