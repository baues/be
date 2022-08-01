
import MyMenu from './Menu';
import * as THREE from 'three';
import { Editor } from '@be/building-editor';
import { useEditorState, ViewCube } from '@be/building-editor-react';
import { useAppConfig } from '../AppConfig';


const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshBasicMaterial();
const box = new THREE.Mesh(geometry, material);

export default function MyEditor() {
  const{ selected }=useEditorState();
  const { editorConfig } = useAppConfig();

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Editor contextMenu={<MyMenu />} config={editorConfig}/>
      
      <ViewCube style={{ position: 'absolute', zIndex: 1, left: 50, bottom: 50 }} />
    </div>
  );
}
