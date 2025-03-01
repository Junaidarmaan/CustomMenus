import React from 'react'
import SideNavBar from './components/SideNavBar'
import Menu from './components/Menu'
import "./App.css"


export default function App() {
  return (
    <div className='container'>
      <SideNavBar/>
      <Menu/>
    </div>
  )
}
