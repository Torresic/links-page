import styled from "styled-components";
import { HomeHeader } from "../components/HomeHeader";

export const Home = () => {
  return (
    <HomeContainer>
        <HomeHeader />
        <HomeContentContainer>
            <UserPicture src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
            <UserName>Ismael Caballero Torres</UserName>
        </HomeContentContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
`

const HomeContentContainer = styled.div`
    height: 70%;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    gap: ${p => p.theme.spacing.spacing48};
    top: 30%;

    border-top: ${p => `5px solid ${p.theme.colors.primary}`};
    border-radius: ${p => p.theme.borderRadius.rounded4xl} 0px 0px 0px;
    background: ${p => `linear-gradient( ${p.theme.colors.secondary} , ${p.theme.colors.black} )`};
`

const UserPicture = styled.img`
  height: 200px;
  width: 200px;

  margin-top: -100px;
  border: 5px solid ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.borderRadius.roundedFull};
  box-shadow: 0px 0px 40px 10px ${p => p.theme.colors.primary};
`
const UserName = styled.h1`
  color: ${p => p.theme.colors.primary};
  font-weight: 700;


`

// Text

