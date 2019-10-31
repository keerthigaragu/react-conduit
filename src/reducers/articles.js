// import {
//   PAGE_LOADED
// } from '../actions';

// export default function articles(state = {}, action) {
//   switch (action.type) {
//     case PAGE_LOADED:
//       return {
//         ...state,
//         tags: action.payload[0].tags,
//         articles: action.payload[1].articles,
//         articlesCount: action.payload[1].articlesCount,
//         currentPage: 0,
//       };
//     default:
//       return state;
//   }
// };