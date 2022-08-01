import React from 'react';
import { Button } from '@mui/material';
import { GridCellParams } from '@mui/x-data-grid';
import { deleteProjectData } from '../../api/KeyRequests';

interface Props{
  params: GridCellParams["row"];
}
export default function DeleteButton({params}:Props):React.ReactElement{ 

  const handleClick = () =>{
    async function deleteProject(){
      const response = await deleteProjectData(params.id);
      console.log('response["data"]',response["data"]);
    }
    deleteProject();
  }

  return(
    <Button 
      variant="contained" 
      color="primary"
      onClick={handleClick}
    >
      削除
    </Button>
  )
}