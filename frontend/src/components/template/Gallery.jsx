import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import { motion } from 'framer-motion';

import Img1 from "../img/img1.jpeg"
import Img2 from "../img/img2.jpeg"
import Img3 from "../img/img3.jpeg"
import Img4 from "../img/img4.jpeg"
import Img5 from "../img/img5.jpeg"
import Img6 from "../img/img6.jpeg"
import Img7 from "../img/img7.jpeg"
import Img8 from "../img/img8.jpeg"
import Img9 from "../img/img9.jpeg"
import Img10 from "../img/img10.jpeg"
import Img11 from "../img/img11.jpeg"
import Img12 from "../img/img12.jpeg"

const images = [Img1, Img2, Img3, Img4, Img5, Img6, 
    Img7, Img8, Img9, Img10, Img11, Img12]

const Gallery = () => { 
    const carousel = useRef();
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])
    
    return (
        <div className="gallery">
            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
                <motion.div className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width}}
                >
            
            {images.map(image => (
                <motion.div className="item" key={image}>
                    <img src={image} alt="Texto alt"/>
                </motion.div>
                ))}
                </motion.div>
            </motion.div>
        </div>
    );
}


export default Gallery