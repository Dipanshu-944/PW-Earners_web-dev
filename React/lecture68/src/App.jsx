import React from 'react'
import { AuthDashboard } from './components/Dashboard'
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router"
import { AuthProfile } from './components/Profile'

function App() {

  let user = {
    name: "Dipanshu attri",
    role: "Developer",
  }
  return (
    <>
      {/* <Dashboard/>  */}
      <Navbar />
      {/* <AuthDashboard /> */}
    <Routes>
      <Route path= "/" element={<p>Home</p>}/>
      <Route path= "/dashboard" element={<AuthDashboard />}/>
      <Route path= "/profile" element={<AuthProfile {...user}/>}/>
    </Routes>
    </>
  )
}

export default App