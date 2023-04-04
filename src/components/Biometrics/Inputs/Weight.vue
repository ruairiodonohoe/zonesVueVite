<script setup>
import { storeToRefs } from 'pinia';
import { useInputsStore } from '../../../stores/inputsStore';

const inputsStore = useInputsStore();
const { weight } = storeToRefs(inputsStore);

</script>

<template>
    <label for="weight">Weight (kg): </label>
    <input text="number" id="weight" v-model="weight"/>
</template>