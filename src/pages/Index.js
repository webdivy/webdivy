import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeaders1 from '../components/headers/IndexSectionHeaders1';
import IndexSectionAboutUs2 from '../components/about-us/IndexSectionAboutUs2';
import IndexSectionFeatures11 from '../components/features/IndexSectionFeatures11';
import IndexSectionFeatures4 from '../components/features/IndexSectionFeatures4';
import IndexSectionProjects10 from '../components/projects/IndexSectionProjects10';
import IndexSectionLogoClouds5 from '../components/logo-clouds/IndexSectionLogoClouds5';
import IndexSectionTestimonials9 from '../components/testimonials/IndexSectionTestimonials9';
import IndexSectionLogoClouds15 from '../components/logo-clouds/IndexSectionLogoClouds15';
import IndexSectionFaq6 from '../components/faq/IndexSectionFaq6';
import IndexSectionTestimonials12 from '../components/testimonials/IndexSectionTestimonials12';
import IndexSectionFaq14 from '../components/faq/IndexSectionFaq14';
import IndexSectionNewsletter7 from '../components/newsletter/IndexSectionNewsletter7';
import IndexSectionFaq13 from '../components/faq/IndexSectionFaq13';
import IndexSectionFooters8 from '../components/footers/IndexSectionFooters8';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeaders1 />
      <IndexSectionAboutUs2 />
      <IndexSectionFeatures11 />
      <IndexSectionFeatures4 />
      <IndexSectionProjects10 />
      <IndexSectionLogoClouds5 />
      <IndexSectionTestimonials9 />
      <IndexSectionLogoClouds15 />
      <IndexSectionFaq6 />
      <IndexSectionTestimonials12 />
      <IndexSectionFaq14 />
      <IndexSectionNewsletter7 />
      <IndexSectionFaq13 />
      <IndexSectionFooters8 />
    </React.Fragment>
  );
}

