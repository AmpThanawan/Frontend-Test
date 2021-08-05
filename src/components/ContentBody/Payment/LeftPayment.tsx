import React from 'react'
import { Button } from 'reactstrap';
import {
  PayButton, 
  LeftBlock,
  Price,
  ContainerList,
  IconBlock,
  ListCard
} from "./styles"
import {Check, Clear} from '@material-ui/icons';
import {leftPaymentList} from "../PageInfo"

const LeftPayment:React.FC = (props) => {
  const { children, ...rest } = props;
    return (
    
       <LeftBlock >
          <Price  >1,500 บาท</Price>
          <PayButton>ชำระเงินเรียนเก็บหน่วยกิต</PayButton>
      <ContainerList>
        {leftPaymentList.map(item =>(
          
          <ListCard><IconBlock >{item.status === true? <Check fontSize={"inherit"} /> :<Clear fontSize={"inherit"} /> }</IconBlock>{item.name}</ListCard>
       ))}
      </ContainerList>

       </LeftBlock>
    )
}

export default LeftPayment;
