import React from "react";
import { Form as InputForm, Name, Mail, Message } from "./Form.styled";
import { Button } from "./Button.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const emailPattern = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}";
  const namePattern = "^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$";

  const notify = () =>
    toast.success("Thank you for feedback!👍", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target),
      feedback = Object.fromEntries(data.entries());
    fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedback),
    }).then(() => {
      notify();
      e.target.reset();
    });
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <Name
        type="text"
        placeholder="Your name*"
        name="name"
        pattern={namePattern}
        required
        maxLength="50"
      />
      <Mail
        type="email"
        placeholder="Your e-mail*"
        name="email"
        pattern={emailPattern}
        required
      />
      <Message
        name="message"
        placeholder="Your message*"
        rows="10"
        cols="30"
        maxLength="900"
        required
      />
      <Button>Send message</Button>
      <ToastContainer />
    </InputForm>
  );
}

export default Form;
