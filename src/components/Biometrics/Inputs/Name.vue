<script setup>
import { storeToRefs } from 'pinia';
import { useInputsStore } from '../../../stores/inputsStore';

const inputsStore = useInputsStore();
const { firstName, lastName, fullName } = storeToRefs(inputsStore);

</script>

<style scoped>
.inputDiv {
    display: inline-block;
    margin: 0px 10px 0px 0px;
}

</style>


<template>
    <div>
        <div class="inputDiv">
            <label for="firstName">First name: </label>
            <input type="text" id="firstName" v-model="firstName"/>
        </div>

        <div class="inputDiv">
            <label for="lastName">Last name: </label>
            <input type="text" id="lastName" v-model="lastName"/>
        </div>
    </div>

</template>