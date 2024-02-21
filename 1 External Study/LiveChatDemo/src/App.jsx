import LiveChat from "./Components/LiveChat"
import { Provider } from 'react-redux';
import store from "./store";
function App() {

  return (
    <>
      <Provider store={store}>
        <LiveChat />
      </Provider>
    </>
  )
}

export default App