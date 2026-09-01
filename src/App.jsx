
import './App.css'
import HomePage from "./layout/HomePage.jsx";
import MembershipPage from "/src/layout/MembershipPage.jsx";
import { Routes, Route } from 'react-router-dom';
import ClassSchedule from "./layout/ClassSchedule.jsx";
import ClubPageDetails from "./layout/ClubPageDetails.jsx";
import ClubsPage from "./layout/ClubsPage.jsx";
import JoinNowPage from "./layout/JoinNowPage.jsx";

function App() {
  return(
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join-page" element={<JoinNowPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/class-schedule" element={< ClassSchedule />} />
        <Route path="/clubs" element={<ClubsPage />} />
        <Route path="/clubs/:club_location" element={<ClubPageDetails />} />"
      </Routes>
  )
}

export default App
