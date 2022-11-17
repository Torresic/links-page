import { motion } from "framer-motion";
import styled from "styled-components";
import { HomeHeader } from "../components/HomeHeader";
import { LinkCard } from "../components/LinkCard";
import { Links } from "../links/Links";

export const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  const variantSideAnimated = {
    hidden: {  x: -100, opacity: 0 },
    show: {
      x: 0, 
      opacity: 1, 
      transition: {
        delay: 0.25
      }
    }
  }

  const variantScale = {
    hidden: {  scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1, 
    }
  }

  return (
    <HomeContainer>
      <HomeHeader as={motion.div} variants={variantSideAnimated}/>
      <HomeContentContainer>
        <UserPicture src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        />
        <GroupContainer>
          <UserName as={motion.h1} variants={variantSideAnimated} initial="hidden" animate="show">
            Ismael Caballero Torres
          </UserName>
          <UserDescription as={motion.h2} variants={variantScale} initial="hidden" animate="show">
            Front-end, Android Developer & UI/UX Designer
          </UserDescription>
        </GroupContainer>
        <Divider />
        <LinksContainer as={motion.div} variants={container}>
          <LinksTitle>My Links</LinksTitle>
          {Links.map((e, i) => (
            <LinkCard
              as={motion.div}
              variants={variantScale}
              delay={i * 0.2}
              color={e.color}
              icon={e.icon}
              title={e.title}
              order={e.order}
              key={e.icon}
            />
          ))}
        </LinksContainer>
        <Divider />
        <FooterContainer>
          <FooterText>© Ismael Caballero Torres</FooterText>
          <FooterText>2022</FooterText>
        </FooterContainer>
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
`;

const HomeContentContainer = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  gap: ${(p) => p.theme.spacing.spacing48};
  padding-bottom: ${(p) => p.theme.spacing.spacing48};
  top: 30%;

  border-top: ${(p) => `5px solid ${p.theme.colors.primary}`};
  border-radius: ${(p) => p.theme.borderRadius.rounded4xl} 0px 0px 0px;
  background: ${(p) =>
    `linear-gradient( ${p.theme.colors.secondary} , ${p.theme.colors.black} )`};
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  gap: ${(p) => p.theme.spacing.spacing12};
`;

const LinksContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(p) => p.theme.spacing.spacing32};
`;

const UserPicture = styled.img`
  height: 100px;
  width: 100px;

  object-fit: cover;
  margin-top: -50px;
  border: 5px solid ${(p) => p.theme.colors.primary};
  border-radius: ${(p) => p.theme.borderRadius.roundedFull};
  box-shadow: 0px 0px 40px 10px ${(p) => p.theme.colors.primary};

  @media ${p => p.theme.breakpoints.width.desktopS} {
    height: 200px;
    width: 200px;
    margin-top: -100px;
  }
`;
const UserName = styled.h1`
  color: ${(p) => p.theme.colors.primary};
  font-weight: 700;
  line-height: clamp(24px, 3vw, 48px);
  font-size: clamp(24px, 3vw, 48px);
`;

const UserDescription = styled.h2`
  color: ${(p) => p.theme.colors.secondaryText};
  font-size: clamp(16px, 2vw, 32px);
  line-height: clamp(16px, 2vw, 32px);
  font-family: "Figtree";
  font-weight: 400;
  text-align: center;
`;

const LinksTitle = styled.h2`
  color: ${(p) => p.theme.colors.primary};
  font-size: clamp(18px, 2.25vw, 36px);
  line-height: clamp(18px, 2.25vw, 36px);
  font-family: "Figtree";
  font-weight: 400;
  text-align: center;
`;

const Divider = styled.hr`
  width: 80%;
  color: ${(p) =>
    `linear-gradient(0.25turn, ${p.theme.colors.primary}, ${p.theme.colors.primaryTransparent})`};
  background: ${(p) =>
    `linear-gradient(0.25turn, ${p.theme.colors.primary}, ${p.theme.colors.primaryTransparent})`};
  border: none;
  height: 5px;
`;

const FooterContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const FooterText = styled.h2`
  color: ${(p) => p.theme.colors.primary};
  font-size: clamp(16px, 1.25vw, 20px);
  line-height: clamp(16px, 1.25vw, 20px);
  font-family: "Lato";
  font-weight: 400;
  text-align: center;
`;
