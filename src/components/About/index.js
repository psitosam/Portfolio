import { useEffect, useState } from 'react'
import {
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            After college, I spent about 15 years in public service, first as an EMT in Richmond,
            Virginia, and later as a paramedic both in the city and surrounding rural counties. 
            My journey took me through multiple jurisdictions and through a period of service in 
            the Army National Guard, and finally to a local fire department. The overarching theme 
            through this period of my life was the desire to help people, a guideline that 
            still influences me today. 
          </p>
          <p>
            Although my career gave me opportunities to develop my communication, collaboration,
            and stress management skills, I found that after many years in the field I did not
            feel like I was making a lasting impact. Urgent problems needed to be dealt with on
            a daily basis, but important problems were not treated urgently. This led to my pursuit
            of a new venture and the next evolution of my career.
          </p>
          <p>
            I decided to let my love of learning new things take the wheel, and after some research
            into different options and speaking with friends and family members, I found my love of
            coding through attending a "Try Coding" event at the Turing School of Software Design.
            I quickly enrolled in the Backend Development program and found myself engaged in an 
            immersive environment where I was surrounded by brilliant people all achieving at a 
            very high level. I was hooked. 
          </p>
          <p>
            The program at Turing gave me the skills I needed not only to produce high-quality code,
            but also learn any new technical concept quickly. In addition, I learned about the importance
            of advocating for inclusion of all people in the tech field, regardless of background or how
            they identify themselves. I find myself now with a unique opportunity to help people and 
            have a lasting impact through software development.
          </p>
          <p>
            When I'm not coding, you can find me playing guitar in one of my two bands, reading sci-fi,
            or remodeling my house!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src="/sql.png" alt="sql" />
            </div>
            <div className="face2">
              <img src="/ruby_png.png" alt="ruby" />
            </div>
            <div className="face3">
              <img src="/rails.png" alt="rails" />
            </div>
            <div className="face4">
              <img src="/logo512.png" alt="graphql" />
            </div>
            <div className="face5">
              <img src="/postgresql.png" alt="postgresql" />
            </div>
            <div className="face6">
              <img src="/rest-api.png" alt="rest-api" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="cube-spin" />
    </>
  )
}

export default About