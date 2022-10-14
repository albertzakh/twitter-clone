import { useState, useEffect } from "react";
import styled from "styled-components"
import Image from "next/image";
import profileDef from "../img/profileDef.png";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import { db } from "../firebase";
import { onSnapshot, collection, addDoc, serverTimestamp, query, orderBy, updateDoc, doc } from "firebase/firestore";
import Post from "./Post";
import { useSelector } from "react-redux"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

function Feed() {
  const user = useSelector(state => state.user.value);

  const [posts, setPosts] = useState([]);

  const [image, setImage] = useState(null);
  const [messageField, setMessageField] = useState("");

  const [disbaled, setDisabled] = useState(true);

  useEffect(() => {
    if(!messageField) {
      setDisabled(true)
    }
    else {
      setDisabled(false)
    }
  }, [messageField])

  useEffect(() => {
    let subscribe = onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), snapshot => {
      setPosts(snapshot.docs.map(doc => (
        {
          id:doc.id,
          data:doc.data()
        }
      )))
    })
    return () => subscribe;
  }, [db])

  const uploadImage = (e) => {
    if(e.target.files[0]) {
      setImage(e.target.files[0]);
    }
    else {
      setImage(null);
    }
  }

  const AddPost = async (e) => {
    e.preventDefault();

    let downloadURL;

    if(image) {
      setDisabled(true)
      const imageRef = ref(storage, `images/${image.name + Math.random() * 10000000}`)
      await uploadBytes(imageRef, image).then(async snapshot => {
        downloadURL = await getDownloadURL(imageRef)
      })
    }
    else {
      downloadURL = null;
    }

    const docRef = await addDoc(collection(db, "posts"), {
      username: user.name,
      message: messageField,
      photoURL: user.photoURL,
      timestamp: serverTimestamp(),
      postImage: downloadURL
    })

    setMessageField("");
    downloadURL = null;
    setImage(null);
  }

  const addComment = async (e) => {
    setCommentsClicked(true);
  }

  return (
    <FeedContainer>
      <strong style={{marginLeft:"20px", fontSize:"19px"}}>HOME</strong>
      <FeedAddContainer>
        <FeedAddTop>
          <AddUserImage src={!user ? profileDef : user.photoURL} />
            <Input onChange={(e) => setMessageField(e.target.value)} value={messageField} placeholder="What's happening?" />
        </FeedAddTop>
        <FeedAddBottom>
          <label htmlFor="photo">
            <input onChange={uploadImage} type="file" accept="image/png, image/gif, image/jpeg" id="photo" style={{display:"none"}} />
            <FeedImage />
          </label>
          <label htmlFor="gif">
            <input type="file" id="gif" style={{display:"none"}} />
            <FeedGif />
          </label>
          <FeedAddButton onClick={AddPost} disabled={disbaled} style={{background: disbaled === true ? "#8ecdf7" : "#1d9bf0"}}>Tweet</FeedAddButton>
        </FeedAddBottom>
      </FeedAddContainer>
      <FeedPostsContainer>
        {posts.map(post => {
          return (
            <Post key={post.id} id={post.id} message={post.data.message} username={post.data.username} userPhoto={post.data.photoURL} postImage={post.data.postImage} />
          )
        })}
      </FeedPostsContainer>
    </FeedContainer>
  )
}

export default Feed

const FeedContainer = styled.div`
  padding-top:20px;
  min-width:40%;
  max-width:40%;
  border-right:1px solid #eff3f4;
  width:100%;

  @media screen and (max-width:1440px) {
    max-width:50%;
  }

  @media screen and (max-width:1100px) {
    max-width:75%;
  }

  @media screen and (max-width:500px) {
    max-width:100%;
  }
`

const AddUserImage = styled.img`
  width:65px;
  height:65px;
  cursor: pointer;
  border-radius:999px;

  @media screen and (max-width:650px) {
    width:50px;
    height:50px;
  }
`;

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
