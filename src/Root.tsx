import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SCREENS from '@constants/screens';
import FavoritesScreen from '@screens/FavoritesScreen/FavoritesScreen';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { tabNavigatiorCommonProps } from '@style/navigatorProps';
import useConfigureStyles from '@hooks/useConfigureStyles';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabNavigatiorCommonProps}>
      <Tab.Screen
        name={SCREENS.Home}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Головна',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.Favorites}
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Улюблені',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name={focused ? 'heart' : 'heart-outline'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Root = () => {
  useConfigureStyles();

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Root;
