import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';


// Import the screens
import HomeScreen from './Screens/Home';
import DetailsScreen from './Screens/Search';
import FavoritesScreen from './Screens/Favorites';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();
//const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart-outline';
            }

            // Return the icon
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name ="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}