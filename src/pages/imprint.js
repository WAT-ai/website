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

export default function ImprintPage() {
  return (
    <>
      <Seo title="Imprint" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="imprint" heading="Imprint" />
      </Page>
    </>
  );
}
