import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="h-left">File Tracking</div>
      <div className="h-right">
        <button>GDRS</button>
        <button>GWORKS</button>
        <button>GSPRINK</button>
      </div>
    </div>
  );
};

export default Header;
