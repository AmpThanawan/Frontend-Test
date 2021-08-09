import React from 'react'
import { Button } from 'reactstrap';
import {
  HeadTitle, 
  RightBlock,
  ContainerList,
  ProfileBox,
  BulletBlock,
  ListCard,
  ProfileDetail,
  RowProfile
} from "./styles"
import {LensSharp, Star,ChatBubble, PlayCircleFilled} from '@material-ui/icons';
import {profile, university} from "../PageInfo";
import coverPicture from "../../../assets/profile.png";
import universityPicture from "../../../assets/university.png";


const TeacherTabMobile:React.FC = (props) => {
  const { children, ...rest } = props;
    return (
    
       <div>
         <ProfileBox>
         <img src={coverPicture} />
         <ProfileDetail>
           <ProfileBox>{profile.name}</ProfileBox>
           <ProfileBox><Star fontSize={"inherit"} /><RowProfile>{profile.score}</RowProfile></ProfileBox>
           <ProfileBox><ChatBubble fontSize={"inherit"} /><RowProfile>{profile.review}</RowProfile></ProfileBox>
           <ProfileBox><PlayCircleFilled fontSize={"inherit"} /><RowProfile>{profile.course}</RowProfile></ProfileBox>
         </ProfileDetail>
         </ProfileBox>
         
        
         <ContainerList>
        
         {profile.history.map(item =>(
          <ListCard><BulletBlock ><LensSharp fontSize={"inherit"} /> </BulletBlock>{item}</ListCard>
          ))}
          </ContainerList>
          <HeadTitle/>
          <ProfileBox>
         <img src={universityPicture} />
         <ProfileDetail>
           <ProfileBox>{university.name}</ProfileBox>
           <ProfileBox><Star fontSize={"inherit"} /><RowProfile>{university.score}</RowProfile></ProfileBox>
           <ProfileBox><ChatBubble fontSize={"inherit"} /><RowProfile>{university.review}</RowProfile></ProfileBox>
           <ProfileBox><PlayCircleFilled fontSize={"inherit"} /><RowProfile>{university.course}</RowProfile></ProfileBox>
         </ProfileDetail>
         </ProfileBox>
         
        
         <ContainerList>
        
         {university.history.map(item =>(
          <ListCard><BulletBlock ><LensSharp fontSize={"inherit"} /> </BulletBlock>{item}</ListCard>
          ))}
          </ContainerList>
       </div>
    )
}

export default TeacherTabMobile;
