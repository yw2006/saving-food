import  Signboard from "./component/Signboard";
import Cards from "./component/Cards";
import DonateForm from './component/Donate';
import Navbar  from "../../commn/Navabar";
import Navabar2 from "../../commn/navbar";

const Main = ()=>(
<>
<Navbar/>
<Navabar2/>
  <Signboard/>
  <Cards/>
  <DonateForm/>
</>
)
export default Main