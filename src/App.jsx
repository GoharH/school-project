import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBarBlock from './components/nav-bar-block';
import People from './pages/people';
import SchoolPage from './pages/school';
import Teachers from './pages/teachers';

function App() {

  const [token, setTokenData] = useState('skdjfhjsdkjfsdf')
  return <>
    {token ? <div className='G-page-container' >
      <NavBarBlock />
      <div className='G-main-pages'>
        <Routes>
          <Route path={'/'} element={<SchoolPage />} />
          <Route path={'/teachers'} element={<Teachers />} />
          <Route path={'/people'} element={<People />} />
        </Routes>
      </div>
    </div> : null}

  </>
}

export default App;
