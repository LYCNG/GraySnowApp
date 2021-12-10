import ReactGA from 'react-ga';

export const eventTracker = (category, action)=>{
    return ReactGA.event({
        category: category,
        action: action,
        label: action,
        value:1
      })
};