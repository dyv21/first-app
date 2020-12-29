import React from 'react';
import './RightSidebar.css';
import Stories from './Stories/Stories';
import Birthday from './Birthday/Birthday';

const RightSidebar = () => {
  return (
    <section className="page-main__right-sidebar right-sidebar">
      <Stories />
      <Birthday />
    </section>
  );
};

export default RightSidebar;
