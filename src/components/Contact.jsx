import React, { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { Fade, Slide } from "react-awesome-reveal";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef("");
  const [form, setFrom] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();
  if (form.message.length < 10) {
    alert("Message should be at least 10 characters long.");
    return;
  }
  setLoading(true);
  emailjs
    .send(
      "service_gqdfhh9",
      "template_3hf817h",
      {
        from_name: form.name,
        to_name: "Nishita",
        from_email: form.email,
        to_email: "g.nishi9525@gmail.com",
        message: form.message,
      },
      "MLPqqmNnSNb3RDYhP"
    )
    .then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible");
      setFrom({
        name: "",
        email: "",
        message: "",
      });
    })
    .catch((error) => {
      setLoading(false);
      alert("Something went wrong");
      console.log(error);
    });
};

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFrom({ ...form, [name]: value });
  };

  return (
    <div className="flex xl:flex-col flex-col-reverse xl:mt-12 gap-10 ">
      <Slide left>
        <div className="bg-black-100 rounded-2xl p-8">
          <Fade down cascade>
            <p className={styles.sectionSubText}>GET IN TOUCH</p>
          </Fade>
          <Fade down cascade>
            <h2 className={styles.sectionHeadText}>Contact</h2>
          </Fade>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-5"
          >
            <label>Your Name</label>
            <input
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              name="name"
              className="bg-tertiary py-4 px-6
                placeholder:text-secondary
                outlined-none rounded-lg 
              "
            />
            <label>Your Email</label>
            <input
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              name="email"
              className="bg-tertiary py-4 px-6
                placeholder:text-secondary
                outlined-none rounded-lg 
              "
            />
            <label>Message</label>
            <textarea
              rows={7}
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              name="message"
              className="bg-tertiary py-4 px-6
                placeholder:text-secondary
                outlined-none rounded-lg 
              "
            />
            <button
              type="submit"
              className="px-8 py-3 shadow-primary shadow-lg w-fit rounded-2xl bg-tertiary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </Slide>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
