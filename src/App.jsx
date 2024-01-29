/* eslint-disable no-unused-vars */

import { useQuery } from '@tanstack/react-query';
import './App.css'
import { Route, Routes } from 'react-router-dom'

const App = ()=> {
 return (
   <Routes>
     <Route
       path="/"
       element={
         <>
           <h1>hello</h1>
         </>
       }
     />
   </Routes>
   
 );

}

export default App