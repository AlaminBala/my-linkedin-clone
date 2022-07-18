import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import {
  Search,
  BusinessCenter,
  Chat,
  Home,
  SupervisorAccount,
  Notifications,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/counter/userSlice";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <Search />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption onClick={logoutOfApp} avatar={true} title="Me" />
      </div>
    </div>
  );
}

export default Header;
