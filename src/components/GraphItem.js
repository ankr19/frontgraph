import React from "react";
import Plot from "react-plotly.js";
const GraphItem = (props) => {
  const { value, date } = props;
  // let a = [1, 2, 3, 4, 2, 3,2 ,12, 23,2, 3];
  // console.log(a);
  let d = [];
  // d.push(Object.values(value[0]));
  for(let i in value[0])
  {
    d.push(value[0][i]);
  }
  //let obj = JSON.parse(JSON.stringify(d));
  //console.log(obj);
  //d = new Array(d[0])
  // d = new Array().length).fill(date);
  // d = new Array((d).length).fill(date);
  let dates = new Array(d.length).fill(date)
  // console.log(dates);
  return (
    <div>
      <Plot
        data={[
          {
            x: dates,
            y: value[0],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
          {
            x: dates,
            y: value[1],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "green" },
          },
        ]}
        layout={{ width: 800, height: 500, title: "A Fancy Plot" }}
      />
      {/* <Plot
        data={[,]}
        layout={{ width: 800, height: 500, title: "A Fancy Plot" }}
      /> */}
    </div>
  );
};

export default GraphItem;
//  {
//             x: [1, 2, 3],
//             y: [2, 6, 3],
//             type: 'scatter',
//             mode: 'lines+markers',
//             marker: {color: 'red'},
//   },
//