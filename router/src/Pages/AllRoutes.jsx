import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Authenticate from '../Components/Authenticate';
import Career from './Career';
import Detail from './Detail';
import Login from './Login'
import Params from './Params';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Params />} />
                <Route
          path="/:param"
          element={
            <Authenticate>
              <Detail />
            </Authenticate>
          }
        />
        <Route
          path="/career"
          element={
            <Authenticate>
              <Career />
            </Authenticate>
          }
        />
      </Routes>
    </div>
  );
}

export default AllRoutes
