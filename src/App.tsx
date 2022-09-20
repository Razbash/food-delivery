import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "./tools/Spinner";

import './css/general.scss';
import { Provider } from "react-redux";
import { setupStore } from "./store";

const HomePage              = lazy(() => import('./pages/HomePage'));
const DealsPage             = lazy(() => import('./pages/DealsPage'));
const ReustorantDetailPage  = lazy(() => import('./pages/ReustorantDetailPage'));
const AuthPage              = lazy(() => import('./pages/AuthPage'));
const CheckoutPage          = lazy(() => import('./pages/CheckoutPage'));
const UserProfilePage       = lazy(() => import('./pages/UserProfilePage'));
const ProductDetailPage     = lazy(() => import('./pages/ProductDetailPage'));
const ReustorantsPage       = lazy(() => import('./pages/ReustorantsPage'));
const UserOrdersPage        = lazy(() => import('./pages/UserOrdersPage'));

const AdminDashboard        = lazy(() => import('./pages/AdminDashboardPage'));
const AdminDealsPage        = lazy(() => import('./pages/AdminDealsPage'));
const AdminReustorantsPage  = lazy(() => import('./pages/AdminReustorantsPage'));
const AdminOrdersPage       = lazy(() => import('./pages/AdminOrdersPage'));

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/reustorants" element={<ReustorantsPage/>} />
              <Route path="/reustorant/:reustorantId" element={<ReustorantDetailPage/>} />
              <Route path="/deals" element={<DealsPage/>} />
              <Route path="/auth" element={<AuthPage/>} />
              <Route path="/user" element={<UserProfilePage/>} />
              <Route path="/checkout" element={<CheckoutPage/>} />
              <Route path="/products/:productId" element={<ProductDetailPage/>}></Route>
              <Route path="/orders" element={<UserOrdersPage/>}></Route>
              <Route path="/admin" element={<AdminDashboard/>}></Route>
              <Route path="/admin/deals" element={<AdminDealsPage/>}></Route>
              <Route path="/admin/reustorants" element={<AdminReustorantsPage/>}></Route>
              <Route path="/admin/orders" element={<AdminOrdersPage/>}></Route>
            </Routes>
          </Suspense>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
