<script setup>
import { computed } from "vue";
import { useLazyQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

import ThePerson from "@/components/ThePerson.vue";
import TheHeader from "@/components/TheHeader.vue";

const PERSONS_WITH_EMAIL = gql`
  query GetPersonsWithEmail {
    personsWithEmail {
      id
      first_name
      last_name
      gender
      age
      email
    }
  }
`;

const { result, loading, error, load } = useLazyQuery(PERSONS_WITH_EMAIL);

const personsWithEmail = computed(() => result.value?.personsWithEmail ?? []);
</script>

<template>
  <div class="personsWithEmail">
    <p>Persons with email</p>
    <button @click="load()">Load list</button>
    <TheHeader />
    <p v-if="error">{{ error }}</p>
    <p v-if="loading">Loading...</p>
    <ThePerson
      v-for="person in personsWithEmail"
      :person="person"
      :key="person.id"
    />
  </div>
</template>
<style>
p {
  display: inline-block;
  margin-right: 10px;
}
button {
  display: inline-block;
}
</style>
