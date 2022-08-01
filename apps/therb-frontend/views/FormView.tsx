import { useActions, Provider } from "@be/building-editor-react";
import { useEffect } from "react";
import Editor from "../components/Editor";
import { useEditor } from "../editor/useEditor";
import { useEditorContext, editorKeys, EditorProvider } from "../EditorContext";
import SideForm from "./Result/Geometry/SideForm";


export default function FormView() {
    const{ addZoneGeometry,setObjectVisibilities,scene,editorState,setExteriorWalls } = useEditor();
    const{ addObject,removeObject }=useActions();
    const{editorObjects}=useEditorContext();
    const { openDialog,setOpenDialog }=useFormCondtionsContext();

    //BAES Analysisより模倣
    useEffect(()=>{
      const zoneGeometry = scene.getObjectByName(editorKeys.zoneGeometry);
      zoneGeometry && removeObject(zoneGeometry);
      addObject(editorObjects.zoneGeometry);
    })

    useEffect(()=>{
      addZoneGeometry();
      setObjectVisibilities({
        zoneGeometry: true,
        userObject: false,
      });
      if (editorState.axesHelper) editorState.axesHelper.visible = false;
      if (editorState.gridHelper) editorState.gridHelper.visible = true;
      setExteriorWalls();
    },[])
  
    return (
      <FormConditionsProvider>
        <Provider>   
          <EditorProvider>
            <Editor />
            <SideForm />
          </EditorProvider>
        </Provider>
        <DialogTable /> 
      </FormConditionsProvider>
      
    )
}