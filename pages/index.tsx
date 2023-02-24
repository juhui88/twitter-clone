import React from "react";
import UserBar from "../components/userBar";
import NavBar from "../components/navBar";
import SearchBar from "../components/searchBar";
import Twitt from "../components/twitt";

export default () => (
  <div className="flex justify-center">
    <div className="relative flex-1">
      <NavBar />
    </div>
    <div className="">
      <SearchBar>
        {[1, 2, 3, 4, 5, 6, 7].map(i => <Twitt key={i} />)}
      </SearchBar>
    
    </div>
    <div className="flex-1">
      <UserBar/>
    </div>
    
  </div>
);
