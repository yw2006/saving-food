/* eslint-disable no-unused-vars */

import { useQuery } from "@tanstack/react-query";
import "./App.css";
import "./pages/main/index";
import { Route, Routes } from "react-router-dom";
import Signboard from "./pages/main/component/Signboard";
import Cards from "./pages/main/component/Cards";
import Donate from "./pages/main/component/Donate";
import Main from "./pages/main/index";
import SignUp from "./pages/Sign up/Signup";
import Login from "./pages/Login/Login";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Signboard" element={<Signboard />} />
      <Route path="/Cards" element={<Cards />} />
      <Route path="/Donate" element={<Donate />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
};

export default App;
