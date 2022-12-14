import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={(navData)=>{return navData.isActive ?classes.active:''}} to='/welcome'>
              {/* //' with v6 avtiveClassName is removed , need to pass a function in classes to decide wha to do when the link is active' [old: activeClassName={classes.active}] */}
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData)=>{return navData.isActive ?classes.active:''}} to='/products'>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
