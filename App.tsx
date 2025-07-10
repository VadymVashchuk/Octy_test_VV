import { SafeAreaProvider } from 'react-native-safe-area-context';

import Root from 'src/Root';

const App = () => {
  return (
    <SafeAreaProvider>
      <Root />
    </SafeAreaProvider>
  );
};

export default App;
