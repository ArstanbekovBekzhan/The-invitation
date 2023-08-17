import React, { useState } from 'react';
import Qs from "./Questions.module.css";

const Questions = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [linkPhoneNumber, setLinkPhoneNumber] = useState('704080643');
  const [fromD, setFromD] = useState(true);
  const handleFirstNameChange = (event) => {
    const value = event.target.value.slice(0, 15);
    setFirstName(value);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value.slice(0, 15);
    setLastName(value);
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);

    if (value === 'option1') {
      setLinkPhoneNumber('704080643'); 
    } else if (value === 'option2') {
      setLinkPhoneNumber('552603160');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const uppercaseFirstName = firstName.toUpperCase();
    const uppercaseLastName = lastName.toUpperCase();
  
    localStorage.setItem('firstName', uppercaseFirstName);
    localStorage.setItem('lastName', uppercaseLastName);
    localStorage.setItem('From', selectedOption);
    setFirstName('');
    setLastName('');
    setSelectedOption('option1');
    setLinkPhoneNumber('');
    const message = `Я ${uppercaseFirstName} ${uppercaseLastName}, я приду.`;
    const whatsappLink = `https://wa.me/+996${linkPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setFromD(false)
  };  

  const isSubmitButtonDisabled = !firstName || !lastName;

  return (
    <>
    {
        fromD?
 <form onSubmit={handleSubmit} className={Qs.Questions}>
      <h3>Можете ответить на несколько вопросов?</h3>
      <div className={Qs.inputs}>
        <label htmlFor="fname">Имя:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={firstName}
          onChange={handleFirstNameChange}
          maxLength={15}
        /><br/><br/>
        <label htmlFor="lname">Фамилия:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={lastName}
          onChange={handleLastNameChange}
          maxLength={15}
        /><br/><br/>
        <label htmlFor="options">Я со стороны:</label>
        <select id="options" value={selectedOption} onChange={handleOptionChange}>
          <option value="option1">Азиз</option>
          <option value="option2">Эльмира</option>
        </select><br/><br/>
        <input type="submit" className={Qs.btn} value="Я приду" disabled={isSubmitButtonDisabled}/>
      </div>
    </form>:null
    }
      
    </>
 
  );
}

export default Questions;