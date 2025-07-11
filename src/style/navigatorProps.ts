import COLORS from './colors';
import SHADOWS from './shadows';

export const tabNavigatiorCommonProps = {
  tabBarActiveTintColor: COLORS.white,
  tabBarInactiveTintColor: COLORS.lightGray,
  headerShown: false,
  tabBarStyle: {
    borderTopWidth: 0,
    backgroundColor: COLORS.primary,
    ...SHADOWS.topPrimary,
  },
};
