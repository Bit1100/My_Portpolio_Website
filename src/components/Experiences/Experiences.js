import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { experiences } from "../../constants/constants";
import {
  Box,
  Boxes,
  CompanyText,
  DurationText,
  BoxText,
} from "./ExperiencesStyles";

const Experiences = () => (
  <Section id="experiences">
    <SectionTitle>Experiences</SectionTitle>
    <Boxes>
      {experiences.map((experience) => {
        const { id, company, duration, jobTitle, jobType } = experience;
        return (
          <Box key={id}>
            <CompanyText>
              {company}
              <br />
              <DurationText>( {duration} )</DurationText>
            </CompanyText>
            <BoxText>Type: {jobType}</BoxText>
            <BoxText>Title: {jobTitle}</BoxText>
          </Box>
        );
      })}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Experiences;
