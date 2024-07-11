import {Route, Routes } from "react-router-dom";

import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

export default function RoutesApp(){
  return(
      <Routes>
        <Route path="/" element={ <Login/> }/>
        <Route path="/register" element={ <SignUp/> }/>
        <Route path="*" element={<Login/>}/>
      </Routes>
  )
}