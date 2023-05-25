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
