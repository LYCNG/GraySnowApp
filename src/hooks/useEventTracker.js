import ReactGA from 'react-ga';
import { useMemo } from "react";

export const eventTracker = (category, action)=>{
    return ReactGA.event({
        category: category,
        action: action,
        label: action,
        value:1
      })
};