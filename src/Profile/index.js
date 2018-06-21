import React, { Component } from "react";
import Helmet from "react-helmet";
import Header from "../Header/";
import BackgroundImage from "./BackgroundImage";
import ProfileNav from "./Nav";
import ProfileInfo from "./SidebarLeft/ProfileInfo";
import CommonFollowers from "./SidebarLeft/CommonFollowers";
import MediaBlock from "./SidebarLeft/MediaBlock";
import ProfileTimeline from "./Timeline";
import FollowSuggestions from "./SidebarRight/FollowSuggestions";
import Trends from "./SidebarRight/Trends";
import Footer from "./SidebarRight/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="EveryInteract (@EveryInteract) | Twitter demo" />
        <Header />
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
}

export default App;
