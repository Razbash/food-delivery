import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "./tools/Spinner";

import './css/general.scss';
import { Provider } from "react-redux";
import { setupStore } from "./store";
import UserProfilePage from "./pages/UserProfilePage";

const HomePage = lazy(() => import('./pages/HomePage'));
const DealsPage = lazy(() => import('./pages/DealsPage'));
const ReustorantDetailPage = lazy(() => import('./pages/ReustorantDetailPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboardPage'));
const AdminDealsPage = lazy(() => import('./pages/AdminDealsPage'));

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/reustorants/reustorant" element={<ReustorantDetailPage/>} />
              <Route path="/deals" element={<DealsPage/>} />
              <Route path="/auth" element={<AuthPage/>} />
              <Route path="/user" element={<UserProfilePage/>} />
              <Route path="/admin" element={<AdminDashboard/>}></Route>
              <Route path="/admin/deals" element={<AdminDealsPage/>}></Route>
            </Routes>
          </Suspense>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
