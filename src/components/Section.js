import React, { Component } from 'react';
import ArticleThumb from './ArticleThumb.js';
import data from '../data/data.json';

class Section extends Component {
  constructor(props){
    super(props);
    this.state = {
      category: 'top-stories'
    }
  }
  render() {
    const {category} = this.state;

    // filter articles by category
    const dataPerCategory = data.filter((dataItem) => dataItem.category === category);
    // build React elements from article array
    const articles = dataPerCategory.map((article, index) => {
      return <ArticleThumb key={index} article={article} />
    })

    return (
      <div className="section">
        <ul>
          <li className={category === 'top-stories' ? `active`: ``} 
            onClick={() => this.setState({category: 'top-stories'})}
            >Top Stories</li>
          <li className={category === 'programming' ? `active`: ``}
            onClick={() => this.setState({category: 'programming'})}
            >Programming</li>
          <li className={category === 'design' ? `active`: ``} 
            onClick={() => this.setState({category: 'design'})}
            >Design</li>
        </ul>
        <div className="section-articles">{articles}</div>
      </div>
    );
  }
}

export default Section;
