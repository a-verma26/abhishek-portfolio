import { QUERIES } from "breakpoints";
import styled from "styled-components";
import { ContraintedTitle, MaxWidthWrapper } from "../Education/Education";
import Project from "../Project/Project";
import ProjectGrid from "../ProjectGrid";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";

const PROJECTS = [
  {
    name: "Urgent Unity",
    techs: ["React", "AWS", "NodeJS", "Docker", "MongoDB", ],
    description:
      "A emergency communication web application that rapidly coordinates nearby volunteers with medical training to provide faster emergency care during critical response windows. Built in Hackathon in a team of 2 under 36 hours. My app matches responder location to patient needs and includes multilingual speech translation features, navigation, hospital selection based on insurance, as well as instructions for initial care - aiming to greatly improve survival rates.",
    github: "https://github.com/a-verma26/Urgent-Unity",
    website: "https://emergencyappbranch.d34c2d61qawu3h.amplifyapp.com/",
    imgSrc: "/images/urgent-unity.png",
    type: "Featured Project",
  },
  {
    name: "University Feedback Express",
    techs: ["SpringBoot", "React", "AngularJS", "HTML", "CSS", "AWS", "MySQL","Docker","Kubernetes","Jenkins","Rancher"],
    description:
      "I built a web application to collect survey feedback from GMU students, keep track of users that submit the survey and list them in tabular format in the UI, maintain records in the database, and perform CRUD operations backend by AWS RDS, Docker, Kubernetes, and Jenkins.",
    github: "https://github.com/a-verma26/University-FeedbackXpress",
    website: "https://www.youtube.com/watch?v=1X8nI43q_uA",
    imgSrc: "/images/university-feedback-express.jpeg",
    type: "Featured Project",
  },
  {
    name: "Twitter-Sentiment-Analyser-GUI",
    techs: ["Python","Flask" ,"Machine Learning" ],
    description:
      "This project involves developing a comprehensive sentiment analysis system for tweets that categorizes text as positive, negative or neutral. A key part of the system is a real-time pie chart showing the sentiment breakdown of tweets. This provides an at-a-glance view of the percentage of positive, neutral and negative tweets.",
    github: "https://github.com/a-verma26/Twitter-Sentiment-Analyser-GUI",
    imgSrc: "/images/twitter.png",
    type: "Side Project",
  },
  {
    name: "Malicious URL Detection",
    techs: ["Python", "Natural Language Processing", "Machine Learning"],
    description:
      "The goal is to build a model that can accurately classify unseen URLs in real-time. This project focuses on developing a machine learning model to identify malicious URLs. The model will be trained on a large dataset of URLs that are labeled as either malicious or benign",
    github: "https://github.com/a-verma26/Malicious-URL-Detection-in-Python",
    imgSrc: "/images/maliciousurl.jpeg",
    type: "Side Project",
  },
  {
    name: "CLI-Movie-Hub",
    techs: ["Java", "MySQL", "JDBC"],
    description:
      "Developed a CMD interface to facilitate the user’s access to movies and their ratings information once the account has been connected via JDBC. For authentication, prompting the user for Oracle credentials. To select an option, a menu is presented to the user. A user can view and search using one or more attributes. Leveraging a hash map, the input and output attributes are mapped, and lengthier strings are truncated for the output table's alignment.",
    github: "https://github.com/a-verma26/CLI-Movie-Hub",
    imgSrc: "/images/cli.png",
    type: "Side Project",
  },
  
];

const Projects: React.FC = () => {
  return (
    <Wrapper id="projects">
      <MaxWidthWrapper>
        <SlideUp>
          <ContraintedTitle label="Things I've Built" side="left" />
        </SlideUp>
        <Project project={PROJECTS[0]} side="left" />
      </MaxWidthWrapper>
      <Project project={PROJECTS[1]} side="right" />

      <ProjectGrid projects={PROJECTS.slice(2)} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.dark};
  padding: 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 64px;

  ${QUERIES.tabletAndUp} {
    padding: 64px 64px;
  }

  ${QUERIES.desktopAndUp} {
    gap: 32px;
  }
`;

const Title = styled(SectionTitle)``;
export default Projects;
