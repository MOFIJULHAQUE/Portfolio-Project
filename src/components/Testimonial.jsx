import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard name={"Mofijul"} feedback={"Xyz"} />
      </section>
    </div>
  );
};

const TestimonialCard = ({name,feedback}) =>(
    <>
    <article>
        <img src={"https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"} alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
    </>
)

export default Testimonial;
