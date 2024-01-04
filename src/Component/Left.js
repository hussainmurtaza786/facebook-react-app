import React from 'react'

function Left() {
  return (
    <div id="left-main">
      <div className="accountIcon leftIcon">
        <div className="circle leftCircle">
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="25px" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
        </div>
        <div className="acc-name">
          <h4>ABC</h4>
        </div>
      </div>
      <div className="anyhti">
        <img src='./Images/logo.png'/>
        <img src='./Images/group.png'/>
      </div>
    </div>
  )
}

export default Left
