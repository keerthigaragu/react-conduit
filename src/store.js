import { createStore } from 'redux';
// import reducer from './reducer';

// const defaultState = {
//   appName: 'conduit',
//   articles: null
// };
// 
// const reducer = (state = defaultState, action) => {
//   return state;
// }

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
