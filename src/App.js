import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import useReviews from './hooks/useReviews';
import { createContext } from 'react';

export const ReviewContext = createContext([])
function App() {
  const [reviews, setReviews] = useReviews()
  return (
    <div className="App">
      <Navbar></Navbar>
      <ReviewContext.Provider value={reviews}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Review></Review>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </ReviewContext.Provider>
    </div>
  );
}

export default App;
