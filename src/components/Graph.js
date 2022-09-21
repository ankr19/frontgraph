import { Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import GraphContext from "../context/GraphContext";
import GraphItem2 from "./GraphItem3";
const Graph = () => {
  const context = useContext(GraphContext);
  const { vdc, time, idc, rpm, tesc, tmot, idref, dataset } = context;
  useEffect(() => {
    dataset();
  }, []);
  return (
    <div>
      {/* <Stack spacing={2} direction="row">
        <Button style={{ fontSize: "15px", border: "2px solid blue" }}>
          <Link to="/" style={{ color: "blue" }}>
            Home
          </Link>
        </Button>
      </Stack> */}
      <GraphItem2
        vdc={vdc}
        time={time}
        idref={idref}
        idc={idc}
        rpm={rpm}
        tesc={tesc}
        tmot={tmot}
      />
    </div>
  );
};
export default Graph;
