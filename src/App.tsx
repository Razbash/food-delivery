import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { setupStore } from './store';
import SuspenseSpinner from './ui/SuspenseSpinner/SuspenseSpinner';

const HomePage              = lazy(() => import('./screens/Home/HomePage'));
const RestaurantDetailPage  = lazy(() => import('./screens/RestaurantDetail/RestaurantDetailPage'));
const ProductDetailPage     = lazy(() => import('./screens/ProductDetail/ProductDetailPage'));
const DealsPage             = lazy(() => import('./screens/Deals/DealsPage'));
const CartPage              = lazy(() => import('./screens/Cart/CartPage'));
const AuthPage              = lazy(() => import('./screens/Auth/AuthPage'));
const ReustorantsPage       = lazy(() => import('./screens/RestaurantsPage/RestaurantsPage'));
const RegistrationPage      = lazy(() => import('./screens/Registration/RegistrationPage'));
const SearchPage            = lazy(() => import('./screens/Search/SearchPage'));
const AccountPage           = lazy(() => import('./screens/Account/AccountPage'));
const OrdersPage            = lazy(() => import('./screens/Orders/OrdersPage'));

const store = setupStore();

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Suspense fallback={<SuspenseSpinner/>}>
                        <Routes>
                            <Route path="/" element={<HomePage/>}></Route>
                            <Route path="/restaurant/:restaurantId" element={<RestaurantDetailPage/>}></Route>
                            <Route path="/products/:productId" element={<ProductDetailPage/>}></Route>
                            <Route path="/deals" element={<DealsPage/>}></Route>
                            <Route path="/cart" element={<CartPage/>}></Route>
                            <Route path="/auth" element={<AuthPage/>}></Route>
                            <Route path="/restaurants" element={<ReustorantsPage/>}></Route>
                            <Route path="/registration" element={<RegistrationPage/>}></Route>
                            <Route path="/search/:searchParametr" element={<SearchPage/>}></Route>
                            <Route path="/account" element={<AccountPage/>}></Route>
                            <Route path="/orders" element={<OrdersPage/>}></Route>
                        </Routes>
                    </Suspense>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
