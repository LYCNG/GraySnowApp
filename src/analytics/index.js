import ReactGA from "react-ga"

const {REACT_APP_GA_TRACKING_CODE} = process.env;

function init() {
    // Enable debug mode on the local development environment
    const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ReactGA.initialize(REACT_APP_GA_TRACKING_CODE, { debug: isDev })
  };

function sendEvent(payload) {
    ReactGA.event(payload);
}

function sendPageview(path) {
    ReactGA.set({ page: path });
    ReactGA.pageview(path);
};

export const analytics = {
    init,
    sendEvent,
    sendPageview,
};