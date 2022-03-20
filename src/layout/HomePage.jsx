import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import ButtonForAuth from "../components/ButtonForAuth";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <ButtonForAuth></ButtonForAuth>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default HomePage;
