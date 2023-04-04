<script setup>
import { storeToRefs } from 'pinia';
import { useInputsStore } from '../../../stores/inputsStore';

const inputsStore = useInputsStore();
const { sex } = storeToRefs(inputsStore);

</script>

<template>
    <label for="sex">Sex: </label>
    <select id="sex" v-model="sex">
        <option vale="male">male</option>
        <option value="female">female</option>
    </select>
</template>