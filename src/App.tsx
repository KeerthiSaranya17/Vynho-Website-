import './styles/global.css'
import Navbar from './components/layout/Navbar'
import AppRoutes from './routes/AppRoutes'
import { Toaster } from "sonner";
// import MarqueeSection from './components/sections/MarqueeSection'
// import Footer from './components/layout/Footer'


function App() {
 

  return (
    <>
    <Toaster richColors position="top-right" offset={{
    top: 80,    // 8px ≈ top-2
    right: 120, // 12px ≈ right-3
  }} />
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
