import React from "react";
import { IoPawSharp } from "react-icons/io5";


const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-sky-50 text-gray-950"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact 
          </p>
          <p className="py-6">Submit the form below to get in touch with Us</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/af8f7633-0364-4a9c-9e5e-96853168a44e"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md outline outline-offset-2 outline-2 "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md outline outline-offset-2 outline-2 "
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-3 rounded-md outline outline-offset-2 outline-2 "
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk <IoPawSharp size={20} className="ml-2"/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;