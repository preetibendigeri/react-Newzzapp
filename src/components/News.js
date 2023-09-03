import React, { Component } from 'react'
import NewsItem from '../NewsItem'
import Spinner  from './Spinner';
import PropTypes  from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
      country: 'in',
      pageSize: 8,
      category: 'general',
  }

  static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
        articles: [],
        loading: true,
        page: 1,
        totalResults: 0
    }
    document.title = `${(this.props.category)} - NewsMonkey`;
}

async updateNews() {
  this.props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=411e63f265c14ae39ed7bac906898c68&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({ loading: true });
  let data = await fetch(url);
  this.props.setProgress(30);
  let parsedData = await data.json()
  this.props.setProgress(70);
  this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false, 
  })
  this.props.setProgress(100);
}

async componentDidMount() {
  this.updateNews();
}

handlePrevClick = async () => {
  this.setState({ page: this.state.page - 1 });
  this.updateNews();
}

handleNextClick = async () => {
  this.setState({ page: this.state.page + 1 });
  this.updateNews()
}
  fetchMoreData = async () => {  
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=411e63f265c14ae39ed7bac906898c68&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults
    })
  }

  
  render() {
    return (
      <>
          <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {(this.props.category)} Headlines</h1>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
                dataLength={Array.isArray(this.state.articles) ? this.state.articles.length : 0}
                    next={this.fetchMoreData}
                    hasMore={Array.isArray(this.state.articles) ? this.state.articles.length : 0 !== this.state.totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">

                    <div className="row">
                        {this.state.articles.map((element) => {
                           return <div className="col-md-4" key={element.url}>
                           <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                       </div>
                        })}
                        </div>
                        </div> 
                    </InfiniteScroll>
    
                </>
            )
        }
      }

    


// const News=(props)=>{
//   const[articles,setArticles]=useState([])
//   const[loading,setLoading]=useState(true)
//   const[page,setPage]=useState([1])
//   const[totalResults,setTotalResults]=useState(0)
  
  
  
  
  
  
//   // constructor(props){
//   //   super(props);
//   //   this.state={
//   //       articles:[],
//   //       loading:false,
//   //       page:1,
//   //       totalResults:0
//   //   }
 
//   // }

//   const updateNews=async ()=>{
//     props.setProgress(10);
//     const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=411e63f265c14ae39ed7bac906898c68&page=${page}&pageSize=${props.pageSize}`
//     setLoading(true);
//     let data=await fetch(url);
//     let parsedData=await data.json();
//     setArticles(parsedData.articles)
//     setTotalResults(parsedData.totalResults)
//     setLoading(false)
    
//     props.setProgress(100);
//   }

//   useEffect(()=>{
//      document.title=`${props.category}-Newzz`;
//     updateNews();
//   },[])

//   // async componentDidMount(){
//     // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=411e63f265c14ae39ed7bac906898c68&pageSize=${props.pageSize}`
//     // this.setState({loading:true});
//     // let data=await fetch(url);
//     // let parsedData=await data.json();
//     // console.log(parsedData)
//     //  this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults,loading:false})
//   //    this.updateNews();
//   // }

//    const handlePreclick=async()=>{
//     // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=411e63f265c14ae39ed7bac906898c68&page=${this.state.page-1}&pageSize=${props.pageSize}`
//     // this.setState({loading:true});
//     // let data=await fetch(url);
//     // let parsedData=await data.json();
    
//     // this.setState({
//     //   page:this.state.page-1,
//     //   articles:parsedData.articles,
//     //   loading:false
//     // })
//     setPage(page-1);
//     updateNews();
//   }

//    const handleNextclick=async()=>{
//     // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize))){

//     //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=411e63f265c14ae39ed7bac906898c68&page=${this.state.page+1}&pageSize=${props.pageSize}`
//     //   this.setState({loading:true});
//     //   let data=await fetch(url);
//     //   let parsedData=await data.json();
   
//     //   this.setState({
//     //     page:this.state.page+1,
//     //     articles:parsedData.articles,
//     //     loading:false
//     //   })
//         //  this.setState({page:this.state.page+1});
//          setPage(page+1);
//          updateNews();
   
//   }

//   const fetchMoreData =async() => {
   
//     setPage(page+1);
//    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=411e63f265c14ae39ed7bac906898c68&page=${page+1}&pageSize=${props.pageSize}`
   
//     let data=await fetch(url);
//     let parsedData=await data.json();
//     setArticles(articles.concat(parsedData.articles))
//     setTotalResults(parsedData.totalResults)
    
//   };

  
//     return (
//     <>
//         <center><h1 style={{margin:'35px 0px',marginTop:'75px'}}>Newzz-Top headlines</h1></center>
//        {loading && <Spinner/>}
//        <InfiniteScroll
//           dataLength={articles.length}
//           next={fetchMoreData}
//           hasMore={articles.length!==totalResults}
//           loader={<Spinner/>}
//         >
//           <div className="container">
//         <div className='row'>
//         {articles.map((element)=>{
//             return  <div className='col-md-4' key={element.url}>
//              <NewsItem title={element.title ? element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
//                </div>


//         })}
           
            
//            </div>
//         </div>
//         </InfiniteScroll>
//        {/* <div className="container d-flex justify-content-between">
//        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreclick}>&larr;Previous</button>
//        <button disabled ={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next&rarr;</button>

//        </div> */}
        
//         </>
//     )
  
// }


// export default News
