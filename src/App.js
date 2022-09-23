import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import IntroducePage from './pages/IntroducePage';
import ProjectPage from './pages/ProjectPage';
import StudyPage from './pages/StudyPage';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/introduce' element={<IntroducePage />}/>
        <Route path='/project' element={<ProjectPage />}/>
        <Route path='/study' element={<StudyPage />}/>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
