import './App.css'
import BothSection from './components/Section/BothSection'
import SectionOne from './components/Section/SectionOne'
import SectionSecond from './components/Section/SectionSecond'
import SectionThrid from './components/Section/SectionThrid'

function App() {

  return (
    <>
      <SectionOne />
      <SectionSecond />
      <SectionThrid />
      <BothSection direction={'left'} />
      <BothSection direction={'right'} />
      <SectionThrid />
    </>
  )
}

export default App
