import React from "react";
import Plot from "react-plotly.js";
const GraphItem2 = (props) => {
  const { time, vdc, idc, idref, rpm, tesc, tmot } = props;
  return (
    <div>
      <Plot
        data={[
          {
            x: time,
            y: vdc,
            xaxis: "x1",
            yaxis: "y1",
            type: "scatter",
            marker: { color: "orange" },
          },
          {
            x: time,
            y: idc,
            xaxis: "x2",
            yaxis: "y2",
            type: "scatter",
            marker: { color: "red" },
          },
          {
            x: time,
            y: idref,
            xaxis: "x3",
            yaxis: "y3",
            type: "scatter",
            marker: { color: "pink" },
          },
          {
            x: time,
            y: rpm,
            xaxis: "x4",
            yaxis: "y4",
            type: "scatter",
            marker: { color: "yellow" },
          },
          {
            x: time,
            y: tesc,
            xaxis: "x5",
            yaxis: "y5",
            type: "scatter",
            marker: { color: "blue" },
          },
          {
            x: time,
            y: tmot,
            xaxis: "x6",
            yaxis: "y6",
            type: "scatter",
            marker: { color: "green" },
          },
        ]}
        layout={{
          grid: { rows: 2, columns: 3, pattern: "independent" },
          title: { text: "Figure 1" },
          width: 900,
          height: 800,
        }}
      />
    </div>
  );
};

export default GraphItem2;
