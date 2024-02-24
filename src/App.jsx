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
import Faq from "./pages/Faq/component/Faq";
import Error from "./pages/404/component/Error";
import UserDash from "./pages/UserDashboard/UserDash";
import VolunteringDetails from "./pages/main/component/VolunteringDetails";
import ContactUs from "./pages/main/component/ContactUs";
import FoodDonation from "./pages/articles/FoodDonation";
import FoodProtection from "./pages/articles/FoodProtection";
import FoodRecycling from "./pages/articles/FoodRecycling";
import adminDashboard from "./adminDashboard/index";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/donation" element={<FoodDonationForm />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/VolunteringDetails" Component={VolunteringDetails} />
      <Route path="/contactus" Component={ContactUs} />
      <Route path="*" element={<Error />} />
      <Route path="/userdashboard" element={<UserDash />} />
      <Route path="/chiratiesdachboard" Component={adminDashboard} />
      <Route path="/art1" element={<FoodDonation />} />
      <Route path="/art2" element={<FoodProtection />} />
      <Route path="/art3" element={<FoodRecycling />} />
    </Routes>
  );
};
export default App;
