import './styles/global.css'
import Navbar from './components/layout/Navbar'
import AppRoutes from './routes/AppRoutes'
// import MarqueeSection from './components/sections/MarqueeSection'
// import Footer from './components/layout/Footer'


function App() {
 

  return (
    <>
      <div >
      <Navbar/>
      <AppRoutes/>
      {/* <MarqueeSection/> */}
      {/* <Footer/> */}
    </div>
    </>
  )
}

export default App
