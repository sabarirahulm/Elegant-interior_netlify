import React from "react";
import { useEffect } from "react";
import './Designgallery.css';
import DGImg from "./Img and vid/DG";

function Designgallery() {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="designgallery">
      <div className="about">
        <h2 className="title-desinggallery">Interior Design gallery</h2>
        <p>Step into a world of elegance with our Interior Design Gallery. Explore a curated collection of stunning designs that showcase the artistry and craftsmanship of Elegant Interior. From modern minimalism to timeless classics, our gallery captures the essence of sophisticated living. Discover the perfect blend of form and function, where every detail is thoughtfully crafted. Welcome to a gallery that transcends the ordinary and invites you to envision the extraordinary - welcome to Elegant Interior.</p>
      </div>

      <div className="alldesigns">
        {DGImg.map((DG,index) => {
          return (
            <div className="DGcontainer" key={index}>
              <div className="DGimgcontainer">
                <img src={DG.img} alt={DG.title} className="DGgimg" />
              </div>
              <div className="DGtxtcontainer">
                <p className="DGtype">{DG.title}</p>
                <p className="designcounts">{DG.count}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Designgallery;
