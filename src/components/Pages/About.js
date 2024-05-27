import React from 'react';
import Diamond from '../Diamond/Diamond';
import Accordion from '../accordion/Accordion';
import Info from '../info/Info';

const About = () => {
  const accordionItems = [
    {
      title: 'Section 1',
      content: 'Content for section 1'
    },
    {
      title: 'Section 2',
      content: 'Content for section 2'
    },
    {
      title: 'Section 3',
      content: 'Content for section 3'
    }
  ];

  return (
    <>
      <Diamond />
      <Info/>
      <Accordion items={accordionItems} />
    </>
  );
};

export default About;
