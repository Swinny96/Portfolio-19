import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Hero = ({ siteTitle }) => (
  <Header>
    <HeaderSection>
      <Toggle>
        <Icon>
          <Sun alt="Sun" src={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/toggle/sun.svg"} />
          <Moon alt="Moon" src={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/toggle/moon.svg"} />
        </Icon>
      </Toggle>
      <HeroImage
        alt="Christopher Swinton"
        src={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/me.webp"}
      />
      <Title>Christopher Swinton</Title>
      <SubTitle>Front-End Developer for Enghouse Networks</SubTitle>
      <ContactSection>
        <Link
          href="https://www.linkedin.com/in/cswinton96/"
          target="_blank"
          rel="noreferrer"
          aria-label="View Chris Swintons LinkedIn Profile"
          className="HeroContact"
        >
          <Contact alt="LinkedIn" src={"https://filedn.eu/l9x5ubew4MtLjI8ky9eWJay/images/linkedin.webp"} />
        </Link>
        <Link
          href="mailto:cswintonux@gmail.com?Subject=UX"
          target="_blank"
          rel="noreferrer"
          aria-label="Email Chris Swinton"
          className="HeroContact"
        >
          <Contact alt="GMail" src={"https://lh3.googleusercontent.com/pw/AM-JKLVFMZLU_DvcupVtHpuvM8ZIA7tIRf2MI5tyi0_NuTqQ6DpNSWCLSeuUrEcENsionba87z9eOQEZdaz2UWq4AUmYlICV7RwjLt3SuSTct3NLfOhkYBS8Wly0aowx4MSftEvrv4BRi68AUM_ANMc-kr_K=w1280-h970-no?authuser=0"} />
        </Link>
      </ContactSection>
    </HeaderSection>
  </Header>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero

const Header = styled.header``

const HeaderSection = styled.div`
  background: #333;
  margin: 0 auto;
  align-items: center;
  padding: 30px;
  color: white;
  text-align: center;
  max-width: 1024px;

  .HeroContact {
    display: inline-grid;
  }

  .HeroContact img {
    filter: grayscale(100%);
    transition: 0.3s ease-in-out;
  }

  .HeroContact img:hover {
    filter: grayscale(0);
    transform: scale(1.2);
  }
`

const Toggle = styled.div`
  background-color: white;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  padding: 0.5rem;
  display: grid;
  margin-left: auto;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
  }
`

const Icon = styled.div`
  width: 1.2em;
  height: 1.2em;
  grid-area: a;
`

const Sun = styled.img`
  display: block;

  @media (prefers-color-scheme: dark) {
    display: none;
  }
`

const Moon = styled.img`
  display: none;

  @media (prefers-color-scheme: dark) {
    display: block;
  }
`

const HeroImage = styled.img`
  display: block;
  margin: auto;
  width: 250px;
  height: auto;
  border: 5px solid white;
  border-radius: 50%;
`

const Title = styled.h1``

const SubTitle = styled.p``

const ContactSection = styled.div``

const Contact = styled.img`
  height: 40px;
  margin: 0 8px;
`
