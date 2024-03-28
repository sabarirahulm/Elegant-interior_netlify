import React from "react";
import bgimg from './Img and vid/BG img/modular_kitchen_designs.webp'
import './modularkitchen.css'
import img1 from './Img and vid/kitchen img/img1.webp';
import img2 from './Img and vid/kitchen img/img2.webp';
import imge3 from './Img and vid/kitchen img/img3.webp';
import img4 from './Img and vid/kitchen img/img4.webp';
import img5 from './Img and vid/kitchen img/img5.webp';
import img6 from './Img and vid/kitchen img/img6.webp';



function Modularkitchen(){

    const kitchenImg=[
        {
        id:1,
        img:img1,
        title:"Flawless White Straight Modular Kitchen",
    } ,
    {
        id:2,
        img:img2,
        title:"Gainsboro Modular Island Kitchen",
    } ,
    {
        id:3,
        img:imge3,
        title:"Coastal Chic Modern Kitchen Design",
    } ,
    {
        id:4,
        img:img4,
        title:"Chamoisee L-Shaped Modular Kitchen",
    } ,
    {
        id:5,
        img:img5,
        title:"Burnt Umber L-Shaped Modular Kitchen",
    } ,
    {
        id:6,
        img:img6,
        title:"Moody and Modish Studio Designt",
    } ,
    ]
    
    
    return(
        <div className="kitchen">
            <div className="img-div">
                <img src={bgimg}/>
                <div className="about">
        <h2 className="title-desinggallery">Modular kitchen</h2>
        <p>Welcome to our Modular Kitchen Collection. Step into a realm of modern functionality and timeless elegance. Our curated selection showcases the epitome of culinary craftsmanship, combining innovative design with practical utility. From sleek, minimalist aesthetics to luxurious finishes, each kitchen is meticulously crafted to elevate your culinary experience. Explore our range and discover the perfect harmony of style and functionality. Transform your cooking space into a culinary masterpiece with Elegant Interior</p>
      </div>

      <div className="alldesigns">
      {kitchenImg.map((DG,index) => {
          return (
            <div className="BGcontainer" key={index}>
              <div className="BGimgcontainer">
                <img src={DG.img} alt={DG.title} className="DGgimg" />
              </div>
              <div className="BGtxtcontainer">
                <p className="BGtype" >{DG.title}</p>
              </div>
            </div>
          );
        })}


            </div>
            </div>
        </div>
    )
        
}


export default Modularkitchen;