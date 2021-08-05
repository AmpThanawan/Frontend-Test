import React from 'react'
import {
  Price, 
  RightBlock,
  ContainerList,
  PayButton,
  IconBlock,
  ListCard
} from "./styles"
import {Check, Clear} from '@material-ui/icons';
import {rightPaymentList} from "../PageInfo"

const RightPayment:React.FC = (props) => {
  const { children, ...rest } = props;
    return (
    
       <RightBlock  >
         <Price>4,500 บาท</Price>
         <PayButton color='right' >ชำระเงินเรียนเก็บหน่วยกิต</PayButton>
         <ContainerList>
         {rightPaymentList.map(item =>(
                   <ListCard><IconBlock >{item.status === true? <Check fontSize={"inherit"} /> :<Clear fontSize={"inherit"} /> } </IconBlock>{item.name}</ListCard>
                ))}
</ContainerList>
       </RightBlock>
    )
}

export default RightPayment;
