import styled from "styled-components"
import {  Nav, NavItem, NavLink } from 'reactstrap';



export const NavTab = styled(Nav)`
  color: #8e8e8e;
  cursor: pointer;
  .active  {
    color: #04542b;
    border:none;
    border-bottom : 4px solid #04542b !important;
    &:hover {
      background-color: #eee;
      color: #676767;
    }
  }

 
  
`


export const NavTabItem = styled(NavItem)`
color: #8e8e8e;
&:hover {
  background-color: #eee;
  color: #676767;
}
.linkActive  {
  &:hover {
    background-color: #eee;
    color: #676767;
  }
  border-bottom : 4px solid #04542b;
}

`

export const TabContentBox = styled.div`
color: black;
margin-top: 20px;
font-size: 1em ;

`


export const NavTabLink = styled(NavLink)`
color: #8e8e8e;

.linkActive  {
  &:hover {
    background-color: #eee;
    color: #676767;
  }
  border-bottom : 4px solid #04542b;
}
`


export const Container = styled.div`
   display: flex;
   width: 100%;
`

export const HeadTitle = styled.div`
      font-size: 1.5em;
      font-weight: 500;
      padding-bottom: 0.25em;
      margin-bottom: 10px;
      border-bottom: 1px solid #DDDDDD; 
`


export const ProfileBox = styled.div`
display: flex;
flex-direction: row;
`


export const ProfileDetail = styled.div`
display: flex;
flex-direction: column;
padding-top: 10px;
width: 100%;
font-size: 0.9em;
`

export const RowProfile = styled.div`
margin-left: 10px;
font-size: 0.8em;
`


export const IconBlock= styled.div`
      font-size: 1.5em ;
      margin-right: 5px;
`

export const BulletBlock= styled.div`
      font-size: 0.6em ;
      margin-right: 5px;
`



export const ContainerList = styled.div`
    text-align: left;
    font-size: 0.75em;
    line-height: 1.4em ;
    color: #676767;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const ListCard = styled.div`
display: flex;
flex-direction: row;
font-size: 1.1em;
line-height: 1.5em;


`

export const PayButton = styled.button`
  width: 100%;
  font-size: 18px;
  line-height: 45px;
  margin-bottom: 15px;
  border-radius: 5px;
  border-width: 1px;
  background-color:${(props)=>props.color === 'right' ? "#034825" :"#ffffff" };
  color:${(props)=>props.color === 'right' ?  "#ffffff" : "#034825" };
`
 
export const LeftBlock = styled.div`  
display: flex;

flex-direction: column;
text-align: center;
padding-left : 15px;
padding-right : 15px;
padding-top : 18px;
padding-bottom : 20px;


@media (max-width: 600px) { 
  width: 100%;

}
@media (min-width: 600px) {
  width: 100%;

}
@media (min-width: 768px) { 
  width: 100%;

}
@media (min-width: 992px) {
  width: 100%;

}
@media (min-width: 1200px) { 
  width: 80%;
  margin-right: 15px;
}

`

export const RightBlock = styled.div`  
    display: flex;
   width: 25%;

  flex-direction: column;
  text-align: สำดะ;
  padding-left : 15px;
    padding-right : 15px;
    padding-top : 18px;
    padding-bottom : 20px;

    @media (max-width: 600px) { 
      width: 100%;
      display: none;
    }
    @media (min-width: 600px) {
      width: 100%;
      display: none;
    }
    @media (min-width: 768px) { 
      width: 100%;
      display: none;
    }
    @media (min-width: 992px) {
      width: 100%;
      display: none;
    }
    @media (min-width: 1200px) { 
      width: 50%;
      margin-right: 15px;
    }
`



export const Baaa = styled.div`
   


    @media (min-width: 768px) { 
      width: 750px;
    }


    @media (min-width: 992px) {
      width: 970px;
    }


    @media (min-width: 1200px) { 
      1170px;
    }
`