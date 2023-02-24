import { DiSass, DiReact, DiNpm } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./SkillsStyles";

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with a range a frontend technologies in the web development
      world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js <br />
            Next.js <br />
            Typescript & Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiSass size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Styling</ListTitle>
          <ListParagraph>
            Experience with <br />
            Sass and TailwindCSS <br />
            Bootstrap <br />
            MaterialUI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiNpm size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Miscellaneous</ListTitle>
          <ListParagraph>
            Experience with pkgs like Formik <br />
            React-Query <br />
            React Testing <br />
            Styled components <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
