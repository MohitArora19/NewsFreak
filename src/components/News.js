import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

        static defaultProps = {
            country:'in',
            pageSize:10, 
            category: 'general'
        }

        static propTypes = {
            country:PropTypes.string,
            pageSize: PropTypes.number,
            category: PropTypes.string
        }

        constructor(){
            super();
            this.state = {
                articles: [],
                loading: false,
                page: 1,
            }
        }

       async componentDidMount(){
            let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e6aac488b3ae4343a996c94f11e3dcc0&page=1&pageSize=${this.props.pageSize}`;
            this.setState({loading: true})
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({articles: parsedData.articles,
                totalResults: parsedData.totalResults,
            loading: false
        })
        }

        nextClick =async () =>{
            let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e6aac488b3ae4343a996c94f11e3dcc0&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true})
            let data = await fetch(url);
                let parsedData = await data.json()
                this.setState({
                    page: this.state.page + 1,
                    articles: parsedData.articles,
                    loading: false
        })}
             

       prevClick =async () =>{
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e6aac488b3ae4343a996c94f11e3dcc0&page=${this.state.page-1}}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true})
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page - 1,
                articles: parsedData.articles,
                loading: false
            })
        }

    render() {
        return (
            <div className="container my -4" >
                <style>{'body { background-color: white; }'}</style>
            <div className="my-3">
            <h1 className='text-center' style = {{marginTop: '70px'}}>NewsFreak - Headlines</h1>
            </div>
            {this.state.loading && <Spinner/>}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element) =>{
                return <div className="col-md-4" key = {element.url}>
                    <NewsItem  title={element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url} author={element.author} date = {element.publishedAt} source = {element.source.name} />
                </div>
            })}
            </div>
            <div className="container d-flex justify-content-between my-3">
            <button disabled={this.state.page<= 1} type="button" class="btn btn-dark" onClick = {this.prevClick}> &laquo; Previous</button>
            <button  disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" class="btn btn-dark" onClick = {this.nextClick}> Next &raquo;</button>
            </div>
            </div>
            
        )
    }
}
