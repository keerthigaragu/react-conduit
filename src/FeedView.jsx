import React from 'react';
import agent from './agent';
import './feedview.scss';
import ArticlesList from './ArticlesList';
import Tags from './Tags';

const Promise = global.Promise;

class FeedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: null,
      articles: null
    };
  }
  componentWillMount() {
    Promise.all([agent.Tags.getAll(), agent.Articles.all()]).then(data => {
      this.setState({
        tags: data[0].tags,
        articles: data[1].articles
      })
    });
  }
  render() {
    console.log(this.state)
    return (
      <div className='feeds'>
        <div className='global-feed-nav'>
          <nav>
            <a> Global Feed </a>
          </nav>
          <ArticlesList articles={this.state.articles} />
        </div>
        <div className='popular-tags'>
          Popular Tags
          <Tags tags={this.state.tags} />
        </div>
      </div>
    );
  }
}
// const GlobalFeedTab = props => {
//   const clickHandler = event => {
//     event.preventDefault();
//     props.onTabClick('all', agent.Articles.all, agent.Articles.all());
//   };
//   return (
//     <li className="nav-item">
//       <a
//         href=""
//         onClick={clickHandler}>
//         Global Feed
//       </a>
//     </li>
//   );
// };

// const mapDispatchToProps = dispatch => ({
//   onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_TAB, tab, pager, payload })
// });



export default FeedView;