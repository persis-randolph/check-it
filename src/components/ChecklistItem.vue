<script setup>
const props = defineProps({
    itemId: String,
    itemName: String
})
</script>

<template>
    <li>{{ itemName }}</li>
</template>