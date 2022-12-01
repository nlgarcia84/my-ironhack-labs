<template>
    <span class="timestamp">{{ props.time }}</span>

</template>

<script setup>
const props = defineProps({
    time: String,
});

</script>

