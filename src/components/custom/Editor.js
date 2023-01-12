import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { formats, modules } from "./EditorToolbars";


const Editor = ({value, handleChange}) => {
  return (
    <>
          <EditorToolbar />
          <ReactQuill
              theme="snow"
              value={value}
              onChange={handleChange}
              placeholder={"Write something awesome..."}
              modules={modules}
              formats={formats}
              className="h-96"
          />
    </>
  )
}

export default Editor;