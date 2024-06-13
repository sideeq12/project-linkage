import React from 'react'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import CreateAccount from '../pages/CreateAccount';
import Forgotpassword from '../pages/forgotpassword'
import SignChoice from '../pages/signChoice';
import Login from '../pages/login';

const IndexRoute = () => {
  return (
        <Router>
      <Routes>
        <Route exact path="/"  element={<SignChoice/>} />
        <Route exact path="/create"  element={<CreateAccount/>} />
        <Route path="/forgotpassword"  element={<Forgotpassword/>} />
        <Route exact path="/login"  element={<Login/>} />
        <Route path="/resetpassword"  element={<Forgotpassword/>} />
        <Route exact path="/signChoice"  element={<CreateAccount/>} />
        <Route path="/forgotpassword"  element={<Forgotpassword/>} />
      </Routes>
    </Router>
  )
}

export default IndexRoute
