import React, { useRef } from 'react';

import { ThemeProvider } from "styled-components";

import { useHasBeenVisible } from '../hooks/useVisibility';
import { useHasBeenPartlyVisible } from '../hooks/useVisibility';

import MainSection from '../components/Layout/MainSection'

import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import OurBrands from "../components/OurBrands/OurBrands";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Advantages from "../components/Advantages/Advantages";
import QuestionsAndAnswer from "../components/QuestionsAndAnswer/QuestionsAndAnswer";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import FullWidthSection from '../components/FullWidthSection';

import { GlobalStyle } from "../style/GlobalStyle";
import { theme } from "../style/theme.js";

const IndexPage = () => {
  const halfPage = useRef();
  const preload = useRef();
  const hasScrolled = useHasBeenPartlyVisible(halfPage, 0.3);
  const isScrolling = useHasBeenVisible(preload);

  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const questionsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
{/*       <Header ref={[heroRef, aboutRef, servicesRef, questionsRef, contactRef]} />
      <HeroSection ref={heroRef} contactRef={contactRef} />
      <OurBrands />
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Advantages contactRef={contactRef} />
      <QuestionsAndAnswer ref={questionsRef} />
      <Contact ref={contactRef} />
      <Footer ref={[heroRef, aboutRef, servicesRef, questionsRef, contactRef]} /> */}
      <MainSection>
             <Header ref={[heroRef, aboutRef, servicesRef, questionsRef, contactRef]} />
             <HeroSection ref={[halfPage, heroRef]} contactRef={contactRef} />
             <OurBrands />
      </MainSection>
      {hasScrolled ? (
        <>
        <MainSection>
        
          <About ref={aboutRef} />
          <Services ref={servicesRef} />
          <Advantages contactRef={contactRef} />
          <QuestionsAndAnswer ref={questionsRef} />
          <Contact ref={contactRef} />
          <Footer ref={[heroRef, aboutRef, servicesRef, questionsRef, contactRef]} />
        </MainSection>
        </>
      ) : (
        <FullWidthSection ref={halfPage} height='2286px' minHeight='3448px' />
      )}

    </ThemeProvider>
  );
};

export default IndexPage;
