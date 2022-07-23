import React from "react";
import { Page } from '../components/Page';
import { Seo } from '../components/Seo';
import { HeroSection } from '../sections/Hero';
import { ArticlesSection } from '../sections/Articles';
import { AboutSection } from '../sections/About';
import { InterestsSection } from '../sections/Interests';
import { ProjectsSection } from '../sections/Projects';
import { ContactSection } from '../sections/Contact';
import { LegalSection } from '../sections/Legal';

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}
