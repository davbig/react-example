// @ts-nocheck
import './App.css';
import React from 'react';
import MyHeader from './components/Header';
import Section from './components/Section';
import ImageBox from './components/ImageBox';
import TestComp from './components/TestComp';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <MyHeader headline={'My First React App'} />
      <Welcome name={'Super-Code'} />
      <Section reverse={false} center={true}>
        <ImageBox imageSize={500} />
        <ImageBox caption={'Custom Caption :)'} />
        <ImageBox />
      </Section>
      <TestComp />
    </div>
  )
}

export default App;
