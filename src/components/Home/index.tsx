import { startTransition, useState } from 'react';
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
              .typeString('Welcome!')
              .pauseFor(2500)
              .deleteAll()
              .typeString("I'm <b>Gabriel Aquino</b>, web developer.")
              .start()
          }}
        />
        <Typewriter
          onInit={(typewritter) => {
            typewritter
              .pauseFor(10000)
              .typeString('JavaScript, TypeScript.')
              .pauseFor(1000)
              .deleteAll()
              .typeString("React, React Native, NextJS, Angular..")
              .pauseFor(1000)
              .deleteAll()
              .typeString('NestJS, Node.')
              .pauseFor(1000)
              .deleteAll()
              .typeString("Open to work!")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Contact bellow! :)")
              .start()
          }}
        />
      <Link to='/contact' className="flat-button"> CONTACT ME  </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home;