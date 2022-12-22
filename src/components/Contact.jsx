import React, { useState } from "react";
import imgContact from ".././assets/1__2_-removebg-preview.png";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import {addDoc,collection} from "firebase/firestore"
import { db } from "../Firebase";



const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const changeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    toast.success("Message Sent");
  };

  const animationsInForm = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition:{
        delay:0.5,
      }
    },
  };
  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...animationsInForm.form}>
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
          <motion.button type="submit"  {...animationsInForm.button}>Send</motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={imgContact} alt="Contact" />
      </aside>
    </div>
  );
};

export default Contact;
