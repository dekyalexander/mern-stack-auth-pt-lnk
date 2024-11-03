import React from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Header() {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    
    const Logout = () => {
      removeCookie("token");
      navigate("/login");
    };
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="#" style={styles.navLink}>Home</a></li>
        <li style={styles.navItem}><a href="/email" style={styles.navLink}>Email</a></li>
        <li style={styles.navItem}><a href="#" onClick={Logout} style={styles.navLink}>Logout</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '20px',
    width: '100vw'
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0
  },
  navItem: {
    marginTop: '55px',
    marginLeft: '50px'
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
  }
};

export default Header;
