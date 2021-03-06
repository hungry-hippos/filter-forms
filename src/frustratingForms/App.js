import React,{useEffect, useState} from 'react'
import DOB from './DOB'
import Minigame from './MinigamesForm'
import MapContainer from './MapContainer'
import ContactInfo from './ContactInfo'
import Summary from './Summary'
import Home from './Home'
import './App.css'



const SideBar=(props)=>{
  const {setShowRobot,setShowDOB,setShowMinigame,setShowMap,setShowContactInfo,setShowSummary,setShowHome}=props.setters;

  const show=(component)=>{
    setShowRobot(false);
    setShowDOB(false);
    setShowMinigame(false);
    setShowMap(false);
    setShowContactInfo(false);
    setShowSummary(false);
    setShowHome(false);
    switch(component){
      case "robot":
        setShowRobot(true);
        setShowSummary(true);
        break;
      case "dob":
        setShowDOB(true);
        break;
      case "minigame":
        setShowMinigame(true);
        break;
      case "map":
        setShowMap(true);
        break;
      case "contact":
        setShowContactInfo(true);
        break;
      case 'summary':
        setShowSummary(true);
        break;
      case 'home':
        setShowHome(true);
        break;
      default:
        break;
    }
  }
  return <div id='mainPageSidebar' className='hidden'>
    <button onClick={()=>{show("robot")}} className="mainPageBtn" id='robotSideBar'>Robot</button>
    <button onClick={()=>{show("dob")}} className="mainPageBtn" id='DOBSideBar'>DOB</button>
    <button onClick={()=>{show('minigame')}} className='mainPageBtn' id='minigameSideBar'>Minigame</button>
    <button onClick={()=>{show('map')}} className='mainPageBtn' id='mapSideBar'>Map</button>
    <button onClick={()=>{show('contact')}} className='mainPageBtn' id='contactSideBar'>Contact</button>
    <button onClick={()=>{show('summary')}} className='mainPageBtn' id='summarySideBar'>Summary</button>
    <button onClick={()=>{show('home')}} className='mainPageBtn' id='homeSideBar'>Home</button>
  </div>

};

const CollectedData=(props)=>{

  return <React.Fragment>
    <table id='collectedDataTable' className='hidden'>
    <tbody>
      <tr>
        <td>FIRST NAME</td>
        <td id='firstNameField' className='dataInputField'>Cornelius</td>
      </tr>
      <tr>
        <td>LAST NAME</td>
        <td id='lastNameField' className='dataInputField'>Angelo</td>
      </tr>
      <tr>
        <td>DOB</td>
        <td id='DOBField' className='dataInputField'>sept/12/1212</td>
      </tr>
      <tr>
        <td>ADDRESS LNG</td>
        <td id='lngField' className='dataInputField'>6969</td>
      </tr>
      <tr>
        <td>ADDRESS LAT</td>
        <td id='latField' className='dataInputField'>420</td>
      </tr>
      <tr>
        <td>EMAIL</td>
        <td id='emailField' className='dataInputField'>mike@whataspp.com</td>
      </tr>
      <tr>
        <td>PHONE</td>
        <td id='phoneField' className='dataInputField'>Not Provided</td>
      </tr>
    </tbody>
    </table>
  </React.Fragment>

};

function App() {
  const [showRobot,setShowRobot]=useState(false);
  const [showDOB,setShowDOB]=useState(false);
  const [showMinigame,setShowMinigame]=useState(false);
  const [showMap,setShowMap]=useState(false);
  const [showContactInfo,setShowContactInfo]=useState(false);
  const [showHome,setShowHome]=useState(true);
  const [showSummary,setShowSummary]=useState(false);

  const setters={setShowRobot,setShowDOB,setShowMinigame,setShowMap,setShowContactInfo, setShowSummary,setShowHome};
  
  useEffect(()=>{
    const body=document.getElementById('DOMBody');
    if (showHome){
      body.style.backgroundColor="#f8f9fa";
    }else{
      body.style.backgroundColor="#cee1fb";
    }
  },[showHome])


  return <React.Fragment>
        <SideBar setters={setters} />
        <CollectedData />
        {showHome && <Home appSetters={{setShowHome,setShowMinigame}}/>}
        {showMinigame && <Minigame />}
        {showDOB && <DOB />}
        {showMap && <MapContainer />}
        {showContactInfo && <ContactInfo />}
        {showSummary && <Summary robot={{setShowRobot,showRobot}} />}
  </React.Fragment>
  
  
}

export default App
