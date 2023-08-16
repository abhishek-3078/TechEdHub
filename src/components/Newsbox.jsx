import React from 'react'
import './Newsbox_CSS.css'
import NewsItemProp from './newsItem.json'

const NewsItem = (props) => {
    const source = props.urlToImage;
    const title = props.title;
    const link = props.url;
    console.log("LINK", props.url);
    return (
        <>
            <div class="newsItemContainer">
                <img  src={source}/>
                <div class="newsItemHeading">
                    <a href={link}>
                        <h2>{title}</h2>
                    </a>

                </div>
            </div>
        </>
    )
}

const Newsbox = () => {
  return (<>
    <div class="newsBoxContainer">

        <div class="newsBoxTitle">
            <h2>Tech Today</h2>
        </div>

        <div class="newsBoxContentBox">

            {NewsItemProp.map( (item) => {
                return <NewsItem imgSrc={item.imgSrc} title={item.title}></NewsItem>
            })}



        </div>
    </div>
  </>
  )
}

export default Newsbox