import React from "react";
import { Container } from '@mui/material';
import { useEditParamDialogContext } from "../EditParamDialogContext";
import Datasheet from "../../../../../components/DataSheet";

export default function InternalLoad():React.ReactElement{
  const { loadColData, loadRowData,setLoadRowData } = useEditParamDialogContext();

  return (
    <Container>
      <Datasheet columns = {loadColData} rows={loadRowData} setRows={setLoadRowData}/>
    </Container>
  )
}