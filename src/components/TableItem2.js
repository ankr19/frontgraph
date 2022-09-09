import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import GraphContext from "../context/GraphContext";

const TableItem2 = () => {
  const context = useContext(GraphContext);
  const { data } = context;

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "Date", headerName: "Date", width: 70 },
    { field: "Time", headerName: "time", width: 70 },
    { field: "idc1", headerName: "idc1", width: 70 },
    { field: "vdc1", headerName: "vdc1", width: 70 },
    { field: "idref1", headerName: "idref1", width: 70 },
    { field: "rpm1", headerName: "rpm1", width: 70 },
    { field: "tesc1", headerName: "tesc1", width: 70 },
    { field: "tmot1", headerName: "tmot1", width: 70 },
    { field: "idc2", headerName: "idc2", width: 70 },
    { field: "vdc2", headerName: "vdc2", width: 70 },
    { field: "idref2", headerName: "idref2", width: 70 },
    { field: "rpm2", headerName: "rpm2", width: 70 },
    { field: "tesc2", headerName: "tesc2", width: 70 },
    { field: "tmot2", headerName: "tmot2", width: 70 },
    { field: "idc3", headerName: "idc3", width: 70 },
    { field: "vdc3", headerName: "vdc3", width: 70 },
    { field: "idref3", headerName: "idref3", width: 70 },
    { field: "rpm3", headerName: "rpm3", width: 70 },
    { field: "tesc3", headerName: "tesc3", width: 70 },
    { field: "tmot3", headerName: "tmot3", width: 70 },
    { field: "idc4", headerName: "idc4", width: 70 },
    { field: "vdc4", headerName: "vdc4", width: 70 },
    { field: "idref4", headerName: "idref4", width: 70 },
    { field: "rpm4", headerName: "rpm4", width: 70 },
    { field: "tesc4", headerName: "tesc4", width: 70 },
    { field: "tmot4", headerName: "tmot4", width: 70 },
    { field: "idc5", headerName: "idc5", width: 70 },
    { field: "vdc5", headerName: "vdc5", width: 70 },
    { field: "idref5", headerName: "idref5", width: 70 },
    { field: "rpm5", headerName: "rpm5", width: 70 },
    { field: "tesc5", headerName: "tesc5", width: 70 },
    { field: "tmot5", headerName: "tmot5", width: 70 },
    { field: "idc6", headerName: "idc6", width: 70 },
    { field: "vdc6", headerName: "vdc6", width: 70 },
    { field: "idref6", headerName: "idref6", width: 70 },
    { field: "rpm6", headerName: "rpm6", width: 70 },
    { field: "tesc6", headerName: "tesc6", width: 70 },
    { field: "tmot6", headerName: "tmot6", width: 70 },
    { field: "idc7", headerName: "idc7", width: 70 },
    { field: "vdc7", headerName: "vdc7", width: 70 },
    { field: "idref7", headerName: "idref7", width: 70 },
    { field: "rpm7", headerName: "rpm7", width: 70 },
    { field: "tesc7", headerName: "tesc7", width: 70 },
    { field: "tmot7", headerName: "tmot7", width: 70 },
    { field: "idc8", headerName: "idc8", width: 70 },
    { field: "vdc8", headerName: "vdc8", width: 70 },
    { field: "idref8", headerName: "idref8", width: 70 },
    { field: "rpm8", headerName: "rpm8", width: 70 },
    { field: "tesc8", headerName: "tesc8", width: 70 },
    { field: "tmot8", headerName: "tmot8", width: 70 },
    { field: "idc9", headerName: "idc9", width: 70 },
    { field: "vdc9", headerName: "vdc9", width: 70 },
    { field: "idref9", headerName: "idref9", width: 70 },
    { field: "rpm9", headerName: "rpm9", width: 70 },
    { field: "tesc9", headerName: "tesc9", width: 70 },
    { field: "tmot9", headerName: "tmot9", width: 70 },
    { field: "idc10", headerName: "idc10", width: 70 },
    { field: "vdc10", headerName: "vdc10", width: 70 },
    { field: "idref10", headerName: "idref10", width: 70 },
    { field: "rpm10", headerName: "rpm10", width: 70 },
    { field: "tesc10", headerName: "tesc10", width: 70 },
    { field: "tmot10", headerName: "tmot10", width: 70 },
  ];
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default TableItem2;
