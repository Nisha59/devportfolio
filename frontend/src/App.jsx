import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ChatAssistant from './components/ChatAssistant'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <ChatAssistant />
    </>
  )
}