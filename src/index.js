import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import App from "./components/App/App";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer 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`,
  },
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
