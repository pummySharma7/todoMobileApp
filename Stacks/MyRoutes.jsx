import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackComponent } from './AuthStack';
import 'react-native-gesture-handler';

const RootStack = createNativeStackNavigator();

export const RootApplication=()=>{
  return (
    <RootStack.Navigator screenOptions={{headerShown:false}}>
      <RootStack.Screen name="Auth" component={AuthStackComponent} />
    </RootStack.Navigator>
  )
}