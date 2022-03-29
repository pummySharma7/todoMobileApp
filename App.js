import {Provider} from "react-redux";
import {Home} from "./Pages/Home/Home";
import {store} from "./Redux/store";


export default function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

