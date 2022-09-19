<script setup>
defineProps({
  person: {
    id: {
      type: Number,
      reqired: true,
    },
    first_name: {
      type: String,
      reqired: true,
    },
    last_name: {
      type: String,
      reqired: true,
    },
    gender: {
      type: String,
      reqired: true,
    },
    age: {
      type: String,
      reqired: true,
    },
    email: {
      type: String,
    },
  },
});
</script>

<template>
  <div class="wrapper">
    <div>{{ person.id }}</div>
    <div>{{ person.first_name }}</div>
    <div>{{ person.last_name }}</div>
    <div>{{ person.gender }}</div>
    <div>{{ person.age }}</div>
    <div>{{ person.email ?? "---" }}</div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 700px;
  display: grid;
  grid-template-columns: 40px repeat(3, minmax(60px, 130px)) 40px minmax(
      50px,
      1fr
    );
  border-bottom: 1px solid gray;
}
</style>
