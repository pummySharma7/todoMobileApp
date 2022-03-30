import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {Home} from "../Pages/Home/Home";
import {Result} from "../Pages/Result/Result";

const AuthStack=createStackNavigator();

export const AuthStackComponent = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Home" component={Home} option={{title: "Home!"}}/>

      <AuthStack.Screen name="Result" component={Result} option={{title: "Result!"}}/>

    </AuthStack.Navigator>
  )
}
