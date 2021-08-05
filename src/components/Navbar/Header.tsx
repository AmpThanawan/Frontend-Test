import React from 'react'
import { Button } from 'reactstrap';
import {
  HeadContent,
  PageTitle, 
  SpecialText,
  CourseName,
  CourseButton,
  IconWrapper,
  RateWrapper,
  RateText,
  ShareButton,
  ShareIconWrapper
} from "./styles"
import {Share, Star, StarHalf, KeyboardArrowDown} from '@material-ui/icons';

const Header:React.FC = (props) => {
  const { children, ...rest } = props;
    return (
    
       <HeadContent>
         <PageTitle><SpecialText>TUXSA</SpecialText> หลักสูตรปริญญาโทออนไลน์</PageTitle>
         <CourseName>Design Thinking กระบวนการคิดเชิงออกแบบ</CourseName>
         <CourseButton>ปริญญาโทบริหารธุรกิจ สาขา Business Innovation</CourseButton>
         <RateWrapper>  <IconWrapper><Star fontSize={"inherit"} />
                                <Star fontSize={"inherit"}/>
                                <Star fontSize={"inherit"} />
                                <Star fontSize={"inherit"} />
                                <StarHalf fontSize={"inherit"}/>  </IconWrapper>  <RateText>4.7 (681 รีวิว)</RateText>    <ShareButton> <ShareIconWrapper><Share fontSize={"small"}/></ShareIconWrapper>แชร์คอร์สนี้</ShareButton></RateWrapper>
       </HeadContent>
    )
}

export default Header;