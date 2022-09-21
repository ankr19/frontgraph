import React from "react";
import Plot from "react-plotly.js";

const GraphItem3 = (props) => {
  const { time, vdc, idc, idref, rpm, tesc, tmot } = props;
  const data = [
    {
      time: time,
      d: vdc,
      color: "orange",
      nam: "VDC",
    },
    {
      time: time,
      d: idc,
      color: "blue",
      nam: "IDC",
    },
    {
      time: time,
      d: idref,
      color: "red",
      nam: "IDREF",
    },
    {
      time: time,
      d: rpm,
      color: "purple",
      nam: "RPM",
    },
    {
      time: time,
      d: tmot,
      color: "green",
      nam: "TMOT",
    },
    {
      time: time,
      d: tesc,
      color: "brown",
      nam: "TESC",
    },
  ];
  return (
    <div>
      {data.map((item, index) => {
        return (
          <Plot
            key={index}
            data={[
              {
                x: item.time,
                y: item.d,
                // xaxis: "Time",
                // yaxis: `${item.nam} Data`,
                type: "scatter",
                mode: "lines+markers",
                name: { title: `${item.nam}` },
                marker: { color: `${item.color}` },
              },
            ]}
            layout={{
              title:`${item.nam} Graph`,
              width: 1200,
              height: 400,
              xaxis: { title: "Time" },
              yaxis: { title: `${item.nam} Data` },

            }}
          />
        );
      })}
    </div>
  );
};

export default GraphItem3;
