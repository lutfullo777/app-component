import React from 'react'
import './component3.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Component3() {
    
    return (
        <div className="component component3">
            <p>Followers</p>
            <span>500k</span>
            <div  style={{position:'relative', width: 200, height: 200,margin:'20px auto', }}>
  <CircularProgressbar value={66} text='seen 60%' strokeWidth={3}  />
  
</div>
<p>Increased since yesterday</p>
<span>15%</span>
        </div>
    )
}


export default Component3

