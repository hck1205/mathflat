import React, { Component } from 'react';
import QuestionComp from './components/question/Question';
import SimilarQuestion from './components/similarQuestion/SimilarQuestion';
import { Provider } from 'react-redux';

import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <QuestionComp />
          <SimilarQuestion />
        </div>
      </Provider>
    )
  }
}

export default App;
