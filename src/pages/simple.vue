  <script setup lang="ts">
  import Card from "../components/card.vue";
  
  
  
    const unObjet = {
        price: "4800", 
        name: "YugiMuto",
        adresse: "122 Elm Street",
        bed: 7,
        bathroom: "4",
        mcarre: "69"
  
  }
 
  </script>
  
  <template>
      <div>
          <p>Simple</p>
          <Card></Card>
          <Card v-bind="{name: 'KaibaMan', price:' 3000', adresse:'25 du masterduel', bed:'90', bathroom: '30', mcarre:'50'}"></Card>
          <Card v-bind="unObjet"></Card>
      </div>
  </template>
  