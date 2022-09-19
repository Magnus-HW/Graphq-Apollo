<script setup>
import DefaultPersons from "@/components/DefaultPersons.vue";
import PersonsWithEmail from "@/components/PersonsWithEmail.vue";
</script>

<template>
  <div class="wrapper1">
    <DefaultPersons />
    <PersonsWithEmail />
  </div>
</template>

<style scoped>
.wrapper1 {
  display: flex;
  gap: 20px;
}
button {
  display: inline-block;
}
</style>
