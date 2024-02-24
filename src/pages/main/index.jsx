import Signboard from "./component/Signboard";
import Cards from "./component/Cards";
import DonateForm from "./component/Donate";
import Feedbacks from "../main/component/Feedbacks";
import Volanteers from "./component/Volanteers";
import Support from "../main/component/Support";
import SwipperCardsDonationLanding from "./component/SwipperCardsDonationLanding";
import Landing from "./component/Landing";
import Banner from "./component/Banner.jsx"
const Main = () => (
  <>

    <Landing/>
    <Banner />
    <Signboard />
    <Cards />
    <DonateForm />
    <Feedbacks />
    <Volanteers />
    <Support />
    <SwipperCardsDonationLanding />
  </>
);
export default Main;
