import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WebViewScreen from '../screen/webViewScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <>
      <NavigationContainer  >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;
