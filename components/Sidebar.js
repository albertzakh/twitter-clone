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

function Sidebar() {
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
          <SidebarTweet>Tweet</SidebarTweet>
        </SidebarTop>
        <SidebarBottom>
          <Image src={profileDef} width={62} height={52} />
          <SidebarUserInfo>
            <Username>Albert</Username>
            <TwitterUsername>@Albert</TwitterUsername>
          </SidebarUserInfo>
          <SidebarBottomDots />
        </SidebarBottom>
    </Container>
  )
}

export default Sidebar

const Container = styled.header`
    font-size:30px;
    width:21%;
    border-right:1px solid #eff3f4;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    padding-bottom:10px;
    position:sticky;
    top:0;
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
  width:95%;
  height:50px;
  border-radius:999px;
  border:none;
  background-color: #1b90df;
  color:white;
  font-weight:800;
  font-size:16px;
  margin-top:15px;
  cursor: pointer;
`;

const SidebarBottom = styled.div`
  width:95%;
  height:70px;
  border-radius:999px;
  display: flex;
  align-items: center;
  position: relative;
  
  :hover {
    background-color: #eeeeef;
  }
  cursor: pointer;
`

const SidebarUserInfo = styled.div`
  height:90%;
  display: flex;
  flex-direction: column;
`;

const Username = styled.strong`
  font-size:16px;
  margin-top:10px;
`;

const TwitterUsername = styled.p`
  font-size:16px;
`

const SidebarBottomDots = styled(MoreHorizOutlinedIcon)`
  position: absolute;
  right:10px;
  top:20px;
`;