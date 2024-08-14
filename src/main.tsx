import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Game from './Game.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Game />
    </ErrorBoundary>
  </StrictMode>
);
