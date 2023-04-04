import { useHrStore } from './hrStore';
import { computed, ref } from 'vue';
import { storeToRefs, defineStore } from 'pinia';

export const useHrZonesStore = defineStore('hrZones', () => {

    const hrStore = useHrStore();
    const { hrMax, rhr, hrr} = storeToRefs(hrStore);

    const hrMaxZones = computed( () => {
        
        const newBpm = (pc) => {
            if (hrMax.value === null) {
                return pc;
            } else {
                return Math.round(pc * hrMax.value);
            }
        }

        return [
            { name: 'very Light',   zone: 1,    lower: newBpm(0),     upper: newBpm(0.57)   },
            { name: 'light',        zone: 2,    lower: newBpm(0.57),  upper: newBpm(0.64)   },
            { name: 'moderate',     zone: 3,    lower: newBpm(0.64),  upper: newBpm(0.77)   },
            { name: 'vigorous',     zone: 4,    lower: newBpm(0.77),  upper: newBpm(0.96)   },
            { name: 'maximum',      zone: 5,    lower: newBpm(0.96),  upper: newBpm(1)      }
        ]
    });

    const hrrZones = computed( () => {
        const newBpm = (pc) => {
            if (hrMax.value === null) {
                return pc;
            } else {
                return Math.round(rhr.value + (pc * hrr.value));
            }
        }
       
        return [
            { name: 'very Light',   zone: 1,    lower: newBpm(0),     upper: newBpm(0.3)   },
            { name: 'light',        zone: 2,    lower: newBpm(0.3),   upper: newBpm(0.4)   },
            { name: 'moderate',     zone: 3,    lower: newBpm(0.4),   upper: newBpm(0.6)   },
            { name: 'vigorous',     zone: 4,    lower: newBpm(0.6),   upper: newBpm(0.9)   },
            { name: 'maximum',      zone: 5,    lower: newBpm(0.9),   upper: newBpm(1)      }
        ]
    })

    return { hrMaxZones, hrrZones}
})


