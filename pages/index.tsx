import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { css } from "@emotion/react";
import { PulseLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { HTMLElement } from "node-html-parser";
import { func } from "prop-types";

const ReferenceIcon = ({
  pictureHref,
  referenceHref,
}: {
  pictureHref: string;
  referenceHref: string;
}): JSX.Element => {
  return (
    <>
      <a
        href={referenceHref}
        target={"_blank"}
        rel={"noreferrer"}
        css={css`
          height: 100px;
        `}
      >
        <img
          className={styles.imageIcon}
          src={pictureHref}
          height={100}
          width={100}
          css={css`
            transition: transform 0.2s;
            border-radius: 25%;
            padding: 30px;
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
      display: flex;
      justify-content: center;
    `}
  >
    <div
      className={styles.container}
      css={css`
        margin: 50px auto;
      `}
    >
      <h1
        css={css`
          color: white;
          font-size: 80px;
          justify-self: center;
        `}
      >
        {header}
      </h1>
      <div
        css={css`
          min-width: 1200px;
        `}
      >
        {content}
      </div>
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
        I automated the process of posting data to a confidential website
      </h3>
      The content to be posted was uploaded to google spreadsheets by hand with
      varying intervals, someone else would then copy the data from the excel
      spreadsheet and fill it into a form on a website. I automated checking the
      google spreadsheet for changes and posting the data to the website. I
      increased efficiency and eliminated a step in the flow of data that could
      cause unintended changes.
    </span>
    <span>
      <h3
        css={css`
          color: aquamarine;
        `}
      >
        I reduced time taken to create custom directories for different
        files(November 2020)
      </h3>
      I wrote a python script to read files, depending on parameters specifying
      the file types and names that required working directories. After creating
      A working directory for a file, all other associated files are brought to
      the working directory.
    </span>
    <span>
      <h3
        css={css`
          color: aquamarine;
        `}
      >
        Increased trade opening and closing speed by automating signals from
        telegram into Binance (July 2020)
      </h3>
      Signals received by the telethon API are processed, to extract the opening
      price and closing prices of an order. The scripts execute the opening at
      the specified price with a percentage of the balance that has been
      pre-set.
    </span>
  </>
);

const skillsPage = (
  <span>
    <h3>➼ Web Scraping with Python — Over one year experience</h3>
    <h3>➼ Web Automation with Python — Over one year experience</h3>
    <h3>➼ Web design with HTML/CSS, Javascript — Beginner</h3>
    <h3>➼ Typing speed of 42 wpm</h3>
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
      Sept 2020 – 2024
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
      Sept 2018 – 2019 (Incomplete)
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
        <a href={"https://www.ielts.org/"} target={"_blank"} rel={"noreferrer"}>
          IELTS (CEFR - C1)
        </a>
      </p>
      English Language proficiency Certification
    </span>
  </>
);

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const cover = document.getElementById("cover")
      cover ? cover.remove() : {}
    }
  };})

  return (
    <><div
      id="cover"
      >Ace</div>
      <div
        css={css`display: grid;
        `}
      >
        <div
          className={styles.container}
          css={css`
            background-color: rgba(0, 0, 0, 0.55);
            margin: 150px auto;
  grid-column: 1;
  grid-row: 1;

          `}
        >
          <img
            src="/profile-picture.jpg"
            height={240}
            width={250}
            className={styles.imageIcon}
            css={css`
              transition: transform 0.2s;
              margin: auto;
              border-radius: 55%;
              padding: 30px;
            `}
          />
          <p
            css={css`
              font-weight: 500;
              font-size: 30px;
              padding: 10px 30px;
            `}
          >
            A second-year computer science student with one-year freelance
            experience looking for technology inclined work experience. I am
            open to work both remotely and within St. John’s. I love to work in
            teams and build working relationships with my colleagues.
          </p>
          <p
            css={css`
              font-weight: 500;
              font-size: 30px;
              font-family: "Agency FB";
              color: white;
              line-height: 150%;
              padding: 10px 30px;
            `}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Here's two of my professional profiles you can look at before moving
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
          </div>
        </div><img
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
        header={"Skills"}
        content={skillsPage}
        color={"rgb(0, 0, 205)"}
      />
      <PageSection
        header={"Education and Certifications"}
        content={educationPage}
        color={"rgb(128, 0, 0)"}
      />
      <div
        css={css`
          background-color: rgb(0, 0, 205);
          display: flex;
          justify-content: center;
          padding: 30px;
        `}
      >
        <div
          css={css`
            display: flex;
          `}
        >
          <p className={styles.linked}>
            <a
              href={"tel:+1709-766-7634"}
              css={css`
                color: white;
                padding-right: 100px;
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
                padding-right: 100px;
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
    </>
  );
};

export default Home;
