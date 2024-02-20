import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./ui/Body";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Body />}>
            <Route path="" element={<Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>} />
            <Route path="about" element={<Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
