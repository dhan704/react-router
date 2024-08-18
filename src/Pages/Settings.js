import React, { Suspense, useState } from "react";

//Lazy loading- when there is a dalay in loading component, show loading
const MyComp = React.lazy(() => {
  return import(/*webpackChunkName: mySectionFile*/ '../components/Section');
});

function Settings() {
  const [state, setState] = useState(false);

  // const [module, setModule] = useState({});
  // const Comp = module.default || React.Fragment;

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        Settings
        <div>
          {state && <MyComp />}
          <button
            onClick={() => {
              setState(true);
            }}
          >
            Click Me
          </button>
        </div>
      </Suspense>
      {/* 
      <div>
        <Comp />
        <button
          onClick={() => {
            const pr = import("../components/Section");  //loading component dynamically
            pr.then((module) => {
              setModule(module);
            });
          }}
        >
          Click Me
        </button>
      </div> */}
    </div>
  );
}

export default Settings;
