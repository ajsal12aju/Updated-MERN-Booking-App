import React, { useContext } from "react";
import "./navbar.scss";
import ProfileImage from "../../images/pro-removebg-preview (1).png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ZoomInMapOutlinedIcon from "@mui/icons-material/ZoomInMapOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
function Navbar() {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search...." />
          <SearchOutlinedIcon  />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon  className="icon" onclick={()=> dispatch({ type:"TOGGLE" })}/>
          </div>    
          <div className="item">
            <ZoomInMapOutlinedIcon  className="icon"/>
          </div>
          <div className="item">
            <NotificationsOutlinedIcon  className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon  className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon  className="icon"/>
          </div>
          <div className="item">
            <img src={ProfileImage} className="avatar" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
