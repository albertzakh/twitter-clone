import { useState, useEffect } from "react";
import styled from "styled-components"
import Image from "next/image";
import profileDef from "../img/profileDef.png";
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { db } from "../firebase";
import { onSnapshot, collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";

function Post({ message, username, userPhoto, postImage, id }) {
  const user = useSelector(state => state.user.value);

  const dispatch = useDispatch();

  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);

  const [hasLiked, setHasLiked] = useState(false);

  const handleComment = () => {
    dispatch(addComment(true))
    console.log(commentSelected)
  }

  const likePost = async () => {
    if(hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", user.name))
    }
    else {
      await setDoc(doc(db, "posts", id, "likes", user.name), {
        username: user.name
      })
    }
  }

  useEffect(() => {
    return onSnapshot(collection(db, "posts", id, "likes"), snapshot => {
      setLikes(snapshot.docs.map(doc => {
        return {
          data:doc.data()
        }
      }));
    })
  }, [db, id])

  useEffect(() => {
    return setHasLiked(likes.findIndex(like => like.data.username === user.name) !== -1)
  }, [likes])

  return (
    <FeedPost>
        <FeedPostHeader>
        <FeedPostSenderImg src={!userPhoto ? profileDef : userPhoto} />
        <PostSenderInfo>
            <span><strong>{username}</strong> - <span style={{color:"gray"}}>@{username.toLowerCase()}</span></span>
            <p style={{marginTop:"10px"}}>{message}</p>
        </PostSenderInfo>
        </FeedPostHeader>
        <PostSenderContent>
          {postImage !== null ? <PostSentImage src={postImage} /> : null}
        </PostSenderContent>
        <PostBottom>
          <PostBottomChat onClick={handleComment} />
          <PostBottomHeartContainer>
            {hasLiked ? <PostBottomLikedHeart onClick={likePost} /> : <PostBottomHeart onClick={likePost} /> }
            <LikeCount>{likes.length}</LikeCount>
          </PostBottomHeartContainer>
        </PostBottom>
    </FeedPost>
  )
}

export default Post

const FeedPost = styled.div`
  padding:20px 14px 20px 20px;
  cursor: pointer;

  :hover {
    background-color: #f7f7f7;
  }
`;

const FeedPostHeader = styled.div`
  width:100%;
  display:flex;
`;

const FeedPostSenderImg = styled.img`
  width:55px;
  height:55px;
  border-radius: 999px;
  object-fit:cover;

  @media screen and (max-width:650px) {
    width:45px;
    height:45px;
  }
`;

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

const PostSentImage = styled.img`
  width:90%;
  height:600px;
  border-radius: 20px;
  object-fit:cover;
`;

const PostBottom = styled.div`
  margin-top:20px;
  display: flex;
  flex-direction:row;
  justify-content:space-around;
`

const PostBottomChat = styled(ChatBubbleOutlineRoundedIcon)`
  font-size:28px;
`;

const PostBottomHeartContainer = styled.div`
  display:flex;
  align-items: center;
`

const PostBottomHeart = styled(FavoriteBorderOutlinedIcon)`
  font-size:28px;
`;

const PostBottomLikedHeart = styled(FavoriteIcon)`
  font-size:28px;
  color:red;
`;

const LikeCount = styled.strong`
  margin-left:4px;
`