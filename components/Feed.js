import { useState, useEffect } from "react";
import styled from "styled-components"
import Image from "next/image";
import profileDef from "../img/profileDef.png";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  const [disbaled, setDisabled] = useState(true);
  const [messageField, setMessageField] = useState("");

  useEffect(() => {
    if(!messageField) {
      setDisabled(true)
    }
    else {
      setDisabled(false)
    }
  }, [messageField])

  return (
    <FeedContainer>
      <strong style={{marginLeft:"20px", fontSize:"19px"}}>HOME</strong>
      <FeedAddContainer>
        <FeedAddTop>
          <Image src={profileDef} width={65} height={65} objectFit="cover" style={{cursor:"pointer"}} />
            <Input onChange={(e) => setMessageField(e.target.value)} value={messageField} placeholder="What's happening?" />
        </FeedAddTop>
        <FeedAddBottom>
          <label htmlFor="photo">
            <input type="file" id="photo" style={{display:"none"}} />
            <FeedImage />
          </label>
          <label htmlFor="gif">
            <input type="file" id="gif" style={{display:"none"}} />
            <FeedGif />
          </label>
          <FeedAddButton disabled={disbaled} style={{background: disbaled === true ? "#8ecdf7" : "#1d9bf0"}}>Tweet</FeedAddButton>
        </FeedAddBottom>
      </FeedAddContainer>
      <FeedPostsContainer>
        <Post />
      </FeedPostsContainer>
    </FeedContainer>
  )
}

export default Feed

const FeedContainer = styled.div`
  padding-top:20px;
  width:50%;
  border-right:1px solid #eff3f4;
`

const FeedAddContainer = styled.div`
  position:relative;
  width:100%;
  margin-top:30px;
  padding-left:15px;
  border-bottom:1px solid #eff3f4;
  padding-bottom:15px;
`;

const FeedAddTop = styled.form`
  display:flex;
  align-items: center;
`;

const Input = styled.input`
  font-size:20px;
  border:none;
  outline:none;
  width:85%;
  padding-left:14px;
`

const FeedAddBottom = styled.div`
  position: relative;
  padding-left:70px;
  margin-top:10px;
  display: flex;
  align-items: center;
  padding-right:30px;
`

const FeedImage = styled(InsertPhotoOutlinedIcon)`
  color:#1d9bf0;
  font-size:40px;
  padding:7px;
  border-radius:999px;
  cursor:pointer;
  
  :hover {
    background-color: #ebf6fe;
  }
`;

const FeedGif = styled(GifBoxOutlinedIcon)`
  color:#1d9bf0;
  font-size:40px;
  padding:7px;
  border-radius:999px;
  cursor:pointer;
  
  :hover {
    background-color: #ebf6fe;
  }
`;

const FeedAddButton = styled.button`
  position:absolute;
  right:20px;
  width:80px;
  height:40px;
  border-radius:999px;
  border:none;
  outline:none;
  color:white;
  font-size:15px;
  font-weight:800;
  cursor: pointer;
`

const FeedPostsContainer = styled.div`
  width:100%;
`;

const FeedPost = styled.div`
  width:100%;
  padding:20px 14px;
  cursor: pointer;

  :hover {
    background-color: #f7f7f7;
  }
`;

const FeedPostHeader = styled.div`
  width:100%;
  display:flex;
  
`
const PostSenderInfo = styled.div`
  margin-left:12px;
`

const PostSenderContent = styled.div`
  width:100%;
  max-height:700px;
  margin-top:15px;
  display:flex;
  justify-content: center;
`
