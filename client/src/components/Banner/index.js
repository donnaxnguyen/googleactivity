import React from 'react'
import banner from "../../images/bookbanner2.jpg"
import "./style.css"

export default function Banner() {
    return (
<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img src={banner} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
    )
}
