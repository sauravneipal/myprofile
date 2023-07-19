import React, { useEffect } from 'react'
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "aos/dist/aos.css";
import Aos from 'aos';

const Gallery = () => {


  useEffect(() => {
    Aos.init();
  }, []);
    const images = [
        {
          original: './images/w1.jpeg',
          thumbnail: './images/w1.jpeg',
        },
        {
          original: './images/w2.jpeg',
          thumbnail: './images/w2.jpeg',
        },
        {
          original: './images/w3.jpeg',
          thumbnail: './images/w3.jpeg',
        },
        {
          original: './images/w4.jpeg',
          thumbnail: './images/w4.jpeg',
        },
        {
          original: './images/w5.jpeg',
          thumbnail: './images/w5.jpeg',
        },
        {
          original: './images/w6.jpeg',
          thumbnail: './images/w6.jpeg',
        },
        {
          original: './images/w7.jpeg',
          thumbnail: './images/w7.jpeg',
        },
        {
          original: './images/w8.jpeg',
          thumbnail: './images/w8.jpeg',
        },
        {
          original: './images/w9.jpeg',
          thumbnail: './images/w9.jpeg',
        },
        {
          original: './images/w10.jpeg',
          thumbnail: './images/w10.jpeg',
        },
        {
          original: './images/w11.jpeg',
          thumbnail: './images/w11.jpeg',
        },
        {
          original: './images/w12.jpeg',
          thumbnail: './images/w12.jpeg',
        },
     
      ];
  return (
    <div className='image-container'  data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
       <ReactImageGallery items={images} 
        slideInterval={2500}
        slideOnThumbnailOver={true}
        showIndex={true}
       />
    </div>
  )
}

export default Gallery

