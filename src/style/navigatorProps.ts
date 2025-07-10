import COLORS from './colors';
import SHADOWS from './shadows';

export const tabNavigatiorCommonProps = {
  tabBarActiveTintColor: COLORS.primary,
  tabBarInactiveTintColor: COLORS.lightGray,
  headerShown: false,
  tabBarStyle: {
    backgroundColor: COLORS.white,
    ...SHADOWS.topSmall,
  },
};
