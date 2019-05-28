import React, { Component } from 'react';
import QuestionComp from './components/question/question';
import { Provider } from 'react-redux';

import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <QuestionComp />
        </div>
      </Provider>
    )
  }
}

export default App;
