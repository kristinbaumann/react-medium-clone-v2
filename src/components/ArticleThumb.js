import React, { Component } from 'react';

class ArticleThumb extends Component {
  render() {
    const {article} = this.props;
    const imageSrc = require(`../img/${article.image}`);
    
    return (
      <div className="articleThumb">
        <div className="image" style={{backgroundImage:`url('${imageSrc}')`}}></div>
        <div>
          <h2>{article.title}</h2>
          <h3>By {article.author}</h3>
        </div>
      </div>
    );
  }
}

export default ArticleThumb;



