import { Toaster } from 'react-hot-toast';
import useAuthCheck from './hooks/useAuthCheck';
import Main from "./pages/Main";
const App = () => {
  const authCheck = useAuthCheck();

  return authCheck ? <>
    <Main />
    <Toaster position="top-right" />
  </> : <>Loading...</>
}

export default App;