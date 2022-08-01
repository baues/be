import React from "react";
import { useMapContext } from "./mapContext";
import Typography from "@mui/material/Typography";
import { CardContent, Box, Card } from "@mui/material";

export default function InfoBox(){
  const { siteOutline } = useMapContext();
  console.log('siteOutline',siteOutline[0].lat);
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography>
          {siteOutline[0].lat}
        </Typography>
        <Typography>
          {siteOutline[0].lng}
        </Typography>
      </CardContent>
    </React.Fragment>
  )
  return (
    <Box>
      <Card variant = "outlined">{card}</Card>
    </Box>
  )
}