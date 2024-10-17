import React from 'react'
import { BrowserRouter as Router, Route,  Routes ,useLocation } from 'react-router-dom';
import CreateAccount from '../pages/CreateAccount';
import Forgotpassword from '../pages/forgotpassword'
import SignChoice from '../pages/signChoice';
import Login from '../pages/login';
import Verification from '../pages/verification';
import Users from '../pages/user';
import Dashboard from '../pages/dashboard';
import MOU from '../pages/mous';
import Setting from '../pages/setting';
import Request from '../pages/request';
import Navbar from "../components/menu"

const IndexRoute = () => {
  const location = useLocation(); // Get the current route

  // Define the routes where the menu should not be shown
  const hideMenuRoutes = ["/", "/create", "/forgotpassword", "/resetpassword", "/login"];

  // Check if the current path matches one of the routes to hide the menu
  const shouldHideMenu = hideMenuRoutes.includes(location.pathname);

  return (
    <div>
      {/* Conditionally render the menu */}
     
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/create" element={<CreateAccount />} />
        <Route path="/verification" element={<Verification />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/resetpassword" element={<Forgotpassword />} />
        </Routes>
      <div className="h-[100vh] w-[100vw] overflow-hidden relative lg:flex">
        
      {!shouldHideMenu && (
        <Navbar />
      )}
        <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/mou" element={<MOU />} />
        <Route path="/request" element={<Request />} />
        </Routes>
      </div>
     
    </div>
  );
};

export default IndexRoute
