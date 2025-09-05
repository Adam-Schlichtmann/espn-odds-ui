"use client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const GRAPHQL_URL = "http://localhost:4000/graphql";

// 2️⃣ Create the Apollo client
export const client = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHQL_URL,
    credentials: "same-origin",
  }),
  cache: new InMemoryCache(),
});
