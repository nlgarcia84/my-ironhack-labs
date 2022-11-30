<template>
    <h1>iteration 5</h1>
    <div class="container" :class="colorBoolean ? 'is-red' : 'is-orange'">
        <h3>toggleamos entre 2 colores usando ternario</h3>
        <button @click="changeColorFunction()">Click Me to toogle the color</button><br />
    </div>
 
  
</template>

<script setup>
import { ref } from "vue";

const colorBoolean = ref(true);

const changeColorFunction = () => {
    colorBoolean.value = !colorBoolean.value;
    console.log(colorBoolean.value);
}



</script>

<style scoped>

.container {
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 2rem;
    margin: 2rem;
}

.is-red{
    background: red;
}

.is-orange{
    background:orange;
}
</style>