import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";

import './index.scss';
import Logo from './Logo';

const Home = () => {
  
  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <Typewriter
          onInit={(typewritter) => {
            typewritter
              .pauseFor(1000)
              .typeString('Welcome!')
              .pauseFor(2500)
              .deleteAll()
              .typeString("I'm <b>Gabriel Aquino</b>, web developer.")
              .start()
          }}
        />
        <br />
        <Typewriter
          onInit={(typewritter) => {
            typewritter
              .pauseFor(11000)
              .typeString('JavaScript, TypeScript.')
              .pauseFor(1000)
              .deleteAll()
              .typeString("React, React Native, NextJS, Angular..")
              .pauseFor(1000)
              .deleteAll()
              .typeString('NestJS, Node, ORM, Database')
              .pauseFor(1000)
              .deleteAll()
              .typeString("Open for work!")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Contact bellow! :)")
              .start()
          }}
        />
      <Link to='/contact' className="flat-button"> CONTACT ME </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home;