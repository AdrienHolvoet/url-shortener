import { Routes, Route } from "react-router";
import { UrlShortener } from "./UrlShortener";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UrlShortener />} />
    </Routes>
  );
};
