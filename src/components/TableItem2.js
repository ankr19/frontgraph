import { DataGrid } from '@mui/x-data-grid'
import React, { useContext } from 'react'
import GraphContext from '../context/GraphContext'

const TableItem2 = () => {
    const context = useContext(GraphContext);
    const {data} = context;

    const columns = [
        { field: 'Date', headerName: 'Date', width: 70 },]
  return (
    <div style={{height: 400, width: '100%'}}>
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

export default TableItem2
