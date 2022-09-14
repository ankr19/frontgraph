import React from "react";
import Plot from "react-plotly.js";
const GraphItem2 = (props) => {
  const { time, vdc, idc, idref, rpm, tesc, tmot } = props;
  return (
    <div className="text-center">
      <Plot
        data={[
          {
            x: time,
            y: vdc,
            xaxis: "x1",
            yaxis: "y1",
            type: "scatter",
            mode: "lines+markers",
            name:"vdc",
            marker: { color: "orange" },
          },
          {
            x: time,
            y: idc,
            xaxis: "x2",
            yaxis: "y2",
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
            name:"idc",
          },
          {
            x: time,
            y: idref,
            xaxis: "x3",
            yaxis: "y3",
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "pink" },
            name:"idref",
          },
          {
            x: time,
            y: rpm,
            xaxis: "x4",
            yaxis: "y4",
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "orarnge" },
            name: "rpm",
          },
          {
            x: time,
            y: tesc,
            xaxis: "x5",
            yaxis: "y5",
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "blue" },
            name:"tesc",
          },
          {
            x:time,
            y:tmot,
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
          xaxis1:{title:"time"},
          yaxis1:{title:"data(vdc)"},
          xaxis2:{title:"time"},
          yaxis2:{title:"data(idc)"},
          xaxis3:{title:"time"},
          yaxis3:{title:"data(idref)"},
          xaxis4:{title:"time"},
          yaxis4:{title:"data(rpm)"},
          xaxis5:{title:"time"},
          yaxis5:{title:"data(tesc)"},
          xaxis6:{title:"time"},
          yaxis6:{title:"data(tmot)"},
        }}
      />
    </div>
  );
};

export default GraphItem2;
