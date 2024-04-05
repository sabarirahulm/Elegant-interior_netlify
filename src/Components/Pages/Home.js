import React from "react";
import './Home.css'
import videoBG from '../Pages/Img and vid/interior.mp4'
import offeringsImg from "./Img and vid/offeringimgAPI";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Home() {
  return (
    <div>

          <div className="video-div">
                <video src={videoBG} autoPlay loop muted/>
                <div className="content">
                <h1>Crafting Dreams<br/>into Homes.</h1>
                </div>
               </div>      
      <div className="whyET-div">
        <h3 className="whyET-head">Why Elegant interior </h3>
        <p>Immerse yourself in the artistry of Elegant Interior, where every space is a masterpiece. Our commitment to excellence unveils a world of the best designs, curated to perfection. Elevate your surroundings with our exclusive offers, ensuring your home reflects the pinnacle of style and sophistication. Unveil a new era of refined living with Elegant Interior.</p>
      </div>
      <h2 className="Elegant-Interior-offerings"> Elegant Interior offerings...</h2>
      <div className="what-we-are-div">
        {offeringsImg.map((offering) => (
          <div className="what-we-are-img-container" key={offering.id}>
            <div className="what-we-are-img">
            <Link to={offering.to} > <img src={offering.img} alt={offering.title} className="offeringimg" /></Link>
            </div>
            <p className="what-we-are-img-name" style={{ textDecoration: 'none !important' }}>{offering.title}</p>
          </div> 
          
          
        ))}
        
      </div>
    </div>
  );
}

export default Home;
