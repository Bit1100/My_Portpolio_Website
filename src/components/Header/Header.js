import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  Div2Item,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <DiCssdeck size="2rem" />
        <NavLink>Portfolio</NavLink>
      </Link>
    </Div1>
    <Div2>
      <Div2Item>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </Div2Item>
      <Div2Item>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </Div2Item>
      <Div2Item>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </Div2Item>
      <Div2Item>
        <Link href="#experiences">
          <NavLink>Experiences</NavLink>
        </Link>
      </Div2Item>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/bit1100">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/surajkeshari">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="#">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
