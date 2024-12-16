import CardsPage from "./pages/Cards";
import Dashboard from "./pages/Dashboard";
import SettingsPage from "./pages/Settings";
import { Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="">
          <Route index element={<Dashboard />} />
          <Route path="dashboard/cards" element={<CardsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
