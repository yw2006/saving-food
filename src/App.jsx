/* eslint-disable no-unused-vars */

import { useQuery } from "@tanstack/react-query";
import "./App.css";
import "./pages/main/index";
import { Route, Routes } from "react-router-dom";
import Signboard from "./pages/main/component/Signboard";
import Cards from "./pages/main/component/Cards";
import Donate from './pages/main/component/Donate';
import Navabar from "./commn/Navabar";
import Navbar from "./commn/Navbar";
import Landing from './pages/main/component/Landing';
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navabar/>
            <Navbar/>
            <Landing/>
          </>
        }
      />
      <Route path="/Signboard" element={<Signboard />} />
      <Route path="/Cards" element={<Cards />} />
      <Route path="/Donate" element={<Donate />} />


    </Routes>
  );
};

export default App;
