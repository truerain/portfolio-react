import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { BiCommentDetail, BiHomeSmile } from 'react-icons/bi';
import { FaBars, FaLuggageCart } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';
import { MdDashboard } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';

import './sidebar.css';
import Logo from '../assets/Batman-Logo-1966.png';


const menuItem = [
  {
    path: '/',
    name: 'Home',
    icon: <BiHomeSmile />
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <MdDashboard />
  },
  {
    path: '/about',
    name: 'About',
    icon: <AiOutlineUser />
  },
  {
    path: '/comments',
    name: 'Comments',
    icon: <BiCommentDetail />
  },
  {
    path: '/analytics',
    name: 'Analytics',
    icon: <GoGraph />
  },
  {
    path: '/products',
    name: 'Producs',
    icon: <FaLuggageCart />
  },
];

const Sidebar = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleOpen = () => { setIsOpened(!isOpened); }

  return (
    <div className="main-container">
      <div className={`sidebar ${isOpened ? 'opened' : 'closed'}`}>
        <div className="top-section">
          <h1 className="logo"><img src={Logo} alt="" /></h1>
          <div className="bars"><FaBars onClick={toggleOpen} /></div>
        </div>
        {
          menuItem.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeClassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div className="link-text">{item.name}</div>
              </NavLink>
            );
          })
        }
      </div>
      <main>{props.children}</main>
    </div>
  )
}

export default Sidebar;
