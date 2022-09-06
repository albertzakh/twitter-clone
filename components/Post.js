import { useState, useEffect } from "react";
import styled from "styled-components"
import Image from "next/image";
import profileDef from "../img/profileDef.png";

function Post() {
  return (
    <FeedPost>
        <FeedPostHeader>
        <Image src={profileDef} width={55} height={55} objectFit="cover" />
        <PostSenderInfo>
            <span><strong>Albert</strong> - <span style={{color:"gray"}}>@Albert12345654 • 20h</span></span>
            <p>The Math Dance</p>
        </PostSenderInfo>
        </FeedPostHeader>
        <PostSenderContent>
            <img style={{width:"90%", height:"600px", objectFit:"cover", borderRadius:"20px" }} src="https://pbs.twimg.com/media/Fb7VRkdaUAArBWN?format=jpg&name=small" />
        </PostSenderContent>
    </FeedPost>
  )
}

export default Post

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
