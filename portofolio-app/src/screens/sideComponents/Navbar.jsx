import React from 'react';

const Navbar = ({dark}) => {

    const styles = {

        navbarContainer:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '40%'
        },
        navbarItem:{
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily:  'Gill Sans', 
            cursor: 'pointer',
            borderRadius: '20px',
            padding: '20px',
            alignSelf: 'center',
            color: dark? 'white':'black',
            backgroundColor: dark? 'rgba(0,0,0,.87)':'white',
        }
        
   }

   const hoverAction = (e) => {
        e.target.style.backgroundColor = "#d52121";
   }

   const leaveAction = (e) => {
    e.target.style.backgroundColor = dark? 'rgba(0,0,0,.87)':'white';
}

    return(
        <div style={styles.navbarContainer}>
        <div style={styles.navbarItem} onMouseEnter={hoverAction} onMouseLeave={leaveAction} >About</div>
        <div style={styles.navbarItem} onMouseEnter={hoverAction} onMouseLeave={leaveAction} >Projects</div>
        <div style={styles.navbarItem} onMouseEnter={hoverAction} onMouseLeave={leaveAction} >Contact</div>
        </div>
    );

}

export default Navbar;