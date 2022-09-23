<script setup lang="ts">

import Bed from "../assets/icones/bed.vue";
import Bath from "../assets/icones/bath.vue";
import Heart from "../assets/icones/heart.vue";
import Mcarre from "../assets/icones/mcarre.vue";
   

defineProps({
      name : {type: String, default:'Bathistalovalish'               },
      price: {type:Number, default:'2000'                            },
      adresse: {type: String, default: '03 lotissement le pré'       },
      bed: {type:Number , default: 2                                 },
      bathroom: {type:Number , default: 2                            },
      mcarre: {type:String , default: '6x7.5'                        },
      fav:{ type:Boolean, default:false                              },
      });

</script>

<template>
 <figure class="flex flex-col mt-12 mx-8 w-96">
    <img src="../../public/house2.png" alt="house" class="rounded-t-lg w-full h-48 object-cover"/>
    
    <figcaption class="
        flex
        w-full
        flex-col
        gap-4
        rounded-b
        border border-indigo-50
        py-7
        px-5">

      <div class="flex justify-between">
        <div class="w-2/5">
          <div class="flex items-center">
            <p class="text-2xl font-bold text-indigo-500"></p>
            <span class="text-xs font-normal text-gray-900">{{price}} /month</span>
          </div>
          <p class="text-2xl font-bold">{{name}}</p>
        </div>
       
        <div class="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border-2 border-indigo-100">
          <Heart class="h-6 stroke-indigo-500 text-transparent" :class="{'fill-red-500 stroke-red-800' :fav}"></Heart>
        </div>
      </div>

      <p class="text-base font-normal text-gray-900">{{adresse}}</p>
      
      <div class="w-full border border-indigo-50"></div>
      
      <div class="flex justify-between">
        <div class="flex items-center gap-2">
          <Bed class="h-5 stroke-indigo-500"></Bed>
          <span class="text-xs text-gray-500">{{bed}} Lits</span>
        </div>
        <div class="flex items-center gap-2">
          <bath class="h-5 stroke-indigo-500"></Bath>
          <span class="text-xs text-gray-500">{{bathroom}} Chambre</span>
        </div>
        <div class="flex items-center gap-2">
          <mcarre class="h-5 stroke-indigo-500"></Mcarre>
          <span class="text-xs text-gray-500">{{mcarre}} m²</span>
        </div>
      </div>

    </figcaption>
  </figure>
</template>