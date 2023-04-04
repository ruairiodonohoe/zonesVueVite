<script setup>
import { useHrZonesStore } from '../../stores/hrZonesStore';

import { storeToRefs } from 'pinia';


const hrZonesStore = useHrZonesStore() ;
const { hrrZones } = storeToRefs(hrZonesStore);


const headings = Object.keys(hrrZones.value[0]);



</script>

<style>
table, th, td, tr {
  border: 1px solid;
}


</style>


<template>
    <div id="table">
        <h2>HRR Zones</h2>
        <table>
            <thead>
                <th v-for="heading in headings"> {{ heading }}</th>
            </thead>
            <tbody>
                <tr v-for="row in hrrZones">
                    <td v-for="heading in headings "> {{ row[heading] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<!--
    for (const [index, row] of acsmZones) {
    console.log(index);
    console.log(row);
    for (let [key, value] of Object.entries(row)) {
        if ( key === 'lowerPc') {
            console.log(acsmZones[row]);
        }
    }
}
-->