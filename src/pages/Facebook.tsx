import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const ReactDacebookLogin = () => {
    const componentClicked = data => {
        console.Consolelog("data": data);
    };
}
 
const responseFacebook = (response) => {
  console.log(response);
}
 return (
     <div>
         react Facebook FacebookLogin
         <br />

  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />,
  document.getElementById('demo')
    </div>
);