import styled from "styled-components";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Trend from "./Trend";

function Endbar() {
  return (
    <EndBarContainer>
        <SearchContainer>
            <SearchOutlinedIcon />
            <Input placeholder="Search Twitter" />
        </SearchContainer>
        <TrendingContainer>
            <TrendingHeader>
                <StrongText>Trends for you</StrongText>
            </TrendingHeader>
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
        </TrendingContainer>
    </EndBarContainer>
  )
}

export default Endbar


const EndBarContainer = styled.div`
    position:sticky;
    top:0;
    margin-left:30px;
    margin-top:5px;
    height:100vh;

    @media screen and (max-width:1024px) {
        display:none
    }
`;

const Input = styled.input`
    border:none;
    outline:none;
    background-color: inherit;
    padding-left:12px;
    font-size:16px;
    width:90%;
`;

const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #f0f4f4;
    padding:14px;
    border-radius:999px;
`;

const TrendingContainer = styled.div`
    width:350px;
    background-color: #f0f4f4;
    margin-top:20px;
    border-radius:14px;
    padding-bottom:20px;
`;

const TrendingHeader = styled.div`
    padding:15px;
`

const StrongText = styled.strong`
    font-size:20px;
`;