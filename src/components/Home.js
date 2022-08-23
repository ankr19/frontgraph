import React from "react";
import { useEffect } from "react";

const Home = () => {
  // calling the endpoint

  const data = async () => {
    console.log("hellog");
    const response = await fetch("http://localhost:5000/module/getdbdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ simnumber: "1_EVD" }),
    });
    const json = await response.json();
    let d = [];
    d.push(json);
    console.log(d);
  };

  useEffect(()=>{
    data();
  },[])
  return <div className="container">Home Graph</div>;
};

export default Home;
