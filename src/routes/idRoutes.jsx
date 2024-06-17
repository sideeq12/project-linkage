import React from 'react'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import CreateAccount from '../pages/CreateAccount';
import Forgotpassword from '../pages/forgotpassword'
import SignChoice from '../pages/signChoice';
import Login from '../pages/login';
import Verification from '../pages/verification';
import Users from '../pages/users';
import Dashboard from '../pages/dashboard';
import MOU from '../pages/mou';
import Setting from '../pages/setting';

const IndexRoute = () => {
  return (
  <Router>
     
     <Routes>
        <Route exact path="/"  element={<SignChoice/>} />
        <Route exact path="/create"  element={<CreateAccount/>} />
        <Route path="/verification"  element={<Verification/>} />
        <Route exact path="/login"  element={<Login/>} />
        <Route path="/forgotpassword"  element={<Forgotpassword/>} />
        <Route path="/resetpassword"  element={<Forgotpassword/>} />
        
        <Route path="/dashboard"  element={<Dashboard/>} />
        <Route path="/users"  element={<Users/>} />
        <Route path="/dashboard/mou"  element={<MOU/>} />
        <Route path="/dashboard/setting"  element={<Setting/>} />
      </Routes>
  </Router>

  )
}

export default IndexRoute
