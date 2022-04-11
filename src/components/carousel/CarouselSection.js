import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {data} from "./data"


export default function CarouselSection() {
  return (
    <div>
         <Carousel autoPlay={true} infiniteLoop={true} interval={2500} showArrows={false} showThumbs={false} stopOnHover={false} >
                {data.map((item,index)=> {
                    return <div key={index}>
                    <img src={item.img} alt="carousel" />
                    <p className="legend">Title 1</p>
                </div> 
                })}
                
                
            </Carousel>

    </div>
  )
}
