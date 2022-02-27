import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import Count from './components/count'
import Todos from './components/todos'
import Users from './components/products'

function App() {
  return (
    <Provider store={store}>
      <Count/>
      <hr/>
      <Todos/>
      <hr/>
      <Users/>
    </Provider>
  );
}

export default App;
