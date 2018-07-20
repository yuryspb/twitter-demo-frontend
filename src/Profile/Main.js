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

type UserData = {
  id: string,
  username: string,
  acct: string,
  display_name: string,
  locked: boolean,
  bot: boolean,
  created_at: string,
  note: string,
  url: string,
  avatar: string,
  avatar_static: string,
  header: string,
  header_static: string,
  location: string,
  followers_count: number,
  following_count: number,
  statuses_count: number,
  emojis: (?Object)[],
  fields: (?Object)[],
  error?: string,
};

type Props = {
  userData: UserData,
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
