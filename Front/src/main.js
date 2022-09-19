import "./assets/main.css";
import { createApp, provide, h } from "vue";
import App from "./App.vue";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:4000",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.mount("#app");

// or by using apollo client
// import "./assets/main.css";
// import { createApp } from "vue";
// import App from "./App.vue";
// import ApolloClient from "apollo-boost";
// import { provideApolloClient } from "@vue/apollo-composable";

// const apolloClient = new ApolloClient({
//   // You should use an absolute URL here
//   uri: "http://localhost:4000/",
// });

// provideApolloClient(apolloClient);
// createApp(App).mount("#app");
