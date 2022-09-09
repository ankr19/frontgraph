import { Button, Stack } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GraphContext from "../context/GraphContext";
import TableItem from "./TableItem";
import './tablej.css'
const TableJ = () => {
  const context = useContext(GraphContext);
  const {dataset} = context;
  useEffect(() => {
    dataset();
  }, []);
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button style={{fontSize:"15px",border:"2px solid blue"}}>
          <Link to="/" style={{color:"blue"}}>Home</Link>
        </Button>
      </Stack>
      <TableItem/>
    </div>
  );
};

export default TableJ;
