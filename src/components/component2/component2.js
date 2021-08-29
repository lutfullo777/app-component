import React from 'react'
import './component2.css'
import { FaRegHeart, FaRegComment } from 'react-icons/fa'
import image2 from '../../photos/image2.jpg'
import image1 from '../../photos/image1.jpg'

function Component2() {
    return (
        <div className="component2 component">
            <div className='image'>
                <img src={image2} alt="rasm-1" />
            </div>
            <div className='footer'>
                <ul>
                    <li><img src={image1} alt="rasm-2" /> Jhon Doe</li>
                    <li style={{ justifyContent: 'flex-end' }}><FaRegHeart className="icon-2" /><FaRegComment className="icon-2" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Component2
