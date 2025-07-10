import { useEffect } from 'react';
import { Platform, StatusBar, Text, TextInput } from 'react-native';

const useConfigureStyles = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }

    if (Text.defaultProps == null) {
      Text.defaultProps = {};
    }
    if (TextInput.defaultProps == null) {
      TextInput.defaultProps = {};
    }
    Text.defaultProps.allowFontScaling = false;
    TextInput.defaultProps.allowFontScaling = false;
  }, []);
};

export default useConfigureStyles;
