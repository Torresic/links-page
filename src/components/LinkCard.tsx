import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ForwardRefComponent, HTMLMotionProps, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

interface LinkCardProps {
  icon: string;
  title: string;
  color: string;
  order: number;
  delay: number;
  variants?: Variants | undefined;
  as: ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>;
}

export const LinkCard = (props: LinkCardProps) => {
  const { icon, title, color, order, as, variants, delay } = props;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <CardContainer
      as={as}
      variants={variants}
      transition={{delay: delay}}
      initial="hidden" 
      animate="show"
  
      color={color}
      order={order}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardIcon src={icon} />
      <CardTitle>{title}</CardTitle>
      <CardIconOnHover isHovered={isHovered} icon={faArrowRight} />
    </CardContainer>
  );
};

interface CardContainerProps {
  color: LinkCardProps["color"];
  order: LinkCardProps["order"];
}

const CardContainer = styled.div<CardContainerProps>`
  width: 100%;
  height: 100px;
  padding: ${(p) =>
    `${p.theme.spacing.spacing12} ${p.theme.spacing.spacing48}`};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  order: ${(p) => p.order};
  cursor: pointer;

  border: 1px solid transparent;
  border-radius: ${(p) => p.theme.borderRadius.roundedXL};
  transition: .5s; 
  background: ${(
    p
  ) => `linear-gradient(0.25turn, ${p.color} ,${p.theme.colors.secondary} ) padding-box,
    linear-gradient(${p.theme.colors.primary}, ${p.theme.colors.primaryTransparent}) border-box`};
  box-shadow: 0px 4px 25px -10px ${(p) => p.theme.colors.primary},  inset 0px 0px 51px 24px transparent;
  &:hover {
    transition: all 0.5s ease-in-out;
    -webkit-box-shadow: inset 0px 0px 37px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 0px 0px 37px 3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 4px 20px 10px ${(p) => p.theme.colors.primary},
      inset 0px 0px 51px 24px rgba(0, 0, 0, 0.75);
  }

  @media ${p => p.theme.breakpoints.width.desktopS} {
    width: 80%;
  }
`;

const CardIcon = styled.img``;

const CardTitle = styled.h2`
  color: ${(p) => p.theme.colors.white};
  font-size: clamp(16px, 2vw, 32px);
  line-height: clamp(16px, 2vw, 32px);
  font-family: "Lato";
  font-weight: 300;
  text-align: center;
`;

interface CardIconHover {
  isHovered: boolean;
}

const CardIconOnHover = styled(FontAwesomeIcon)<CardIconHover>`
  visibility: ${(p) => (p.isHovered === false ? "hidden" : "visible")};
  color: ${(p) => p.theme.colors.white};
  font-size: clamp(16px, 2vw, 32px);
`;
