import React, {useEffect} from 'react';
import './App.css';
import Quotes from "./Quotes";

type statelessFunc = () => JSX.Element;

const App: statelessFunc = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [])
  return (
      <div className="quoteWrapper">
        <Quotes/>
        <header><span className="quot">„</span>Random Quote Machine<span className="quot">“</span></header>
      </div>
  );
}

export default App;
