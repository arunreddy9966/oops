import logo from './logo.svg';
import './App.css';
import Movies from './Components/Movies';
import RCBPlayer from './Classes/RCBPlayer';

function App() {

let kohli= new RCBPlayer("kohli",90,98,56,93);
let dineshkarthik= new RCBPlayer();
let maxwell = new RCBPlayer();
let siraj = new RCBPlayer();

  return (
    <div className="App">
      <Movies 
      name= "kalki" 
      directorName="nag aswin"
      heroName="prabhas"
      heroineName="deepika padukone"
      producerName="aswani dutt"
      ></Movies>
      <Movies 
      name= "salaar" 
      directorName="prashanth neel"
      heroName="prabhas"
      heroineName="shruti haasan"
      producerName="vijay kiragandur"
      ></Movies>
      <Movies 
      name= "bhahubali" 
      directorName="ss rajamouli"
      heroName="prabhas"
      heroineName="anushka shetty"
      producerName="shobhu yarlagadda"
      ></Movies>
      <Movies 
      name= "adhipurush" 
      directorName="om raut"
      heroName="prabhas"
      heroineName="kriti sanon"
      producerName="bhushan kumar"
      ></Movies>
    </div>
  );
}

export default App;
