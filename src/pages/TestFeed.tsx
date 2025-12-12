import React from 'react';
import './TestFeed.scss';
import { FeedCard } from '../components/FeedCard';

export const TestFeed = () => {
    // Placeholder for the layout
    return (
        <div className='TestFeed'>
            <h1>Test Feed</h1>
            <p>Basic column for the feed cards</p>
            <FeedCard />
            <FeedCard />
        </div>
    );
};