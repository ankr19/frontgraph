import React, { useState } from 'react'
import { GraphicEq, HomeMini, TableBar } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
//   const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      {
          path:"/",
          name:"Dashboard",
          icon:<HomeMini/>
      },
      {
          path:"/table",
          name:"Table",
          icon:<TableBar/>
      },
      {
          path:"/graph",
          name:"Graph",
          icon:<GraphicEq/>
      },
      
  ]
  return (
    <div className="container">
           <div style={{width:"200px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   {/* <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <ToggleButton onClick={toggle}/>
                   </div> */}
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
  )
}

export default Sidebar
