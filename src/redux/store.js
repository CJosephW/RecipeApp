import { createStore } from 'redux';
import recipeReducer from './HomeManagementApp';

const store = createStore(recipeReducer);

export default store;