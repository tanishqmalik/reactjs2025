import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon}></img>
        </div>

        <div className="main-container">
            <div className='greet'>
                <p>Hello, Dev</p>
                <p>How can I help you today?</p>
            </div>
        </div>
    </div>
  )
}

export default Main