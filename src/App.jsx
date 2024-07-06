import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Transactions from './components/Transactions'
import Welcome from './components/Welcome'
import Services from './components/Services'

function App() {

  return (
    <>
      <div>
        <div>
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />

      </div>
    </>
  )
}

export default App
