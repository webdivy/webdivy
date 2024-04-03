import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutUsSectionNavigations1 from '../components/navigations/AboutUsSectionNavigations1';
import AboutUsSectionAboutUs2 from '../components/about-us/AboutUsSectionAboutUs2';
import AboutUsSectionServices5 from '../components/services/AboutUsSectionServices5';
import AboutUsSectionFeatures7 from '../components/features/AboutUsSectionFeatures7';
import AboutUsSectionFeatures6 from '../components/features/AboutUsSectionFeatures6';
import AboutUsSectionTeam3 from '../components/team/AboutUsSectionTeam3';
import AboutUsSectionProjects4 from '../components/projects/AboutUsSectionProjects4';
import AboutUsSectionNewsletter8 from '../components/newsletter/AboutUsSectionNewsletter8';
import AboutUsSectionFooters9 from '../components/footers/AboutUsSectionFooters9';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function AboutUs() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <AboutUsSectionNavigations1 />
      <AboutUsSectionAboutUs2 />
      <AboutUsSectionServices5 />
      <AboutUsSectionFeatures7 />
      <AboutUsSectionFeatures6 />
      <AboutUsSectionTeam3 />
      <AboutUsSectionProjects4 />
      <AboutUsSectionNewsletter8 />
      <AboutUsSectionFooters9 />
    </React.Fragment>
  );
}

