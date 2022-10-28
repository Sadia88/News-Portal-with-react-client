import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const AllNews=useLoaderData()
    useTitle('Category')
    return (
        <div>
            <h1>This  has Category {AllNews.length}</h1>
            {
                AllNews.map(news=><NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;