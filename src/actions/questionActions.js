import { FETCH_QUESTIONS } from './types';
import axios from 'axios';

export const fetchQuestions = () => dispatch => {
  axios.get('data/fe-problems.json').then(res => {
    dispatch({ 
      type: FETCH_QUESTIONS,
      payload: res.data
    })
  })
}
