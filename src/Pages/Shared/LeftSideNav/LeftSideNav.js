import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('https://news-portal-with-react-server.vercel.app/news-categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
           <div>
            
           <h4 className='text-white'>All Category :{categories.length}</h4>
            {
                categories.map(category=><p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
           </div>
        </div>
    );
};

export default LeftSideNav;