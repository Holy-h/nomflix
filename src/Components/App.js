import React, { Component } from "react";
import Router from "Components/Router";
import { ApolloProvider } from "react-apollo";
import client from "../graphql/apolloClient.js";
import GlobalStyles from "Components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router />
        <GlobalStyles />
      </ApolloProvider>
    );
  }
}

export default App;
