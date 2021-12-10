import React, { useEffect,Fragment } from "react";

import ReactGA from "react-ga";

const {REACT_APP_GA_TRACKING_CODE} = process.env

ReactGA.initialize(REACT_APP_GA_TRACKING_CODE);

const useTracker=(WrappedComponent, options = {}) => {
  const trackPage = page => {
    ReactGA.set({
      page,
      ...options
    });
    ReactGA.pageview(page);
  };
  useEffect(()=>{
    trackPage(window.location.pathname)
  },[window.location.pathname])
  return (
    <WrappedComponent />
  )
};

export default useTracker;