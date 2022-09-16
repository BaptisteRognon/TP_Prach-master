<script setup>
    const res = await fetch(...)
    const posts = await res.json()
    </script>
    
    <template>
      {{ posts }}
    </template>