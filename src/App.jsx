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
import FoodDonationForm from "./pages/donationForm/componets/form";
import Faq from "./pages/Faq/component/Faq"
import Error from './pages/404/component/Error'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/donation" element={<FoodDonationForm />} />
      <Route path="/fqa" element={<Faq />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default App;
