import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Logo from '../assets/logo.png';
import DarkLogo from '../assets/dark-logo.PNG';
import Drawer from './sideComponents/Drawer';
import Navbar from './sideComponents/Navbar';
import ThemeButton from './sideComponents/ThemeButton';
import DehazeIcon from '@material-ui/icons/Dehaze';

const Home = () => {



//Media Query Section
    
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
  //const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  //const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isLandscape = useMediaQuery({ orientation: 'landscape' })
  //const isRetina = useMediaQuery({ minResolution: '2dppx' })


//States Section

  const [dark,setDark] = useState(false);

  const handleDark = (value) =>{
      setDark(value);
  }


// styling section

  const styles = {
    header:{
        padding: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container:{
        backgroundColor: dark ? 'rgba(0,0,0,.87)': 'white',
    },
    drawerStyle : {
        color: dark? "white":"black",
    }
  };


// rendering section

    return(
        <div style= {styles.container}>
        { isDesktopOrLaptop && 
            <div style={styles.header}>
            <img src={dark?DarkLogo: Logo} alt="logo" width="200px" />
            <Navbar dark={dark} />
            <ThemeButton dark={dark}  handleDark={handleDark} />
            </div> }
        {isTabletOrMobile && 
            <div style={styles.header}>
            <img src={dark?DarkLogo: Logo} alt="logo" width="110px" />
            <DehazeIcon style={styles.drawerStyle} />
             </div>}

       
        
        </div>
    );
    
}

export default Home;