//imports

import React, { useState } from 'react';
import "./CheckoutForm.css"
import Button from '../button/Button';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import {db} from '../firebase/Firebase';
import Inputdiv from '../inputdiv/Inputdiv';
//function

const CheckoutForm = () => {
  const db=getFirestore();
  const [formValues,setformValues]=useState({
    email:"",
    firstName:"",
    lastName:"",
    city:"",
    zipCode:"",
    notes:""
  });

  const [Errors,setErrors]=useState({});
  const validateForm=()=>{
    let valid=true;
    const foundErrors={};
    const isEmail=/^\S+@\S+\.\S+$/;
    const isWord=/^[a-zA-Z\s]+$/;
    const isNumber=/^\d+$/;
    
    if(!(isEmail.test(formValues.email))||!(formValues.email))
    {
      valid=false;
      foundErrors.email="Please enter a valid email address eg. (example@gmail.com)"

    }
    if(!(isWord.test(formValues.firstName))||!(formValues.firstName))
    {
      valid=false;
      foundErrors.firstName="Please enter a valid name eg. (Jaber)"
  
    }
    if(!(isWord.test(formValues.lastName))||!(formValues.lastName))
    {
      valid=false;
      foundErrors.lastName="Please enter a valid name eg. (Allawnah)"

    }
    if(!(isWord.test(formValues.city))||!(formValues.city))
      {
        valid=false;
        foundErrors.city="Please enter a valid city name eg. (Nablus)"
  
      }    
    if(!(isNumber.test(formValues.zipCode))||!(formValues.zipCode))
      {
        valid=false;
        foundErrors.zipCode="Please enter a valid Zip Code eg. (00970)"
  
      }  
      setErrors(foundErrors);
      return valid;

  }

  const formSubmit=(e)=>{
    e.preventDefault();
    if(validateForm()){
      const addInfo=async()=>{
      try{
        await addDoc(collection(db,'User Checkout info'),formValues);
         }catch(error){
          console.error("Error updating database:", error);
      }
    }
      addInfo();

    }

  }

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setformValues({...formValues,[name]:value})

  }
  
  return (
<>
  <div className="checkout-container" >
    <h1>Checkout Form</h1>  
    <form className="myForm" onSubmit={formSubmit}>
      <Inputdiv type="email" name="email" placeholder='Email Address' changeFucntion={handleChange} msgvalue={Errors.email}/>

      <Inputdiv type="text" placeholder='First Name' changeFucntion={handleChange} msgvalue={Errors.firstName}/>

      <Inputdiv type="text" placeholder='Last Name' changeFucntion={handleChange} msgvalue={Errors.lastName}/>

      <Inputdiv type="text" placeholder='City' changeFucntion={handleChange} msgvalue={Errors.city}/>

      <Inputdiv type="text" placeholder='Zip Code' changeFucntion={handleChange} msgvalue={Errors.zipCode}/>
      
      <Inputdiv type="text" placeholder='Additional Notes (Optional)'/>

      <Button className="checkout-button" type="sumbit" name="submit"/>

    </form>
  </div>
</>
  );
};

//export

export default CheckoutForm;


