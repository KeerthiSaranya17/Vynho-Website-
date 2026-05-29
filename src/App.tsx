
import './App.css'
import Navbar from './components/layout/Navbar'
import AppRoutes from './routes/AppRoutes'


function App() {
 

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black">
      <Navbar/>
      <AppRoutes/>
    </div>
    </>
  )
}

export default App
