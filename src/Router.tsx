//ライブラリ
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//コンポーネント
import { HomePage } from './pages/Home';
import { ProjectPage } from './pages/Project';
import { TechPage } from './pages/Tech';
import { useEffect } from 'react';

export const RouterConfig = () => {
  useEffect(() => {
  if(location.href.split("/").slice(0, 4)[3].length == 0) {
    location.href = location.href + "portfolio";
  }
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="portfolio" element={<HomePage />} />
        <Route path="portfolio/project" element={<ProjectPage />} />
        <Route path="portfolio/tech" element={<TechPage />} />
      </Routes>
    </BrowserRouter>
  )
}
