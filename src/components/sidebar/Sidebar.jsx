import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  Storage,
  Person,
  Payment,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Projects
            </li>
            <li className="sidebarListItem">
              <Storage className="sidebarIcon" />
              Stocks
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <Payment className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <Storage className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Storage className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Storage className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
