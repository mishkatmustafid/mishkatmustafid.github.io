import 'bootstrap/dist/css/bootstrap.min.css'

// import styles from "@/styles/Home.module.css";

import Header from '@/components/header'
import Intro from '@/components/intro'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import About from '@/components/about'

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Projects />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
