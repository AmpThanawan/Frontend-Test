import styled from "styled-components"


export const Container = styled.div`
   display: flex;
 
   @media (max-width: 600px) { 
    width: 100%;
    flex-direction: column;
  }
  @media (min-width: 600px) {
    width: 100%;
    flex-direction: column;
 
  }
   @media (min-width: 768px) { 
    width: 100%;
    flex-direction: column;
  }


  @media (min-width: 992px) {
    width: 100%;
    flex-direction: column;
  }


  @media (min-width: 1200px) { 
    width: 50%;
    flex-direction: row;
  }

`

export const Price= styled.div`
      font-size: 1.8em;
      font-weight: bold;
`

export const IconBlock= styled.div`
      font-size: 1.5em ;
      margin-right: 5px;
`


export const ContainerList = styled.div`
    text-align: left;
    font-size: 0.75em;
    line-height: 1.4em ;
    color: #676767;
`

export const ListCard = styled.div`
display: flex;
flex-direction: row;

`

export const PayButton = styled.button`
  width: 100%;
  font-size: 18px;
  line-height: 45px;
  margin-bottom: 15px;
  border-radius: 5px;
  border-width: 1px;
  cursor: pointer;
  background-color:${(props)=>props.color === 'right' ? "#034825" :"#ffffff" };
  color:${(props)=>props.color === 'right' ?  "#ffffff" : "#034825" };
  &:hover {
    background-color: #034825;
    color: white;
  }
`
 
export const LeftBlock = styled.div`  
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-left : 15px;
  padding-right : 15px;
  padding-top : 18px;
  padding-bottom : 20px;
   border : 1px solid #aaa;
  
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
    width: 50%;
    margin-right: 15px;
  }

`

export const RightBlock = styled.div`  
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-left : 15px;
  padding-right : 15px;
  padding-top : 18px;
  padding-bottom : 20px;
   border-top : 5px solid #04542b;
   border-left : 1px solid #04542b;
   border-right : 1px solid #04542b;
   border-bottom : 1px solid #04542b;
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
    width: 50%;
    margin-right: 15px;
  }

`



