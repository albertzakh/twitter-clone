import { useEffect } from "react";
import Head from 'next/head'
import Sidebar from "../components/Sidebar";
import styled from 'styled-components';
import Feed from '../components/Feed';
import Endbar from '../components/Endbar';
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router';

export default function Home() {
  const user = useSelector(state => state.user.value);

  const router = useRouter();

  useEffect(() => {
    if(!user) {
      router.push("/login")
    }
  }, [user])

  return (
    <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <Sidebar />
        <Feed />
        <Endbar />
      </MainContainer>
    </div>
  )
}

const MainContainer = styled.main`
  max-width:100%;
  min-width:80%;
  display: flex;
  justify-content: center;
`

