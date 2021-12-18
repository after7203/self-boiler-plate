import React, {Suspense} from 'react';
import { Routes, Route } from "react-router-dom";
import LandingPage from './view/LandingPage/LandingPage.js'

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
		  <Route path="/" element={<LandingPage/>} />
	  </Routes>
    </Suspense>
  );
}

export default App;
