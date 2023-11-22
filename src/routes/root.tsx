import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import FrontDesk from "../pages/FrontDesk";

export default function Root() {
  return <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/front-desk" element={<FrontDesk />} />
  </Routes>
}