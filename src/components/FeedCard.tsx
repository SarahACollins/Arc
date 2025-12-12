import { ProfilePhoto } from './ProfilePhoto';

import './FeedCard.scss';


export const FeedCard = () => {
    return (
        <div className='FeedCard'>
            <div className='FeedCardHeader'>
                <ProfilePhoto /> 
                <h2>Sarah Collins</h2>
            </div>
            <div className='FeedCardContent'>
                <p>This is a sample feed card content.</p>
            </div>
            <div className='FeedCardFooter'>
                <button>Like</button>
            </div>
        </div>
    );
};