import { 
  FETCH_QUESTIONS,
  FETCH_SIMILAR_QUESTIONS,
  SET_ACTIVE_QUESTION_NUMBER
} from './types';

import axios from 'axios';

export const fetchQuestions = (list = []) => dispatch => {
  if(list.length === 0) {
    axios.get('data/fe-problems.json').then(res => {
      dispatch({ 
        type: FETCH_QUESTIONS,
        payload: res.data.data
      })
    })
  } else {
    dispatch ({
      type: FETCH_QUESTIONS,
      payload: list
    })
  }
}

export const fetchSimilarQuestions = (list = []) => dispatch => {
  if(list.length === 0) {
    axios.get('data/fe-similars.json').then(res => {
      dispatch({ 
        type: FETCH_SIMILAR_QUESTIONS,
        payload: res.data.data
      })
    })
  } else {
    dispatch ({
      type: FETCH_SIMILAR_QUESTIONS,
      payload: list
    })
  }
}

export function setActiveQuestionNo(index) {
  return {
      type: SET_ACTIVE_QUESTION_NUMBER,
      payload: index
  }
}