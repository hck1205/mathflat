import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmptyQuestion from './EmptyQuetion'

import { 
  fetchQuestions,
  fetchSimilarQuestions
} from '../../actions/questionActions';

import './SimilarQuestion.css';

class SimilarQuestion extends Component {

  exchangeQuestion(index) {
    let activeQuestionNo = this.props.activeQuestionNo;

    let questionToExchange = Object.assign({}, this.props.questions[activeQuestionNo-1]);
    let similarQuestionToExchange = Object.assign({}, this.props.similarQuestions[index]);
    
    let newSimilarQuestionArr = [...this.props.similarQuestions];
    let newQuestionArr = [...this.props.questions];
    this.props.similarQuestions[index] = questionToExchange

    newSimilarQuestionArr[index] = questionToExchange
    newQuestionArr[activeQuestionNo-1] = similarQuestionToExchange

    this.props.fetchQuestions(
      newQuestionArr
    )
    
    this.props.fetchSimilarQuestions(
      newSimilarQuestionArr
    )
  
  }

  render() {
    const questionItems = this.props.similarQuestions === undefined ? <EmptyQuestion /> :
    this.props.similarQuestions.map((question, index) => (
      <div className={"question_container"} key={index}>
        <div>
          <div className={"question_header"}>
            <div className={"question_type"}>
              {question.problemType}
            </div>
            <div className={"question_type_name"}>
              {question.unitName}
            </div>
            <div className={"similar_btn"}>
              {"추가"}
            </div>
            <div className={"exchange_btn"} onClick={(e)=>this.exchangeQuestion(index)}>
              {"교체"}
            </div>
          </div>
          <div className="question_body">
            <div className={"question_level"}>{index+1}</div>
            <img className={"question_url"} src={question.problemURL} alt={"mathematics"}></img>
          </div>
        </div>
      </div>
    ));
    
    return (
      <div className={"similarQuestions_container"}>
        <div className="similar_question_title">
          <p>문항 교체/추가</p>
        </div>
        <React.Fragment>
          { questionItems }
        </React.Fragment>
      </div>
    )
  }
}

const mapStateToProps = state =>  {
  return ({
    similarQuestions: state.questions.similarQuestionItems,
    questions: state.questions.questionItems,
    activeQuestionNo: state.questions.activeQuestionNo
  });
}

export default connect(mapStateToProps, {
  fetchQuestions,
  fetchSimilarQuestions
})(SimilarQuestion);