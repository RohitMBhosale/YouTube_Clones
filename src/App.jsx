import './App.css'
import Navbar from './Component/Navbar';
import {Box} from '@mui/material';
import VideoDetail from './pages/VideoDetail';
import Feed from './pages/Feed/index';
import WatchLater from './pages/WatchLater';
import {Routes, Route} from 'react-router-dom';
import SearchFeed from './pages/SearchFeed';

function App() {


  return (
    <>
      <Box>
        <Navbar/>
        <Routes>
          <Route  path='/' element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoDetail/>}/>
          <Route path='/Watch-later' element={<WatchLater/>}/>
          <Route path='/searchFeed/:searchparam' element={<SearchFeed/>}/> 
        </Routes>
      </Box>
    </>
  )
}

export default App
