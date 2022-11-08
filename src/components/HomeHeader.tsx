import styled from "styled-components";
import BackgroundImage from "../img/profileBackground.jpg"

export const HomeHeader = () => {
  return (
    <HomeHeaderContainer>
        <PageName>Biography Links</PageName>
    </HomeHeaderContainer>
  )
};

const HomeHeaderContainer = styled.div`
    height: 40%;
    width: 100%;
    padding: ${p => p.theme.spacing.spacing32};

    position: absolute;
    z-index: -1;
    
    background: ${p => `${p.theme.colors.primary} url('${BackgroundImage}') no-repeat fixed center`};
    background-size: cover;
`

const PageName = styled.h2`
  font-size: clamp(24px, 3vw, 48px);
  font-weight: 900;
  
  text-shadow: 2px 2px 4px rgba(0,0,0,0.56);
  color: ${p => p.theme.colors.white};
`