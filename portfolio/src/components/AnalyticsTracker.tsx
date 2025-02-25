import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-8HG3Q1PL7R"; // Reemplázalo con tu ID de Google Analytics

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send("pageview"); // Registra la primera visita
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
};

export default AnalyticsTracker;
