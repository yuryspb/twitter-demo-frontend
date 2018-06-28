import React from 'react';
import Helmet from 'react-helmet';
import BackgroundImage from './BackgroundImage';
import ProfileNav from './Nav';
import ProfileInfo from './ProfileInfo';
import CommonFollowers from './CommonFollowers';
import MediaBlock from './MediaBlock';
import ProfileTimeline from './MainFeed/Timeline';
import FollowSuggestions from './FollowSuggestions';
import Trends from './Trends';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Helmet title="EveryInteract (@EveryInteract) | Twitter demo" />
      <BackgroundImage />
      <ProfileNav />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ProfileInfo />
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

export default App;
