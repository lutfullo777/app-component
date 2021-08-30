import React from 'react'
import image from '../../photos/image1.jpg'
import { FaHeart, FaEye, FaDownload, FaPaperclip, FaPlay, FaPlus, FaRegCommentAlt } from 'react-icons/fa'
import './component1.css'


function Component1() {
    return (
        <div className="component1 component">
            <div className="name">
                <img src={image} alt="rasm-1" />
                <h3>John Doe</h3>
                <p>Web App Designer</p>
            </div>
            <div>
                <ul className='icons'>
                    <li><FaHeart color='rgb(255,0,0)' /></li>
                    <li><FaEye color="rgb(80, 150, 250)" /></li>
                    <li><FaPaperclip color="rgb(0,255,0)" /></li>
                    <li><FaDownload color="rgb(80, 150, 250)" /></li>
                    <li><FaPlay color="rgb(255, 120, 100)" /></li>
                </ul>
            </div>
            <div>
                <ul className='control'>
                    <li>Follow <FaPlus /></li>
                    <li>Message <FaRegCommentAlt /></li>
                </ul>
            </div>
        </div>
    )
}

export default Component1
