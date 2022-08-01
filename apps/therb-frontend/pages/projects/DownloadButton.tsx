import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { GridCellParams } from '@mui/x-data-grid';

interface Props{
  params: GridCellParams["row"];
}
export default function DownloadButton({params}:Props):React.ReactElement{ 
  const { replace } = useRouter();
  
  const handleClick = () =>{
    // async function download(){
    //   const response = await getDownload(params.name);
    //   console.log('response["data"]',response["data"]);
    // }
    // console.log('click');
    // download();
    replace(`http://localhost:5000/download/${params.name}`);
  }

  return(
    <Button 
      variant="contained" 
      color="primary"
      onClick={handleClick}
    >
      ダウンロード
    </Button>
  )
}
