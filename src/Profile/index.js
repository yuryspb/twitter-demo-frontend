import React, { Component } from "react";
import Header from "../Header/";
import BackgroundImage from "./BackgroundImage";
import ProfileNav from "./Nav";
import ProfileSidebar from "./Sidebar";
import ProfileTimeline from "./Timeline";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BackgroundImage />
        <ProfileNav />
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ProfileSidebar />
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
