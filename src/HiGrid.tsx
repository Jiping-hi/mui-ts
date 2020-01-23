import React from 'react'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

interface HiGridProps {
  columns?: any,
  data?: any,
}

export function HiGrid(props: HiGridProps) {
  const columnDefs = props.columns || HiGridDefaults.defaultColumnDefs
  const rowData = props.data || HiGridDefaults.rowData
  return (
    <div className="ag-theme-balham" style={{ height: '200px', width: '600px' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}>
      </AgGridReact>
    </div>
  )
}

export const HiGridDefaults = {
  defaultColumnDefs: [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" }],
  rowData: [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }]
}

export default HiGrid
