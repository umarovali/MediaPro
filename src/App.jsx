import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import About from './Home/About/About'
import Connect from './Home/Connect/Connect'
import Experience from './Home/Experience/Experience'
import Format from './Home/Format/Format'
import Hero from './Home/Hero/Hero'
import Infos from './Home/Info/Info'
import MediaBoost from './Home/MediaBoost/MediaBoost'
import Modul from './Home/Modul/Modul'
import Problems from './Home/Problems/Problems'
import Result from './Home/Result/Result'
import Study from './Home/Study/Study'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <MediaBoost />
        <About />
        <Problems />
        <Study />
        <Infos />
        <Format />
        <Modul />
        <Result />
        <Connect />
      </main>
      <Footer />
    </>
  )
}

export default App
