import React from "react";
// import { TransparentPanel } from '@be/baues-uikit';
import Stack from "@mui/material/Stack";
import WwrForm from "./WwrForm";
import ProgramForm from "./ProgramForm";
import SpaceTypeForm from "./SpaceTypeForm";
import { useGeometryContext } from "../GeometryContext";
import { Button } from "@mui/material";
import TransparentPanel from "../../../../components/baues-uikit/TransparentPanel";

export default function ConditionForm():React.ReactElement{
  const { setDetailDialog } = useGeometryContext();
  const handleClickOpen = () => {
    //console.log('handleClickOpen');
    setDetailDialog(true);
  }
  return(
    <TransparentPanel sx={{x:1,p:1}}>
      <form>
        <Stack direction ="column" spacing={2}>
          <Button color="primary" variant="contained" onClick={handleClickOpen}>
            詳細設定
          </Button>
          <ProgramForm />
          <SpaceTypeForm />
          <WwrForm />
        </Stack>
      </form>
    </TransparentPanel>
  )
}