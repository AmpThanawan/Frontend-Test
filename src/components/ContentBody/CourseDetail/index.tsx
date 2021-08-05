import React from 'react'
import {
  Container, 
} from "./styles"
import Left from './Left';
import Right from './Right';
const CourseDetail:React.FC = (props) => {
  
    return (
        <Container>       
        <Left/>
        <Right/>
        </Container>
    )
}

export default CourseDetail;
