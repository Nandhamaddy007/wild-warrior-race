
import About from './about/About'
import './App.css'
import Footer from './footer/Footer'
import Header from './header/header'
import ObstacleInfra from './obsInfra/ObstacleInfra'
import Races from './upcoming/Races'
import Vision from './vision/Vision'
import WWX from './wwx/wwx'

function App() {
  return (
    <>
   <div className='main-bg'>
     <Header />
    <About />
    <Races />
    <WWX />
    <ObstacleInfra />
    <Vision />
    <Footer />
   </div>
    </>
  )
  
}

export default App
