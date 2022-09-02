import React, { useEffect, useState } from 'react'
import GraphItem2 from './GraphItem2';

const Home2 = () => {
  const [data, setData] = useState([]);
    const dataset = async () => {
        const response = await fetch("http://localhost:5000/module/getAll", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        let data = [];
        const json = await response.json();
        for(let i in json){
            data.push(json[i].data[0]);
        }
        setData(data);
      };
    useEffect(()=>{
        dataset();
    },[]);
  return (
    <div>
      {
        data.map((e)=>{
          return( <GraphItem2 data={e} />);
        })
      }
    </div>
  )
}

export default Home2
