import Button from "@/components/Button/Button";
import Highlight from "@/components/Highlight/Highlight";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { MIN_WIDTH, QUERIES } from "breakpoints";
import styled from "styled-components";
import SlideUp from "../SlideUp";

export interface IProps {
  delegated?: any;
  theme: "dark" | "light";
}

const About: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
  theme,
  ...delegated
}) => {
  const downloadResume = () => {
    window.open("/files/resume.pdf", "_blank");
  };

  const aboutUrl =
    theme === "light" ? "images/abhishek-light.png" : "images/abhishek-dark.png";
  const aboutUrlSmall =
    theme === "light" ? "images/abhishek-light.png" : "images/abhishek-dark.png";

  return (
    <Wrapper {...delegated} id="about">
      <AboutMe>
        <SlideUp>
          <SectionTitle label={"About Me "} side={"left"} />
        </SlideUp>
        <SlideUp>
          <Description>
            Hi there! I'm Abhishek Verma, a passionate full-stack developer with
            expertise in building{" "}
            <Highlight>high-performing web applications.</Highlight> I started
            writing code when I created my first computer game in C++ back in
            middle school.
          </Description>
        </SlideUp>
        <SlideUp>
          <Description>
            I have 2+ years of experience working as a Full-Stack developer and
            recently, I’ve been diving deeper into Cloud Technology through my
            course work at George Mason University. My goal is to not only write
            code that is <Highlight>clean, modular</Highlight>, and{" "}
            <Highlight>well-tested</Highlight> but to build products that are{" "}
            <Highlight>usable</Highlight>, <Highlight>performant</Highlight> and
            can <Highlight>scale</Highlight> to meet the needs of your dynamic
            business.
          </Description>
        </SlideUp>
        <SlideUp>
          <Description>
            I continuously seek out challenges that allow me to expand my skills
            across the full stack. Whether it's building fluid front-ends,
            developing scalable cloud services, or training machine learning
            models, I'm always eager to learn!
          </Description>
        </SlideUp>
        <SlideUp>
          <Download onClick={downloadResume}>Download Resume</Download>
        </SlideUp>
      </AboutMe>
      <Picture>
        <Source media={MIN_WIDTH.desktop} srcSet={aboutUrl} />
        <Source media={MIN_WIDTH.tablet} srcSet="images/abhishek-dark.png" />
        <Image src={aboutUrl} alt="Abhishek Verma" />
      </Picture>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  padding: 32px;
  padding-bottom: 0px;
  row-gap: 80px;
  grid-template-areas:
    "aboutme"
    "picture";

  ${QUERIES.tabletAndUp} {
    grid-template-areas: "picture aboutme";
    grid-template-columns: 1fr 1fr;
    column-gap: 0px;
    padding: 64px;
  }

  ${QUERIES.desktopAndUp} {
    column-gap: 80px;
    padding-bottom: 0px;
  }
`;

const AboutMe = styled.div`
  grid-area: aboutme;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${QUERIES.tabletAndUp} {
    justify-self: start;
    max-width: min(400px, 100%);
  }
`;

const Description = styled.p`
  font-weight: 400;
`;

const Picture = styled.picture`
  grid-area: picture;
  justify-self: center;
  width: 300px;

  ${QUERIES.tabletAndUp} {
    width: min(50vw, 250px);
  }

  ${QUERIES.desktopAndUp} {
    justify-self: end;
    width: min(50vw, 500px);
  }
`;

const Source = styled.source``;

const Image = styled.img``;

const Download = styled(Button)`
  align-self: start;
  margin-top: 32px;
`;

export default About;
