import React from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <Subject title="Web" sub="world wide web"></Subject>
      <TOC></TOC>
      <Content title="html" desc="html is markup language."></Content>
    </div>
  );
}

export default App;
