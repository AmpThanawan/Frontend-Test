import React from 'react'
import {
  TopContainer, 
  ImageBlock,
  VideoContainer
} from "./styles"
import PageBody from '../PageBody';
import Payment from './Payment'
import CourseDetail from './CourseDetail'
import video from "../../assets/video.png"

const ContentBody:React.FC = (props) => {
  const { children, ...rest } = props;
    return (
        <PageBody>
          <TopContainer>
            <VideoContainer>
              <ImageBlock src={video}/>
            </VideoContainer>
            <Payment/>
          </TopContainer>
          <CourseDetail />      
        </PageBody>
    )
}

export default ContentBody;
