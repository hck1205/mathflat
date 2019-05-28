import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  fetchQuestions, 
  fetchSimilarQuestions, 
  setActiveQuestionNo
} from '../../actions/questionActions';

import './Question.css';

class Question extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeNo: 0
    }
  }

  componentWillMount() {
    this.props.fetchQuestions();
  }

  setActiveNo(index) {
    if(this.props.similarQuestions.length === 0) {
      this.props.fetchSimilarQuestions();
    }
    this.props.setActiveQuestionNo(index);
    this.setState({
      activeNo: index
    });
  }

  getActiveClass(index) {
    if(index > 0) {
      return this.state.activeNo === index ? "active" : "";
    } else {
      return "";
    }
  }

  render() {
    const questionItems = this.props.questions === undefined ? <div></div> :
    this.props.questions.map((question, index) => (
      <div className={"question_container"} key={index}>
        <div>
          <div className={"question_header"}>
            <div className={"question_type"}>
              {question.problemType}
            </div>
            <div className={"question_type_name"}>
              {question.unitName}
            </div>
            <div className={"similar_chk_btn " + this.getActiveClass(index+1)} onClick={(e)=>this.setActiveNo(index+1)}>
              {"유사문항"}
            </div>
            <div className={"delete_btn"}>{"삭제"}</div>
          </div>
          <div className="question_body">
            <div className={"question_level"}>{index + 1}</div>
            <img className={"question_url"} src={question.problemURL} alt={"mathematics"}></img>
          </div>
        </div>
      </div>
    ));
    
    return (
      <div className={"questions_container"}>
        <div className="question_title">
          <p>학습지 상세편집</p>
        </div>
        <React.Fragment>
          { questionItems }
        </React.Fragment>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.questions.questionItems,
  similarQuestions: state.questions.similarQuestionItems
});

export default connect(mapStateToProps, { 
  fetchQuestions,
  fetchSimilarQuestions,
  setActiveQuestionNo
})(Question);
