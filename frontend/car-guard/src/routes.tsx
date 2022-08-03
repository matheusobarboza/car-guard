import { Route, Routes } from "react-router-dom";
import { Client } from "./pages/Client";
import { Dashboard } from "./pages/Dashboard";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/clients/*" element={<Client />} />
    </Routes>
  );
}