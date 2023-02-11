import { Toaster } from 'react-hot-toast';
import PreLoader from './components/loaders/PreLoader';
import useAuthCheck from './hooks/useAuthCheck';
import Main from "./pages/Main";
const App = () => {
  const authCheck = useAuthCheck();

  return authCheck ? <>
    <Main />
    <Toaster position="top-right" />
  </> : <PreLoader />
}

export default App;