import { ListItem, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import Sidebar from '../../../../../components/Sidebar';
import { useEditParamDialogContext, InputCategoryKey } from '../EditParamDialogContext';

interface Props{
  category: InputCategoryKey;
}

function Section({category}:Props):React.ReactElement{
  const {inputCategoryKey,setInputCategoryKey} = useEditParamDialogContext();
  return(
    <ListItem
      button
      onClick={()=>{
        setInputCategoryKey(category);
      }}
      >
      <ListItemText primary={category} />
    </ListItem>
  )
}

function InputMenuList():React.ReactElement{
  return(
    <List>
      <Section category="internal_load" />
      <Section category="envelope" />
      <Section category="schedule" />
    </List>
  )
}

export default function InputMenu():React.ReactElement{
  return(
    <Sidebar anchor="left">
      <InputMenuList />
    </Sidebar>
  )
}