import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CommonText from '@components/CommonText';
import SCREENS from '@constants/screens';
import FavoritesScreen from '@screens/FavoritesScreen/FavoritesScreen';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import { tabNavigatiorCommonProps } from '@style/navigatorProps';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabNavigatiorCommonProps}>
      <Tab.Screen
        name={SCREENS.Home}
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <CommonText size={11} color={color}>
              Home
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
          tabBarLabel: ({ color, focused }) => (
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
