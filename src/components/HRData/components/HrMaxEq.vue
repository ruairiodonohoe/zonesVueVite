<script setup>
import { storeToRefs } from 'pinia';
import { useHrStore } from '../../../stores/hrStore';

const hrStore = useHrStore();
const { hrMaxEq, hrMaxEqList } = storeToRefs(hrStore);

</script>

<template>
    <div>
        <label>HRMax Eq: </label>
        <select v-model="hrMaxEq">
            <option v-for="(item, index) in hrMaxEqList">{{ index }}</option>
        </select>
    </div>
</template>