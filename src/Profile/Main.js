import React from 'react';
import BackgroundImage from './BackgroundImage';
import ProfileNav from './Nav';
import ProfileInfo from './ProfileInfo';
import CommonFollowers from './CommonFollowers';
import MediaBlock from './MediaBlock';
import ProfileTimeline from './MainFeed/Timeline';
import FollowSuggestions from './FollowSuggestions';
import Trends from './Trends';
import Footer from './Footer';

function Main(props) {
  const { userData } = props;
  return (
    <div className="App">
      <BackgroundImage />
      <ProfileNav />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ProfileInfo userData={userData} />
            <CommonFollowers />
            <MediaBlock />
          </div>
          <div className="col-lg-6">
            <ProfileTimeline />
          </div>
          <div className="col-lg-3">
            <FollowSuggestions />
            <Trends />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
