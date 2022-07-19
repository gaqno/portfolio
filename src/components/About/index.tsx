import { faAngular, faCss3, faDocker, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";
import Typewriter from "typewriter-effect";
import './index.scss'

const About = () => {
  return (
    <>
      <div className='about-page'>
        <div className='text-zone'>
          <Typewriter
              onInit={(typewritter) => {
                typewritter
                  .pauseFor(1000)
                  .changeDeleteSpeed(5)
                  .changeDelay(1)
                  .typeString('Welcome!')
                  .callFunction(() => (<h1> Sobre mim: </h1>))
                  .deleteAll()
                  .typeString("Tenho habilidades nos principais frameworks do mercado, proeminentemente frontend.")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Cada dia mais motivado entendendo a grandeza e beleza da programação. ")
                  .deleteAll()
                  .typeString("Eiusmod ea proident dolore sunt sunt. Voluptate sint quis incididunt commodo irure anim eu eu eiusmod irure. Cupidatat tempor officia labore duis sunt dolor labore sit mollit quis. Sint quis labore nostrud id non aliqua nostrud commodo reprehenderit pariatur enim cillum adipisicing. Tempor dolor mollit proident nisi cillum elit non duis.")
                  .deleteAll()
                  .start()
              }}
          />
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color='#f06529' />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color='#28a4d9' />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color='#5ed4f4' />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faHtml5} color='#efd81d' />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color='#ec4d28' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;