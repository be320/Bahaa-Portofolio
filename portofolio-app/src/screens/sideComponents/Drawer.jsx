import React from 'react';

const Drawer = ({dark,handleDark}) => {

    const styles = {
        drawer:{
            zIndex: 2,
            position: 'absolute',
            width: '100%',
            backgroundColor: dark? '#d52121':'#d52121',
        },
        drawerItem:{
            color: 'white',
            padding: '20px 0px 20px 20px',
            borderBottom: '1px solid #fff',
            margin:'0px'
        }
    }

    const themeConverter = () => {
        handleDark(!dark);
    }

    const openDrawer = () =>{
        themeConverter();
    }

    return(
        <div style={styles.drawer}>
        <p style={styles.drawerItem} >About</p>
        <p style={styles.drawerItem} >Projects</p>
        <p style={styles.drawerItem} >Contact</p>
        {dark ? <p style={styles.drawerItem} onClick={themeConverter} >Light Theme</p> :
         <p style={styles.drawerItem} onClick={themeConverter}   >Dark Theme</p> }
        </div>
        
    );
    
}

export default Drawer;