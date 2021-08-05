import styled from "styled-components"
import{ PageText as NavText} from "../helpers/PageText"
import { Navbar } from 'reactstrap';


export const  HeadContent = styled.div`
    height: 100%;
    max-width: 1140px;
    overflow: visible;
    margin: auto;
    .button {
      transition-duration: 0.4s;
    }
    @media (min-width: 768px) { 
      width: 750px;
    }
    @media (min-width: 992px) {
      width: 970px;
    }
    @media (min-width: 1200px) { 
      width:1170px;
    }

`

export const  PageTitle = styled.div`

color: #D13A39;
display: flex;
flex-direction: row;

`

export const SpecialText = styled.div`
font-weight: 900;
margin-right: 10px;
margin-bottom: 10px;
`

export const CourseName = styled.div`
font-size: 1.5em;
color: #676767;
margin-bottom: 10px;

`

export const CourseButton = styled.button`
font-size: 0.8em;
color: #676767;

margin-bottom: 10px;
padding: 5px 10px 5px 10px;
border-radius: 15px;
border-width: 1px;
cursor: pointer;

&:hover {
  background-color: #034825;
  color: white;
}


`


export const ShareButton = styled.button`
  font-size: 0.8em;
  color: #676767;
  margin-bottom: 10px;
  margin-top: 5px;
  padding: 1px 10px 1px 10px;
  height: 2.5em;
  line-height: 2.5em;
  border-width: 1px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-left: 10px;

  &:hover {
    background-color: #034825;
    color: white;
  }


`

export const IconWrapper = styled.div`
    color: #FDCA17;
    font-size: 2em;
    margin-right: 10px;
`

export const ShareIconWrapper = styled.div`
    font-size: 2em;
    margin-right: 10px;
` 


export const RateWrapper = styled.div`
display: flex;
flex-direction: row;

`

export const RateText = styled.div`
font-size: 1.2em;
padding-top: 0.4em;
color: #ACACAD;

`

export const Container = styled.div`
display: flex;
flex-direction: column;
    color: white;
    background-color: #ffffff;

`
export const NavbarBlock = styled(Navbar)`
border:1px solid #E7E7E7;
background-color: #ffffff;
padding: 0px !important;
`

export const ContainerNav = styled.div`
    width: 100%;
    padding-top: 35px;
    height: 250px;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    color: white;
    background-color: #F6F7F8;

    
  
`
export const Logo = styled.img`
    width: 6em;
    border:1px solid #131A22;
    padding: .2em .1em ;
    cursor:pointer;

    &:hover{
        border:1px solid #ffffff;
        border-radius: .2em;
    }
`
export const Text = styled(NavText)`
    color:${(props)=>props.color ? props.color :"#ffffff" };
    font-size: ${(props)=>props.fontSize ? props.fontSize  : ".9em"};
    
`


export const Searchbox = styled.input`
    background-color: #ffffff;
    padding: .78em;
    width: 47%;
    border: none;

    @media(max-width:850px){
       border-radius: .2em;
       margin: .3em 0;
    }
`
export const Select = styled.select`
    background-color:#ddd;
    margin-right: -1.2em;
    padding: .72em .5em;
    border-radius: .2em 0em 0em .2em;
    border: none;
    cursor: pointer;

    @media(max-width:850px){
        display: none;
    }
` 
export const SearchIconWrapper = styled.span`
    background-color:#fabd60;
    color: #131A22;
    margin-left: -1em;
    border-radius: 0em .2em .2em 0em ;
    padding: .32em .5em;
    cursor: pointer;
    transition: all 250ms ease;

    &:hover{
        background-color:#ff9900;
    }
    @media(max-width:850px){
        display: none;
    }
` 

