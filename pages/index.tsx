import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { string } from "prop-types";

const ReferenceIcon = ({
  pictureHref,
  referenceHref,
}: {
  pictureHref: string;
  referenceHref: string;
}): JSX.Element => {
  return (
    <>
      <a href={referenceHref} target={"_blank"} rel={"noreferrer"}>
        <img
          className={styles.imageIcon}
          src={pictureHref}
          height={"75%"}
          width={"20%"}
          css={css`
            transition: transform 0.2s;
            border-radius: 25%;
            padding: 3%;
          `}
        />
      </a>
    </>
  );
};

const PageSection = ({
  header,
  content,
  color,
}: {
  header: String;
  content: JSX.Element;
  color: string;
}) => (
  <div
    css={css`
      background-color: ${color};
      width: 100%;
      display: grid;
    `}
  >
    <h1
      css={css`
        color: white;
        font-size: 5vw;
        justify-self: center;
        margin: 3% auto;
      `}
    >
      {header}
    </h1>
    <div
      css={css`
        width: 66%;
        margin: 0 auto 2% 17%;
      `}
    >
      {content}
    </div>
  </div>
);

const experiencesPage = (
  <>
    <span>
      <h3
        css={css`
          color: aquamarine;
        `}
      >
        Worked on a website with JavaScript at its core.
      </h3>
      <p>
        •	Used the ReactJS, NodeJS and NextJS. 
        •	Played a major role in its design with HTML and CSS, 
        •	Coordinated its interactivity with TypeScript
        •	Populated the data on it with Python web scraping.
      </p>
    </span>
    <span>
      <h3
        css={css`
          color: aquamarine;
        `}
      >
        Automated the process of posting data to a website
      </h3>
      <p>
        •	Automated the management of data on the website, thereby increasing efficiency and eliminating redundancy that could cause unintended changes.
        •	Reduced time taken to create custom directories for different files

      </p>
    </span>
    <span>
      <h3
        css={css`
          color: aquamarine;
        `}
      >
        Increased trade opening and closing speed by automating signals from telegram into Binance 
      </h3>
      <p>
        •	Created a telethon API to send signals which are processed to extract the opening and closing prices of orders.
        •	Scripts created were able to execute the opening at the specified price with a percentage of the balance that has been pre-set.
      </p>
      <h3
        css={css`
          color: aquamarine;
        `}
      >
        Automated call dialing and receipt using the Twilio API with Python 
      </h3>
      <p>
        •	Reduced human error by automating the explanation of instructions.
        •	Reduced time taken to make verification through phone calls by automating the process.
      </p>
    </span>
  </>
);

const skillsPage = (
  <span>
    	Communication< br/>	Teamwork< br/>	Patience< br/>	Accountability< br/>	Attention to detail	Retentive memory< br/>	Positivity< br/>	Problem-Solving< br/>	Curiosity  
  </span>
);

const technicalSkillsPage = (
  <span>
    <h3>Scripting and Automation <br/>&emsp;&emsp;	Web scraping using Python<br/>&emsp;&emsp;	Web Automation using Python</h3>
    <h3>Web Development <br/>&emsp;&emsp;	HTML/CSS<br/>&emsp;&emsp;	JavaScript<br/>&emsp;&emsp;	ReactJS<br/>&emsp;&emsp;	NextJS</h3>
    <h3>Workflow tools <br/>&emsp;&emsp;	Git</h3>
  </span>
);

const educationPage = (
  <>
    <span>
      <p
        className={styles.linked}
        css={css`
          transform-origin: left;
        `}
      >
        <a href={"https://www.mun.ca/"} target={"_blank"} rel={"noreferrer"}>
          Memorial University of Newfoundland, Canada
        </a>
      </p>
      Bsc. Computer Science
      <br />
       In view (2024)
    </span>
    <br />
    <br />
    <br />
    <span>
      <p
        className={styles.linked}
        css={css`
          transform-origin: left;
        `}
      >
        <a
          href={"https://www.babcock.edu.ng/"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          Babcock University, Nigeria
        </a>
      </p>
      Bsc. Computer Science
      <br />
      Transfer (2019)
    </span>
  </>
);

const Home: NextPage = () => {
  useEffect(() => {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        const cover = document.getElementById("cover");
        cover ? (cover.style.display = "block") : {};
      }
    };
  });

  return (
    <div
      id="cover"
      css={css`
        display: none;
      `}
    >
      <div
        css={css`
          display: grid;
        `}
      >
        <div
          className={styles.container}
          css={css`
          `}
        >
          <img
            src="/profile-picture.jpg"
            height={"75%"}
            width={"25%"}
            className={styles.imageIcon}
            css={css`
              transition: transform 0.2s;
              margin: 0 auto;
              border-radius: 55%;
              padding: 7%;
            `}
          />
          <p
            css={css`
              font-weight: 500;
              padding: 2% 4%;
            `}
          >
            •	Second-year computer science student possessing about 2 years of programming and freelance experience, successfully completing complex projects, using industry standard tools and methodologies. 
•	Hands-on experience with data analysis, web scraping and frontend web design. A fast learner with strong attention to detail
•	Experience in collaborating with others to drive product development especially using workflow tools. 
•	Looking for junior opportunities for the summer where I can hone my existing skills and contribute to organizational growth.

            <br/>
            <br/>
            Here are three of my professional profiles you can look at before moving
            on to my relevant experiences.
          </p>
          <div
            css={css`
              display: inline-block;
            `}
          >
            <ReferenceIcon
              referenceHref={"https://www.freelancer.com/u/MagicScripter"}
              pictureHref={"/freelancer-website.png"}
            />
            <ReferenceIcon
              referenceHref={"https://www.linkedin.com/in/stephen-mustapha-ng/"}
              pictureHref={"/LinkedIn.png"}
            />
            <ReferenceIcon
              referenceHref={"https://github.com/MagicScripta"}
              pictureHref={"/Github.png"}
            />
          </div>
        </div>
        <img
          id="backg"
          src="/w1.jpg"
          height="100%"
          width="100%"
          css={css`
            grid-column: 1;
            grid-row: 1;
          `}
        />
      </div>
      <PageSection
        header={"Experience"}
        content={experiencesPage}
        color={"rgb(128, 0, 0)"}
      />
      <PageSection
        header={"Core Skills"}
        content={skillsPage}
        color={"rgb(0, 0, 205)"}
      />
      <PageSection
        header={"Technical Skills"}
        content={technicalSkillsPage}
        color={"rgb(128, 0, 0)"}
      />
      <PageSection
        header={"Education and Certifications"}
        content={educationPage}
        color={"rgb(0, 0, 205)"}
      />
      <div
        css={css`
          background-color: rgb(128, 0, 0);
          display: flex;
          justify-content: center;
          padding: 2%;
        `}
      >
        <div
          className={styles.footer}
          css={css`
            display: flex;
          `}
        >
          <p className={styles.linked}>
            <a
              href={"tel:+1709-766-7634"}
              css={css`
                color: white;
                padding-right: 6vw;
              `}
            >
              Phone — +1 (709) 766 7634
            </a>
          </p>
          <p className={styles.linked}>
            <a
              href={"mailto:stephdroidinc@outlook.com"}
              css={css`
                color: white;
                padding-right: 6vw;
              `}
            >
              Email — stephdroidinc@outlook.com
            </a>
          </p>
          <p className={styles.linked}>
            <a
              href={"https://www.linkedin.com/in/stephen-mustapha-ng/"}
              target={"_blank"}
              rel={"noreferrer"}
              css={css`
                color: white;
              `}
            >
              LinkedIn — stephen-mustapha-ng
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
