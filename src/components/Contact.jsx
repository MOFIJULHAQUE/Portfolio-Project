import React, { useState } from "react";
import imgContact from ".././assets/1__2_-removebg-preview.png";
import {toast} from "react-hot-toast"

const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const [ inputs,setInputs] =useState({
    name:"",
    email:"",
    message :"",
  })
  const changeHandler=(e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value});
    console.log(inputs);

  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    toast.success("Message Sent")
  };
  return (
    <div id="contact">
      <section>
        <form onSubmit={submitHandler}>
          <h2>Contact Me</h2>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={inputs.name}
            onChange={changeHandler}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={inputs.email}
            onChange={changeHandler}
            required
          />
          <input
            type="text"
            placeholder="Your Message"
            name="message"
            value={inputs.message}
            onChange={changeHandler}
            required
          />
          <button type="submit">Send</button>
        </form>
      </section>
      <aside>
        <img src={imgContact} alt="Contact" />
      </aside>
    </div>
  );
};

export default Contact;
