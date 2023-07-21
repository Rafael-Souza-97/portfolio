import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (event) => {
    event.preventDefault();

    if(name === '' || email === '' || message === '') {
      alert("Por favor, preencha todos os campos :)");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_93thg3q", "template_874cssm", templateParams, "JeiFB_uQDSuo2hXsB")
      .then((response) => {
        console.log("Email Enviado", response.status, response.text);
        alert('Mensagem Enviada!');
        setName('');
        setMessage('');
        setEmail('');
      }, (error) => {
        console.log("ERRO", error)
    })
  }

  return (
    <div
      name="contato"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-5/6"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center md:h-full px-4 text-white pt-32 pb-10">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contato
          </p>
          <p className="py-6">Me envie uma mensagem! 😀</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-5/6"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              value={ name }
              onChange={(e) => setName(e.target.value)}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              value={ email }
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Digite sua mensagem"
              value={ message }
              onChange={(e) => setMessage(e.target.value)}
              rows="12"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none resize-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
