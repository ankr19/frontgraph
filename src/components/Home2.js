import React from "react";
import { Button, Stack } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
const Home2 = () => {
  return (
    <div>
      {/* <Outlet/> */}
      {/* <Stack spacing={2} direction="row">
        <Button style={{ fontSize:"150px", border:"2px solid blue"}}>
          <Link to="table" style={{color:"blue"}}>Table</Link>
        </Button>
        <Button style={{fontSize:"150px",border:"2px solid blue"}}>
          <Link to="graph" style={{color:"blue"}}>Graph</Link>
        </Button>
      </Stack> */}
    </div>
  );
};
export default Home2;
