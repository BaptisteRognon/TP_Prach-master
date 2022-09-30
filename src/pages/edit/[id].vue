
    <script setup lang="ts">
        import FormulaireOffreMaison from "../../components/FormulairesOffresMaison.vue";
        DefineProps(["id"]);
    </script>
    
    <template>
        <div>
            <p>Id</p>
            <FormulaireOffreMaison :id="id"/>
        </div>  
    </template>