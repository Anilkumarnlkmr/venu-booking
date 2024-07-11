// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import "./index.css";
import VenuDeatils from './VenuDetails/VenuDetail';
// import About from './Pages/About';
// import Products from './Pages/Products';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="venu/:userId" element={<VenuDeatils />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} /> */}
       </Routes>
    </>
 );
};

export default App;