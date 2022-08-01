import Sidebar from '../../components/Sidebar';
import Stack from '@mui/material/Stack';
import { useMapContext } from './mapContext';
import { Box, TextField } from '@mui/material';

function CoordinateInput():JSX.Element{

  const { siteCenter } = useMapContext();

  return (
    <Box>
      <TextField
        id="lat"
        label="latitude"
        value = {siteCenter.lat}
      />
      <TextField
        id="lng"
        label="longtitude"
        value = {siteCenter.lng}
      />
    </Box>
  )
}

export default function InputSidebar(): React.ReactElement{
  return(
    <Sidebar anchor ="left">
      <Stack direction="column" spacing={2}>
        <CoordinateInput />
      </Stack>
    </Sidebar>
  )
}