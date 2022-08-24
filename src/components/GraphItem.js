import React from "react";
import Plot from "react-plotly.js";
const GraphItem = (props) => {
  const { value, date } = props;

  let d = new Array(value[0].length).fill(date);

  return (
    <div>
      <Plot
        data={[
          {
            x: value[0],
            y: d,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
          {
            x: value[1],
            y: d,
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
//           },
