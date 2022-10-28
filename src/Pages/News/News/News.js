import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import {  BsFillBookmarkFill ,BsFillShareFill,BsStarFill,BsEyeFill} from "react-icons/bs";
import useTitle from '../../../hooks/useTitle';


const News = () => {
    const news=useLoaderData()
    useTitle('News')
    const {_id,title,details,image_url,total_view,author,rating }=news
    console.log(news)
    return (
        <div>
            <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>

        
           
            <div className='p-3 d-flex justify-content-between'>
                <p className='mb-0'>Author : {author?.name}</p>
                <p>Published Date : {author?.published_date}</p>
                
         <div><BsStarFill className='text-warning'></BsStarFill>
         <span className='ps-2'>{rating?.number}</span></div>
         </div>
        
        <p> {details}</p>
        </Card.Text>
       
      </Card.Body>
    </Card>
   
        </div>
    );
};

export default News;