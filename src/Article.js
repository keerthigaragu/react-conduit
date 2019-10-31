import React from 'react';
import { Link } from 'react-router-dom';

import './article.scss';

const Article = props => {
  const { article } = props;
  console.log("======dhjfhdjfh===", article)
  return (
    <div className='article-preview'>
      <div className='article-meta'>
        <a href={`@${article.author.username}`}>
          <img src={article.author.image} alt={article.author.username} />
        </a>
        <div className='info'>
          <a className='author' href={`@${article.author.username}`}> {article.author.username} </a>
          <span className='date'>{new Date(article.createdAt).toDateString()} </span>
        </div>
        <div className='pull-xs-right'>
          <button className='btn btn-sm btn-outline-primary'>
            <i className="ion-heart"></i> {article.favoritesCount}
          </button>
        </div>
        <a href={`/article/${article.slug}`} className="preview-link">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <span>Read more...</span>
          <ul className="tag-list">
            {
              article.tagList.map(tag => {
                return (
                  <li className="tag-default tag-pill tag-outline" key={tag}>
                    {tag}
                  </li>
                )
              })
            }
          </ul>
        </a>
      </div>
    </div>
  );
}

export default Article;