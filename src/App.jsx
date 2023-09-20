import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import ExpenseTracker from "./pages/ExpenseTracker";
import About from './pages/About';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>

          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/expense-tracker" element={<ExpenseTracker />} />
            <Route path="/about" element={<About />} />
          </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App