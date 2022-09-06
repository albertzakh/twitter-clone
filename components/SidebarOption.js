import styled from 'styled-components';

function SidebarOption({ Icon, title }) {
  return (
    <SidebarContainer>
        <SidebarContent>
            {Icon && <Icon style={{fontSize:"30px"}} />}
            <SidebarText>{title}</SidebarText>
        </SidebarContent>
    </SidebarContainer>
  )
}

export default SidebarOption

const SidebarContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top:10px;
    cursor: pointer;
    border-radius:999px;
    height:50px;

    :hover a {
        background-color: #e9eaea;

    }
`

const SidebarContent = styled.a`
    display: flex;
    padding:12px 30px 12px 10px;
    border-radius:999px;

    :hover {
        background-color: #e9eaea;
    }
`;

const SidebarText = styled.span`
    font-size:21px;
    margin-left:22px;
`
