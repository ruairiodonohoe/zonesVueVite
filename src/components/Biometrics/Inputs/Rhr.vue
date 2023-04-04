<script setup>
import { storeToRefs } from 'pinia';
import { useHrStore } from '../../../stores/hrStore';

const hrStore = useHrStore();
const { rhr } = storeToRefs(hrStore);

</script>

<template>
    <div>
        <label for="rhr">RHR: </label>
        <input type="number" id="rhr" v-model="rhr"/>
    </div>
   
</template>



