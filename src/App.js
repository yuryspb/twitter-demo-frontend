import React, { Component } from "react";
import "./App.css";
import Header from "./Header/";
import BackgroundImage from "./Profile/BackgroundImage";
import ProfileNav from "./Profile/Nav";
import ProfileSidebar from "./Profile/Sidebar";
import ProfileTimeline from "./Profile/Timeline";

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
