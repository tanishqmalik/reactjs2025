import React from 'react'
import Profile from './Profile'

const SideBar = ({username}) => {
  return (
    <div>
        {/* <h3>Sidebar</h3> */}
        <Profile username = {username}></Profile>
    </div>
  )
}

export default SideBar