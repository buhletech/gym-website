
import './App.css'
import HomePage from "./layout/HomePage.jsx";
import MembershipPage from "/src/layout/MembershipPage.jsx";
import { Routes, Route } from 'react-router-dom';

function App() {
  return(
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/membership" element={<MembershipPage />} />
      </Routes>
  )
}

export default App
