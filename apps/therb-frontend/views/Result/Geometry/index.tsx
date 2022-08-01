import { Editor,Provider } from '@be/building-editor-react';
import { useEffect } from 'react';
import { useAppConfig } from '../../../AppConfig';
import { EditorProvider } from '../../../EditorContext';
import { AppProvider, useAppContext } from '../../../AppContext';
import { useEditor } from '../../../editor/useEditor';
import SideForm from './SideForm';
import { GeometryProvider } from './GeometryContext';
import EditParamDialog from './EditParamDialog';

export default function Geometry(): React.ReactElement{
  const { editorConfig } = useAppConfig();
  const { geometry } = useAppContext();
  const { addGeometry,scene } =useEditor();

  useEffect(()=>{
    if(geometry){
      addGeometry()
    }
  },[geometry]);

  return(
    <AppProvider>
      <Provider>
        <EditorProvider>
          <GeometryProvider>
            <SideForm />
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
              <Editor config={editorConfig}/>
            </div>
            <EditParamDialog />
          </GeometryProvider>
        </EditorProvider>  
      </Provider>
    </AppProvider>
  )
}