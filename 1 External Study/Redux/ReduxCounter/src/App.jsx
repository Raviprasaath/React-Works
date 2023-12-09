import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducers from "./reducers";
import Child1 from "./Child1";
import Child2 from "./Child2";

const store = createStore(rootReducers);

function App() {
  return (
    <Provider store={store}>
      <>
        <Child1 />
        <br />
        <Child2 />
      </>
    </Provider>
  );
}

export default App;
 