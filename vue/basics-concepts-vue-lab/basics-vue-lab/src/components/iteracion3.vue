<template>
<div id="iteracion-3">
        <h2>Muestra por página si el elemento es true</h2><hr />
        <h3 v-if="elemento">El elemento 1 es true</h3>
        <h3 v-else></h3>
    </div><br />

</template>

<script setup>
import { ref, reactive } from "vue";

const elemento = ref(true);

</script>