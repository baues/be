import { DataGrid,GridColDef,GridColumns, GridRowsProp, GridEditCellPropsParams } from "@mui/x-data-grid";
// import { useParentSize } from "@be/baues-uikit";
import React, { useCallback } from "react";
import { LoadGridRowData, ScheduleGridRowData } from "../utils/AnalysisParams";
// import { LoadGridRowData, ScheduleGridRowData } from "src/utils/AnalysisParams";
import { useParentSize } from "../utils/useWindowSize";

interface DataSheetProps{
  columns: GridColumns;
  rows: LoadGridRowData[]|ScheduleGridRowData[];
  setRows: (rows: (LoadGridRowData | ScheduleGridRowData)[]) => void;
}
export default function DataSheet({columns,rows,setRows}:DataSheetProps):React.ReactElement{
  const {ref,width} = useParentSize();

  //FIXME: refがうまくいってない
  console.log('ref',ref);

  const handleEditCellChange = useCallback(
    ({id,field,props}:GridEditCellPropsParams):void => {
      //TODO:thresholdでinputをチェックするようにする
      const updateRows = rows.map((row) => {
        if (row.id === id){
          row[field] = Number(props.value);
          return row;
        }
        return row;
      })

      setRows(updateRows);
    },[rows]);
  
  return (
    <div style={{height:700,width:'100%'}}>
      <DataGrid 
        rows={rows}
        columns={columns}
        onEditCellPropsChange={handleEditCellChange}
      />
    </div>
  )
}