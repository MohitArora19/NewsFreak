import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
       let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
        return (
            <div className = 'my-3'>
                <div className="card" style={{width: "23rem"}}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
  <img src={imageUrl?imageUrl:"https://image.shutterstock.com/image-vector/default-word-digital-style-glowing-260nw-1668796114.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className='card-text'><small className='text-muted'>By {!author?'Unkown':author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target = "_blank"className="btn btn-primary">Read More</a>
  </div>
</div>
            </div>
        )
    }
}
