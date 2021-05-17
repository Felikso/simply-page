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

/* const OurBrands = React.lazy(() =>
  import("../components/OurBrands/OurBrands")
)

const About = React.lazy(() =>
  import("../components/About/About")
)

const Services = React.lazy(() =>
  import("../components/Services/Services")
)

const Advantages = React.lazy(() =>
  import("../components/Advantages/Advantages")
)

const QuestionsAndAnswer = React.lazy(() =>
  import("../components/QuestionsAndAnswer/QuestionsAndAnswer")
)

const Contact = React.lazy(() =>
  import("../components/Contact/Contact")
)

const Footer = React.lazy(() =>
  import("../components/Footer/Footer")
) */

const IndexPage = () => {
  const isSSR = typeof window === "undefined"

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
             <Header ref={[ heroRef, aboutRef, servicesRef, questionsRef, contactRef]} />
             <HeroSection ref={[halfPage, heroRef]} contactRef={contactRef} />
{/*              <OurBrands />
             {!isSSR && (
              <React.Suspense fallback={<p>XDDD</p>}>
                <OurBrands />
              </React.Suspense>
               )} */}
             
      </MainSection>
      {hasScrolled ? (
        <>
        <MainSection>
{/*         {!isSSR && (
              <React.Suspense fallback={<p>about</p>}>
                <About ref={aboutRef} />
              </React.Suspense>
               )}
             {!isSSR && (
              <React.Suspense fallback={<p>services</p>}>
                <Services ref={servicesRef} />
              </React.Suspense>
               )}
             {!isSSR && (
              <React.Suspense fallback={<p>advantages</p>}>
                <Advantages contactRef={contactRef} />
              </React.Suspense>
               )}
             {!isSSR && (
              <React.Suspense fallback={<p>questions</p>}>
                <QuestionsAndAnswer ref={questionsRef} />
              </React.Suspense>
               )}
             {!isSSR && (
              <React.Suspense fallback={<p>contact</p>}>
                <Contact ref={contactRef} />
              </React.Suspense>
               )}
             {!isSSR && (
              <React.Suspense fallback={<p>footer</p>}>
                <Footer ref={[heroRef, aboutRef, servicesRef, questionsRef, contactRef]} />
              </React.Suspense>
               )} */}
        
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
