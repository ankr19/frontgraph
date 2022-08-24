import React from "react";
import { useEffect } from "react";

const Home = () => {
  // calling the endpoint

  const data = async () => {
    const response = await fetch("http://localhost:5000/module/getdbdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ simnumber: "1_EVD" }),
    });
    const json = await response.json();
    line(json);
  };

  const line = (json)=>{
    let d = [];
    d.push(json);
      let line = d.map((e) => {
        let a = [];
        for (let i = 0; i < e.length; i++) {
          a.push(e[i].rd[0][0]);
        }
        return a;
      });
      let obj = {};
      let values = [];
      console.log(line[0]);
      for(let i=0;i<line[0].length;i++){
        values.push(Object.values(line[0][i]));
      };
      console.log(values);
      // console.log(Object.keys(obj).length)
      // Object.entries(obj)
  }

  useEffect(() => {
    data();
  }, []);
  return <div className="container">Home Graph</div>;
};

export default Home;
