
import '../App.css';
import Navbar from './navbar'
import Description from './description';
import Aboutus from './aboutus';
import Numbers from './work';
import Connect from './connect';
import Footer from './footer';
import Tracker from './Tracker';

import Clients from "../Clients/Clients"
import styled from "styled-components";
import Dropdown from './dropdown';
import Servicing from "./servicing";

// import Service from './Service';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Description />
      <Tracker />
      <Numbers />

      <Clients />


      <Dropdown />
      <Servicing />
      {/* <Aboutus/>  */}
      {/* <Work/> */}
      {/* <Connect/> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <Footer />



    </div>
  );
}

export default Home;
const Container = styled.div``