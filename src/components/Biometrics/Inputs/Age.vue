<script setup>
import { storeToRefs } from 'pinia';
import { useInputsStore } from '../../../stores/inputsStore';

const inputsStore = useInputsStore();
const { age } = storeToRefs(inputsStore);

</script>

<template>
    <div>
        <label for="age">Age: </label>
        <input type="number" id="age" v-model="age"/>
    </div>
</template>