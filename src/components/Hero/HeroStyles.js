import styled, { keyframes } from "styled-components";
import { SectionText, Section } from "../../styles/GlobalComponents";

const scale = keyframes`
   to{
    transform:scale(1.1);
   }
`;

export const HeroSection = styled(Section)`
  margin-bottom: 2rem;
  padding: 0;
`;

export const LeftSection = styled.div`
  position: relative;
  min-width: 300px;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 80%;
    margin-left: 12%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 10%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    /* width: 30rem; */
    margin-left: 2%;
  }
`;

export const HeroText = styled(SectionText)`
  width: 50%;
  margin: 2rem 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 65%;
    font-size: 1.3rem;
    margin: 1rem 0;
  }
`;

export const ProfilePic = styled.img`
  position: absolute;
  top: -10rem;
  right: 5rem;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  animation: ${scale} 6s ease-in-out infinite alternate-reverse;
  @media ${(props) => props.theme.breakpoints.lg} {
    top: 7rem;
    right: 0;
    height: 35rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    top: 2rem;
    right: 0rem;
    height: 30rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    min-width: 10rem;
    top: -4rem;
    right: -5rem;
    height: 25rem;
  }
`;
