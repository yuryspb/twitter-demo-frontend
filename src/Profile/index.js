import React, { Component } from "react";
import Helmet from "react-helmet";
import Header from "../Header/";
import BackgroundImage from "./BackgroundImage";
import ProfileNav from "./Nav";
import ProfileInfo from "./SidebarLeft/ProfileInfo";
import CommonFollowers from "./SidebarLeft/CommonFollowers";
import ProfileTimeline from "./Timeline";

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
            </div>
            <div className="col-lg-6">
              <ProfileTimeline />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
