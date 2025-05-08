import React from 'react'
import FlipkartLogo from './assets/flipkart-logo.webp'
import AmazonLogo from './assets/amazon-Logo.webp'
import Shoesimage from './assets/ShoesImagge.webp'
import './App.css'
function Hero() {
  return (
    <div>
      <div className="Hero">
        <div className="left">
        <b >Your Feet Deserve The Best</b>
        <span>your Feet Deserve the Best Here To Help You Shoes. your Feet Deserve the Best And We,re Here To Help You With Our Shoes</span>
        <div className="btnPart">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className="brand">
          <span>Also Avaliable</span>
          <div className="brand-logo">
            <img src={FlipkartLogo} alt="image" width={"30px"} />
            <img src={AmazonLogo} alt="image" width={"35px"} />
          </div>
        </div>

        </div>
        <div className="right" >
            <div className="image">
              <img src={Shoesimage} alt="image" width={"400px"} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero