import React from 'react';
import './App.css';
import Header from './components/header/header';
import FirstContent from './components/first-section/FirstSection';
import CountdownTimer from './components/timerSection/timer';
import Map from './components/map/map'
import Contacts from './components/contacts/contacts';
import Questions from './components/Questions/Questions';

export const App = () => {
  return (
    <div>
      <Header />
      <FirstContent />
      <CountdownTimer/>
      <Questions/>
      <Map />
      <Contacts/>
    </div>
  );
};

export default App; 
