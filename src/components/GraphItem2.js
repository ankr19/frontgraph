import React from "react";
import Plot from "react-plotly.js";
const GraphItem2 = (props) => {
  const { time, vdc, idc, idref, rpm, tesc, tmot } = props;
  return (
    <div>
      <Plot
        data={[
          {
            x: vdc,
            y: time,
            xaxis: "x1",
            yaxis: "y1",
            type: "scatter",
            mode: "lines+markers",
            name:"vdc",
            marker: { color: "orange" },
          },
          {
            x: idc,
            y: time,
            xaxis: "x2",
            yaxis: "y2",
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
            name:"idc",
          },
          {
            x: idref,
            y: time,
            xaxis: "x3",
            yaxis: "y3",
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "pink" },
            name:"idref",
          },
          {
            x: rpm,
            y: time,
            xaxis: "x4",
            yaxis: "y4",
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "orarnge" },
            name: "rpm",
          },
          {
            x: tesc,
            y: time,
            xaxis: "x5",
            yaxis: "y5",
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "blue" },
            name:"tesc",
          },
          {
            x: tmot,
            y: time,
            xaxis: "x6",
            yaxis: "y6",
            mode: "lines+markers",
            type: "scatter",
            marker: { color: "green" },
            name:"tmot",
          },
        ]}
        layout={{
          grid: { rows: 2, columns: 3, pattern: "independent" },
          title: { text: "Figure 1" },
          width: 900,
          height: 800,
          xaxis1:{title:"data(vdc)"},
          yaxis1:{title:"time"},
          xaxis2:{title:"data(idc)"},
          yaxis2:{title:"time"},
          xaxis3:{title:"data(idref)"},
          yaxis3:{title:"time"},
          xaxis4:{title:"data(rpm)"},
          yaxis4:{title:"time"},
          xaxis5:{title:"data(tesc)"},
          yaxis5:{title:"time"},
          xaxis6:{title:"data(tmot)"},
          yaxis6:{title:"time"},
        }}
      />
    </div>
  );
};

export default GraphItem2;
