import styled from "styled-components";
import { HomeHeader } from "../components/HomeHeader";

export const Home = () => {
  return (
    <HomeContainer>
        <HomeHeader />
        <HomeContentContainer>
            <UserPicture src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
            <GroupContainer>
              <UserName>Ismael Caballero Torres</UserName>
              <UserDescription>Front-end, Android Developer & UI/UX Designer</UserDescription>
            </GroupContainer>
            <Divider />
            <LinksContainer>
              <LinksTitle>My Links</LinksTitle>
            </LinksContainer>
            <Divider />
        </HomeContentContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
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

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing.spacing12};
`

const LinksContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing.spacing32};
`


const UserPicture = styled.img`
  height: 200px;
  width: 200px;

  object-fit: cover;
  margin-top: -100px;
  border: 5px solid ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.borderRadius.roundedFull};
  box-shadow: 0px 0px 40px 10px ${p => p.theme.colors.primary};
`
const UserName = styled.h1`
  color: ${p => p.theme.colors.primary};
  font-weight: 700;
  line-height: clamp(24px, 3vw, 48px);
  font-size: clamp(24px, 3vw, 48px);
`

const UserDescription = styled.h2`
  color: ${p => p.theme.colors.secondaryText};
  font-size: clamp(16px, 2vw, 32px) ;
  line-height: clamp(16px, 2vw, 32px);
  font-family: "Figtree";
  font-weight: 400;
  text-align: center;
`

const LinksTitle = styled.h2`
  color: ${p => p.theme.colors.primary};
  font-size: clamp(18px, 2.25vw, 36px) ;
  line-height: clamp(18px, 2.25vw, 36px);
  font-family: "Figtree";
  font-weight: 400;
  text-align: center;
`

const Divider = styled.hr`
  width: 60%;
  color:  ${p => `linear-gradient(0.25turn, ${p.theme.colors.primary}, ${p.theme.colors.primaryTransparent})`};
  background:  ${p => `linear-gradient(0.25turn, ${p.theme.colors.primary}, ${p.theme.colors.primaryTransparent})`};
  border: none;
  height: 5px;
`

