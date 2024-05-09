import React from "react";
import { useEffect } from "react";
import bgimg from './Img and vid/BG img/bathroom.webp';
import './modularkitchen.css';
import bathroomImg1 from './Img and vid/bathroom img/img1.webp';
import bathroomImg2 from './Img and vid/bathroom img/img2.webp';
import bathroomImg3 from './Img and vid/bathroom img/img3.webp';
import bathroomImg4 from './Img and vid/bathroom img/img4.webp';
import bathroomImg5 from './Img and vid/bathroom img/img5.webp';
import bathroomImg6 from './Img and vid/bathroom img/img6.webp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Bathroom(){
    useEffect(() => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }, []);

    const bathroomImages = [
        {
            id: 1,
            img: bathroomImg1,
            title: "Monochrome Marvel Bathroom",
        },
        {
            id: 2,
            img: bathroomImg2,
            title: "Spruce Mirrored Bathroom",
        },
        {
            id: 3,
            img: bathroomImg3,
            title: "Muse Common Area Vanity Unit ",
        },
        {
            id: 4,
            img: bathroomImg4,
            title: "Muse Common Area Vanity Unit ",
        },
        {
            id: 5,
            img: bathroomImg5,
            title: "Radiance 3-Shutter Mirrored Bathroom",
        },
        {
            id: 6,
            img: bathroomImg6,
            title: "Elementary Hidden Storage",
        },
    ];

    return(
        <div className="kitchen">
            <div className="img-div">
                <img src={bgimg} />
                <div className="about">
                    <h2 className="title-desinggallery">Bathroom</h2>
                    <p>Step into a world of elegance with our Interior Design Gallery. Explore a curated collection of stunning designs that showcase the artistry and craftsmanship of Elegant Interior. From modern minimalism to timeless classics, our gallery captures the essence of sophisticated living. Discover the perfect blend of form and function, where every detail is thoughtfully crafted. Welcome to a gallery that transcends the ordinary and invites you to envision the extraordinary - welcome to Elegant Interior.</p>
                </div>

                <div className="alldesigns">
                    {bathroomImages.map((image, index) => {
                        return (
                            // <div className="BGcontainer" key={index}>
                            //     <div className="BGimgcontainer">
                            //         <img src={image.img} alt={image.title} className="DGgimg" />
                            //     </div>
                            //     <div className="BGtxtcontainer">
                            //         <p className="BGtype">{image.title}</p>
                            //     </div>
                            // </div>
                            <Card sx={{ maxWidth: 345,marginTop:'25px' }} key={index}>
<CardActionArea>
  <CardMedia
    component="img"
    height="300"
    image={image.img}
    alt={image.title}
  />
  <CardContent>
    <Typography gutterBottom variant="p" component="div" fontFamily={'poppins !important'}>
    {image.title}
    </Typography>
  </CardContent>
</CardActionArea>

</Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Bathroom;
