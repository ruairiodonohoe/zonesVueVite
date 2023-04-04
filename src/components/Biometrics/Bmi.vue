<script setup>
import { storeToRefs } from 'pinia';
import { useInputsStore } from '../../stores/inputsStore';

const inputsStore = useInputsStore();
const { bmi } = storeToRefs(inputsStore);

</script>

<style scoped>
h4, p {
    display: inline-block;
    margin: 0 10px 0 0;
}
</style>


<template>
    <div>
        <h4>BMI: </h4>
        <p>{{ bmi }}</p>
    </div>
</template>