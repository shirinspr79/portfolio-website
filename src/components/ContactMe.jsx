"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "./common/Toast";

const ContactMe = ({ id }) => {
  const [form, setForm] = useState({});
  const [open, setOpen] = useState(false);
  const sendEmail = () => {
    emailjs
      .send("service_z53f2s9", "template_x9zsv9q", form, "t0nF9pR6wLDVnGRQQ")
      .then(
        (result) => {
          console.log(result.text);
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <div id={id} class="m-5 flex flex-col items-center">
      <div class="p-3 text-xl font-bold text-blue-900 sm:text-2xl">
        Contact me
      </div>
      <input
        class="input input-bordered m-1 h-10 w-2/3 bg-transparent"
        placeholder="Your Name"
        onChange={(e) => setForm({ ...form, from_name: e.target.value })}
      />
      <input
        class="input input-bordered m-1 h-10 w-2/3 bg-transparent"
        placeholder="Your Email"
        onChange={(e) => setForm({ ...form, from_email: e.target.value })}
      />
      <input
        class="input input-bordered m-1 h-10 w-2/3 bg-transparent"
        placeholder="Categories"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <textarea
        class="textarea textarea-bordered m-1 w-2/3 bg-transparent"
        placeholder="Your message"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button
        class="btn w-2/3 border-hidden bg-blue-800 text-white hover:text-black"
        onClick={() => sendEmail()}
      >
        Submit
      </button>
      <Toast open={open} setOpen={setOpen} color="green" />
    </div>
  );
};

export default ContactMe;
