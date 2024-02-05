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
                  Delivered an AI-powered web application using React.js,
                  Node.js and OpenAI API that extracts representative voting
                  records from PDF files, reducing manual work by 90%.Engineered
                  Python-based ETL processes leveraging AWS S3 for large-scale
                  voting datasets.
                </Description>
                <Description>
                  Extracted 50,000+ records from 200+ documents, applied
                  transformative and cleansing procedures and loaded processed
                  data into a SQL database.
                </Description>
                <Description>
                  {" "}
                  Employed batch processing techniques to transform unstructured
                  text and tables from 3500 county voting PDFs into analytical
                  CSV datasets using custom regex scripts.
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
                      Designed REST and GraphQL APIs leveraging Node.js and
                      implemented client-side rendering using React.JS that
                      reduced page load latency by 40%.
                    </Description>

                    <Description>
                      Revamped multiple user interfaces using React.JS,
                      TypeScript and AngularJS yielding in a 16% enhancement in
                      performance, evaluated by Google's PageSpeed Insights. Achieved 95%
                      code coverage with Jest and Enzyme, reducing production
                      bugs by 30%.
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
                      Built and Collaborated on reusable user profile, jobs, and
                      application microservices with over 90% code reuse using
                      Java, Spring, PHP, MySQL for Naukri.com job portal,
                      enabling 60% faster development across projects.
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
                      Developed a scalable web-based Twitter Sentiment Analysis
                      tool using Python and Flask, which enabled the customer
                      support team to categorize and respond to 5,000+ customer
                      feedback messages in real-time, leading to a 30% reduction
                      in response time
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
  border: 1px solid ${({ theme }) => theme.colors.primary};
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
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const Title = styled(SectionTitle)``;
export default Experiences;
