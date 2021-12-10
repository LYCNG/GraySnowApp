import React, { useEffect,Fragment } from "react";

import ReactGA from "react-ga";

const {REACT_APP_GA_TRACKING_CODE} = process.env

ReactGA.initialize(REACT_APP_GA_TRACKING_CODE);

// const useTracker=(Component, options = {}) => {
//   const trackPage = page => {
//     ReactGA.set({
//       page,
//       ...options
//     });
//     ReactGA.pageview(page);
//   };

//   const HOC = props => {
//      useEffect(() => trackPage(props.location.pathname), [
//       props.location.pathname
//     ]);

//     return <Component {...props} />;
//   };

//   return HOC;
// };
const TrackPage =(page)=>{
  ReactGA.set({
    page
  });
  ReactGA.pageview(page);
};

// export default useTracker;

export default TrackPage;