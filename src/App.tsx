import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import('./screens/Home/HomePage'));

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
