import useConfigureStyles from '@hooks/useConfigureStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { API_URL, API_KEY } from '@env';
import Root from 'src/Root';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: API_URL,
  headers: {
    Authorization: `ApiKey ${API_KEY}`,
  },
  cache: new InMemoryCache(),
});

const App = () => {
  useConfigureStyles();

  return (
    <ApolloProvider client={apolloClient}>
      <SafeAreaProvider>
        <Root />
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;
