import React from 'react';

import DrawerBody from '@material-ui/core/Drawer';

const Drawer = ({dark,handleDark}) => {

    const styles = {
        
    }

    const themeConverter = () => {
        handleDark(!dark);
    }

    const openDrawer = () =>{
        themeConverter();
    }

    return(
        <div  onClick={openDrawer}>
        
        </div>
        
    );
    
}

export default Drawer;