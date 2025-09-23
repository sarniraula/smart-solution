import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Contact from './sections/Contact'
import Mission from './sections/Mission'
import ReferralProgram from './sections/ReferralProgram'
import Services from './sections/Services'
import Staff from './sections/Staff'
import Testimonials from './sections/Testimonials'
import Videos from './sections/Videos'

function App() {

  return (
    <DefaultLayout>
      <Home />
      <Mission />
      <Staff />
      <Services />
      <ReferralProgram />
      <Testimonials />
      <Videos />
      <Contact />
    </DefaultLayout>
  )
}

export default App
