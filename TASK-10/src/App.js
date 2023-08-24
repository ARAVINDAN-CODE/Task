import './App.css';
import Nav from "./Components/Nav";
import Carousel from './Components/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import Cityroute from './Components/Cityroute';
import Chennai from './Components/Chennai';
import Kodaikanal from './Components/Kodaikanal';
import Madurai from './Components/Madurai';
import Kumbakonam from './Components/Kumbakonam';
import Theni from './Components/Theni';
import Rameshwaram from './Components/Rameshwaram';
import Ooty from './Components/Ooty';
import Kanyakumari from './Components/Kanyakumari';
import Yercaud from './Components/Yercaud';
import Hogenakkal from './Components/Hogenakkal';
function App() {
  return (
    <div>
      <Nav />
      <Carousel />
      <Cityroute />
      <Chennai />
      <Rameshwaram />
      <Kodaikanal />
      <Ooty />
      <Kanyakumari />
      <Kumbakonam />
      <Madurai />
      <Yercaud />
      <Theni />
      <Hogenakkal />
    </div>
  );
}

export default App;