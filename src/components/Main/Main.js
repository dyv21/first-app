import React from 'react';
import './Main.css';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import UserContent from './UserContent/UserContent';
import RightSidebar from './RightSidebar/RightSidebar';

const Main = () => {
  return (
    <main className="page-main container">
      <LeftSidebar />
      <UserContent />
      <RightSidebar />
    </main>
  );
};

export default Main;
