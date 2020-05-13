import React from 'react';
const myFont = require('typeface-montserrat');

const Drawer = ({dark,handleDark,handleDrawer}) => {

    const styles = {
        drawer:{
            zIndex: 3,
            position: 'absolute',
            width: '100%',
            backgroundColor: dark? '#52bdf1':'#d52121',
        },
        drawerItem:{
            color: dark? '#fff' : 'white',
            padding: '20px 0px 20px 20px',
            borderBottom: '1px solid '+ (dark? '#fff' : '#fff'),
            margin:'0px',
            fontWeight: 'bold',
            fontSize: '20px',
            fontFamily: myFont,
            cursor: 'pointer'
        }
    }

    const themeConverter = () => {
        handleDark(!dark);
    }

    const closeDrawer = () => {
        handleDrawer();
    }


    return(
        <div style={styles.drawer}>
        <a href="/#about" style={{ textDecoration: "none" }}>
        <p style={styles.drawerItem} onClick={closeDrawer} >About</p>
        </a>
        <a href="/#projects" style={{ textDecoration: "none" }}>
        <p style={styles.drawerItem} onClick={closeDrawer} >Projects</p>
        </a>
        <a href="/#contact" style={{ textDecoration: "none" }}>
        <p style={styles.drawerItem} onClick={closeDrawer} >Contact</p>
        </a>
        {dark ? <p style={styles.drawerItem} onClick={themeConverter} >Light Theme</p> :
         <p style={styles.drawerItem} onClick={themeConverter}   >Dark Theme</p> }
        </div>
        
    );
    
}

export default Drawer;