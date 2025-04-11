/** @format */
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoaderOval from './components/layouts/Loader/LoaderOval';

// Lazy-loaded components
const Home = lazy(() => import('./pages/home/home'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact/contact'));
const Services = lazy(() => import('./pages/services/services'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<LoaderOval />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
