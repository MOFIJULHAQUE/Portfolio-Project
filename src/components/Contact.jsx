import React from 'react'
import imgContact from ".././assets/1__2_-removebg-preview.png"

const Contact = () => {
  return (
    <div id='contact'>
      <section>
        <form>
            <h2>Contact Me</h2>
            <input type="text" placeholder='Your Name' required />
            <input type="email" placeholder='Your Email' required />
            <input type="text" placeholder='Your Message' required />
            <button type='submit'>Send</button>
        </form>
      </section>
      <aside>
        <img src={imgContact} alt="Contact" />
      </aside>
    </div>
  )
}

export default Contact
