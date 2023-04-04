<script setup>
import { useHrZonesStore } from '../../stores/hrZonesStore';
import { storeToRefs } from 'pinia';


const hrZonesStore = useHrZonesStore() ;
const { hrMaxZones } = storeToRefs(hrZonesStore);


const headings = Object.keys(hrMaxZones.value[0]);

</script>

<style>
table, th, td, tr {
  border: 1px solid;
  text-align: center;
  padding: 0 5px;
}


</style>


<template>
    <div>
        <h2>HRMax Zones</h2>
    </div>
    <div id="table">
        <table>
            <thead>
                <th v-for="heading in headings"> {{ heading }}</th>
            </thead>
            <tbody>
                <tr v-for="row in hrMaxZones">
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