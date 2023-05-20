//ライブラリ
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//コンポーネント
import { HomePage } from './pages/Home';
import { ProjectPage } from './pages/Project';
import { TechPage } from './pages/Tech';

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/tech" element={<TechPage />} />
      </Routes>
    </BrowserRouter>
  )
}
