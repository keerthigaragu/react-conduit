import React from 'react';
import Header from './Header';
import Banner from './Banner';
import { connect } from 'react-redux';
import FeedView from './FeedView';
import { PAGE_LOADED } from './actions';
import agent from './agent';

// const mapStateToProps = state => ({
//   appName: state.appName,
//   articles: state.articles
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     onLoad: (payload) => {
//       console.log("-------", payload);
//       dispatch({ type: PAGE_LOADED, payload })
//     }
//   }
// };

class App extends React.Component {
  // componentWillMount() {
  //   this.props.onLoad(Promise.all([agent.Tags.getAll(), agent.Articles.all()]));
  // }
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        <Banner appName={this.props.appName} />
        <FeedView />
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
