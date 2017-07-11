import { createStore } from 'redux';
import articles from './reducers';
var store = createStore(articles);
export default store;
