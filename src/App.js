import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import ForgetPassword from './pages/ForgetPassword';
import Offers from './pages/Offers';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <>
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
      </Route>
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/forget-password' element={<ForgetPassword />} />
      <Route path='/offers' element={<Offers />} />
    </Routes>
  </Router>
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme='dark'
    />
    
<ToastContainer />
   </>
  );
}

export default App;
