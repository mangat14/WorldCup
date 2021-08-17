import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
const Stack = createStackNavigator();
function AppNavigation(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="LoginScreen" component={LogIn} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
