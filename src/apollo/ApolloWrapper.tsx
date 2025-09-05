"use client"; // Must be client component

import { ApolloProvider } from "@apollo/client";
import { client } from "./client";

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
