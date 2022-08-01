import { Provider } from "@be/building-editor-react";
import Editor from "../components/Editor";
import { EditorProvider } from "../EditorContext";


export default function Index() {

  return (
    <Provider>   
      <EditorProvider>
        <Editor />
      </EditorProvider>
    </Provider>
  );
}
