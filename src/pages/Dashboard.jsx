import React, { useState } from "react";
import Card from "../components/Card";
import Dialog from "../components/Dialog";
import { BlankPage } from "./User/UserDetails";
import Layout from "../components/Layout";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Layout>
      <p className="page-title">Dashboard</p>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <BlankPage />
    </Layout>
  );
};

export default Dashboard;
