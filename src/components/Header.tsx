import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import COLORS from '@style/colors';
import CommonText from './CommonText';
import SHADOWS from '@style/shadows';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
      <StatusBar animated={true} barStyle="light-content" />
      <CommonText size={24} bold color={COLORS.white} > 
        {title}
      </CommonText>
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
  },
});

export default Header;
