import React from "react";
import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SavingsIcon from "@mui/icons-material/Savings";
import BalanceIcon from "@mui/icons-material/Balance";

function Widgets({ type }) {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all Users",
        icon: <Person2OutlinedIcon className="icon" style={{
            color:"crimson",
            backgroundColor:"rgba(255,0,0,0.2)",
        }}/>,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all Orders",
        icon: <BookmarkBorderIcon className="icon" style={{
            color:"goldenrod",
            backgroundColor:"rgba(218,165,32,0.2)",
        }} />,
      };
      break;
    case "earnings":
      data = {
        title: "ERARNINGS",
        isMoney: true,
        link: "View net erarnings",
        icon: <SavingsIcon className="icon" style={{
            color:"green",
            backgroundColor:"rgba(0,128,0,0.2)",
        }}/>,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: false,
        link: "See all balance",
        icon: <BalanceIcon className="icon" style={{
            color:"purple",
            backgroundColor:"rgba(128,0,128,0.2)",
        }}/>,
      };
      break;
    default:
      break;
  }

  const amount = 100;
  const diff = 20;

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$ "}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widgets;
