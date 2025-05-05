import './App.css'
import Header from './Components/Header/Header'
import About from './Home/About/About'
import Experience from './Home/Experience/Experience'
import Hero from './Home/Hero/Hero'
import MediaBoost from './Home/MediaBoost/MediaBoost'
import Problems from './Home/Problems/Problems'
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
      </main>
    </>
  )
}

export default App
