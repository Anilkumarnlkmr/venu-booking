// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import "./index.css";
import VenuDeatils from './VenuDetails/VenuDetail';
import Login from './Login/LoginIN';
import SignUp from './SiginUp/SignUpPage';
import Verify from './Login/Verifying'
import ForgotPassword from './Login/ForgotPassword';
// import About from './Pages/About';
// import Products from './Pages/Products';

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="venu/:userId" element={<VenuDeatils />} />
            <Route path="/verifyUser" element={<Verify />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />

            {/* <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} /> */}

         </Routes>
      </>
   );
};

export default App;