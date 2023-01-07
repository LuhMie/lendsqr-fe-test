import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import usersIcon from "../../assets/icons/two-figures.svg";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import savings from "../../assets/icons/users-with-savings.svg";
import loans from "../../assets/icons/users-with-loans.svg";
import active from "../../assets/icons/active-users.svg";
import { useUserContext } from "../../context/UserContext";
import Loader from "../../components/Loader";

const tablehead = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
];

const User = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState(true);

  const { users } = useUserContext();

  useEffect(() => {
    setCount(users.length);
    if (users.length > 0) {
      setLoader(false);
    }
  }, [users]);

  const indexOfLastUser = currentPage * pageSize;
  const indexOfFirstUser = indexOfLastUser - pageSize;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const getMoreItemsByOffset = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      {loader ? (
        <Loader />
      ) : (
        <>
          {" "}
          <p className="page-title">Users</p>
          <div className="card-container">
            <Card image={usersIcon} title="User" content="2,453" />
            <Card image={active} title="Active User" content="2,453" />
            <Card image={loans} title="Users With Loans" content="12,453" />
            <Card image={savings} title="Users with savings" content="102,453" />
          </div>
          <div className="table-container">
            <Table headers={tablehead} content={currentUsers} />
          </div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={count}
            pageSize={pageSize}
            onPageChange={(page) => getMoreItemsByOffset(page)}
          />
        </>
      )}
    </Layout>
  );
};

export default User;
