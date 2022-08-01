import Stack from "@mui/material/Stack";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";

export default function Timeseries():React.ReactElement{
  return(
    <Layout>
      <Section sx={{flexDirection: 'column',p:0}}>
        <Stack direction={{xs:'column',sm:'row'}} sx={{m:2,flexWrap:'wrap'}}>
        </Stack>
      </Section>
    </Layout>
  )
}