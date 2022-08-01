import { Route, Routes } from "react-router-dom";
import { Client } from "./pages/Client";
import { Clients } from "./pages/Clients";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Clients />} />
      <Route path="/repo" element={<Client />} />
    </Routes>
  );
}