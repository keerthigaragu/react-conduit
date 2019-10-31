import React from 'react';
import Article from './Article';

const ArticlesList = props => {
  console.log("Props in articles", props)
  return (
    props.articles ?
      <div className='articles-list'>
        {
          props.articles.map(article => {
            return (
              <Article article={article} key={article.slug} />
            );
          })
        }
      </div>
      :
      null
  );
}

export default ArticlesList;