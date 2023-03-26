import React from 'react'
import{AppContext} from'./context/ContextApi'
import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import Feed from './component/Feed'
import SearchResuilt from './component/SearchResuilt'
import VideoDetails from './component/VideoDetails'
import Header from './component/Header'
const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
      <div className="flex flex-col h-full">
      <Header/>
          <Routes>
            <Route path='/' exact element={<Feed/>}/>
            <Route path='/searchResult/:searchQuery' element={<SearchResuilt/>}/>
            <Route path='/video/:id' element={<VideoDetails/>}/>
          </Routes>

      </div>
   
      </BrowserRouter>
    </AppContext>
  )
  
}

export default App
