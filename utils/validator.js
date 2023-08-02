/* eslint-disable require-jsdoc */
/* eslint-disable no-prototype-builtins */


const  email= (email) =>{
  return !(email.length > 0 && (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)));
}
const valideTextAlpha=(text,len) =>{
  return !(text.length < len || typeof JSON.stringify(text) !== 'string');

}
const Validate= {
  isEmail:email,
  isValideTextAlpha:valideTextAlpha
};


export default Validate;
