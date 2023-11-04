import React, { Component } from 'react'
import zipImage from '../Assets/zipcode.png'
export default class Navbar extends Component {
  render() {
    return (
      <div className='Navbar-Wrapper' style={{display:"flex", justifyContent:"center",  backgroundColor:"#043b5c"}}>
        <nav className="navbar bg-body-tertiary">
            <div className="container" style={{backgroundColor:"043b5c"}}>
                <a className="navbar-brand" href="#">
                <img src={zipImage} alt="Bootstrap" width="30" height="24" />
                </a>
                <h2>Zip Code Information APP</h2>
            </div>
        </nav>
      </div>
    )
  }
}
