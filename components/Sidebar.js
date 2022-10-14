import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import profileDef from "../img/profileDef.png";
import Image from 'next/image';
import { logout } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux"; 

function Sidebar() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.value);

  return (
    <Container>
        <SidebarTop>
          <TwitterLogo />
          <SidebarOption Icon={HomeIcon} title="Home" />
          <SidebarOption Icon={TagIcon} title="Explore" />
          <SidebarOption Icon={NotificationsOutlinedIcon} title="Notifications" />
          <SidebarOption Icon={EmailOutlinedIcon} title="Messages" />
          <SidebarOption Icon={TurnedInNotOutlinedIcon} title="Bookmarks" />
          <SidebarOption Icon={FeaturedPlayListOutlinedIcon} title="Explore" />
          <SidebarOption Icon={PermIdentityOutlinedIcon} title="Profile" />
          <SidebarOption Icon={PendingOutlinedIcon} title="More" />
          <SidebarTweet><p>Tweet</p></SidebarTweet>
        </SidebarTop>
        <SidebarBottom>
          <Image src={!user ? profileDef : user.photoURL} width={45} height={45} style={{borderRadius:"999px"}} />
          <SidebarUserInfo onClick={() => dispatch(logout())}>
            <Username>{user?.name}</Username>
            <TwitterUsername>@{user?.name.toLowerCase()}</TwitterUsername>
          </SidebarUserInfo>
          <SidebarBottomDots />
        </SidebarBottom>
    </Container>
  )
}

export default Sidebar

const Container = styled.header`
    font-size:30px;
    border-right:1px solid #eff3f4;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    padding-bottom:10px;
    position:sticky;
    top:0;
    padding-right:30px;

    @media screen and (max-width:1280px) {
        display: flex;
        align-items: flex-end;
        width:10px;
        padding-right:10px;
        padding-left:80px;
    }

    @media screen and (max-width:500px) {
      display:none;
    }
`;

const SidebarTop = styled.div``

const TwitterLogo = styled(TwitterIcon)`
    font-size:55px;
    padding:8px;
    border-radius:999px;
    cursor:pointer;
    color:#1d9bf0;

    :hover {
        background-color: #f2f9fe;
    }
`

const SidebarTweet = styled.button`
  width:200px;
  height:50px;
  border-radius:999px;
  border:none;
  background-color: #1b90df;
  color:white;
  font-weight:800;
  font-size:16px;
  margin-top:15px;
  cursor: pointer;

   @media screen and (max-width:1280px) {
        width:60px;
        height:60px;
    }
`;

const SidebarBottom = styled.div`
  width:95%;
  height:70px;
  border-radius:999px;
  display: flex;
  align-items: center;
  position: relative;
  padding-left:15px;
  
  :hover {
    background-color: #eeeeef;
  }
  cursor: pointer;

  @media screen and (max-width:1280px) {
    display: none;
  }
`

const SidebarUserInfo = styled.div`
  width:180px;
  display: flex;
  flex-direction: column;
  margin-left:10px;
`;

const Username = styled.strong`
  font-size:16px;
`;

const TwitterUsername = styled.p`
  font-size:16px;
`

const SidebarBottomDots = styled(MoreHorizOutlinedIcon)`
  position: absolute;
  right:15px;
  top:20px;

   @media screen and (max-width:1280px) {
    display: none;
  }
`;