<template>
  <nav>
    <h4 class="text-xl">
      <Bars3Icon class="inline-block h-5 w-5 text-blue-500" />
    Menu</h4>
    <ul>
      <li>
        <router-link class="text-red-600 underline" to="/">
          <code class="font-mono">/src/pages/index.vue</code>
        </router-link>
      </li>
      <li>
        <router-link class="text-red-600 underline" to="/simple">
          <code class="font-mono">/src/pages/simple.vue</code>
        </router-link>
      </li>
      <li>
        <router-link class="text-red-600 underline" to="/liste">
          <code class="font-mono">/src/pages/liste.vue</code>
        </router-link>
      </li>
        <li>
        <router-link class="text-red-600 underline" to="/liste-fetch">
          <code class="font-mono">/src/pages/liste-fetch.vue</code>
        </router-link>
      </li>
      <li>
        <router-link class="text-red-600 underline" to="/offre/1">
          <code class="font-mono">/src/offre/nbr.vue</code>
        </router-link>
      </li>
      <li>
        <router-link class="text-red-600 underline" to="/offre/2">
          <code class="font-mono">/src/offre/nbr2.vue</code>
        </router-link>
      </li>
      <li>
        <router-link class="text-red-600 underline" to="/edit/new">
          <code class="font-mono">/src/pages/edit/new.vue</code>
        </router-link>
        <li>
        <router-link class="text-red-600 underline" to="/liste-supabase">
          <code class="font-mono">/src/pages/liste-supabase</code>+
        </router-link>
      </li>
      <li>
        <router-link class="text-red-600 underline" to="/edit/id">
          <code class="font-mono">/src/pages/edit/id</code>
        </router-link>
      </li>
      <li>
        <router-link class="text-red-600 underline" to="/login-logout">
          <code class="font-mono">/src/pages/login-logout</code>
        </router-link>
      </li>
      </li>
    </ul>
  </nav>

  <!-- Affiche les pages -->
  <Suspense>
      <router-view class="m-2 border-2 p-2" />
      <template #fallback>
         Chargement ...
      </template>
  </Suspense>
</template>

<script setup lang="ts">
  import { Bars3Icon } from '@heroicons/vue/20/solid'
</script>
