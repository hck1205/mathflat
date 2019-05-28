import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/questionActions';

import './question.css';

class QuestionComp extends Component {

  componentWillMount() {
    this.props.fetchQuestions();
  }

  render() {
    const questionItems = this.props.questions === undefined ? <div></div> :
    this.props.questions.map(question => (
      <div className={"question"} key={question.id}>
        <div>
          <div className={"question_header"}>
            <div className={"question_type"}>
              {question.problemType}
            </div>
            <div className={"question_type_name"}>
              {question.unitName}
            </div>
          </div>
          <div className="question_container">
            <div className={"question_level"}>{question.problemLevel}</div>
            <img className={"question_url"} src={question.problemURL}></img>
          </div>
        </div>
      </div>
    ));
    
    return (
      <div>
        <div className="question_title">
            <p>학습지 상세편집</p>
        </div>
        <React.Fragment>
          {questionItems}
        </React.Fragment>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.questions.items.data
});

export default connect(mapStateToProps, { fetchQuestions })(QuestionComp);
