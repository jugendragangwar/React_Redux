import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import {Home,AddPost,Posts}  from '../pages/index'
import  {Navbar,Footer} from '../layout/index'; 


const Routers = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddPost" element={<AddPost />} />
          <Route path="/Posts" element={<Posts />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
};

export default Routers;
