import { ReactFormBuilder } from 'react-form-builder2';
import { ReactFormGenerator } from 'react-form-builder2';


function App() {

  return (
    <>
      <ReactFormGenerator
        form_action="/path/to/form/submit"
        form_method="POST"
        task_id={12}
      />
    </>
  )
}

export default App
