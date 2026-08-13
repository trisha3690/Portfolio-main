
import AboutMe from '../section/AboutMe'
import ProjectsSection from '../section/ProjectsSection'
import Contact from '../section/Contact'
import HeroSection from '../section/HeroSection'
import DateAndLocation from '../components/DateAndLocation'
import TechMarquee from '../components/TechMarquee'


const Home = ({isLoaded}) => {
  return (
    <>
    <DateAndLocation/>
   
      <HeroSection startAnimation={isLoaded}/>
      <AboutMe />
      <TechMarquee/>
       <ProjectsSection/>
       <Contact/>
    </>
  )
}

export default Home
