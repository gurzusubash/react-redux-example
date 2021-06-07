import { Provider } from "react-redux";

import CakeComponent from "./components/cake-container/cake.component";
import store from "./redux/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponent />
      </div>
    </Provider>
  );
}

export default App;
