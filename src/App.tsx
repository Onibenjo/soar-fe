import CardsPage from "./pages/Cards";
import Dashboard from "./pages/Dashboard";
import SettingsPage from "./pages/Settings";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="">
        <Route index element={<Dashboard />} />
        <Route path="dashboard/cards" element={<CardsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
