import './App.css'
import Header from './Components/Header/Header'
import Experience from './Home/Experience/Experience'
import Hero from './Home/Hero/Hero'
import MediaBoost from './Home/MediaBoost/MediaBoost'
import Study from './Home/Study/Study'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <MediaBoost />
        <Study />
      </main>
    </>
  )
}

export default App
