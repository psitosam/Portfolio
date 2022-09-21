import React, { useEffect, useState, useRef } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  // var file = new File(["Resume"], "Resume 9_8Alex.pdf", { type: "text/plain;charset=utf-8" });
  const [letterClass, setLetterClass] = useState('text-animate')
  
  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])




  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {
          portfolio.map((port, idx) => {
            return (
              <div className="image-box" key={idx}>
                <img
                  src={port.cover}
                  className="portfolio-image"
                  alt="portfolio" />
                <div className="content">
                  <p className="title">{port.title}</p>
                  <h4 className="description">{port.description}</h4>
                  <button
                    className="btn"
                    onClick={() => window.open(port.url)}
                  >View</button>
                  <button
                    className="btn"
                    onClick={() => window.open(port.repo)}
                  >Repo</button>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }


  return (
    <>

      <div className="container portfolio-page">
        <h1 className="page-title">         
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            idx={15}
          />   
        </h1>   
        <br />
        <br />
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
        <a href="Resume 9_8Alex.pdf" target="_blank" className="resume-button">VIEW MY RESUME</a>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Portfolio;