/** @format */

import React, { Suspense } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// const Dashboard = React.lazy(()=> import('./components/Dashboard'))
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading Home . . .</div>}>
        <Home/>
      </Suspense>
    ) 
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<div>Loading About . . .</div>}>
        <About/>
      </Suspense>
    ) 
  }
  
])

function App() {
	return (
		<>
			<h1>Code Splitting Tutorial</h1>
      <RouterProvider router={router}/>
			{/* <Dashboard /> */}
		</>
	);
}

export default App;
