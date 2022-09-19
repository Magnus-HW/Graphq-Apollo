<script setup></script>

<template>
  <div class="wrapper">
    <div>Id</div>
    <div>first_name</div>
    <div>last_name</div>
    <div>gender</div>
    <div>age</div>
    <div>email</div>
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
  font-weight: bold;
}
</style>
