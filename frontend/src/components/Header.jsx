import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today  = new Date();
  
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper 
      </h1>
      <h1>{today.toLocaleDateString("en-US", options,{timeZone: "Asia/Kolkata"})}</h1>
      
    </header>
  );
}

export default Header;
