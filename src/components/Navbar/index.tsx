import React from 'react'
import {
  Container,
  ContainerNav, 
  NavbarBlock
} from "./styles"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { ShoppingCartOutlined, SearchOutlined, ArrowDropDown, RoomOutlined } from '@material-ui/icons';
import Header from './Header';
import logo from "../../assets/logo.png"

const NavbarHeader:React.FC = () => {
  const [toggle, SetToggle] = React.useState(false);
    return (
        <>
        <Container>
        <NavbarBlock light expand="md">
          <NavbarBrand href="/"><img src={logo}/></NavbarBrand>
          <NavbarToggler onClick={() =>SetToggle(true)}  />
          <Collapse isOpen={toggle} navbar>
            <Nav className="ml-auto" navbar>
             
            </Nav>
          </Collapse>
        </NavbarBlock>
            <ContainerNav>
         
        <Header/>
            </ContainerNav>
            </Container>
        </>
    )
}

export default NavbarHeader
