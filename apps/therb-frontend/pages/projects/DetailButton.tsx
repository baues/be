import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { GridCellParams } from '@mui/x-data-grid';

interface Props{
  params: GridCellParams["row"];
}
export default function DetailButton({params}:Props):React.ReactElement{ 
  const { replace } = useRouter();
  
  const handleClick = () =>{
    replace(`/timeseries/${params.id}`);
  }

  return(
    <Button 
      variant="contained" 
      color="primary"
      onClick={handleClick}
    >
      詳細
    </Button>
  )
}