import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from "react-router-dom";
import { ThemeProvider } from "./components/Theme";
import AppBar from "./components/AppBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import Cursor from "./components/Cursor";
import Siieeq from "./views/siieeq";
import Prevout from "./views/prevout";
import Calfi from "./views/calfing";
import Acd_works_1 from "./views/acd_works_1";
import Ensenname from "./views/ensenname";
import AnalyticsTracker from "./components/AnalyticsTracker";

import "./App.css";

const ScrollToHash: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};


const MainLayaout: React.FC = () => {
  return(
    <>
      <AppBar />
      <main className="main-content">
        <Outlet />
      </main> 
    </>
  );
};

const SecondLayaout: React.FC =()=>{
  return(
    <>
      <main className="second-content">
        <Outlet />
      </main>
    </>
  );
};


const App: React.FC = () => {

  return (
    <ThemeProvider>
    <div className="app-container">
      <Cursor />
      <Router>
      <AnalyticsTracker />
        <ScrollToHash />
          <Routes>
            <Route element={<MainLayaout />}>
              <Route
                path="/"
                element={
                  <>
                    <section id="home" className="section-home">
                      <Home />
                    </section>
                    <section id="about" className="section-about">
                      <About />
                    </section>
                    <section id="projects" className="section-projects">
                      <Projects />
                    </section>
                  </>
                }
              />
              <Route path="/tools" element={<Tools />} />           
          </Route>
 
          <Route element={<SecondLayaout />}>
            <Route path="/views/siieeq" element={<Siieeq/>}/>
            <Route path="/views/prevout" element={<Prevout />}/>
            <Route path="/views/calfing" element={<Calfi />}/>
            <Route path="/views/acd_works_1" element={<Acd_works_1 />}/>
            <Route path="/views/ensenname" element={<Ensenname />}/>
          </Route>
        </Routes>  
      </Router>
    </div>
    </ThemeProvider>
  );
};

export default App;

