import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBarBlock from './components/nav-bar-block';
import People from './pages/people';
import SchoolPage from './pages/school';
import SchoolDetales from './pages/school-detales';
import Teachers from './pages/teachers';
import TeacherDetales from './pages/teacher-detales';
import PeopleDetales from './pages/people-detales';

function App() {

  const [token, setTokenData] = useState('skdjfhjsdkjfsdf')
  return <>
    {token ? <div className='G-page-container' >
      <NavBarBlock />
      <div className='G-main-pages'>
        <Routes>
          <Route path={'/'} element={<SchoolPage />} />
          <Route path={'/school-detales/:id'} element={<SchoolDetales />} />
          <Route path={'/teachers'} element={<Teachers />} />
          <Route path={'/teachers/teachers-detales/:idd'} element={<TeacherDetales />} />
          <Route path={'/people'} element={<People />} />
          <Route path={'/people/people-detales/:id'} element={<PeopleDetales />} />
          <Route path={'*'} element={<SchoolPage />} />
        </Routes>
        {/* ete unenam login - register mas */}
        {/* <Routes>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/register'} element={<Register/>}/>
        </Routes> */}
      </div>
    </div> : null}

  </>
}

export default App;
