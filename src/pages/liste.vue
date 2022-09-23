<script setup lang="ts">
    import Card from "../components/card.vue";
    import Maisons from '../../public/maisons.json'   
</script>
    
    
<template>
    <div>
        <p>Liste</p>
       <Card v-for="m in Maisons" :key="m" v-bind="m"></Card>
    </div>
</template>
