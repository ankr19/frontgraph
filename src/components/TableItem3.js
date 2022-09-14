import React, { useContext } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import GraphContext from "../context/GraphContext";

const TableItem3 = () => {
    const context = useContext(GraphContext);
  const { data } = context;
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "date", headerName: "Date", width: 70 },
    { field: "time", headerName: "time", width: 70 },
    { field: "idc", headerName: "idc", width: 70 },
    { field: "vdc", headerName: "vdc", width: 70 },
    { field: "idref", headerName: "idref", width: 70 },
    { field: "rpm", headerName: "rpm", width: 70 },
    { field: "tesc", headerName: "tesc", width: 70 },
    { field: "tmot", headerName: "tmot", width: 70 },]
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
  )
}

export default TableItem3
