import React from "react";
import { useEffect } from "react";
import bgimg from './Img and vid/BG img/living_room.jpg'
import './modularkitchen.css'
import livingRoomImg1 from './Img and vid/living room img/img1.webp';
import livingRoomImg2 from './Img and vid/living room img/img2.webp';
import livingRoomImg3 from './Img and vid/living room img/img3.webp';
import livingRoomImg4 from './Img and vid/living room img/img4.webp';
import livingRoomImg5 from './Img and vid/living room img/img5.webp';
import livingRoomImg6 from './Img and vid/living room img/img6.webp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Livingroom(){
    useEffect(() => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }, []);

    const kitchenImg=[
        {
        id:1,
        img: livingRoomImg1,
        title:"Pastel Paradise Open-Plan Living Room",
    } ,
    {
        id:2,
        img: livingRoomImg2,
        title:"Retro Revival Living Room ",
    } ,
    {
        id:3,
        img: livingRoomImg3,
        title:"Moody Browns Contemporary Studio",
    } ,
    {
        id:4,
        img: livingRoomImg4,
        title:"Brilliantly White Living Room",
    } ,
    {
        id:5,
        img: livingRoomImg5,
        title:"Contemporary and Bright Living Room",
    } ,
    {
        id:6,
        img: livingRoomImg6,
        title:"Fabulously White Contemporary Studio",
    } ,
    ]
    return<div className="kitchen">
    <div className="img-div">
        <img src={bgimg}/>
        <div className="about">
            <h2 className="title-desinggallery">Living Room</h2>
            <p>Step into a realm of comfort and style with our Living Room Collection. Dive into a curated selection of exquisite designs that embody the essence of Elegant Interior's craftsmanship. From contemporary chic to timeless elegance, our collection reflects the diversity of sophisticated living. Explore the harmonious fusion of aesthetics and functionality, where every element is meticulously crafted to elevate your living space. Immerse yourself in a world of luxury and refinement, where every detail tells a story of elegance and charm. Welcome to a living experience that goes beyond the ordinary, inviting you to embrace the extraordinary - welcome to Elegant Interior</p>
        </div>

        <div className="alldesigns">
            {kitchenImg.map((DG,index) => {
                return (
                    // <div className="BGcontainer" key={index}>
                    //     <div className="BGimgcontainer">
                    //         <img src={DG.img} alt={DG.title} className="DGgimg" />
                    //     </div>
                    //     <div className="BGtxtcontainer">
                    //         <p className="BGtype" >{DG.title}</p>
                    //     </div>
                    // </div>
                    <Card sx={{ maxWidth: 345,marginTop:'25px' }} key={index}>
<CardActionArea>
  <CardMedia
    component="img"
    height="300"
    image={DG.img}
    alt={DG.title}
  />
  <CardContent>
    <Typography gutterBottom variant="p" component="div" fontFamily={'poppins !important'}>
    {DG.title}
    </Typography>
  </CardContent>
</CardActionArea>

</Card>
                );
            })}
        </div>
    </div>
</div>
}

export default Livingroom;
