import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const TagCloud = require('TagCloud');

  const myTags = [
    'Ruby', 'Rails', 'OOP', 'HTML',
    'CSS', 'SQL', 'Postgresql', 'REST',
    'GraphQL',
    'SaaS', 'Bootstrap', 'APIs', 'git', 'RSpec',
    'JSON', 'Active Record',
    'Test Driven Development', 'Service Oriented Architecture'
  ];

  const options = {
    radius: 300,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    direction: 135,
    keep: true
  };


  TagCloud('.container', myTags, options); 
  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            I attended the Turing School of Software Design
            from January to August 2022, where I earned an accredited
            certificate in Backend Software Development. Turing is 
            (as of this writing) one of only two accredited coding
            bootcamps.
            <br />
            <br />
            Through school I have taken a deep dive into all things
            Ruby on Rails, with an emphasis on Test-Driven Development
            and Developer Empathy. In seven months I have gained proficiency
            in the following skills: Ruby, TDD, Git/Github for version control,
            RESTful routing, GraphQL, SQL, Postgresql, ActiveRecord, Heroku deployment,
            Continuous Integration/Continuous Deployment, Agile Workflows,
            RSpec for unit and integration testing, OmniAuth, Postman, JSON and 
            Exposing and Consuming APIs.
            <br />
            <br />
            On my own time I have developed skills in JavaScript, using Node.JS
            and React. This portfolio website is my first React project. I am also
            currently learning Python.
          </p>
        </div>
      </div>
      <div class="TagCloud"></div>
      <Loader type="square-spin" />
    </>
  )
}

export default Skills 
