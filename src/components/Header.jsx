import React from 'react'
import './Header.css'

function Header() {
     return (
               <header className='header'>
               <div className="home">
                    <a href='/'>
                         <i className="bi bi-house-door-fill" style={{'cursor':'pointer','fontSize': '2rem', 'color': 'white'}}></i>
                    </a>
               </div>
               <div className='search-input'>
                    <div className="form-outline">
                         <input type="search" id="form1" className="form-control" placeholder="Search..."/>
                    </div>    
               </div>
               <div className='logo'>
                    <h1>Pomar</h1>
               </div>
               <div className='icons'>
                    <div className='information-icon'>
                         <a href='/notification'>
                              <i className="bi bi-info-circle-fill"
                              style={{'cursor':'pointer','fontSize': '2rem', 'color': 'white'}}
                              ></i>  
                         </a>
                    </div>

                    <div className='notification-icon'>
                         <a href='/notification'>
                              <i className="bi bi-bell-fill"
                              style={{'cursor':'pointer','fontSize': '2rem', 'color': 'white'}}
                              ></i>     
                         </a>
                    </div>

                    <div className='account-icon'>
                         <a href='/account'>
                              <i className="bi bi-person-fill"
                              style={{'cursor':'pointer','fontSize': '2rem', 'color': 'white'}}
                              ></i>    
                         </a>
                    </div>
               </div>
          </header>
     )
}

export default Header
