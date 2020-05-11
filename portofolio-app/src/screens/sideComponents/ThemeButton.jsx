import React from 'react';

const ThemeButton = ({dark,handleDark}) => {

    const styles = {
        themeContainer : {
            backgroundColor: dark? '#640dd4' : '#d52121',
            color: dark ? '#191a1d':'#fff',
            borderRadius: '20px',
            padding: '0px 20px',
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily:  'Comic Sans MS', 
            cursor: 'pointer',
            maxHeight:'70px'
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