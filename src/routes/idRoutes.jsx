import React from 'react'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
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

const IndexRoute = () => {
  return (
  <Router>
     
     <Routes>
        <Route exact path="/"  element={<CreateAccount/>} />
        <Route exact path="/create"  element={<CreateAccount/>} />
        <Route path="/verification"  element={<Verification/>} />
        <Route exact path="/login"  element={<Login/>} />
        <Route path="/forgotpassword"  element={<Forgotpassword/>} />
        <Route path="/resetpassword"  element={<Forgotpassword/>} />
        <Route path="/dashboard"  element={<Dashboard/>} />
        <Route path="/users"  element={<Users/>} />
        <Route path="/mou"  element={<MOU/>} />
        <Route path="/request"  element={<Request/>} />
      </Routes>
  </Router>

  )
}

export default IndexRoute
