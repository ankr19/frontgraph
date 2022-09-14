import React from "react";
import { useState } from "react";
import GraphContext from "./GraphContext";
import {
  newData,
  newObj,
  reidc,
  reidref,
  rerpm,
  retesc,
  retime,
  retomt,
  revdc,
} from "../components/repeat";

const GraphState = (props) => {
  const [data, setData] = useState([]);
  const [id, setID] = useState([]);
  const [vdc, setVdc] = useState([]);
  const [idc, setIdc] = useState([]);
  const [rpm, setRpm] = useState([]);
  const [idref, setIdref] = useState([]);
  const [tmot, setTmot] = useState([]);
  const [tesc, setTesc] = useState([]);
  const [time, setTime] = useState([]);
  const dataset = async () => {
    const response = await fetch("http://localhost:5000/module/getAll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    if (json) {
      let d = [];
      let id = [];
      for (let i in json) {
        d.push(json[i].data[0]);
        id.push(parseInt(json[i].ID));
      }
      setID(id);
      // setData(newData(id, d));
      // setData(newData(id,d))
      // setData(d);
      setVdc(revdc(d));
      setIdc(reidc(d));
      setIdref(reidref(d));
      setTmot(retomt(d));
      setRpm(rerpm(d));
      setTesc(retesc(d));
      setTime(retime(d));
      setData(newObj(d,id));
    }
    console.log(data);
  };
  return (
    <GraphContext.Provider
      value={{ dataset, data, vdc, time, idc, idref, rpm, tesc, tmot }}
    >
      {props.children}
    </GraphContext.Provider>
  );
};

export default GraphState;
