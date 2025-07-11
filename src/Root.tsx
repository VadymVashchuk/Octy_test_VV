import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CommonText from '@components/CommonText';
import SCREENS from '@constants/screens';
import FavoritesScreen from '@screens/FavoritesScreen/FavoritesScreen';
import { tabNavigatiorCommonProps } from '@style/navigatorProps';
import RatesScreen from '@screens/RatesScreen/RatesScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabNavigatiorCommonProps}>
      <Tab.Screen
        name={SCREENS.Rates}
        component={RatesScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <CommonText size={11} color={color}>
              Rates
            </CommonText>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.Favorites}
        component={FavoritesScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <CommonText size={11} color={color}>
              Favorites
            </CommonText>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name={focused ? 'heart' : 'heart-outline'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Root = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Root;
