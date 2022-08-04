import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "./tools/Spinner";

import './css/general.scss';

const HomePage = lazy(() => import('./pages/HomePage'));
const DealsPage = lazy(() => import('./pages/DealsPage'));
const ReustorantDetailPage = lazy(() => import('./pages/ReustorantDetailPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));


function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/reustorants/reustorant" element={<ReustorantDetailPage/>} />
            <Route path="/deals" element={<DealsPage/>} />
            <Route path="/auth" element={<AuthPage/>} />
            <Route path="/admin" element={<AdminDashboard/>}></Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
