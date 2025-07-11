import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CommonText from '@components/CommonText';
import appStyles from '@style/appStyles';
import COLORS from '@style/colors';
import SHADOWS from '@style/shadows';

const Header = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
      <StatusBar animated={true} barStyle="light-content" />
      <View style={appStyles.flex1}>
        <CommonText size={24} bold color={COLORS.white} marginBottom={6}>
          Favorite pairs
        </CommonText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingBottom: 16,
    zIndex: 1,
    ...SHADOWS.bottomPrimary,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
