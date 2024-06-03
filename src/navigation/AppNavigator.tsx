import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import CertiScreen from "../screens/CertiScreen";
import BackButton from "../components/BackButton";


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{
            headerLeft: () => <BackButton />,
          }}
          />
          <Stack.Screen 
          name="Certification" 
          component={CertiScreen}
          options={{
            headerLeft: () => <BackButton />,
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default AppNavigator;