import React, { useEffect, useState } from 'react'
import MobileProjects from '../components/MobileProjects'
import Projects3 from './Projects3'

const ProjectsSection = () => {
    const [ismatches, setIsMatches] = useState(false)


    useEffect(() => {
        const media = window.matchMedia("(max-width: 1024px) ")
        setIsMatches(media.matches)
        const handler = (e)=> {
            setIsMatches(e.matches)
        
        }
        media.addEventListener("change", handler)


    return () => {
      media.removeEventListener("change", handler)
    }
    }, [])



    return (
        <div>
            {ismatches ? <MobileProjects /> : <Projects3 />}
        </div>
    )
}

export default ProjectsSection
