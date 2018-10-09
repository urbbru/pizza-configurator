import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import store from './store'
import {Provider} from 'react-redux'
import PizzaConfigContainer from './components/PizzaConfigContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
              <div id="app">
                <PizzaConfigContainer />     
              </div>
      </Provider>
    );
  }
}

export default App;
