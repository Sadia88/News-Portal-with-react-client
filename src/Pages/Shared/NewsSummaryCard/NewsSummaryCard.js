import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import {  BsFillBookmarkFill ,BsFillShareFill,BsStarFill,BsEyeFill} from "react-icons/bs";

const NewsSummaryCard = ({news}) => {
    const {_id,title,details,image_url,total_view,author,rating }=news
    console.log(news)
    return (
        <div>
          

    <Card className="mb-5">
      <Card.Header className='d-flex justify-content-between pe-3 align-items-center'>
        <div className='d-flex'>
            <Image 
            roundedCircle
             src={author?.img}  style={{height:'60px'}}>
            </Image>
            <div className='ps-3'>
                <h6 className='mb-0'>{author?.name}</h6>
                <p>{author?.published_date}</p>
                </div>
        </div>
        <div>
        <BsFillBookmarkFill className='me-2'></BsFillBookmarkFill>
        <BsFillShareFill></BsFillShareFill>
        </div>

      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
      {
      details.length > 200 ?
       <p>{details.slice(0,250)+'...'} <Link to={`/news/${_id}`}>Read more</Link></p> : <p>{details}</p>
       }
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className=" d-flex justify-content-between">
        <div>
         <BsStarFill className='text-warning'></BsStarFill>
         <span className='ps-2'>{rating?.number}</span>
        </div>
        <div>
            <BsEyeFill></BsEyeFill>
            <span className='ps-2'>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>


        </div>
    );
};

export default NewsSummaryCard;