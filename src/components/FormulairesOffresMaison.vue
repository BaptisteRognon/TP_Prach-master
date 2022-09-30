<script setup lang="ts">

    import card from "@/components/card.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
    
    const maison = ref({});
    const props = defineProps(["id"]);
if (props.id) {
 // On charge les données de la maison
 let { data, error } = await supabase
 .from("Maison")
 .select("*")
 .eq("id", props.id);
 if (error) console.log("n'a pas pu charger le table Maison :", error);
 else maison.value = (data as any[])[0];
}
    
    async function upsertMaison(dataForm, node) {
 const { data, error } = await supabase.from("Maison").upsert(dataForm);
 if (error) node.setErrors([error.message])

 else {
 node.setErrors([]);
 router.push({ name: "edit-id", params: { id: data[0].id } });
 }
}

</script> 
    
    <template>
        <div>
            <div class="p-2">
                <h2 class="text-2xl">Formulaire</h2>
                <card v-bind="maison"/>
            </div>
            <div class="p-2">

                <FormKit type="form" @submit="upsertMaison" v-model="maison" :config="{classes: 
                {input: 'p-1 rounded border-gray-300 shadow-sm border',label: 'text-gray-600',},}" 
                :submit-attrs="{ classes:
                { input: 'bg-red-300 p-1 rounded' } }">

                    <FormKit name="name" label="nom"/>
                    <FormKit name="adresse" label="adresse" />
                    <FormKit name="bed" label="Nombre de lits" type="number"/>
                    <FormKit name="bathroom" label="Nombre de salle de bain" type="number"/>
                    <FormKit name="mcarre" label="m²" type="number"/>
                    <FormKit name="price" label="prix" type="number"/>
                    <FormKit name="fav" label="mettre en favoris" type="checkbox" wrapper-class="flex"/>
                    
                </FormKit>
            </div>
        </div>
    </template>