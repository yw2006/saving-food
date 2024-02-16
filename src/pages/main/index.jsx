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
import Landing from "./component/Landing";
import Banner from "./component/Banner.jsx"
const Main = () => (
  <>
    <Navbar />
    <Navabar2 />
    <Landing/>
    <Banner />
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
