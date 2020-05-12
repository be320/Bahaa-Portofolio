import React from 'react';

const EmailForm = ({dark}) => {

    const styles = {

        formContainer: {
            height:'25em',
            width:'30em',
            borderRadius:'10%',
            display: 'flex',
            flexDirection: 'column',
            color: 'black',
            backgroundColor: dark? '#640dd4':'#d52121',
            marginTop: '50px',
            padding: '20px'
        },
        txtName: {
            border: '2px solid '+(dark? '#191a1d':'white'),
            borderRadius: '30px',
            padding: '10px',
            fontSize: '20px',
            backgroundColor: dark? '#640dd4':'#d52121',
            color: dark? '#191a1d':'white',
            width: '60%',
            height: '30%',
            outline: 'none',
            placeholderTextColor : "white",
            alignSelf:'center',
            marginLeft: '30px'
        },
        txtSubject: {
            border: '2px solid '+(dark? '#191a1d':'white'),
            borderRadius: '30px',
            padding: '10px',
            fontSize: '20px',
            backgroundColor: dark? '#640dd4':'#d52121',
            color: dark? '#191a1d':'white',
            width: '60%',
            height: '30%',
            outline: 'none',
            placeholderTextColor : "white",
            alignSelf:'center',
            marginLeft: '5px'
        },
        txtMessage: {
            border: '2px solid '+(dark? '#191a1d':'white'),
            borderRadius: '30px',
            padding: '10px',
            fontSize: '20px',
            backgroundColor: dark? '#640dd4':'#d52121',
            color: dark? '#191a1d':'white',
            width: '60%',
            height: '50%',
            outline: 'none',
            placeholderTextColor : "white",
            alignSelf:'center',
            marginTop: '0px',
            overflow: 'hidden',
            resize: 'none'
        },
        formItem: {
            display: 'flex',
            flexDirection: 'row',
            maxHeight: '20%',
            justifyContent: 'center'
        },
        formMessageItem: {
            display: 'flex',
            flexDirection: 'row',
            height: 'auto',
            justifyContent: 'center'
        },
        formLabel: {
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily:  'Comic Sans MS', 
            color: dark ? '#191a1d':'#fff',
            padding: '0px 20px'
        },
        sendMessage:{
            backgroundColor: dark ? '#191a1d':'#fff',
            color: dark? '#640dd4' : '#d52121',
            borderRadius: '20px',
            padding: '10px 20px',
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily:  'Comic Sans MS', 
            cursor: 'pointer',
        }

    }

    return(

        <div style={styles.formContainer} >
        <div style={styles.formItem}  >
        <p style={styles.formLabel} >Name: </p>
        <input
          type="text"
          style={styles.txtName}
          autoComplete="off"
          name="name"
          required
          color= "white"
        />
        </div>
        <div style={styles.formItem}  >
        <p style={styles.formLabel} >Email: </p>
        <input
          type="text"
          style={styles.txtName}
          autoComplete="off"
          name="name"
          required
          color= "white"
        />
        </div>
        <div style={styles.formItem}  >
        <p style={styles.formLabel} >Subject: </p>
        <input
          type="text"
          style={styles.txtSubject}
          autoComplete="off"
          name="name"
          required
          color= "white"
        />
        </div>
        <div style={styles.formMessageItem}  >
        <p style={styles.formLabel} >Message: </p>
        <textarea
          name="message"
          rows="5"
          cols="100"
          style={styles.txtMessage}
        ></textarea>
        </div>
        <div style={styles.formItem}  >
        <div style={styles.sendMessage} >
            Send Email
        </div>
        </div>
        </div>

    );

}

export default EmailForm;