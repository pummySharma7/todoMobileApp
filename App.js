import {Provider} from "react-redux";
import {store} from "./Redux/store";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {RootApplication} from "./Stacks/MyRoutes";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <RootApplication/>
      </NavigationContainer>
    </Provider>
  );
}

