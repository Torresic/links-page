import styled from "styled-components";

interface LinkCardProps {
    icon: string;
    title: string;
    color: string;
}

export const LinkCard = (props: LinkCardProps) => {
    const { icon, title, color } = props;
    
    return (
        <CardContainer>
        
        </CardContainer>
    )
}

const CardContainer = styled.div`
    width: 60%;
`