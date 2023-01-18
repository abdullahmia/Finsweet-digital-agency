import { Toaster } from 'react-hot-toast';
import Main from "./pages/Main";
const App = () => {
  return (
    <>
      <Main />
      <Toaster position="top-right" />
    </>
  )
}

export default App;