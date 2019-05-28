import React, { Component } from 'react';

import './SimilarQuestion.css'

class EmptyQuestion extends Component {

  render() {
    return (
      <div className={"empty_question_container"}>
        <div>
          <div className={"empty_similar_button"}>유사문항</div>
          <div className={"empty_text"}>버튼을 누르면</div>
        </div>  
        <div className={"empty_text"}>해당 문제의 유사 문항을 볼 수 있습니다</div>
      </div>
    )
  }
}

export default EmptyQuestion;
