import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



 import NavBar from './components/NavBar/NavBar'

import HomePage from './pages/Home/HomePage';
import Dashboard from './pages/Dashboard/Dashboard';
import MyActivity from './pages/MyActivity/MyActivity';
import NewActivity from './pages/NewActivity/NewActivity';
import Community from './pages/Community/Community';
import Setting from './pages/Setting/Setting';
import { default as SetGoalPage } from './pages/SetGoal/SetGoal';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';



function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/activities' element={<MyActivity/>}/>
          <Route path='/community' element={<Community />}/>
          <Route path='/Setting' element={<Setting />}/>
          <Route path='/new-activity' element={<NewActivity />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/SetGoal' element={<SetGoalPage />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
