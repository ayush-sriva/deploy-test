import { ThemeProvider } from '@mui/material';
import HomePage from './components/pages/HomePage';
import JobDescriptionView from './components/pages/jobDescriptionView';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import SavedJobsPage from './components/pages/SavedJobs';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/jobs/initialView' element={<HomePage />} />
        <Route path='/jobs/selectedView' element={<JobDescriptionView />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
