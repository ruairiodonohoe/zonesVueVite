<script setup>
import { storeToRefs } from 'pinia';
import { useHrStore } from '../../../stores/hrStore';
import HrMaxEq from './HrMaxEq.vue';

const hrStore = useHrStore();
const { hrMax } = storeToRefs(hrStore);

</script>

<template>
    <div>
        <HrMaxEq />
        <p>HRMax: {{ hrMax }}</p>
    </div>
</template>