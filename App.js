import React, { useCallback } from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    OswaldRegular: require('./src/font/Oswald-Regular.ttf'),
    OswaldSemiBold: require('./src/font/Oswald-SemiBold.ttf'),
    OswaldMedium: require('./src/font/Oswald-Medium.ttf'),
    OswaldBold: require('./src/font/Oswald-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  };

  return (
      <AppNavigation />
  );
};
