import React from 'react';

const Navbar = ({dark}) => {

    const styles = {

        navbarContainer:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '40%',
            height:'20%'
        },
        navbarItem:{
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily:  'Comic Sans MS', 
            cursor: 'pointer',
            borderRadius: '20px',
            padding: '20px',
            alignSelf: 'center',
            color: dark? 'white':'#191a1d',
            backgroundColor: dark? '#191a1d':'white',
        }
        
   }

   const hoverAction = (e) => {
        e.target.style.backgroundColor = dark? "yellow" : "#d52121";
        e.target.style.color = dark? "#191a1d":"#fff";
   }

   const leaveAction = (e) => {
    e.target.style.backgroundColor = dark? '#191a1d':'white';
    e.target.style.color = dark? 'white':'#191a1d';
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