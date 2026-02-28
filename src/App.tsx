import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./Index";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/lmm-lumiveil-pro-ranking">
        <Routes>
          <Route path="*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
