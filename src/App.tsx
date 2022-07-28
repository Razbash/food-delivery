import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import './css/general.scss';

const HomePage = lazy(() => import('./pages/HomePage'));
const DealsPage = lazy(() => import('./pages/DealsPage'));
const ReustorantDetailPage = lazy(() => import('./pages/ReustorantDetailPage'));


function App() {
  return (
    <Router>
      <div className="App">
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/reustorants/reustorant" element={<ReustorantDetailPage/>} />
            <Route path="/deals" element={<DealsPage/>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
