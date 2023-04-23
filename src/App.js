import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage";
import SettingsPage from "./SettingsPage";
import AddCollegesPage from "./AddCollegesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/add-college" element={<AddCollegesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
