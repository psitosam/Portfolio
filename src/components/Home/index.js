import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
// import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['A', 'l', 'e', 'x', ':']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>  
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span> 
          <br/>        
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m </span>
          <span className={`${letterClass} _14`}> </span>

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={16}
          />
        </h1>
        <h2>Skills:</h2>
        <h2>Ruby on Rails - APIs -  JavaScript - PostgreSQL - Postman - React - Git/Github - Heroku</h2>
        <Link to="/contact" className="flat-button">CONTACT ME
        </Link>
      </div>
      {/* <Logo /> */}
      <div class="ok_logo">
          <img src='okie2.png' alt="okie logo" />
      </div>
    </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home 