import styled from "styled-components"
import {PageText} from "../helpers/PageText"
import {PageItemWrapper} from "../helpers/ItemWrapper"


export const TopContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom : 20px;
    @media (max-width: 600px) { 
      flex-direction: column;

    }
    @media (min-width: 600px) {
      flex-direction: column;

    }
    @media (min-width: 768px) { 
      flex-direction: column;
    }
    @media (min-width: 992px) {
      flex-direction: column;
    }


    @media (min-width: 1200px) { 
      flex-direction: row;
    }

`
export const VideoContainer = styled.div`
    display: flex;
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
      margin-right: 15px;
      width: 50%;
    }
`

export const ImageBlock = styled.img`
width: 100%;
   height: 100%;
`


export const InnerContainer = styled.div`
    max-width: 1140px;
    overflow: visible;
    margin: auto;
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


export const LeftContainer = styled.aside`
    height:80vh;
    width: 18vw;
    border-right: 2px solid #ddd;
   @media(max-width:650px){
        display: none
   }
`

export const RightContainer = styled.section`

    display: flex;
    flex-direction: column;
    margin-left: 1.5em;

`
export const Image = styled.img`
    width: 13em;
`
export const Text = styled(PageText)`
    color:${(props)=>props.color ? props.color :"#131A22" };
    font-size:${(props)=>props.fontSize ? props.fontSize :".9em" };
`
export const BoldText = styled(Text)`
    font-weight: bold;
    padding: .4em;
`

export const Paragraph = styled.p`
    font-size:.9em;
    display: flex;
    align-items: center;
    padding-bottom: .1em;
`
export const SearchResultDiv = styled.div`
    border: 1px solid #ddd;
    padding: .6em;
    width: 95%;
    border-radius: 4px;
`
export const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 21em);
    margin-top: 2em;

    @media(max-width:915px){
        grid-template-columns: repeat(auto-fit, 15em);
        align-items: center;
        justify-content: center;
    }
`
export const ImageContainer = styled.div`
    height: 14em;
    display: flex;
    align-items: center;
`

export const Wrapper = styled(PageItemWrapper)`
    display: flex;
    margin-right: 1em;
    flex-direction: ${(props)=>props.flexDirection ? props.flexDirection  : "row"};
    align-items:  ${(props)=>props.alignItems ? props.alignItems  : "left"};
    margin:  ${(props)=>props.margin ? props.margin : ""};
`

export const IconWrapper = styled.div`
    color: #ff9900;
`