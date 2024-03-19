<template>
    <div>
        <li v-for="(datos, index) in datos" :key="index"></li>
    </div>
</template>

<script setup lang="ts">
import type IStudent from '@/interfaces/IStudent';
import { useCounterStore } from '@/main';
import { useAlumnosStore } from '@/stores/alumnos';
import type { Ref } from 'vue';
import { ref } from 'vue';

const datos: any = ref([]);

const data = useAlumnosStore();
const alumnos = data.GetStudents();
alumnos.then((res) => {
    datos.value.push(res);
});

console.log(datos.value);



</script>