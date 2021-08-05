import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import GlobalStyle from "./styles/global"
import NavbarHeader from "./components/Navbar"
import ContentBody from "./components/ContentBody"


const App:React.FC = ()=> (
  <>
    <GlobalStyle/>
    <NavbarHeader/> 
    <ContentBody/>
   
  </>
)

export default App;
