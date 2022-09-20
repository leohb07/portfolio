import { About } from '../components/About'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
    </>
  )
}
