import React, { useRef } from "react";
import { ThemeProvider } from "styled-components";

import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import OurBrands from "../components/OurBrands/OurBrands";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Advantages from "../components/Advantages/Advantages";
import QuestionsAndAnswer from "../components/QuestionsAndAnswer/QuestionsAndAnswer";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import { GlobalStyle } from "../style/GlobalStyle";
import { theme } from "../style/theme.js";

const IndexPage = () => {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const questionsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header ref={[heroRef, aboutRef, servicesRef, questionsRef, contactRef]} />
      <HeroSection ref={heroRef} contactRef={contactRef} />
      <OurBrands />
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Advantages contactRef={contactRef} />
      <QuestionsAndAnswer ref={questionsRef} />
      <Contact ref={contactRef} />
      <Footer ref={[heroRef, aboutRef, servicesRef, questionsRef, contactRef]} />
    </ThemeProvider>
  );
};

export default IndexPage;
