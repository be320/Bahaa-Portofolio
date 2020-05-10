import React from 'react';

const ThemeButton = ({dark,handleDark}) => {

    const styles = {
        themeContainer : {
            backgroundColor: '#d52121',
            color: dark ? 'white':'black',
            borderRadius: '20px',
            padding: '0px 20px',
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily:  'Gill Sans', 
            cursor: 'pointer'
        }
    }

    const themeConverter = () => {
        handleDark(!dark);
    }

    return(
        <div style={styles.themeContainer} onClick={themeConverter} >
            {dark ? <p>Light Theme </p>  : <p>Dark Theme </p>}
        </div>
    );

}

export default ThemeButton;