import { useState } from 'react'
import './App.css'
import StaffLMS from './Staff'
import StaffPortal from './Staffnew'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {


  return (
    <>
 <Router>
    <Routes>
      <Route path='/' element={<StaffPortal />} >  </Route>
      <Route path='/Staff' element={<StaffLMS />}>
      </Route>
    </Routes>
    </Router>
    </>
  )
}

export default App
