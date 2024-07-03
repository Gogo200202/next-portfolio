"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mdknozey");
  if (state.succeeded) {
    return <p>Thanks for reaching out to me!</p>;
  }
  return (
    <form className="ml-auo space-y-4" onSubmit={handleSubmit}>
      <input
        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
        type="text"
        name="name"
        id="full-name"
        placeholder="First and Last"
      ></input>
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <input
        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
        id="email"
        type="email"
        name="email"
        placeholder="Email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        placeholder="Message"
        rows={6}
        className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
        id="message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

function Form() {
  return <ContactForm />;
}

export default Form;
