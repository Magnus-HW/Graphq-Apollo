<script setup>
import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

import ThePerson from "@/components/ThePerson.vue";
import TheHeader from "@/components/TheHeader.vue";

const PERSONS = gql`
  query GetAllPersons {
    persons {
      id
      first_name
      last_name
      gender
      age
      email
    }
  }
`;
const { result, loading, error } = useQuery(PERSONS);
const persons = computed(() => result.value?.persons ?? []);
</script>

<template>
  <div>
    <p>Persons</p>
    <p v-if="error">{{ error }}</p>
    <p v-if="loading">Loading...</p>
    <TheHeader />
    <ThePerson v-for="person in persons" :person="person" :key="person.id" />
  </div>
</template>

<style scoped></style>
