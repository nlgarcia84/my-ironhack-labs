<template>
    
    <!-- iteracion 2.1 -->
    <div id="iteracion-1">
        <h2>Operación Matemática</h2><hr />
        <h3> {{operacionMath}}</h3>
    </div><br />

    <!-- iteracion 2.2 -->
    <div id="iteracion-2">
    <h2>{{arrowFunction()}}</h2><hr />
    </div><br />

</template>

<script setup>

//iteracion 2.1
import { ref, reactive } from "vue";
const operacionMath = ref(2 + 2);

//iteracion 2.2
const arrowFunction = () => {
    return "Esto es una string";
};

</script>