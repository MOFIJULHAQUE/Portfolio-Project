import React, { useState } from "react";
import imgContact from ".././assets/1__2_-removebg-preview.png";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  // const [inputs, setInputs] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const changeHandler = (e) => {
  //   setInputs({ ...inputs, [e.target.name]: e.target.value });
  //   console.log(inputs);
  // };
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(name, email, message);
    setDisableBtn(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      setName("");
      setEmail("");
      setMessage("");

      toast.success("Message Sent");
      setDisableBtn(false);
    } catch (error) {
      toast.error("Error");
      console.log(error);
      setDisableBtn(false);
    }
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
        x: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
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
            // name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Your Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <motion.button
            className={disableBtn ? "disableBtn" : ""}
            type="submit"
            disabled={disableBtn}
            {...animationsInForm.button}
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={imgContact} alt="Contact" />
      </aside>
    </div>
  );
};

export default Contact;
