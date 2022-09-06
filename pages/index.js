import Head from 'next/head'
import Sidebar from "../components/Sidebar";
import styled from 'styled-components';
import Feed from '../components/Feed';
import Endbar from '../components/Endbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
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
  width:65%;
  margin:auto;
  display: flex;
`