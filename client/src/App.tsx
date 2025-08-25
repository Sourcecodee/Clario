import { GrowthProvider } from './contexts/GrowthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
// Main app entry: wraps all pages in GrowthProvider and sets up routes
function App() {
  return (
    // GrowthProvider shares selected categories across the app
    <GrowthProvider>
      {/* Router handles navigation between pages */}
      <Router>
        <Routes>
          {/* Landing page route */}
          <Route path="/" element={<LandingPage />} />
          {/* Onboarding page for category selection */}
          <Route path="/onboarding" element={<OnboardingPage />} />
          {/* Dashboard page with main features */}
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* Profile page for user stats and achievements */}
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </GrowthProvider>
  );
}

export default App;
