import React from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CommonText from '@components/CommonText';
import { useQuotesStore } from '@store/quotesStore';
import appStyles from '@style/appStyles';
import COLORS from '@style/colors';
import SHADOWS from '@style/shadows';
import { getFormattedDate } from '@tools/dates';

type HeaderProps = {
  refreshQuotes: () => void;
};

const Header = ({ refreshQuotes }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const lastUpdated = useQuotesStore((store) => store.lastUpdated);

  return (
    <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
      <StatusBar animated={true} barStyle="light-content" />
      <View style={appStyles.flex1}>
        <CommonText size={24} bold color={COLORS.white} marginBottom={6}>
          Exchange rates
        </CommonText>
        {!!lastUpdated && (
          <CommonText size={11} color={COLORS.almostWhite}>
            Last updated:{' '}
            <CommonText size={12} color={COLORS.white} bold>
              {getFormattedDate(lastUpdated)}
            </CommonText>
          </CommonText>
        )}
      </View>
      <TouchableOpacity onPress={refreshQuotes}>
        <MaterialCommunityIcons name={'update'} color={COLORS.white} size={36} />
      </TouchableOpacity>
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
