import { QUERIES } from "breakpoints";
import styled from "styled-components";
import { ContraintedTitle, MaxWidthWrapper } from "../Education/Education";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";

const Experiences: React.FC = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <SlideUp>
          <ContraintedTitle label="Experiences" side="left" />
        </SlideUp>
        <Items>
          <TimeLine />
          <SlideUp>
            <Item>
              <Image src="images/hinckleymedical.png" alt="hinckleymedical"></Image>
              <DotPrimary>
                <DotCore />
              </DotPrimary>
              <Connector />
              <Info>
                <MobileImage
                  src="images/hinckleymedical.png"
                  alt="hinckleymedical"
                ></MobileImage>
                <Time>May 2024 - Present</Time>
                <Company>Hinckley Medical</Company>
                <Role>Full Stack Developer</Role>
                <Description>
                I’m developing a platform to streamline EMS operations and reduce manual work for healthcare professionals. 
                Using React Native for mobile interfaces and AWS Amplify for backend processes, 
                I’m integrating AI-driven features to enhance decision-making and automate routine tasks in emergency medical services.
                  <br /> <br />
                </Description>
              </Info>
            </Item>
          </SlideUp>

          <SlideUp>
            <Item>
              <Image src="images/ballotpedia.jpg" alt="ballotpedia"></Image>
              <DotPrimary>
                <DotCore />
              </DotPrimary>
              <Connector />
              <Info>
                <MobileImage
                  src="images/ballotpedia.jpg"
                  alt="ballotpedia"
                ></MobileImage>
                <Time>Jun 2023 - Aug 2023</Time>
                <Company>Ballotpedia</Company>
                <Role>Data Engineer Intern</Role>
                <Description>
                  <em>
                    {" "}
                    For three months, I dove into the fascinating world of
                    voting data at Ballotpedia. My mission? Simplify access to
                    complex information and make it easier for anyone to
                    understand our elections data. Here's what I achieved:{" "}
                  </em>
                  <br /> <br />
                  I created a user-friendly ReactJS dashboard that leverages
                  cutting-edge AI (OpenAI's GPT-3.5) to automatically analyze
                  thousands of PDFs, saving a massive 90% of manual effort.
                  Imagine exploring crucial voting information with just a few
                  clicks!
                  <br /> <br />
                  My role extended to developing Python-based ETL processes on
                  AWS S3, efficiently handling and processing 50,000 records
                  from 200 documents. The cleaned data was then loaded into a
                  SQL database for easy access and retrieval.
                  <br /> <br />
                  I improved back-end test coverage by 15%, conducted
                  comprehensive unit testing, and collaborated with
                  cross-functional teams to create 3 Node.js API endpoints. Our
                  focus on collaboration and efficiency was enhanced through the
                  use of a CI/CD pipeline for faster deployment and development.
                  <br /> <br />
                  <em>
                    ~ This experience wasn't just about technology; it was about
                    making data more accessible and meaningful for better
                    decision-making.
                  </em>
                </Description>
              </Info>
            </Item>
          </SlideUp>
          <Item>
            <SlideUpFirm>
              <Image src="images/infoedge.png" alt="team infoedge"></Image>
              <Connector />
            </SlideUpFirm>
            <Infos>
              <SlideUp>
                <Bullet>
                  <DotPrimary>
                    <DotCore />
                  </DotPrimary>
                  <Info>
                    <MobileImage
                      src="images/infoedge.png"
                      alt="team infoedge"
                    ></MobileImage>
                    <Time>April 2021 - July 2022</Time>
                    <Company>Info Edge</Company>
                    <Role>Senior Software Engineer</Role>
                    <Description>
                      <em>
                        At Info Edge India Ltd, I started as a Software Engineer
                        and within just 9 months, earned a promotion to Senior,
                        focusing on making Naukri.com, the leading job portal, a
                        smoother and faster experience for everyone. Here's what
                        I poured my heart into:
                      </em>
                    </Description>
                    <br />
                    <Description>
                      I modernized user interfaces using ReactJS, TypeScript,
                      and AngularJS, making them not only sleek but also 16%
                      faster (verified by PageSpeed Insights!).
                      <br /> Bonus: I implemented thorough testing (think 95%
                      code coverage!), reducing bugs by 30%.
                      <br /> <br />I led the executed the migration of APIs from
                      Spring Boot to Node.js, giving them a whole new lease on
                      life. I then added the magic touch of client-side
                      rendering with ReactJS, cutting the average response time
                      by a 40%!
                    </Description>
                  </Info>
                </Bullet>
              </SlideUp>
              <SlideUp>
                <Bullet>
                  <DotSecondary>
                    <DotCore />
                  </DotSecondary>
                  <Info>
                    <Time>August 2020 - April 2021</Time>
                    <Role>Software Engineer</Role>

                    <Description>
                      Collaborating with others, I developed modular
                      microservices for user profiles, jobs, and applications
                      using Java, Spring, PHP, and MySQL. This approach
                      maximized code reuse (over 90%) and accelerated
                      development timelines by 60%, contributing to significant
                      efficiency gains.
                      <br />
                      <br />
                      <em>
                        {" "}
                        ~ Overall, my time at Info Edge was a journey of
                        continuous improvement, helping millions of job seekers
                        and companies connect seamlessly. It was challenging,
                        rewarding, and definitely a highlight of my career!
                      </em>
                    </Description>
                  </Info>
                </Bullet>
              </SlideUp>
            </Infos>
          </Item>

          <Item>
            <SlideUpFirm>
              <Image src="images/eko.jpeg" alt="team eko"></Image>
              <Connector />
            </SlideUpFirm>
            <Infos>
              <SlideUp>
                <Bullet>
                  <DotPrimary>
                    <DotCore />
                  </DotPrimary>
                  <Info>
                    <MobileImage
                      src="images/eko.jpeg"
                      alt="team eko"
                    ></MobileImage>
                    <Time>June 2019 - July 2019</Time>
                    <Company>Eko India Financial Services</Company>
                    <Role>Software Engineer Intern</Role>
                    <Description>
                      <em>
                        {" "}
                        During my internship at EKO India Financial Services, I
                        delved into the world of customer sentiment analysis. My
                        mission? Empower the customer support team with a
                        powerful tool to better understand their customers.
                        Here's what I achieved:{" "}
                      </em>
                      <br /> <br />
                      Leveraging Python and Django, I built a scalable web-based
                      tool for Twitter sentiment analysis, empowering the
                      support team to efficiently categorize 5,000 customer
                      feedback messages. This tool facilitated a 30% improvement
                      in identifying positive sentiment trends, allowing the
                      team to better understand and serve their customers.
                      <br /> <br />
                      <em>
                        {" "}
                        ~ Overall, my internship at EKO India was a rewarding
                        experience that allowed me to contribute to a real-world
                        business problem and witness the positive impact of
                        data-driven solutions.
                      </em>
                    </Description>
                  </Info>
                </Bullet>
              </SlideUp>
            </Infos>
          </Item>
        </Items>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export const Role = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  font-size: calc(14 / 16 * 1rem);
  margin-bottom: 8px;

  ${QUERIES.tabletAndUp} {
    font-size: calc(16 / 16 * 1rem);
  }

  ${QUERIES.desktopAndUp} {
    font-size: calc(18 / 16 * 1rem);
  }
`;

const Items = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 64px;

  ${QUERIES.tabletAndUp} {
    gap: 80px;
  }
`;

const SlideUpFirm = styled(SlideUp)`
  flex-shrink: 0;
`;

const Item = styled.div`
  display: flex;
  align-items: top;
  position: relative;
`;

const TimeLine = styled.div`
  position: absolute;
  top: 0;
  transform: translate(-50%, 0);
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.text.light};

  left: 24px;

  ${QUERIES.tabletAndUp} {
    left: 264px;
  }

  ${QUERIES.desktopAndUp} {
    left: 296px;
  }
`;

const DotPrimary = styled.div`
  height: 32px;
  width: 32px;
  border: 1px solid ${({ theme }) => theme.colors.text.light};
  outline: 1px ${({ theme }) => theme.colors.text.light} solid;
  outline-offset: 8px;
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;

  margin: 8px;
  margin-top: 32px;
  margin-right: 24px;

  ${QUERIES.tabletAndUp} {
    margin: 84px 48px;
  }

  ${QUERIES.desktopAndUp} {
    margin: 84px 80px;
  }
`;

const DotSecondary = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;

  margin: 8px;
  margin-top: 32px;
  margin-right: 24px;

  ${QUERIES.tabletAndUp} {
    margin: auto 48px;
  }

  ${QUERIES.desktopAndUp} {
    margin: auto 80px;
  }
`;

const Connector = styled.div`
  position: absolute;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 32px;
  left: 32px;
  top: 48px;

  ${QUERIES.tabletAndUp} {
    top: 100px;
    left: 200px;
    width: 64px;
  }

  ${QUERIES.desktopAndUp} {
    width: 96px;
  }
`;

const Bullet = styled.div`
  display: flex;
  align-items: top;
  position: relative;
`;

const DotCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 32px;

  ${QUERIES.tabletAndUp} {
    gap: 40px;
  }
`;

const Info = styled.div``;

const Time = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.light};
  text-transform: uppercase;
  font-size: calc(12 / 16 * 1rem);
`;

const Description = styled.p`
  font-weight: 400;
  max-width: 650px;
`;

export const Company = styled.h4`
  font-size: calc(21 / 16 * 1rem);

  ${QUERIES.tabletAndUp} {
    font-size: calc(24 / 16 * 1rem);
  }

  ${QUERIES.desktopAndUp} {
    font-size: calc(28 / 16 * 1rem);
  }
`;

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

const Image = styled.img`
  display: none;

  ${QUERIES.tabletAndUp} {
    display: initial;
  }

  height: 200px;
  width: 200px;
  border-radius: 8px;
`;

const MobileImage = styled.img`
  display: initial;

  ${QUERIES.tabletAndUp} {
    display: none;
  }

  height: 100px;
  width: 100px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

const Title = styled(SectionTitle)``;
export default Experiences;
