import Axios from "axios"
import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"
import { useState } from 'react';


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [image_location, setImageLocation] = useState('');
  const [description, setDescription] = useState('');

  console.log(name)


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/agents', {
        name,
        email,
        gender,
        age,
        phoneNumber,
        location,
        image_location,
        description
      })}
      catch (err) {
        console.log(err);
      }
  };


  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='form' onSubmit={submitHandler}>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' id="name" placeholder='Name' onChange={(e) => setName(e.target.value)} />
              <input type='text' id="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
              <input type='text' id="phoneNumber" placeholder='Phonenumber' onChange={(e) => setPhoneNumber(e.target.value)} />
              <input type='text' id="image_location" placeholder='port' onChange={(e) => setImageLocation(e.target.value)} />

              <input type='text' id="location" placeholder='Location' onChange={(e) => setLocation(e.target.value)} />
              <input type='text' id="gender" placeholder='Gender' onChange={(e) => setGender(e.target.value)} />
              <input type='text' id="age" placeholder='Age' onChange={(e) => setAge(e.target.value)} />
       </div>
            <input type='text' id="description" placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
            <textarea cols='30' rows='10'></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
