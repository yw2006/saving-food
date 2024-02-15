import Signboard from "./component/Signboard";
import Cards from "./component/Cards";
import DonateForm from "./component/Donate";
import Navbar from "../../commn/Navabar";
import Navabar2 from "../../commn/navbar";
import Feedbacks from "../main/component/Feedbacks";
import Volanteers from "./component/Volanteers";
import Support from "../main/component/Support";
import SwipperCardsDonationLanding from "./component/SwipperCardsDonationLanding";
import Footer from "../../commn/Footer.jsx";
const Main = () => (
  <>
    <Navbar />
    <Navabar2 />
    <Signboard />
    <Cards />
    <DonateForm />
    <Feedbacks />
    <Volanteers />
    <Support />
    <SwipperCardsDonationLanding />
    <Footer />
  </>
);
export default Main;
