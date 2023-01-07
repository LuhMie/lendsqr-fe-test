import React from "react";
import { Link, useLocation } from "react-router-dom";
import briefcase from "../assets/icons/briefcase.svg";
import home from "../assets/icons/home.svg";
import sack from "../assets/icons/sack.svg";
import badge from "../assets/icons/badge-percent.svg";
import chart from "../assets/icons/chart-bar.svg";
import clipboard from "../assets/icons/clipboard-list.svg";
import coins from "../assets/icons/coins-solid.svg";
import galaxy from "../assets/icons/galaxy.svg";
import icon from "../assets/icons/icon.svg";
import piggy from "../assets/icons/piggy-bank.svg";
import slider from "../assets/icons/sliders-h.svg";
import check from "../assets/icons/user-check.svg";
import cog from "../assets/icons/user-cog.svg";
import users from "../assets/icons/users.svg";
import friends from "../assets/icons/user-friends.svg";
import times from "../assets/icons/user-times.svg";
import group from "../assets/icons/group.svg";
import handshake from "../assets/icons/handshake-regular.svg";
import hands from "../assets/icons/hand-holding.svg";
import scroll from "../assets/icons/scroll.svg";
import { useUserContext } from "../context/UserContext";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useUserContext();

  // check for which path you are on
  const isActive = useLocation().pathname;

  return (
    <div className={showSidebar ? `sidebar` : `sidebar show`}>
      <div className="sidebar-content">
        <Link to="#" className="list-item org">
          <div>
            <img src={briefcase} alt="briefcase-icon" />
          </div>
          <div className="flex">
            Switch Organization
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="/dashboard"
          className={
            isActive.includes("/dashboard") ? "list-item active" : "list-item"
          }
        >
          <img src={home} alt="home" />
          Dashboard
        </Link>
        <br />
        <p className="subhead">Customers</p>
        <Link
          onClick={() => setShowSidebar(true)}
          to="/users"
          className={
            isActive.includes("/users") ? "list-item active" : "list-item"
          }
        >
          <img src={friends} alt="users" />
          Users
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={users} alt="users" />
          Guarantors
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={sack} alt="loans" />
          Loans
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={handshake} alt="models" />
          Decision Models
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={piggy} alt="savings" />
          Savings
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={hands} alt="requests" />
          Loan Requests
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={check} alt="whitelist" />
          Whitelist
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={times} alt="karma" />
          Karma
        </Link>
        <p className="subhead mt-6">BUSINESSES</p>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={briefcase} alt="briefcase-icon" />
          Organization
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={sack} alt="products" />
          Loan Products
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={group} alt="savings-product" />
          Savings Products
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={coins} alt="fees" />
          Fees and Charges
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={icon} alt="transaction" />
          Transaction
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={galaxy} alt="services" />
          Services
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={cog} alt="account" />
          Service Account
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={scroll} alt="settlement" />
          Settlements
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={chart} alt="reports" />
          Reports
        </Link>
        <p className="subhead mt-6">Settings</p>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={slider} alt="preference" />
          Preference
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/hi") ? "list-item active" : "list-item"
          }
        >
          <img src={badge} alt="pricing" />
          Fees and Pricing
        </Link>
        <Link
          onClick={() => setShowSidebar(true)}
          to="#"
          className={
            isActive.includes("/dashboard") ? "list-item active" : "list-item"
          }
        >
          <img src={clipboard} alt="alt-logs" />
          Audit Logs
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
