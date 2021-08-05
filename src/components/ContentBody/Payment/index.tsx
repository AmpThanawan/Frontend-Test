import React from 'react'
import {
  Container, 
} from "./styles"
import {KeyboardArrowLeft, Star, StarHalf, KeyboardArrowDown} from '@material-ui/icons';
import LeftPayment from './LeftPayment';
import RightPayment from './RightPayment';
import video from "../../assets/video.png"

const Payment:React.FC = (props) => {
  const { children, ...rest } = props;
    return (
        <Container>       
        <LeftPayment/>
        <RightPayment/>
        </Container>
    )
}

export default Payment;
