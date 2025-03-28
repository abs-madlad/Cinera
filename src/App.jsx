import './App.css'
import Mcard from './components/Mcard'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {

  // const movNo=1

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Favourites' element={<Favourites />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App

{/* {movNo===1?(
<Mcard movie={{title: "Besharam", release_date:2013}} />
):(
<Mcard movie={{title: "Ludo", release_date:2020}} /> 
)} */}
{/* <Mcard movie={{title: "3 Idiots", release_date:2009}} /> */}
{/* {movNo===1 && <Mcard movie={{title: "Ludo", release_date:2020}} />} */}