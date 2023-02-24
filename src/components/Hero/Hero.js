import { Section, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { HeroSection, LeftSection, ProfilePic, HeroText } from "./HeroStyles";

const Hero = (props) => (
  <>
    <HeroSection id="#home">
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <HeroText>
          I'm Suraj Keshari, a frontend Typescript Reactjs/NextJs Developer
          having 3 years of experience working in IT industry.
        </HeroText>
        <Button onClick={props.handleClick}>Learn More</Button>
        <ProfilePic src="/images/mypic.png" />
      </LeftSection>
    </HeroSection>
  </>
);

export default Hero;
