<script setup lang="ts">

import bed from "../assets/icones/bed.vue";
import bath from "../assets/icones/bath.vue";
import heart from "../assets/icones/heart.vue";
import mcarre from "../assets/icones/mcarre.vue";
   

defineProps({
      name : {type: String, default:'Bathistalovalish'                                },
      price: {type:Number, default:'2000'                                        },
      adresse: {type: String, default: '03 lotissement le pré'          },
      bed: {type:Number , default: 2                                           },
      bathroom: {type:Number , default: 2                                       },
      mcarre: {type:String , default: '6x7.5'                                    },
      fav:{ type:Boolean, default:false},
      });

</script>

<template>
  <figure>
    <!-- Pour changer la valeur d'un attribut on utilise un "binding" :
    https://vuejs.org/guide/essentials/template-syntax.html#attribute-bindings 
    Ici on affecte à l'attribut 'src' la 'props' "image" -->
    <img class="w-full h-48 object-cover" :src="image" alt="" />
    <figcaption
      class="relative flex flex-col border-2 border-t-0 border-indigo-100"
    >
      <!-- Pour changer une classe CSS en fonction d'un booléen : 
      https://vuejs.org/guide/essentials/class-and-style.html#binding-html-classes -->
      <heart :class="{ 'fill-red-300': favori }" />

      <!-- Pour afficher du contenu textuel, simplement utiliser l'interpolation par double accolades (qui contiendront le JS dont l'interpretation donne le résultat affiché). -->
      <div class="text-2xl font-bold text-indigo-500 pr-1">${{ prix }}</div>

      <h3 class="text-2xl text-gray-900">{{ nom }}</h3>

      <hr class="border-indigo-100 border-t-2 my-4" />

      <div><bath class="inline-block pr-1" />{{ nbrSDB }} Bathrooms</div>
    </figcaption>
  </figure>
</template>