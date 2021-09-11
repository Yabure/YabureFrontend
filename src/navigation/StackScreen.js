import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screen/Onboarding/OnboardingScreen';
import Login from '../screen/account/Login';
import Register from '../screen/account/Register';

const Stack = createNativeStackNavigator();

function ScreenPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Onboarding" component={OnboardingScreen}  options={{ headerShown: false }}/> */}
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: true,
            title: 'SIGN UP',
            headerStyle: {
              elevation: 0,
              backgroundColor: '#fff',
              textAlign: 'center',
              shadowRadius: 0,
              borderBottomWidth: 0,
              // shadowOpacity: 0,
              shadowColor: 'transparent',
              headerHideShadow: true,
            },

            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ScreenPage;
