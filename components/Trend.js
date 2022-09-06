import styled from "styled-components";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

function Trend() {
  return (
    <Trending>
        <TrendingLeft>
            <TrendingLocation>Trending in Armenia</TrendingLocation>
            <TrendingInfo>#Armenia</TrendingInfo>
            <TrendingTweetCount>5112 Tweets</TrendingTweetCount>
        </TrendingLeft>
        <TrendingEgdeDots />
    </Trending>
  )
}

export default Trend

const Trending =  styled.div`
    padding-left:18px;
    cursor:pointer;
    padding:10px 18px;
    display:flex;
    justify-content:space-between;

    :hover {
        background-color: rgba(240, 240, 240, 255);
    }
`

const TrendingLeft = styled.div``

const TrendingLocation = styled.p`
    font-size:15px;
    color:gray;
    font-weight:600;
    margin-bottom:2px;
`;

const TrendingInfo = styled.strong`
    font-size:16px;
`

const TrendingTweetCount= styled.p`
    font-size:15px;
    color:gray;
    font-weight:600;
    margin-top:3px;
`

const TrendingEgdeDots = styled(MoreHorizOutlinedIcon)`

`;