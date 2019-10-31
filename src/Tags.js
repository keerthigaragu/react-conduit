import React from 'react';

import './tags.scss';

const Tags = props => {
  const tags = props.tags;
  if (tags) {
    return (
      <div className="tag-list">
        {
          tags.map(tag => {
            return (
              <li key={tag}>
                <a
                  href=""
                  className="tag-default tag-pill"
                  key={tag}>
                  {tag}
                </a>
              </li>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <div>Loading Tags...</div>
    );
  }
};

export default Tags;