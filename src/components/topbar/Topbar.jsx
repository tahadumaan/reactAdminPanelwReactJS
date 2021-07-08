import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">crmPanel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://tr.web.img4.acsta.net/c_310_420/pictures/15/09/24/11/19/077124.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
