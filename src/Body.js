import React from 'react'
import './Body.css'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

function Body() {
    return (
        <div className='body'>
            <h3>Select The Year</h3>
            <div className='Buttons'>

            <div className='button'>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
             B.tech 1st Year
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item><Link to='/'>Chemical+Petroleum</Link></Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
            </div>
               
            <div className='button'>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
             B.tech 2nd Year
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item><Link to='/btech2chemical'>Chemical19</Link></Dropdown.Item>
             
             <Dropdown.Item><Link to='/btech2petroleum'>Petroleum19</Link></Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
            </div>
         
         <div className='button'>
         <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
             B.Tech 3rd Year
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item><Link to='/btech3chemical'>Chemical</Link></Dropdown.Item>
             <Dropdown.Item ><Link to="/btech3petroleum">Petroleum</Link></Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
         </div>
         <div className='button'>
         <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
             B.Tech 4th Year
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item ><Link to='/btech4chemical'>Chemical</Link></Dropdown.Item>
             <Dropdown.Item ><Link to="/btech4petroleum">Petroleum</Link></Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
         </div>
         <div className='button'>
         <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
             M.Ba
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item href="#/action-1">Chemical</Dropdown.Item>
             <Dropdown.Item href="#/action-2">Petroleum</Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
         </div>
         <div className='button'>
         <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
             Phd
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item href="#/action-1">Chemical</Dropdown.Item>
             <Dropdown.Item href="#/action-2">Petroleum</Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
         </div>
         </div> 
        </div>
    )
}

export default Body
