import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './Widget.css';

const Widget = () => {

    const newsArticle = (heading, subtitle) => (
         <div className="widget__article">
             <div className="widget__articleLeft">
                <FiberManualRecordIcon />
             </div>
             <div className="widget__articleRight">
                 <h4>{heading}</h4>
                 <p>{subtitle}</p>
             </div>
         </div>
    )

    return (
        <div className="widget">
            <div className="widget__header">
                <h2>Trending News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Journal 3 Myths", "YouTube addresses 3 common myths")}
            {newsArticle("Here's Why", "Ranveer Singh and Mahesh Babu occupied ")}
            {newsArticle("Aishwarya Rai", "Aishwarya Rai Bachchan treated her fan to an")}
            {newsArticle("A gingerbread monolith appeared", "The saga of monoliths mysteriously showin")}
            {newsArticle("50% Of Americans' Is Trending On Social Media", "It has long been said that people either see a glass as half empty or half full ")}
            {newsArticle("The Subway Door, Icey Floor, and a Cat’s Lasér", "Earlier this week, a daring passenger took a brief video from a subway car on an unspecified")}
        </div>
    )
}

export default Widget
