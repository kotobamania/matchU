import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import ChatDetailsScreen from '../screens/ChatDetailsScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = "home";
            } else if (route.name === 'Chat') {
              iconName = "chatbubbles-outline";
            } else if (route.name === 'Account') {
              iconName = "person-outline";
            }
            const customizeSize = 25;
            return (
              <Ionicons
                name={iconName}
                size={customizeSize}
                color={focused ? "#3b82f6" : "gray"}
              />
            );
          },

          tabBarActiveTintColor: "#3b82f6",
          tabBarLabelStyle: {
            fontWeight: "bold",
          },
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "white",
          },

        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Account" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='WelcomeScreen'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatDetailsScreen"
          component={ChatDetailsScreen}
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="ProfileDetailsScreen"
          component={ProfileDetailsScreen}
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}