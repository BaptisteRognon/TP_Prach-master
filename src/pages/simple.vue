<script setup lang="ts">
import Card from "../components/card.vue";
    
    
  const props = defineProps({
    foo:String
  });

  const desObjets= [{nom:"une card de maison",
  prix: 45,
  favori: false,
  image: "./une.jpg", 
  nbrSDB: "number",},

  {nom:"card",
  prix: "number",
  favori: "Boolean",
  image: "./une.jpg",
  nbrSDB: "number",}
];

  </script>

<template >
  <div class="p-2">
     <h2>Page simple</h2>
     <Card v-for="unObjet of desObjets" v-bind="unObjet" :key="unObjet.nom"/>

     <!--- <card v-bind="desObjets[0]"/>
           card v-bind="desObjets[1]"/>-->
  </div>
</template>
