import React from 'react'
import {
    Container, 
    InnerContainer
} from "./styles"
import {KeyboardArrowLeft, Star, StarHalf, KeyboardArrowDown} from '@material-ui/icons';
import {departmentList, productDetails} from "./PageInfo"

const PageBody:React.FC = (props) => {
  const { children, ...rest } = props;
    return (
        <Container>
          <InnerContainer {...rest} >
          {children}
            
          </InnerContainer>
        </Container>
    )
}

export default PageBody;
