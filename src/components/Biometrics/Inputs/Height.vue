<script setup>
import { storeToRefs } from 'pinia';
import { useInputsStore } from '../../../stores/inputsStore';

const inputsStore = useInputsStore();
const { height } = storeToRefs(inputsStore);

</script>

<template>
    <div>
        <label for="height">Height (cm): </label>
        <input type="number" id="height" v-model="height"/>
    </div>
</template>