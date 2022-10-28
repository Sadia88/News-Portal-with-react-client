import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    const news=useLoaderData()
    useTitle('Home')
    return (
        <div>
            <h1>Total news {news.length}</h1>
        </div>
    );
};

export default Home;