import { useCallback, useMemo } from "react";
import { useProjectListContext } from "./ProjectListContext";
import DetailButton from "./DetailButton";
import DownloadButton from "./DownloadButton";
import DeleteButton from "./DeleteButton";
import { DataGrid,GridCellParams,GridColDef,GridColumns, GridRowsProp } from '@mui/x-data-grid';


export default function ProjectList(){
  const { projectData } = useProjectListContext();

  //TODO: allProjectsのエンドポイントがうまくいってない
  // const { loading,error,data } = useQuery(GET_PROJECTS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error {JSON.stringify(error)}(</p>;

  // console.log('data from apollo',data);

  const columns: GridColDef[] = [
    {field:'id',headerName:"id",flex:1},
    {field:'name',headerName:"プロジェクト名",flex:2},
    {
      field:'detail',headerName:"詳細",
      flex:2,
      renderCell:(params:GridCellParams)=><DetailButton params={params.row}/>
    },
    {
      field:'download',headerName:"データダウンロード",
      flex:2,
      renderCell:(params:GridCellParams)=><DownloadButton params={params.row}/>
    },
    {
      field:'delete',headerName:"データ削除",
      flex:2,
      renderCell:(params:GridCellParams)=><DeleteButton params={params.row}/>
    }
  ]

  // const handleRowClick = useCallback((params:GridRowParams)=>{
  //   replace(`/${params.id}/timeseries`);
  // },[])

  const rows:GridRowsProp =projectData;
  
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid 
        rows={rows}
        columns = {columns as unknown as GridColumns}
        // onRowClick={handleRowClick}
      />
    </div>
  )
}