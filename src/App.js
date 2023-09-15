import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Components/Store';
import Addtask from './Components/Addtask';
import Todotask from './Components/Todotask';



function App() {
  return (
   <Provider store={store}>
    <div >

<Addtask />
<Todotask />
    </div>
   </Provider>
  );
}

export default App;
