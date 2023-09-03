import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='container my-3'> 
       <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DJFJURVQJVB33KOXFGMRUWAND4.jpg&w=1200":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {date}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn sm btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
 
}
}
export default NewsItem
