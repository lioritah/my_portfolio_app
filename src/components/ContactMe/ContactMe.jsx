import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./ContactMe.scss";

const FEEDBACK_MESSAGE_STATUS = {
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
};

export default function ContactMe() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedbackMessageState, setFeedbackMessageState] = useState({
    message: "",
    status: "",
  });

  const formRef = useRef();
  const nameRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  function resetFields() {
    nameRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  }

  function onInputChange(e) {
    e.target.classList.remove("input-error");
  }

  function isVerified(name, message) {
    let verified = true;

    if (name.current.value.length === 0) {
      name.current.classList.add("input-error");
      verified = false;
    }

    if (message.current.value.length === 0) {
      message.current.classList.add("input-error");
      verified = false;
    }

    return verified;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFeedbackMessageState((prev) => ({
      ...prev,
      message: "",
    }));

    if (isVerified(nameRef, messageRef)) {
      setIsProcessing(true);
      // send an email
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_PORTFOLIO_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((res) => {
          console.log(res);
          setFeedbackMessageState({
            message: "Your email has been sent",
            status: FEEDBACK_MESSAGE_STATUS.SUCCESS,
          });
          resetFields();
          setIsProcessing(false);
        })
        .catch((err) => {
          console.log(err);
          setFeedbackMessageState({
            message: "An error occurred",
            status: FEEDBACK_MESSAGE_STATUS.FAILURE,
          });
          resetFields();
          setIsProcessing(false);
        });
    }
  }

  return (
    <section id="contact" className="contact-me-container">
      <h2 className="contact-me-header header">Contact</h2>
      <h2 className="contact-me-title">
        Interested in hiring me? <br />
        Call me on{" "}
        <a href="tel:0523017070" className="contact-me-phone-number">
          052-4017070
        </a>{" "}
        or send me a message!
      </h2>
      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          onChange={onInputChange}
          className="contact-name-input contact-input"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <input
          ref={subjectRef}
          onChange={onInputChange}
          className="contact-subject-input contact-input"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <textarea
          ref={messageRef}
          onChange={onInputChange}
          className="contact-content-input contact-input"
          name="message"
          placeholder="Enter your message"
          rows={7}
        />

        <div className="contact-lower-frame">
          <div
            className="contact-feedback-message"
            style={{
              color:
                feedbackMessageState.status === FEEDBACK_MESSAGE_STATUS.SUCCESS
                  ? "green"
                  : "red",
            }}
          >
            {feedbackMessageState.message}
          </div>
          <button className="contact-send-button button">
            {!isProcessing ? "Send" : <div className="loader"></div>}
          </button>
        </div>
      </form>
    </section>
  );
}
