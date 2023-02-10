import React from 'react';
import { useState } from 'react';
import './App.css';
import logo from './img/logo.png';
import emailjs from '@emailjs/browser';



function App() {
  const [formValues, setFormValues] = useState({});
  
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('***handle submit', data);


    //const templateParams = {
     // Nome: document.getElementById("nome").formValues,
      //Idade: idade,
      //Profissao: profissao,
      //Email: email,
      //Telefone: telefone,
    }

    //emailjs.send("service_h9qyy7i", "template_lal90ci", templateParams, "0OOJHIkwVhDrvRzZj")
    //.then((response)=>{
   //   console.log("EMAIL ENVIADO", response.status)
   // })

   //btn.value = 'Sending...';
   
   //const serviceID = "service_h9qyy7i";
  // const templateID = "template_lal90ci";

   //emailjs.sendForm(serviceID, templateID, this)
  // .then(() => {
   //  btn.value = 'Send Email';
   //  alert('Sent!');
  // }, (err) => {
  //   btn.value = 'Send Email';
   //  alert(JSON.stringify(err));
  // });
  //};


  console.log('*** formvalues', formValues);
  return (

    <div className="form">
     <img src={logo}/>
     <h1>CADASTRO</h1>
     <h2>Faça seu cadastro e um de nossos colaboradores entrará em contato!</h2>
       <form onSubmit={handleSubmit}>
        <input name='nome' type='text' placeholder='Preencha seu nome' onChange = {handleInputChange}  value={formValues.nome || ''} required></input>
        <input name='idade' type='number' placeholder='Preencha sua idade' onChange = {handleInputChange} value={formValues.idade || ''} required></input>
        <input name='profissao' type='text' placeholder='Preencha sua profissão' onChange = {handleInputChange} value={formValues.profissao || ''} required></input>
        <input name='email' type='email' placeholder='Preencha seu email' onChange = {handleInputChange} value={formValues.email || ''} required></input>
        <input name='telefone' type='tel' pattern="[0-9]{2}[0-9]{5}[0-9]{4}" placeholder='Telefone com DDD(somente números). Ex: 31123456789' onChange = {handleInputChange} value={formValues.telefone || ''} /*required*/></input>
        <input name='data' type='date' placeholder='Preencha a data de envio'  onChange = {handleInputChange} value={formValues.data || ''} required></input>
        <input name='enviar' type='submit' value='Cadastrar'></input>
       </form>
    </div>
  );
}

export default App;
