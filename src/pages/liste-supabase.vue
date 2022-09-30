<script setup lang="ts">

import Card from "@/components/card.vue";
import { supabase } from "../supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const Maisons = []; // à remplacer par l'appel à Supabase
  

let { data, error } = await supabase
  .from('Maison')
  .select('*')
  
</script>
      
  
<template>
  <div>
      <p>Liste (Supabase)</p>
     <Card v-for="m in data" :key="m" v-bind="m"></Card>
  </div>
</template>