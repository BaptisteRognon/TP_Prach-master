<script setup lang="ts">

  import Card from "@/components/card.vue";
  const getMaisons = await fetch("./maisons.json")
  const Maisons = await getMaisons.json()
  
</script>
      
  
<template>
  <div>
      <p>Liste (Fetch)</p>
     <Card v-for="m in Maisons" :key="m" v-bind="m"></Card>
  </div>
</template>