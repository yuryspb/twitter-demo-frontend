// @flow
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

type Props = {
  userData: Object,
};

function Main(props: Props) {
  const { userData } = props;
  return (
    <div className="App">
      <BackgroundImage userData={userData} />
      <ProfileNav userData={userData} />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ProfileInfo userData={userData} />
            <CommonFollowers userData={userData} />
            <MediaBlock userData={userData} />
          </div>
          <div className="col-lg-6">
            <ProfileTimeline userData={userData} />
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
