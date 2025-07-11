import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { API_KEY, API_URL } from '@env';
import useConfigureStyles from '@hooks/useConfigureStyles';
import Root from 'src/Root';

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
