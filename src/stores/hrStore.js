import { ref, computed } from "vue";
import { defineStore, storeToRefs } from "pinia";

import { useInputsStore } from "./inputsStore";



export const useHrStore = defineStore('hr', () => {
    const inputsStore = useInputsStore();

    const { age } = storeToRefs(inputsStore);

    const hrMaxEq   = ref('');
    const rhr       = ref(null);

    const hrMaxEqList = computed( () => {
        const hrEqObj = {
            'fox'           : 220 - age.value,
            'tanaka'        : 208 - 0.7 * age.value,
            'gulati'        : 206 - 0.88 * age.value,
            'astrand'       : 216.6 - 0.84 * age.value,
            'nes'           : 211 - 0.64 * age.value,
            'fairbarnMale'  : 208 - 0.8 * age.value,
            'gelish'        : 207 - 0.7 * age.value,
        }
        return hrEqObj;
    })

    const hrMax = computed( () => {
        if (age.value && hrMaxEq.value) {
            const value =  hrMaxEqList.value[hrMaxEq.value];
            return value;
        } else {
            return null;
        }
    })

    const hrr = computed( () => {
        if(typeof hrMax.value === 'number' && rhr.value) {
            return hrMax.value - rhr.value;
        } else {
            return `Requires HR Max and Resting HR.`
        }

    })

    return { hrMaxEqList, hrMaxEq, hrMax, hrr, rhr }
})