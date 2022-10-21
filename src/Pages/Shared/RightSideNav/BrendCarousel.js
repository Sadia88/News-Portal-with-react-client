import React from 'react';
import { Carousel } from 'react-bootstrap';
import Brand1 from '../../../assets/brand/jacket-1.png'
import Brand2 from '../../../assets/brand/jacket-2.png'
import Brand3 from '../../../assets/brand/jacket-4.png'

const BrendCarousel = () => {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-75"
              src={Brand1}
              alt="First slide"
            />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-75"
              src={Brand2}
              alt="Second slide"
            />
    
            <Carousel.Caption>
           
            </Carousel.Caption>
          </Carousel.Item>
         
        </Carousel>
      );
};

export default BrendCarousel;