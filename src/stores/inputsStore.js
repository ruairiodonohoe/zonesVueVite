import { ref, computed } from "vue";
import { defineStore } from "pinia";


export const useInputsStore = defineStore('inputs', () => {
    const firstName = ref('');
    const lastName  = ref('');
    const age       = ref(null);
    const sex       = ref('');
    const weight    = ref(null);
    const height    = ref(null);

    const fullName = computed( () => {
        const full = `${firstName.value} ${lastName.value}`;
        return full;
    })

    const bmi = computed( () => {
        if (height.value && weight.value) {
            let bmi = weight.value / ((height.value / 100) ** 2);
            bmi = bmi.toFixed(2);
            return bmi;
        } else {
            return 'Enter height and weight.';
        }
    });


    function $reset() {
        firstName.value = '';
        lastName.value = '';
        age.value = '';
        sex.value = '';
        weight.value = '';
        height.value = '';
      }
     
    return { firstName, lastName, fullName, age, sex, weight, height, bmi, $reset };
});

