import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize GA using the user's Measurement ID
        ReactGA.initialize("G-JTR62Y2VHQ"); 
    }, []);

    useEffect(() => {
        // Send pageview with a custom path
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }, [location]);

    return null;
};

export default Analytics;
