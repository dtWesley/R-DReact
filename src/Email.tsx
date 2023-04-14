import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";

function Email() {
  const form = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = React.useState("");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    setFormStatus("Sending..");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_PUBLIC_KEY_MAIL
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("Succes");
        },
        (error) => {
          console.log(error.text);
          setFormStatus("Failed");
        }
      );
  };

  return (
    <div className="container mt-5">
      <li>
        <NavLink to="/">Back</NavLink>
      </li>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="user_name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="user_email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            required
          />
        </div>
        <input type="submit" value="Send" />
        {formStatus}
      </form>
    </div>
  );
}

export default Email;
