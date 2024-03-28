import React from "react";
import bgimg from './Img and vid/BG img/bedroom-desktop-nn.webp';
import './modularkitchen.css';
import bedroomImg1 from './Img and vid/bedroom img/img1.webp';
import bedroomImg2 from './Img and vid/bedroom img/img2.webp';
import bedroomImg3 from './Img and vid/bedroom img/img3.webp';
import bedroomImg4 from './Img and vid/bedroom img/img4.jpg';
import bedroomImg5 from './Img and vid/bedroom img/img5.webp';
import bedroomImg6 from './Img and vid/bedroom img/img6.webp';

function Bedroom() {
    const bedroomImg = [
        {
            id: 1,
            img: bedroomImg1,
            title: "Minimally Modern Guest Bedroom",
        },
        {
            id: 2,
            img: bedroomImg2,
            title: "Bright and Bohemian Master Bedroom",
        },
        {
            id: 3,
            img: bedroomImg3,
            title: "Boisterously Beige Master Bedroom",
        },
        {
            id: 4,
            img: bedroomImg4,
            title: "Spectacularly Beige Master Bedroom",
        },
        {
            id: 5,
            img: bedroomImg5,
            title: "Simply Contemporary Master Bedroom",
        },
        {
            id: 6,
            img: bedroomImg6,
            title: "A Tryst With Browns Master Bedroom",
        },
    ];

    return (
        <div className="kitchen">
            <div className="img-div">
                <img src={bgimg} />
                <div className="about">
                    <h2 className="title-desinggallery">Bedroom</h2>
                    <p>Step into a realm of tranquility and luxury with our Bedroom Collection. Immerse yourself in a curated assortment of captivating designs that embody the mastery and finesse of Elegant Interior. From contemporary elegance to timeless charm, our collection captures the essence of refined living. Explore the seamless integration of comfort and style, where every element is meticulously crafted to enhance your sanctuary. Dive into a world of harmonious design, where every detail reflects thoughtful consideration. Embrace the extraordinary in our gallery, where dreams meet reality - welcome to Elegant Interior.</p>
                </div>

                <div className="alldesigns">
                    {bedroomImg.map((DG, index) => {
                        return (
                            <div className="BGcontainer" key={index}>
                                <div className="BGimgcontainer">
                                    <img src={DG.img} alt={DG.title} className="DGgimg" />
                                </div>
                                <div className="BGtxtcontainer">
                                    <p className="BGtype">{DG.title}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Bedroom;
