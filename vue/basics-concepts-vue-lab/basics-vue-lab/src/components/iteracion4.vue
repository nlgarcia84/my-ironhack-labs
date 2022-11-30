<template>
        <h2>Publicaciones</h2><hr />

    <div id="iteracion-4" v-for="(publicacion, index) in publicaciones" :key="index">
        <h4>{{ index }} - {{ publicacion.titulo }}</h4>
        <h3>{{ publicacion.descripcion }}</h3>
        <h5>{{ publicacion.contenido }}</h5>
    </div>
    <hr /><br />


</template>

<script setup>

import { ref, reactive } from "vue";

const publicaciones = reactive([
    {
        titulo: "publicación 1",
        descripcion: "descripción numero 1",
        contenido: "contenido numero 1",
    },
    {
        titulo: "publicación 2",
        descripcion: "descripción numero 2",
        contenido: "contenido numero 2",
    },
    {
        titulo: "publicación 3",
        descripcion: "descripción numero 3",
        contenido: "contenido numero 3",
    },
]);

</script>