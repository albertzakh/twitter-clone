import styled from 'styled-components'
import Image from 'next/image';
import LoginImg from "../img/login.PNG";
import GoogleImg from "../img/google.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import { auth, provider } from "../firebase"
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.value);

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
        dispatch(login({
            name: result.user.displayName,
            photoURL: result.user.photoURL
        }))
    })
  }
  
  return (
    <LoginContainer>
        <Image src={LoginImg} />
        <LoginWrapper>
            <Logo />
            <HeaderText>Happening now</HeaderText>
            <SmallerText>Join Twitter today.</SmallerText>
            <GoogleButton onClick={signIn}>
                <Image src={GoogleImg} width={25} height={25} />
                <p style={{marginLeft:"10px"}}>Sign in with Google</p>
            </GoogleButton>
        </LoginWrapper>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
    width:100%;
    height:100vh;
    display: flex;
`

const LoginWrapper = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    flex:1;
    padding-left:40px;
    height:60%;
`

const Logo = styled(TwitterIcon)`
    font-size:50px;
    color:#1d9bf0;
`;

const HeaderText = styled.strong`
    margin-top:80px;
    font-size:50px;
    font-family: 'Montserrat', sans-serif;
`;

const SmallerText = styled.strong`
    font-family: 'Montserrat', sans-serif;
    margin-top:50px;
    font-size:20px;
`

const GoogleButton = styled.button`
    width:250px;
    height:45px;
    background-color: white;
    border:1px solid lightgray;
    border-radius:999px;
    margin-top:20px;
    cursor:pointer;
    font-size:15px;
    font-weight:bold;
    display:flex;
    align-items: center;
    justify-content: center;
`