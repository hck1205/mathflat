import { 
  FETCH_QUESTIONS,
  FETCH_SIMILAR_QUESTIONS,
  SET_ACTIVE_QUESTION_NUMBER
} from '../actions/types';

const initialState = {
  questionItems: [],
  similarQuestionItems: [],
  activeQuestionNo: 0
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUESTIONS: 
      return {
        ...state,
        questionItems: action.payload
      }
      
    case FETCH_SIMILAR_QUESTIONS: 
      return {
        ...state,
        similarQuestionItems: action.payload
      }

    case SET_ACTIVE_QUESTION_NUMBER: 
      return {
        ...state, 
        activeQuestionNo: action.payload
      }

    default: 
      return state;
  }
}