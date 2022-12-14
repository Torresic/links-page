import { ForwardRefComponent, HTMLMotionProps, Variants } from "framer-motion";
import styled from "styled-components";
import BackgroundImage from "../img/profileBackground.jpg"

interface HomeHeaderProps {
  as: ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>;
  variants: Variants;
}

export const HomeHeader = (props: HomeHeaderProps) => {
  const { as, variants } = props;

  return (
    <HomeHeaderContainer>
        <PageName as={as} variants={variants} initial="hidden" animate="show">Biography Links</PageName>
    </HomeHeaderContainer>
  )
};

const HomeHeaderContainer = styled.div`
    height: 60%;
    width: 100%;
    padding: ${p => p.theme.spacing.spacing16};

    position: absolute;
    z-index: -1;
    
    background: ${p => `${p.theme.colors.primary} url('${BackgroundImage}') no-repeat fixed center`};
    background-size: cover;
    @media ${p => p.theme.breakpoints.width.desktopS} {
    height: 40%;
    padding: ${p => p.theme.spacing.spacing32};
  }
`

const PageName = styled.h2`
  font-size: clamp(24px, 3vw, 48px);
  font-weight: 900;
  
  text-shadow: 2px 2px 4px rgba(0,0,0,0.56);
  color: ${p => p.theme.colors.white};
`