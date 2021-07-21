import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
	createHttpLink,
  makeVar
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';
import getAuthenticatedUser from './utils/getAuthenticatedUser';
import setAuthenticatedUser from './utils/setAuthenticatedUser';

const myReactiveVariable = makeVar({
	authenticated: false,
})

const httpLink = createHttpLink({
		uri: `${process.env.REACT_APP_GRAPHQL_URI}`,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
			message === 'Unauthenticated.' ? handleAuthenticationError : console.error(message)
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const handleAuthenticationError = () => {
	setAuthenticatedUser({ token: '' });
}

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getAuthenticatedUser();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
	link: errorLink.concat(authLink.concat(httpLink)),
  connectToDevTools: true,
  cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					myReactiveVariable: {
						read() {
							return myReactiveVariable();
						}
					}
				}
			}
		}
	}),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
