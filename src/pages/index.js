import Experiences from "../components/Experiences/Experiences";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <Timeline />
      <Experiences />
    </Layout>
  );
};

export default Home;
