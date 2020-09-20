import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles , setArticles] = useState([]);
    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=5246413deef946ceb84dffb2176df416')
        .then(res=>res.json())
        .then(data=> setArticles(data.articles))
    } , [])
    return (
        <div>
            <h1>top headline {articles.length} </h1>
            {
                articles.map(art => <News article={art}> </News>)
            }
        </div>
    );
};

export default TopHeadline;