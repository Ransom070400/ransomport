import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import { SlideIndex } from './pages/SlideIndex.tsx';
import { Slide } from './pages/Slide.tsx';
import { VibeCoding } from './pages/VibeCoding.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/slide" element={<SlideIndex />} />
        <Route path="/slide/0g" element={<Slide />} />
        <Route path="/slide/vibe-coding" element={<VibeCoding />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
