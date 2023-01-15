import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import { setupStore } from './store';
import SuspenseSpinner from "./ui/SuspenseSpinner/SuspenseSpinner";

const HomePage              = lazy(() => import('./screens/Home/HomePage'));
const RestaurantDetailPage  = lazy(() => import('./screens/RestaurantDetail/RestaurantDetailPage'));

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
            </Routes>
          </Suspense>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
